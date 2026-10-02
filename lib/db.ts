import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

/**
 * Neon (PostgreSQL) client. Uses the HTTP driver, which is ideal for Vercel
 * serverless functions. Import `sql` and use it as a tagged template:
 *
 *   await sql`INSERT INTO bookings (name) VALUES (${name})`;
 *
 * Values interpolated via ${} are sent as parameters, not string-concatenated,
 * so this is safe from SQL injection.
 *
 * The underlying client is created lazily, on first query, rather than at
 * import time. `neon()` throws when DATABASE_URL is missing, and a page that
 * merely imports this module gets evaluated during `next build` — so an eager
 * client breaks the build anywhere the variable isn't set (CI, a fresh clone,
 * a preview deploy). Deferring it means only an actual query needs the URL.
 */
let client: NeonQueryFunction<false, false> | null = null;

function getClient(): NeonQueryFunction<false, false> {
  if (!client) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error(
        "DATABASE_URL is not set — add it to .env.local (see .env.example).",
      );
    }
    client = neon(connectionString);
  }
  return client;
}

/**
 * Stands in for the real client: callable as a tagged template, and forwards
 * property access (`.query`, `.transaction`, …) to the instance underneath.
 */
export const sql = new Proxy(
  function () {} as unknown as NeonQueryFunction<false, false>,
  {
    apply(_target, _thisArg, args: Parameters<NeonQueryFunction<false, false>>) {
      return Reflect.apply(getClient(), undefined, args);
    },
    get(_target, prop: keyof NeonQueryFunction<false, false>) {
      return getClient()[prop];
    },
  },
);
