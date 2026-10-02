import { Resend } from "resend";
import type { EmailContent } from "./emails";

/**
 * The Resend client is built lazily, on first send. `new Resend()` throws when
 * RESEND_API_KEY is missing, and route modules are evaluated during
 * `next build` — so constructing it at import time breaks the build anywhere
 * the key isn't set. Same reasoning as the lazy client in ./db.
 */
let client: Resend | null = null;

function getClient(): Resend {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        "RESEND_API_KEY is not set — add it to .env.local (see .env.example).",
      );
    }
    client = new Resend(apiKey);
  }
  return client;
}

/** From address on every outgoing email. Domain must be verified in Resend. */
export const EMAIL_FROM = process.env.EMAIL_FROM || "iCoop <noreply@icoop.ng>";

/** Internal recipients for booking/enquiry alerts. */
export const TEAM_EMAILS = ["info@connexxiongroup.com"];

/** Send one prepared email. Returns Resend's { data, error } result. */
export function sendEmail(
  to: string | string[],
  content: EmailContent,
  options: { replyTo?: string; bcc?: string[] } = {},
) {
  return getClient().emails.send({
    from: EMAIL_FROM,
    to,
    subject: content.subject,
    html: content.html,
    text: content.text,
    ...(options.replyTo && { replyTo: options.replyTo }),
    ...(options.bcc && { bcc: options.bcc }),
  });
}
