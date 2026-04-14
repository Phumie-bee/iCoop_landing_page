"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease },
  }),
};

const rowReveal = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.1 + i * 0.07, ease },
  }),
};

const priceReveal = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.15 + i * 0.07, ease },
  }),
};

const featureItem = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.04, ease },
  }),
};

const checkPop = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.04 - 0.02, ease },
  }),
};

const tiers = [
  {
    name: "Starter Cooperative",
    range: "0 – 50 members",
    price: "₦12,000",
    unit: "/ member / annum",
    cta: "Get Started",
    recommended: false,
  },
  {
    name: "Growing Cooperative",
    range: "51 – 200 members",
    price: "₦18,000",
    unit: "/ member / annum",
    cta: "Get Started",
    recommended: true,
  },
  {
    name: "Established Cooperative",
    range: "200 – 500 members",
    price: "₦25,000",
    unit: "/ member / annum",
    cta: "Get Started",
    recommended: false,
  },
  {
    name: "Enterprise Cooperative",
    range: "500+ members",
    price: "Custom",
    unit: "contact for pricing",
    cta: "Contact Us",
    recommended: false,
  },
];

const features = [
  "Membership Management",
  "Savings and Loan Management",
  "Vendor Management",
  "Payments",
  "Receipt",
  "Third Party Integration",
  "Money Market Investment",
  "Pool Funds",
  "Financial Account",
  "Reporting and Analytics",
  "Marketplace",
  "Communication",
];

export default function Pricing() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="pricing"
      className="relative bg-background overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      {/* Subtle bg blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -top-40 left-1/4 w-105 h-105 rounded-full bg-primary/3 blur-3xl"
          animate={prefersReduced ? {} : { x: [0, 20, 0], y: [0, 14, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-slate-200/30 blur-3xl"
          animate={prefersReduced ? {} : { x: [0, -18, 0], y: [0, -12, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* ───────── HEADER (left-aligned) ───────── */}
        <motion.div
          className="mb-12 sm:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <h2 className="section-heading mb-3 text-center">Pricing</h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-lg text-center mx-auto">
            Built to grow with cooperatives of every size
          </p>
        </motion.div>

        {/* ───────── EVERYTHING INCLUDED ───────── */}
        <motion.div
          className="mb-12 sm:mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2 text-center">
            Everything Included
          </h3>
          <p className="text-sm text-text-secondary mb-8 text-center">
            All plans come with the full iCoop platform — no feature gating.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3.5">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                className="flex items-center gap-2.5 group"
                variants={featureItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
              >
                <motion.div
                  className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center transition-colors duration-200 group-hover:bg-primary/18"
                  variants={checkPop}
                  custom={i}
                >
                  <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                </motion.div>
                <span className="text-sm text-text-secondary group-hover:text-foreground transition-colors duration-200">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ───────── PRICING ROWS ───────── */}
        <motion.div
          className="rounded-2xl bg-white overflow-hidden mb-10 sm:mb-14"
          style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={2}
        >
          {/* Table header (desktop) */}
          <div className="hidden sm:grid grid-cols-[1fr_auto_auto] items-center gap-6 px-6 py-3.5 border-b border-border bg-surface/60 text-xs font-semibold text-text-muted uppercase tracking-wider">
            <span>Plan</span>
            <span className="w-36 text-right">Price</span>
            <span className="w-32" />
          </div>

          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`relative grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] items-center gap-3 sm:gap-6 px-5 sm:px-6 py-5 sm:py-5 border-b border-border last:border-b-0 will-change-transform transition-[background-color,box-shadow] duration-250 ${
                hoveredRow === i
                  ? "bg-surface/70"
                  : tier.recommended
                    ? "bg-primary/2.5"
                    : ""
              }`}
              style={{
                boxShadow:
                  hoveredRow === i
                    ? "inset 0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px -2px rgba(0,0,0,0.04)"
                    : "none",
              }}
              variants={rowReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              onHoverStart={() => setHoveredRow(i)}
              onHoverEnd={() => setHoveredRow(null)}
            >
              {/* Recommended accent bar */}
              {tier.recommended && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3, ease }}
                />
              )}

              {/* Plan info */}
              <div className="flex items-center gap-3 min-w-0">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-foreground">
                      {tier.name}
                    </h3>
                    {tier.recommended && (
                      <motion.span
                        className="inline-flex items-center gap-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.35, ease }}
                      >
                        <Star className="w-2.5 h-2.5" fill="currentColor" />
                        Recommended
                      </motion.span>
                    )}
                  </div>
                  <p className="text-sm text-text-muted mt-0.5">{tier.range}</p>
                </div>
              </div>

              {/* Price */}
              <motion.div
                className="sm:w-36 sm:text-right"
                variants={priceReveal}
                custom={i}
              >
                <span className="text-2xl sm:text-[1.65rem] font-extrabold text-foreground tracking-tight">
                  {tier.price}
                </span>
                <span className="text-xs text-text-muted ml-1.5">
                  {tier.unit}
                </span>
              </motion.div>

              {/* CTA */}
              <div className="sm:w-32">
                <motion.button
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    tier.recommended
                      ? "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md"
                      : "bg-surface text-foreground hover:bg-primary/8 hover:text-primary"
                  }`}
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" as const }}
                >
                  {tier.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing note */}
        <motion.p
          className="text-xs text-text-muted mb-14 sm:mb-18"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={5}
        >
          Pricing is calculated per member annually, ensuring fairness as your
          cooperative grows.
        </motion.p>
      </div>
    </section>
  );
}
