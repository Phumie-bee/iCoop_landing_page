"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.8, delay, ease: EASE },
});

const slideIn = (delay = 0) => ({
  initial: { opacity: 0, x: 50 } as const,
  animate: { opacity: 1, x: 0 } as const,
  transition: { duration: 0.9, delay, ease: EASE },
});

/* ── Background ──────────────────────────────────────────── */
function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary blob — top-left */}
      <motion.div
        className="absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full bg-primary/[0.08] blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Accent blob — bottom-right */}
      <motion.div
        className="absolute -bottom-48 -right-32 h-[480px] w-[480px] rounded-full bg-accent/[0.07] blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      {/* Subtle warm tint — centre */}
      <motion.div
        className="absolute left-1/2 top-1/4 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-emerald-400/[0.04] blur-[80px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      {/* Dot grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.25]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.5" className="fill-foreground/[0.06]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      {/* Vignettes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,transparent_40%,var(--background)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

/* ── Mini bar chart ──────────────────────────────────────── */
function MiniBarChart() {
  const bars = [24, 38, 32, 52, 44, 68, 58, 78, 70, 88];
  return (
    <div className="flex items-end gap-[4px] h-16">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-primary to-accent/40"
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.5, delay: 0.9 + i * 0.05, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

/* ── Floating glass card ─────────────────────────────────── */
function FloatingCard({
  children,
  className = "",
  delay = 0,
  drift = [0, -8, 0],
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  drift?: number[];
}) {
  return (
    <motion.div
      className={`absolute rounded-xl border border-border/60 bg-card/90 p-3.5 shadow-lg shadow-black/[0.03] backdrop-blur-xl dark:bg-card/70 dark:shadow-black/20 ${className}`}
      {...slideIn(delay)}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        animate={{ y: drift }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.4,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ── Product preview (right column) ──────────────────────── */
function ProductPreview() {
  return (
    <div className="relative h-[480px] w-full sm:h-[540px] lg:h-[560px]">
      {/* Glow behind main card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[65%] w-[75%] rounded-3xl bg-primary/[0.05] blur-2xl" />

      {/* Main dashboard card */}
      <motion.div
        className="absolute inset-x-4 top-8 mx-auto max-w-[400px] rounded-xl border border-border/50 bg-card/80 shadow-xl shadow-primary/[0.03] backdrop-blur-xl dark:bg-card/60 lg:left-6 lg:mx-0"
        {...slideIn(0.35)}
      >
        {/* Chrome */}
        <div className="flex items-center gap-2 border-b border-border/40 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-amber-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
          </div>
          <span className="mx-auto text-[10px] font-medium text-muted-foreground tracking-wide">
            dashboard.icoop.ph
          </span>
        </div>

        <div className="space-y-4 p-4">
          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              {
                label: "Total Savings",
                value: "₱24.1M",
                change: "+8.3%",
                up: true,
              },
              {
                label: "Active Loans",
                value: "342",
                change: "12 pending",
                up: false,
              },
              {
                label: "Members",
                value: "1,247",
                change: "+23 this mo.",
                up: true,
              },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg bg-surface/80 px-2.5 py-2.5"
              >
                <p className="text-[9px] text-muted-foreground leading-tight">
                  {s.label}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">
                  {s.value}
                </p>
                <p
                  className={`text-[9px] ${s.up ? "text-primary" : "text-muted-foreground"}`}
                >
                  {s.change}
                </p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-lg border border-border/30 bg-surface/50 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-foreground">
                Monthly Collections
              </span>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold text-primary">
                +18.2%
              </span>
            </div>
            <MiniBarChart />
          </div>

          {/* Recent activity */}
          <div className="space-y-2">
            <p className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider">
              Recent Activity
            </p>
            {[
              {
                text: "Loan approved — Juan Cruz",
                time: "2m ago",
                dot: "bg-primary",
              },
              {
                text: "Savings deposit — Maria Reyes",
                time: "8m ago",
                dot: "bg-accent",
              },
              {
                text: "New member — Ana Garcia",
                time: "14m ago",
                dot: "bg-amber-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-[10px]"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.dot}`}
                  />
                  <span className="text-foreground/80">{item.text}</span>
                </div>
                <span className="text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating — live members */}
      <FloatingCard
        className="right-0 top-0 z-10 w-[160px] lg:-right-2 lg:-top-1"
        delay={0.8}
        drift={[0, -7, 0]}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          </div>
          <div>
            <p className="text-[9px] text-muted-foreground">Active now</p>
            <p className="text-xs font-semibold text-foreground">128 members</p>
          </div>
        </div>
      </FloatingCard>

      {/* Floating — loan disbursed */}
      <FloatingCard
        className="right-0 bottom-24 z-10 w-[180px] sm:right-2 lg:-right-4 lg:bottom-32"
        delay={1.05}
        drift={[0, -9, 0]}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] text-muted-foreground">Loan disbursed</p>
            <p className="text-xs font-semibold text-foreground">₱250,000</p>
          </div>
        </div>
      </FloatingCard>

      {/* Floating — savings growth */}
      <FloatingCard
        className="left-0 bottom-4 z-10 w-[168px] sm:left-2 lg:-left-4 lg:bottom-8"
        delay={1.2}
        drift={[0, -6, 0]}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] text-muted-foreground">Savings growth</p>
            <p className="text-xs font-semibold text-primary">+12.4%</p>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */
/*  HERO                                                     */
/* ══════════════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden pt-16"
      aria-label="Hero"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-36">
        {/* ── LEFT ── */}
        <div className="max-w-xl lg:max-w-none">
          <motion.div {...fadeUp(0.05)} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1.5 text-xs font-medium tracking-wide text-primary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Trusted by 500+ cooperatives
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.14)}
            className="text-[2.25rem] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-[3.5rem] xl:text-[3.75rem]"
          >
            Finally, a Better Way to <br className="hidden md:block" />
            <span className="gradient-text">Run Your Cooperative</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.26)}
            className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-muted-foreground"
          >
            Stay on top of members, loans, and savings — without the stress,
            spreadsheets, or manual errors.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.38)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-3"
          >
            <motion.a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-shadow hover:shadow-lg hover:shadow-primary/30"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Free Trial
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
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See How It Works
            </motion.a>
          </motion.div>

          {/* Trust nudge */}
          <motion.div {...fadeUp(0.5)} className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["ES", "MC", "JR", "AG"].map((initials, i) => (
                <div
                  key={initials}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-surface text-[10px] font-semibold text-foreground"
                  style={{ zIndex: 4 - i }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">500+</span>{" "}
              cooperatives already on board
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <motion.div {...slideIn(0.2)}>
          <ProductPreview />
        </motion.div>
      </div>
    </section>
  );
}
