import { NextResponse, after } from "next/server";
import { sql } from "@/lib/db";
import {
  internalEnquiryAlert,
  enquiryConfirmation,
  type Booking,
} from "@/lib/emails";
import { sendEmail, TEAM_EMAILS } from "@/lib/mailer";
import { isValidPhone } from "@/lib/phone";

// Touches the database + Resend, so it must run on the Node runtime and never
// be statically cached.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Spam honeypot — a filled hidden field means a bot. Pretend success.
  if (body.botField) {
    return NextResponse.json({ success: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const organization = (body.organization ?? "").trim();
  const topic = (body.topic ?? "").trim();
  const message = (body.message ?? "").trim();

  // The message is optional — an enquiry with a name, email, phone and topic is
  // still a lead worth capturing.
  if (
    !name ||
    !email ||
    !isValidEmail(email) ||
    !isValidPhone(phone) ||
    !topic
  ) {
    return NextResponse.json(
      { success: false, error: "Please complete the form correctly." },
      { status: 422 },
    );
  }

  // 1) Save the lead first — the database is the source of truth.
  try {
    await sql`
      INSERT INTO bookings
        (kind, name, email, phone, organization, topic, message, status)
      VALUES
        ('enquiry', ${name}, ${email}, ${phone},
         ${organization || null}, ${topic}, ${message || null}, 'new')
    `;
  } catch (err) {
    console.error("[contact] DB insert failed:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Could not send your message. Please try again.",
      },
      { status: 500 },
    );
  }

  // 2) Email after the response — the lead is already stored, so the sender
  //    must not block the reply or fail the request.
  const lead: Booking = {
    leadName: name,
    email,
    phone,
    organization,
    topic,
    message,
  };

  after(async () => {
    const results = await Promise.allSettled([
      sendEmail(TEAM_EMAILS, internalEnquiryAlert(lead), { replyTo: email }),
      sendEmail(email, enquiryConfirmation({ leadName: name, topic })),
    ]);

    results.forEach((r, i) => {
      const which = i === 0 ? "internal alert" : "acknowledgement";
      if (r.status === "rejected") {
        console.error(`[contact] email ${which} failed:`, r.reason);
      } else if (r.value.error) {
        console.error(`[contact] email ${which} error:`, r.value.error);
      }
    });
  });

  return NextResponse.json({ success: true });
}
