"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimationWrapper";

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-accent/[0.03] to-transparent" />
      <motion.div
        className="absolute -top-20 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.07] blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/4 h-[360px] w-[360px] rounded-full bg-accent/[0.07] blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <div className="rounded-3xl border border-border bg-card/80 p-10 shadow-xl shadow-primary/[0.03] backdrop-blur-md sm:p-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Start Managing Your Cooperative{" "}
              <span className="gradient-text">Smarter Today</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
              No paperwork. No stress. Just complete control.
            </p>

            <motion.a
              href="#"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_4px_24px_-4px] shadow-primary/30 transition-shadow hover:shadow-primary/50"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started Now
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

            <p className="mt-5 text-xs text-muted-foreground">
              Free 14-day trial &bull; No credit card required &bull; Cancel
              anytime
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
