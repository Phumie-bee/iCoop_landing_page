"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.7, delay, ease: EASE },
});

const slideIn = (delay = 0) => ({
  initial: { opacity: 0, x: 40 } as const,
  animate: { opacity: 1, x: 0 } as const,
  transition: { duration: 0.8, delay, ease: EASE },
});

/* ── Background ──────────────────────────────────────────── */
function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute -top-32 -left-24 h-[440px] w-[440px] rounded-full bg-primary/[0.06] blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-24 h-[380px] w-[380px] rounded-full bg-accent/[0.05] blur-[90px]"
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" className="fill-foreground/[0.05]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

/* ── Mini bar chart ──────────────────────────────────────── */
function MiniBarChart() {
  const bars = [28, 40, 34, 54, 46, 65, 56, 74, 68, 82];
  return (
    <div className="flex items-end gap-[4px] h-14">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-primary/70 to-primary/20"
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.5, delay: 0.9 + i * 0.05, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

/* ── Product preview (right column) ──────────────────────── */
function ProductPreview() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[55%] w-[70%] rounded-3xl bg-primary/[0.04] blur-2xl" />

      <motion.div
        className="relative rounded-xl border border-border/50 bg-card/80 shadow-xl shadow-black/[0.04] backdrop-blur-xl dark:bg-card/60 dark:shadow-black/20"
        {...slideIn(0.35)}
      >
        <div className="flex items-center gap-2 border-b border-border/40 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/60" />
            <span className="h-2 w-2 rounded-full bg-amber-400/60" />
            <span className="h-2 w-2 rounded-full bg-green-400/60" />
          </div>
          <span className="mx-auto text-[10px] font-medium text-muted-foreground tracking-wide">
            app.icoop.ng
          </span>
        </div>

        <div className="space-y-4 p-4">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: "Total Savings", value: "₦48.2M", change: "+8.3%", up: true },
              { label: "Active Loans", value: "342", change: "12 pending", up: false },
              { label: "Members", value: "1,247", change: "+23 this mo.", up: true },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-surface/80 px-2.5 py-2.5">
                <p className="text-[9px] text-muted-foreground leading-tight">{s.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">{s.value}</p>
                <p className={`text-[9px] ${s.up ? "text-primary" : "text-muted-foreground"}`}>
                  {s.change}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border/30 bg-surface/50 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-foreground">Monthly Collections</span>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold text-primary">
                +18.2%
              </span>
            </div>
            <MiniBarChart />
          </div>

          <div className="space-y-2">
            <p className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider">
              Recent Activity
            </p>
            {[
              { text: "Dues collected — Adebayo Yusuf", time: "2m ago", dot: "bg-primary" },
              { text: "Loan approved — Fatima Bello", time: "8m ago", dot: "bg-accent" },
              { text: "New member — Chioma Okafor", time: "14m ago", dot: "bg-amber-400" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.dot}`} />
                  <span className="text-foreground/80">{item.text}</span>
                </div>
                <span className="text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating — active members */}
      <motion.div
        className="absolute -right-2 -top-3 z-10 rounded-lg border border-border/60 bg-card/90 px-3 py-2 shadow-md backdrop-blur-xl dark:bg-card/70 sm:-right-4 sm:-top-4"
        {...slideIn(0.8)}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            </span>
            <div>
              <p className="text-[9px] text-muted-foreground">Active now</p>
              <p className="text-xs font-semibold text-foreground">128 members</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating — loan approved */}
      <motion.div
        className="absolute -left-3 bottom-12 z-10 rounded-lg border border-border/60 bg-card/90 px-3 py-2 shadow-md backdrop-blur-xl dark:bg-card/70 sm:-left-6"
        {...slideIn(1.0)}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-green-500/10 text-green-600 dark:text-green-400">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div>
              <p className="text-[9px] text-muted-foreground">Loan approved</p>
              <p className="text-xs font-semibold text-foreground">₦450,000</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */
/*  HERO                                                     */
/* ══════════════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16" aria-label="Hero">
      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20 lg:px-8 lg:py-32">
        {/* ── LEFT ── */}
        <div className="max-w-xl lg:max-w-none">
          <motion.div {...fadeUp(0.05)} className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.05] px-3.5 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Built for cooperatives in Nigeria
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.14)}
            className="text-[2.1rem] font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-[3.25rem] xl:text-[3.5rem]"
          >
            Run your cooperative
            <br className="hidden sm:block" />
            <span className="text-muted-foreground font-bold"> without the paperwork,</span>
            <br className="hidden sm:block" />
            <span className="text-muted-foreground font-bold"> delays, or confusion</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.26)}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]"
          >
            Collect dues, approve loans, and keep members informed — all from one
            place. Built for the way Nigerian cooperatives, unions, and thrift
            groups actually work.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.38)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <motion.a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-shadow hover:shadow-md"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Start managing smarter
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              See how it works
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div {...fadeUp(0.48)} className="mt-9 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2">
                {["AY", "FB", "CO", "KA"].map((initials, i) => (
                  <div
                    key={initials}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-surface text-[9px] font-semibold text-foreground"
                    style={{ zIndex: 4 - i }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">500+</span> cooperatives on board
              </p>
            </div>
            <span className="hidden sm:block h-4 w-px bg-border" />
            <p className="text-xs text-muted-foreground">No setup fees · Cancel anytime</p>
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <motion.div {...slideIn(0.2)} className="lg:pl-4">
          <ProductPreview />
        </motion.div>
      </div>
    </section>
  );
}
