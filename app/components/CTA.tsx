"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimationWrapper";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-accent/[0.02] to-transparent" />
      <motion.div
        className="absolute -top-16 left-1/4 h-[360px] w-[360px] rounded-full bg-primary/[0.05] blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 right-1/4 h-[320px] w-[320px] rounded-full bg-accent/[0.05] blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <div className="rounded-2xl border border-border bg-card/80 p-8 shadow-lg shadow-primary/[0.02] backdrop-blur-md sm:p-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Ready to leave the{" "}
              <span className="gradient-text">spreadsheets behind?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              Join 500+ cooperatives that already made the switch. Free trial,
              no credit card, no surprises.
            </p>

            <motion.a
              href="#"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-shadow hover:shadow-lg hover:shadow-primary/30"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
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

            <p className="mt-4 text-[11px] text-muted-foreground">
              14-day free trial &middot; No credit card required &middot; Cancel
              anytime
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
