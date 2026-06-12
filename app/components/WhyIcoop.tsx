"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight, ArrowDown } from "lucide-react";
import SectionSpine from "./SectionSpine";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease },
  }),
};

const rowStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const rowItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

/* Each pain point mapped to how iCoop solves it (from the iCoop deck) */
const comparisons = [
  {
    problem: "Manual processes mistaken for automation",
    solution: "True end-to-end automation",
  },
  {
    problem: "Single-user, backend-only systems",
    solution: "Multi-user, web-based access for everyone",
  },
  {
    problem: "Crowded offices & slow member service",
    solution: "Self-service, anytime and anywhere",
  },
  {
    problem: "Policies that can't be enforced",
    solution: "Cooperative policy enforced on every form",
  },
  {
    problem: "Rigid, foreign, uncustomizable software",
    solution: "Fully parameter-driven & self-configurable",
  },
];

export default function WhyIcoop() {
  return (
    <section
      id="why-icoop"
      className="relative border-t border-border py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <SectionSpine index="02" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary-deep">
              Why iCoop
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="section-heading mb-4">
            Fixing what traditional systems get wrong
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            iCoop replaces patchwork tools and manual workarounds with one
            automated, policy-driven platform — purpose-built for cooperatives.
          </p>
        </motion.div>

        {/* Column labels (desktop) */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-5 mb-4 px-1">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">
            The old way
          </p>
          <span className="w-5" />
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-deep">
            With iCoop
          </p>
        </div>

        {/* Comparison rows */}
        <motion.div
          className="space-y-3.5"
          variants={rowStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {comparisons.map((row) => (
            <motion.div
              key={row.problem}
              className="card-soft p-4 sm:p-5 flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:items-center gap-3 md:gap-5 transition-shadow hover:shadow-[0_16px_40px_-16px_rgba(11,31,23,0.18)]"
              variants={rowItem}
            >
              {/* problem */}
              <div className="flex items-center gap-3">
                <span className="shrink-0 w-7 h-7 rounded-lg bg-accent-soft flex items-center justify-center">
                  <X className="w-4 h-4 text-amber-600" strokeWidth={2.5} />
                </span>
                <span className="text-sm sm:text-[15px] text-text-secondary">
                  {row.problem}
                </span>
              </div>

              {/* connector */}
              <div className="flex items-center justify-center text-primary md:px-1">
                <ArrowRight className="hidden md:block w-5 h-5" />
                <ArrowDown className="md:hidden w-5 h-5" />
              </div>

              {/* solution */}
              <div className="flex items-center gap-3">
                <span className="shrink-0 w-7 h-7 rounded-lg bg-primary-soft flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-deep" strokeWidth={2.5} />
                </span>
                <span className="text-sm sm:text-[15px] font-semibold text-foreground">
                  {row.solution}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          className="text-center text-lg sm:text-xl font-bold text-foreground mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={1}
        >
          True automation. <span className="text-primary">Real results.</span>
        </motion.p>
      </div>
    </section>
  );
}
