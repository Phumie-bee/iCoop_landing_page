"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Reusable fade-in variant helpers                                   */
/* ------------------------------------------------------------------ */
const EASE: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 48 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

/* ------------------------------------------------------------------ */
/*  Background mesh / orbs                                             */
/* ------------------------------------------------------------------ */
function MeshBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Giant colour blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-[560px] w-[560px] rounded-full bg-primary/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 right-0 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[100px]"
        animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.06, 1] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[340px] rounded-full bg-indigo-400/10 blur-[90px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Dot grid */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-dots"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.8" className="fill-foreground/[0.04]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,transparent_40%,var(--background)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Floating stat cards (right column)                                 */
/* ------------------------------------------------------------------ */
function FloatingCard({
  children,
  className = "",
  delay = 0,
  y = [0, -10, 0],
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number[];
}) {
  return (
    <motion.div
      className={`absolute rounded-2xl border border-border/60 bg-card/70 p-4 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-card/50 dark:shadow-black/20 ${className}`}
      {...fadeRight(delay)}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 20px 40px -12px rgba(79,70,229,.18)",
      }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        animate={{ y }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mini bar chart component                                           */
/* ------------------------------------------------------------------ */
function MiniChart() {
  const bars = [35, 52, 44, 68, 56, 80, 72, 92];
  return (
    <div className="flex items-end gap-1.5 h-16">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-3 rounded-sm bg-gradient-to-t from-primary/80 to-primary/30"
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.6, delay: 1.2 + i * 0.07, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Product preview — assembled from floating glass cards              */
/* ------------------------------------------------------------------ */
function ProductPreview() {
  return (
    <div className="relative h-[480px] w-full sm:h-[540px] lg:h-[580px]">
      {/* Main dashboard card */}
      <motion.div
        className="absolute inset-x-0 top-8 mx-auto w-[92%] max-w-md rounded-2xl border border-border/50 bg-card/60 shadow-2xl shadow-primary/5 backdrop-blur-2xl dark:bg-card/40 lg:left-8 lg:mx-0"
        {...fadeRight(0.5)}
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-2 border-b border-border/50 px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="mx-auto text-[11px] font-medium text-muted-foreground">
            iCoop Dashboard
          </span>
        </div>

        <div className="space-y-4 p-5">
          {/* Quick stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Members", value: "1,247", icon: "👥" },
              { label: "Loans", value: "₱8.4M", icon: "💳" },
              { label: "Savings", value: "₱24.1M", icon: "🏦" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-muted/60 px-3 py-2.5 text-center dark:bg-muted/40"
              >
                <span className="text-base">{s.icon}</span>
                <p className="mt-1 text-sm font-bold text-foreground">
                  {s.value}
                </p>
                <p className="text-[10px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-xl border border-border/40 bg-muted/30 p-4 dark:bg-muted/20">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-foreground">
                Monthly Savings
              </span>
              <span className="text-[10px] font-medium text-emerald-500">
                +18.2 %
              </span>
            </div>
            <MiniChart />
          </div>

          {/* Recent activity skeleton */}
          <div className="space-y-2">
            {[
              "Loan approved · J. Cruz",
              "Deposit · M. Reyes",
              "New member · A. Garcia",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating card — Members online */}
      <FloatingCard
        className="right-0 top-0 z-10 w-44 lg:right-0 lg:-top-2"
        delay={0.9}
        y={[0, -8, 0]}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <circle cx="10" cy="10" r="4" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Online now</p>
            <p className="text-sm font-bold text-foreground">128 members</p>
          </div>
        </div>
      </FloatingCard>

      {/* Floating card — Loan disbursed */}
      <FloatingCard
        className="left-0 bottom-24 z-10 w-52 sm:left-auto sm:right-2 sm:bottom-28 lg:-right-4 lg:bottom-32"
        delay={1.15}
        y={[0, -12, 0]}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Loan disbursed</p>
            <p className="text-sm font-bold text-foreground">₱250,000</p>
          </div>
        </div>
      </FloatingCard>

      {/* Floating card — Savings growth */}
      <FloatingCard
        className="left-0 bottom-4 z-10 w-48 sm:left-4 sm:bottom-4 lg:-left-4 lg:bottom-8"
        delay={1.35}
        y={[0, -7, 0]}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Savings growth</p>
            <p className="text-sm font-bold text-emerald-500">+12.4 %</p>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO SECTION                                                       */
/* ------------------------------------------------------------------ */
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <MeshBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-36">
        {/* -------- LEFT: text column -------- */}
        <div className="max-w-xl lg:max-w-none">
          {/* Badge */}
          <motion.div {...fadeUp(0.05)} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Trusted by modern cooperatives
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.15)}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-[3.75rem] 2xl:text-7xl"
          >
            Run Your Cooperative
            <br className="hidden sm:block" /> Like a Modern{" "}
            <span className="gradient-text">Fintech Platform</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            {...fadeUp(0.28)}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Manage members, loans, savings, and financial reports in one
            powerful, easy-to-use system.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.4)}
            className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:gap-4"
          >
            <motion.a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-shadow hover:shadow-primary/40"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
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
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Request Demo
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            {...fadeUp(0.55)}
            className="mt-12 flex flex-wrap items-center gap-5 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/60 to-accent/60"
                  style={{ zIndex: 5 - i }}
                />
              ))}
            </div>
            <span>
              Trusted by <strong className="text-foreground">500+</strong>{" "}
              cooperatives
            </span>
            <span className="hidden text-border sm:inline">|</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1">4.9/5</span>
            </div>
          </motion.div>
        </div>

        {/* -------- RIGHT: product preview -------- */}
        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
