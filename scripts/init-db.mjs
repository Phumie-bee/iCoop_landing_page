/**
 * One-time database setup: creates the `bookings` table in Neon.
 * Run with:  npm run init-db
 *
 * Reads DATABASE_URL from .env.local directly (no extra deps, works on any
 * recent Node version). Safe to run repeatedly — uses CREATE TABLE IF NOT EXISTS,
 * and every ALTER is IF NOT EXISTS too.
 */
import { readFileSync } from "node:fs";
import { neon } from "@neondatabase/serverless";

function loadDatabaseUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
  const match = env.match(/^DATABASE_URL=(.*)$/m);
  if (!match) throw new Error("DATABASE_URL not found in .env.local");
  return match[1].trim().replace(/^["']|["']$/g, "");
}

const sql = neon(loadDatabaseUrl());

// One table holds both demo bookings and contact enquiries; `kind` separates
// them. Demos carry a slot (preferred_date/time -> confirmed_at); enquiries
// don't. Keeping them together means one admin view and one email pipeline.
await sql`
  CREATE TABLE IF NOT EXISTS bookings (
    id             serial PRIMARY KEY,
    kind           text NOT NULL DEFAULT 'enquiry',  -- enquiry | demo
    name           text NOT NULL,
    email          text NOT NULL,
    phone          text,
    organization   text,                              -- cooperative / union name
    topic          text,
    meeting_type   text,                              -- Onsite | Virtual (demos only)
    preferred_date text,
    preferred_time text,
    message        text,
    status         text NOT NULL DEFAULT 'new',       -- new | confirmed | done | not_ready
    confirmed_at   timestamptz,                       -- the actual demo instant
    meeting_link   text,                              -- for virtual demos
    reminder_sent  boolean NOT NULL DEFAULT false,    -- used by the 24h reminder cron
    created_at     timestamptz NOT NULL DEFAULT now()
  )
`;

// The reminder cron scans on these three columns every run.
await sql`
  CREATE INDEX IF NOT EXISTS bookings_reminder_idx
  ON bookings (status, reminder_sent, confirmed_at)
`;

const [{ count }] = await sql`SELECT count(*)::int AS count FROM bookings`;
console.log(`✓ 'bookings' table ready (currently ${count} rows)`);
