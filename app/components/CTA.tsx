"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease },
  }),
};

export default function CTA() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="cta"
      className="relative py-20 sm:py-28 lg:py-32 bg-white overflow-hidden"
    >
      {/* Subtle background blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -top-32 left-1/3 w-105 h-105 rounded-full bg-primary/3 blur-3xl"
          animate={prefersReduced ? {} : { x: [0, 20, 0], y: [0, 14, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-28 right-1/4 w-96 h-96 rounded-full bg-orange-200/20 blur-3xl"
          animate={prefersReduced ? {} : { x: [0, -16, 0], y: [0, -10, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 sm:mb-5 leading-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          Ready to transform your cooperative?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
        >
          Start using iCoop today and experience smarter, faster, and more
          reliable operations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={2}
        >
          {/* Request a Demo — orange gradient */}
          <motion.a
            href="#"
            className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-white shadow-lg will-change-transform cursor-pointer w-full sm:w-auto"
            style={{
              background: "linear-gradient(180deg, #f59e0b 0%, #ea580c 100%)",
              boxShadow:
                "0 4px 14px -3px rgba(234,88,12,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
            whileHover={{
              y: -2,
              scale: 1.02,
              boxShadow:
                "0 8px 24px -4px rgba(234,88,12,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
          >
            Request a Demo
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.a>

          {/* Contact Us — green gradient */}
          <motion.a
            href="#"
            className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-white shadow-lg will-change-transform cursor-pointer w-full sm:w-auto"
            style={{
              background: "linear-gradient(180deg, #22c55e 0%, #15803d 100%)",
              boxShadow:
                "0 4px 14px -3px rgba(21,128,61,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
            whileHover={{
              y: -2,
              scale: 1.02,
              boxShadow:
                "0 8px 24px -4px rgba(21,128,61,0.4), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
          >
            Contact Us
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
