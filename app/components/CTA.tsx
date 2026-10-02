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
      className="relative py-20 sm:py-28 lg:py-32 mesh-light border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="section-heading mb-4 sm:mb-5 leading-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          Ready to transform your{" "}
          <span className="text-primary">cooperative?</span>
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
          {/* Request a Demo — primary */}
          <motion.a
            href="/book-demo"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full px-8 sm:px-10 py-4 text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/25 will-change-transform cursor-pointer w-full sm:w-auto transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Request a Demo
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>

          {/* Contact Us — secondary */}
          <motion.a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full px-8 sm:px-10 py-4 text-sm sm:text-base font-bold text-foreground bg-white border border-border hover:border-primary/40 shadow-sm will-change-transform cursor-pointer w-full sm:w-auto transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
            <ArrowRight className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
