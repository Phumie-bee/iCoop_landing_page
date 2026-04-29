"use client";

import { motion } from "framer-motion";
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
  return (
    <section
      id="cta"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#0f172a] overflow-hidden"
    >
      {/* Subtle background blobs — desktop only for performance */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden
      >
        <div className="absolute -top-32 left-1/3 w-105 h-105 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute -bottom-28 right-1/4 w-96 h-96 rounded-full bg-orange-200/20 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="section-heading mb-4 sm:mb-5 leading-tight !text-white"
          style={{ WebkitTextFillColor: "white" }}
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
          className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed"
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
          {/* Request a Demo — primary */}
          <motion.a
            href="#"
            className="group inline-flex items-center justify-center gap-2.5 rounded-lg px-8 sm:px-10 py-3.5 text-sm sm:text-base font-semibold tracking-wide uppercase text-white bg-primary hover:bg-primary/90 shadow-md will-change-transform cursor-pointer w-full sm:w-auto transition-all duration-200"
            whileTap={{ scale: 0.98 }}
          >
            Request a Demo
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.a>

          {/* Contact Us — secondary outline */}
          <motion.a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 rounded-lg px-8 sm:px-10 py-3.5 text-sm sm:text-base font-semibold tracking-wide uppercase text-white border border-white/30 hover:border-white/60 hover:bg-white/5 will-change-transform cursor-pointer w-full sm:w-auto transition-all duration-200"
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
