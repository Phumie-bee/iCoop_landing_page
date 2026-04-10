"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.7, delay, ease: EASE },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 } as const,
  animate: { opacity: 1 } as const,
  transition: { duration: 0.8, delay, ease: EASE },
});

const KEY_POINTS = [
  { text: "Web-based platform — access from any device" },
  { text: "Built specifically for cooperatives" },
  { text: "Intuitive and easy to use" },
];

/* ══════════════════════════════════════════════════════════ */
/*  HERO                                                     */
/* ══════════════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/bg_image.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#2c3e50]/60 via-[#34495e]/40 to-transparent" />
        <div className="absolute inset-0 bg-[#2c3e50]/20" />
        {/* Subtle animated glow */}
        <motion.div
          className="absolute top-1/4 right-1/3 h-125 w-125 rounded-full bg-primary/8 blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 pt-24 pb-16 md:px-16 lg:grid-cols-2 lg:gap-16 lg:pt-0 lg:pb-0">
        {/* ── LEFT: Image ── */}
        <motion.div
          className="order-1 flex justify-center lg:order-0 lg:justify-start"
          {...fadeIn(0.1)}
        >
          <motion.div
            className="relative w-full max-w-lg lg:max-w-none"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute -inset-4 rounded-3xl bg-white/6 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
              <Image
                src="/three_peepz.png"
                alt="Cooperative members collaborating"
                width={640}
                height={440}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              className="absolute -right-3 -bottom-4 z-10 rounded-2xl border border-white/10 bg-white/10 px-5 py-3.5 shadow-lg backdrop-blur-xl sm:-right-6 sm:-bottom-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
            >
              <p className="text-[11px] font-medium text-white/70">
                Active cooperatives
              </p>
              <p className="text-xl font-bold text-white">500+</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Content ── */}
        <div className="order-2 text-center lg:order-0 lg:text-left">
          <motion.div {...fadeUp(0.1)} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Built for cooperatives in Nigeria
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl xl:text-[3.4rem]"
          >
            Smarter Cooperative{" "}
            <span className="text-primary">Management,</span>
            <br className="hidden sm:block" />
            All in One Platform
          </motion.h1>

          <motion.p
            {...fadeUp(0.32)}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0"
          >
            iCoop helps cooperatives manage savings, loans, and members
            seamlessly — anytime, anywhere.
          </motion.p>

          {/* Key points */}
          <motion.ul
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 lg:mx-0"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.45 },
              },
            }}
          >
            {KEY_POINTS.map((point) => (
              <motion.li
                key={point.text}
                className="flex items-center gap-3 text-left text-sm text-white/80 sm:text-base"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: EASE },
                  },
                }}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <svg
                    className="h-3.5 w-3.5 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {point.text}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.55)}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(92,189,185,0.3)",
              }}
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
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/6 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Request Demo
            </motion.a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            {...fadeUp(0.65)}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {["AY", "FB", "CO", "KA"].map((initials, i) => (
                  <div
                    key={initials}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 text-[10px] font-semibold text-white backdrop-blur-sm"
                    style={{ zIndex: 4 - i }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/60">
                <span className="font-semibold text-white">500+</span>{" "}
                cooperatives on board
              </p>
            </div>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <p className="text-xs text-white/50">
              No setup fees · Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to page background */}
    </section>
  );
}
