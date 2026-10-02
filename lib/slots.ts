/**
 * Bookable demo slots — the single source of truth shared by the booking form
 * and the API route that validates it. Keeping one list here means the server
 * can never accept a time the UI doesn't offer, and vice versa.
 *
 * Demos run Monday–Friday, 9:00 AM – 4:30 PM WAT, on the half hour.
 */

export const DEMO_TIMES = [
  { value: "09:00", label: "9:00 AM" },
  { value: "09:30", label: "9:30 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "10:30", label: "10:30 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "11:30", label: "11:30 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "12:30", label: "12:30 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "13:30", label: "1:30 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "14:30", label: "2:30 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "15:30", label: "3:30 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "16:30", label: "4:30 PM" },
] as const;

export const MEETING_TYPES = ["Onsite", "Virtual"] as const;

/** Every slot value, for O(1) membership checks on the server. */
const SLOT_VALUES = new Set(DEMO_TIMES.map((t) => t.value));

export function isValidSlotTime(time: string): boolean {
  return SLOT_VALUES.has(time as (typeof DEMO_TIMES)[number]["value"]);
}

/**
 * Parse a "yyyy-mm-dd" string as a LOCAL date, avoiding the UTC off-by-one that
 * `new Date("2026-07-24")` introduces.
 */
export function parseLocalDate(value: string): Date {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/** Demos run on weekdays only — the native date picker can't disable weekends. */
export function isWeekend(date: Date): boolean {
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday
  return day === 0 || day === 6;
}

/** "09:30" -> "9:30 AM"; falls back to the raw value if it isn't a known slot. */
export function slotLabel(time: string): string {
  return DEMO_TIMES.find((t) => t.value === time)?.label ?? time;
}
