"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.8, delay, ease: EASE },
});

const slideIn = (delay = 0) => ({
  initial: { opacity: 0, x: 60 } as const,
  animate: { opacity: 1, x: 0 } as const,
  transition: { duration: 0.9, delay, ease: EASE },
});

/* ── Background ──────────────────────────────────────────── */
function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Primary blob — top-left */}
      <motion.div
        className="absolute -top-40 -left-40 h-[640px] w-[640px] rounded-full bg-primary/[0.14] blur-[140px]"
        animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Accent blob — bottom-right */}
      <motion.div
        className="absolute -bottom-60 -right-40 h-[520px] w-[520px] rounded-full bg-accent/[0.12] blur-[120px]"
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      {/* Indigo glow — centre */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-indigo-500/[0.06] blur-[100px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Dot grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" className="fill-foreground/[0.07]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      {/* Vignettes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,transparent_40%,var(--background)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

/* ── Mini bar chart ──────────────────────────────────────── */
function MiniBarChart() {
  const bars = [28, 42, 36, 58, 48, 72, 64, 86, 78, 94];
  return (
    <div className="flex items-end gap-[5px] h-20">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-primary to-primary/30"
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.5, delay: 0.9 + i * 0.06, ease: "easeOut" }}
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
  drift = [0, -9, 0],
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  drift?: number[];
}) {
  return (
    <motion.div
      className={`absolute rounded-2xl border border-border/50 bg-card/80 p-4 shadow-xl shadow-black/[0.04] backdrop-blur-2xl dark:bg-card/60 dark:shadow-black/20 ${className}`}
      {...slideIn(delay)}
      whileHover={{ scale: 1.05, boxShadow: "0 24px 48px -12px rgba(67,56,202,.16)" }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        animate={{ y: drift }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ── Product preview (right column) ──────────────────────── */
function ProductPreview() {
  return (
    <div className="relative h-[500px] w-full sm:h-[560px] lg:h-[600px]">
      {/* Glow behind main card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[70%] w-[80%] rounded-3xl bg-primary/[0.06] blur-3xl" />

      {/* Main dashboard card */}
      <motion.div
        className="absolute inset-x-4 top-10 mx-auto max-w-[420px] rounded-2xl border border-border/40 bg-card/70 shadow-2xl shadow-primary/[0.04] backdrop-blur-2xl dark:bg-card/50 lg:left-6 lg:mx-0"
        {...slideIn(0.4)}
      >
        {/* Chrome */}
        <div className="flex items-center gap-2 border-b border-border/40 px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="mx-auto text-[11px] font-medium text-muted-foreground tracking-wide">
            iCoop Dashboard
          </span>
        </div>

        <div className="space-y-5 p-5">
          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: "👥", value: "1,247", label: "Members", color: "text-blue-500" },
              { icon: "💳", value: "₱8.4M", label: "Loans", color: "text-emerald-500" },
              { icon: "🏦", value: "₱24.1M", label: "Savings", color: "text-violet-500" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-surface px-3 py-3 text-center">
                <span className="text-lg">{s.icon}</span>
                <p className={`mt-1 text-sm font-bold ${s.color}`}>{s.value}</p>
                <p className="text-[10px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-xl border border-border/30 bg-surface/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-foreground">Monthly Savings</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-500">
                +18.2%
              </span>
            </div>
            <MiniBarChart />
          </div>

          {/* Activity feed */}
          <div className="space-y-2.5">
            {[
              { text: "Loan approved — J. Cruz", dot: "bg-emerald-400" },
              { text: "Deposit — M. Reyes ₱5,000", dot: "bg-primary" },
              { text: "New member — A. Garcia", dot: "bg-amber-400" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-[11px]">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.dot}`} />
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating — online members */}
      <FloatingCard className="right-0 top-0 z-10 w-[172px] lg:-right-2 lg:-top-2" delay={0.85} drift={[0, -8, 0]}>
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground">Online now</p>
            <p className="text-sm font-bold text-foreground">128 members</p>
          </div>
        </div>
      </FloatingCard>

      {/* Floating — loan disbursed */}
      <FloatingCard className="right-0 bottom-28 z-10 w-[200px] sm:right-2 lg:-right-6 lg:bottom-36" delay={1.1} drift={[0, -11, 0]}>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground">Loan disbursed</p>
            <p className="text-sm font-bold text-foreground">₱250,000</p>
          </div>
        </div>
      </FloatingCard>

      {/* Floating — savings growth */}
      <FloatingCard className="left-0 bottom-6 z-10 w-[184px] sm:left-2 lg:-left-6 lg:bottom-10" delay={1.3} drift={[0, -7, 0]}>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground">Savings growth</p>
            <p className="text-sm font-bold text-emerald-500">+12.4%</p>
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
    <section className="relative min-h-screen overflow-hidden pt-16" aria-label="Hero">
      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8 lg:py-40">
        {/* ── LEFT ── */}
        <div className="max-w-xl lg:max-w-none">
          <motion.div {...fadeUp(0.05)} className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Trusted by modern cooperatives
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.14)}
            className="text-[2.5rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-[4rem]"
          >
            Manage Your Cooperative{" "}
            <br className="hidden md:block" />
            <span className="gradient-text">Without the Chaos</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.26)}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-[1.15rem]"
          >
            Track members, loans, savings, and financial reports in one
            powerful, easy-to-use platform.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.38)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <motion.a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_4px_24px_-4px] shadow-primary/30 transition-shadow hover:shadow-primary/50"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </motion.a>
            <motion.a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Request Demo
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.div {...fadeUp(0.52)} className="mt-12 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <div className="flex -space-x-2.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/50 to-accent/50"
                  style={{ zIndex: 5 - i }}
                />
              ))}
            </div>
            <span>
              <strong className="text-foreground">500+</strong> cooperatives
            </span>
            <span className="hidden text-border sm:inline">|</span>
            <div className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 font-medium">4.9/5</span>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
