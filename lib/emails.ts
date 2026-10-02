/**
 * Email templates for the iCoop automated demo feedback loop.
 *
 * Each builder returns { subject, html, text } so it works with ANY sender we
 * wire up later (Resend, SES, Nodemailer, …). This file is intentionally
 * framework-free and side-effect-free — no network calls, no secrets — so the
 * marketing copy can be edited here safely without touching sending logic.
 */

/** Production origin, used for absolute links in emails (relative won't work). */
const SITE_URL = process.env.SITE_URL || "https://icoop.ng";

const BRAND = {
  name: "iCoop",
  primary: "#22c55e",
  primaryDeep: "#15803d",
  accent: "#f59e0b",
  heading: "#0b1f17",
  body: "#475a52",
  border: "#e3ece7",
  poweredBy: "Connexxion Telecoms",
  signature: "The iCoop Team",
  pricingUrl: `${SITE_URL}/#pricing`,
  portfolioUrl: SITE_URL,
};

export type EmailContent = { subject: string; html: string; text: string };

export type Booking = {
  leadName: string;
  email: string;
  phone?: string;
  organization?: string;
  topic?: string;
  message?: string;
};

/* ------------------------------------------------------------------ */
/*  Shared layout — email-safe inline styles                          */
/* ------------------------------------------------------------------ */

function layout(innerHtml: string): string {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;color:${BRAND.body};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid ${BRAND.border};border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:${BRAND.heading};padding:20px 28px;">
                <span style="color:#ffffff;font-size:20px;font-weight:bold;letter-spacing:-0.5px;">i<span style="color:${BRAND.primary};">Coop</span></span>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;font-size:15px;line-height:1.65;color:${BRAND.body};">
                ${innerHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px;border-top:1px solid ${BRAND.border};font-size:12px;color:#8a9a92;">
                Powered by ${BRAND.poweredBy}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function heading(text: string): string {
  return `<h1 style="margin:0 0 16px;font-size:20px;line-height:1.3;color:${BRAND.heading};font-weight:bold;">${text}</h1>`;
}

function paragraph(text: string): string {
  return `<p style="margin:0 0 14px;">${text}</p>`;
}

function signoff(closing = "Cheers,"): string {
  return `<p style="margin:20px 0 0;">${closing}<br /><strong style="color:${BRAND.heading};">${BRAND.signature}</strong></p>`;
}

function button(label: string, href: string): string {
  return `<p style="margin:22px 0;"><a href="${href}" style="background:${BRAND.primary};color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:8px;font-weight:bold;display:inline-block;">${label}</a></p>`;
}

function detailTable(rows: [string, string][]): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 4px;">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#8a9a92;font-size:13px;vertical-align:top;white-space:nowrap;">${k}</td><td style="padding:6px 0;color:${BRAND.heading};font-size:14px;">${escapeHtml(v)}</td></tr>`,
    )
    .join("")}</table>`;
}

/**
 * Human-readable WAT datetime for emails, e.g. "Tuesday, 28 July 2026, 16:03 WAT".
 * Nigeria is UTC+1 year-round (no daylight saving), so this is unambiguous.
 */
export function formatWhenWat(iso: string): string {
  return (
    new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Africa/Lagos",
    }).format(new Date(iso)) + " WAT"
  );
}

/* ------------------------------------------------------------------ */
/*  1a. Internal Enquiry Alert  →  team inboxes                        */
/* ------------------------------------------------------------------ */

export function internalEnquiryAlert(b: Booking): EmailContent {
  const rows: [string, string][] = [
    ["Name", b.leadName],
    ["Email", b.email],
    ["Phone", b.phone || "—"],
    ["Cooperative", b.organization || "—"],
    ["Topic", b.topic || "—"],
    ["Message", b.message || "—"],
  ];

  const inner = `
    ${heading("New Enquiry Received")}
    ${paragraph("Hi Team, a new enquiry has come in. Details below — please follow up. If it warrants a demo, schedule it from the admin dashboard.")}
    ${detailTable(rows)}
  `;

  const text = `New Enquiry Received

Hi Team, a new enquiry has come in. Please follow up. If it warrants a demo,
schedule it from the admin dashboard.

${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}

— ${BRAND.signature}`;

  return { subject: "New Enquiry Received", html: layout(inner), text };
}

