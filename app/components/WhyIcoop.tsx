"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

/* ─── Custom easing ─── */
const smoothEase = [0.22, 1, 0.36, 1] as const;

/* ─── Animation variants ─── */

const sectionFade = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: smoothEase,
    },
  }),
};

const cardSlideLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.24, ease: smoothEase },
  },
};

const cardSlideRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.36, ease: smoothEase },
  },
};

const listItemLeft = {
  hidden: { opacity: 0, x: -14 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.35 + i * 0.08,
      ease: smoothEase,
    },
  }),
};

const listItemRight = {
  hidden: { opacity: 0, x: 14 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.45 + i * 0.08,
      ease: smoothEase,
    },
  }),
};

const iconPop = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: [0.8, 1.1, 1],
    transition: {
      duration: 0.4,
      delay: 0.4 + i * 0.08,
      ease: smoothEase,
    },
  }),
};

const dividerGrow = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.55, delay: 0.3, ease: smoothEase },
  },
};

/* ─── Data ─── */

const problems = [
  "Manual processes mistaken for automation",
  "Single-user backend systems",
  "Crowded offices & slow service",
  "Poor policy enforcement",
  "Rigid foreign software",
];

const solutions = [
  "Digitized and streamlined processes",
  "Scalable, sustainable system",
  "Reduced physical congestion",
  "Built-in policy enforcement",
  "Self-service for members & staff",
];

export default function WhyIcoop() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      id="why-icoop"
      className="relative py-20 sm:py-28 lg:py-32 bg-surface/30 overflow-hidden"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Subtle background blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-red-200/10 blur-3xl"
          animate={prefersReduced ? {} : { x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-105 h-105 rounded-full bg-primary/4 blur-3xl"
          animate={prefersReduced ? {} : { x: [0, -20, 0], y: [0, -12, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <h2 className="section-heading mb-3 sm:mb-4">Why iCoop?</h2>
          <motion.p
            className="text-base sm:text-lg text-text-secondary"
            variants={fadeUp}
            custom={1}
          >
            Fixing What Traditional Systems Get Wrong
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {/* Vertical divider between cards (desktop only) */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-200 origin-top"
            variants={dividerGrow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          />

          {/* The Problem Card */}
          <motion.div
            className="rounded-xl bg-white p-6 sm:p-8 will-change-transform"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
            variants={cardSlideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{
              y: -6,
              scale: 1.01,
              boxShadow: "0 16px 40px -10px rgba(0,0,0,0.1)",
              transition: { duration: 0.3, ease: "easeOut" as const },
            }}
            animate={{
              opacity: hoveredCard !== null && hoveredCard !== 0 ? 0.6 : 1,
            }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setHoveredCard(0)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-6 sm:mb-8">
              The Problem
            </h3>
            <ul className="space-y-4 sm:space-y-5">
              {problems.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  variants={listItemLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <motion.span
                    className="mt-0.5 shrink-0 w-6 h-6 rounded-md bg-red-50 flex items-center justify-center"
                    variants={iconPop}
                    custom={i}
                  >
                    <X className="w-3.5 h-3.5 text-red-400" strokeWidth={2.5} />
                  </motion.span>
                  <span className="text-sm sm:text-base text-foreground font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* The Solution Card */}
          <motion.div
            className="rounded-xl bg-white p-6 sm:p-8 will-change-transform"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
            variants={cardSlideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{
              y: -6,
              scale: 1.01,
              boxShadow: "0 16px 40px -10px rgba(34,197,94,0.12)",
              transition: { duration: 0.3, ease: "easeOut" as const },
            }}
            animate={{
              opacity: hoveredCard !== null && hoveredCard !== 1 ? 0.6 : 1,
            }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setHoveredCard(1)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-green-500 mb-6 sm:mb-8">
              The Solution
            </h3>
            <ul className="space-y-4 sm:space-y-5">
              {solutions.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  variants={listItemRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <motion.span
                    className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center"
                    variants={iconPop}
                    custom={i}
                  >
                    <CheckCircle
                      className="w-4 h-4 text-primary"
                      strokeWidth={2}
                    />
                  </motion.span>
                  <span className="text-sm sm:text-base text-foreground font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          className="text-center text-base sm:text-lg text-text-secondary italic"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={4}
        >
          True automation. Real results.
        </motion.p>
      </div>
    </motion.section>
  );
}
