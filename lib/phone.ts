/**
 * Phone number rules — shared by the contact and book-demo forms and the API
 * routes that validate them, so the browser and server always agree.
 *
 * Numbers are Nigerian local format: exactly 11 digits, e.g. 08012345678.
 */

export const PHONE_FORMAT_ERROR =
  "Please enter an 11-digit phone number, e.g. 08012345678.";

/** Drops spaces, dashes, brackets etc. so the field only ever holds digits. */
export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export function isValidPhone(phone: string): boolean {
  return /^\d{11}$/.test(phone);
}