/* ------------------------------------------------------------------ */
/*  1b. Internal Demo Alert  →  team inboxes                           */
/* ------------------------------------------------------------------ */

/**
 * Sent when someone books through /book-demo. Unlike an enquiry, the slot is
 * already confirmed — the team needs to show up, not schedule it.
 */
export function internalDemoAlert(
  b: Booking & { meetingType?: string; when?: string },
): EmailContent {
  const rows: [string, string][] = [
    ["Name", b.leadName],
    ["Email", b.email],
    ["Phone", b.phone || "—"],
    ["Cooperative", b.organization || "—"],
    ["Meeting type", b.meetingType || "—"],
    ["Demo time", b.when || "—"],
    ["Notes", b.message || "—"],
  ];

  const inner = `
    ${heading("New Demo Booked")}
    ${paragraph("Hi Team, a demo has been booked and the client has already been sent a confirmation for the slot below. Please add it to the calendar.")}
    ${detailTable(rows)}
    ${paragraph("If it's a virtual session, add the meeting link in the admin dashboard so it reaches the client.")}
  `;

  const text = `New Demo Booked

Hi Team, a demo has been booked and the client has already been sent a
confirmation for the slot below. Please add it to the calendar.

${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}

If it's a virtual session, add the meeting link in the admin dashboard so it
reaches the client.

— ${BRAND.signature}`;

  return { subject: "New Demo Booked", html: layout(inner), text };
}

/* ------------------------------------------------------------------ */
/*  2a. Enquiry Acknowledgement — sent immediately on form submit      */
/* ------------------------------------------------------------------ */

