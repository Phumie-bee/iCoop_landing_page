"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimationWrapper";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center">
          <div className="p-10 sm:p-16 rounded-3xl border border-border bg-card/80 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Ready to modernize <br className="hidden sm:block" />
              <span className="gradient-text">your cooperative?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Join hundreds of cooperatives that have already transformed their
              operations. Start your free trial today — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Start Managing Your Cooperative Today
                <svg
                  className="ml-2 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 10h12M12 6l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              Free 14-day trial &bull; No credit card required &bull; Cancel
              anytime
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
