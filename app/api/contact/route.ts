// Contact form endpoint.
// Validates the submission and returns JSON. To deliver emails, plug an
// email provider (e.g. Resend, Nodemailer/SMTP) into the marked section below.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const topic = typeof body.topic === "string" ? body.topic.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  if (!name || !email || !topic || !message) {
    return Response.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // ── Deliver the message ──────────────────────────────────────────────
  // TODO: integrate an email provider here, e.g.:
  //   await resend.emails.send({ to: "info@connexxiongroup.com", ... })
  // Until then we log the submission server-side so the endpoint is real.
  console.log("[contact] new submission:", { name, email, phone, topic });

  return Response.json({ ok: true });
}