export function enquiryConfirmation(p: {
  leadName: string;
  topic?: string;
}): EmailContent {
  const about = p.topic ? ` about <strong>${escapeHtml(p.topic)}</strong>` : "";
  const aboutText = p.topic ? ` about ${p.topic}` : "";

  const inner = `
    ${heading("Thanks for getting in touch")}
    ${paragraph(`Hi ${escapeHtml(p.leadName)}, we've received your message${about} and a member of our team will get back to you shortly — usually within 24 business hours.`)}
    ${paragraph("In the meantime, feel free to browse our plans:")}
    ${button("View pricing", BRAND.pricingUrl)}
    ${signoff()}
  `;

  const text = `Thanks for getting in touch

Hi ${p.leadName}, we've received your message${aboutText} and a member of our team
will get back to you shortly — usually within 24 business hours.

In the meantime, feel free to browse our plans: ${BRAND.pricingUrl}

Cheers,
${BRAND.signature}`;

  return {
    subject: "We've received your message — iCoop",
    html: layout(inner),
    text,
  };
}

/* ------------------------------------------------------------------ */
/*  2b. Demo Confirmation — the slot is locked in                      */
/* ------------------------------------------------------------------ */

export function leadConfirmation(p: {
  leadName: string;
  when: string; // human-readable, e.g. "Tuesday, 28 July 2026, 16:03 WAT"
  meetingType?: string; // "Onsite" | "Virtual"
  meetingLink?: string;
}): EmailContent {
  // A link means it's a virtual session even when meeting_type was never set.
  const nextHtml = p.meetingLink
    ? button("Join the meeting", p.meetingLink)
    : p.meetingType === "Virtual"
      ? paragraph("We'll send you a meeting link before the session.")
      : p.meetingType === "Onsite"
        ? paragraph(
            "Just let us know whether you'd like us to visit your cooperative, or you'd prefer to visit us.",
          )
        : paragraph(
            "We'll be in touch with everything you need before we meet.",
          );

  const inner = `
    ${heading("Your iCoop demo is booked!")}
    ${paragraph(`Hi ${escapeHtml(p.leadName)}, your demo is confirmed for:`)}
    <p style="margin:0 0 16px;font-size:17px;font-weight:bold;color:${BRAND.heading};">${escapeHtml(p.when)}</p>
    ${nextHtml}
    ${signoff()}
  `;

  const nextText = p.meetingLink
    ? `Join the meeting: ${p.meetingLink}`
    : p.meetingType === "Virtual"
      ? "We'll send you a meeting link before the session."
      : p.meetingType === "Onsite"
        ? "Just let us know whether you'd like us to visit your cooperative, or you'd prefer to visit us."
        : "We'll be in touch with everything you need before we meet.";

  const text = `Your iCoop demo is booked!

Hi ${p.leadName}, your demo is confirmed for:
${p.when}

${nextText}

Cheers,
${BRAND.signature}`;

  return {
    subject: "Confirmation: Your iCoop demo is booked!",
    html: layout(inner),
    text,
  };
}

/* ------------------------------------------------------------------ */
/*  3. 24-Hour Reminder  →  lead (team BCC'd)                          */
/* ------------------------------------------------------------------ */

export function reminder24h(p: {
  leadName: string;
  teaserVideoUrl?: string;
  meetingLink?: string;
}): EmailContent {
  // The teaser is optional — better to omit the block than link to a dead URL.
  const teaserHtml = p.teaserVideoUrl
    ? paragraph("Here's a short teaser to preview what we'll cover:") +
      button("Watch the teaser", p.teaserVideoUrl)
    : "";
  const teaserText = p.teaserVideoUrl
    ? `\nHere's a short teaser to preview what we'll cover: ${p.teaserVideoUrl}\n`
    : "";

  const joinHtml = p.meetingLink
    ? button("Join the meeting", p.meetingLink)
    : "";
  const joinText = p.meetingLink ? `\nJoin the meeting: ${p.meetingLink}\n` : "";

  const inner = `
    ${heading("Looking forward to our iCoop demo tomorrow!")}
    ${paragraph(`Hi ${escapeHtml(p.leadName)}, this is a reminder for tomorrow.`)}
    ${teaserHtml}
    ${joinHtml}
    ${paragraph("See you soon!")}
    ${signoff("Regards,")}
  `;

  const text = `Looking forward to our iCoop demo tomorrow!

Hi ${p.leadName}, this is a reminder for tomorrow.
${teaserText}${joinText}
See you soon!

Regards,
${BRAND.signature}`;

  return {
    subject: "Looking forward to our iCoop demo tomorrow!",
    html: layout(inner),
    text,
  };
}

/* ------------------------------------------------------------------ */
/*  4. Post-Demo Action Plan  →  lead (manual trigger)                */
/* ------------------------------------------------------------------ */

export function postDemoActionPlan(p: { leadName: string }): EmailContent {
  const steps = [
    "Review pricing and pick a plan",
    "Check the feature guide",
    "Agree on the modules your cooperative needs",
    "Sign SLA, then onboarding and go-live",
  ];
  const stepsHtml = steps
    .map(
      (s, i) =>
        `<tr><td style="padding:4px 10px 4px 0;color:${BRAND.primary};font-weight:bold;vertical-align:top;">${i + 1}.</td><td style="padding:4px 0;color:${BRAND.heading};">${s}</td></tr>`,
    )
    .join("");

  const inner = `
    ${heading("Great connecting today! Next steps for iCoop")}
    ${paragraph(`Hi ${escapeHtml(p.leadName)}, thanks for chatting! Here are the next steps to get your cooperative running on iCoop:`)}
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 6px;">${stepsHtml}</table>
    ${button("Review pricing", BRAND.pricingUrl)}
    ${signoff()}
  `;

  const text = `Great connecting today! Next steps for iCoop

Hi ${p.leadName}, thanks for chatting! Here are the next steps to get your
cooperative running on iCoop:

${steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}

Review pricing: ${BRAND.pricingUrl}

Cheers,
${BRAND.signature}`;

  return {
    subject: "Great connecting today! Next steps for iCoop",
    html: layout(inner),
    text,
  };
}

/* ------------------------------------------------------------------ */
/*  5. Post-Demo Follow-Up (Not Ready)  →  lead (manual trigger)      */
/* ------------------------------------------------------------------ */

export function postDemoFollowUpNotReady(p: {
  leadName: string;
  portfolioUrl?: string;
}): EmailContent {
  const portfolioUrl = p.portfolioUrl || BRAND.portfolioUrl;

  const inner = `
    ${heading("Staying in touch — iCoop")}
    ${paragraph(`Hi ${escapeHtml(p.leadName)}, understood — now might not be the right moment for your cooperative.`)}
    ${paragraph("Here's everything we covered, for whenever you're ready:")}
    ${button("Explore iCoop", portfolioUrl)}
    ${paragraph("We'll check back in soon.")}
    ${signoff()}
  `;

  const text = `Staying in touch — iCoop

Hi ${p.leadName}, understood — now might not be the right moment for your
cooperative.

Here's everything we covered, for whenever you're ready: ${portfolioUrl}

We'll check back in soon.

Cheers,
${BRAND.signature}`;

  return { subject: "Staying in touch — iCoop", html: layout(inner), text };
}

/* ------------------------------------------------------------------ */
/*  6a. Demo Rescheduled — staff changed the demo time                */
/* ------------------------------------------------------------------ */

export function demoRescheduled(p: {
  leadName: string;
  when: string;
  meetingType?: string;
  meetingLink?: string;
}): EmailContent {
  const detailHtml = p.meetingLink
    ? button("Join the meeting", p.meetingLink)
    : p.meetingType === "Virtual"
      ? paragraph("We'll send your meeting link ahead of the session.")
      : paragraph("We'll be in touch about the location.");

  const inner = `
    ${heading("Your iCoop demo has been rescheduled")}
    ${paragraph(`Hi ${escapeHtml(p.leadName)}, your demo has been moved to:`)}
    <p style="margin:0 0 16px;font-size:17px;font-weight:bold;color:${BRAND.heading};">${escapeHtml(p.when)}</p>
    ${detailHtml}
    ${paragraph("Apologies for any inconvenience — see you then!")}
    ${signoff()}
  `;

  const detailText = p.meetingLink
    ? `Join the meeting: ${p.meetingLink}`
    : p.meetingType === "Virtual"
      ? "We'll send your meeting link ahead of the session."
      : "We'll be in touch about the location.";

  const text = `Your iCoop demo has been rescheduled

Hi ${p.leadName}, your demo has been moved to:
${p.when}

${detailText}

Apologies for any inconvenience — see you then!

Cheers,
${BRAND.signature}`;

  return {
    subject: "Your iCoop demo has been rescheduled",
    html: layout(inner),
    text,
  };
}

/* ------------------------------------------------------------------ */
/*  6b. Demo Meeting Link — staff added/changed a virtual link        */
/* ------------------------------------------------------------------ */

export function demoMeetingLink(p: {
  leadName: string;
  when: string;
  meetingLink?: string;
}): EmailContent {
  const inner = `
    ${heading("Your iCoop demo details")}
    ${paragraph(`Hi ${escapeHtml(p.leadName)}, here's the link to join your demo on <strong>${escapeHtml(p.when)}</strong>:`)}
    ${p.meetingLink ? button("Join the meeting", p.meetingLink) : ""}
    ${paragraph("See you then!")}
    ${signoff()}
  `;

  const text = `Your iCoop demo details

Hi ${p.leadName}, here's the link to join your demo on ${p.when}:
${p.meetingLink ?? ""}

See you then!

Cheers,
${BRAND.signature}`;

  return { subject: "Your iCoop demo details", html: layout(inner), text };
}

/* ------------------------------------------------------------------ */
/*  util                                                              */
/* ------------------------------------------------------------------ */

/** Minimal HTML escaping for user-supplied values injected into templates. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
