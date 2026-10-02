"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import SectionSpine from "./SectionSpine";

const MotionLink = motion(Link);

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease },
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
  return (
    <section
      id="pricing"
      className="relative border-t border-border overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <SectionSpine index="07" terminal />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14 sm:mb-18 lg:mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary-deep">
              Pricing
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="section-heading mb-4 sm:mb-5">
            Plans that grow <span className="text-primary">with you</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Built for cooperatives of every size. All plans include full access
            to iCoop&apos;s complete platform.
          </p>
        </motion.div>

        {/* Pricing Cards Grid — 4 columns responsive */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-2xl transition-all duration-300 will-change-transform ${
                tier.recommended
                  ? "lg:ring-2 lg:ring-primary lg:shadow-2xl lg:shadow-primary/10"
                  : "shadow-lg hover:shadow-xl"
              }`}
              style={{
                boxShadow: tier.recommended
                  ? "0 20px 50px -12px rgba(34, 197, 94, 0.15)"
                  : "0 10px 30px -5px rgba(0, 0, 0, 0.08)",
              }}
              variants={cardVariant}
              custom={i}
              whileHover={{
                y: tier.recommended ? 0 : -8,
                transition: { duration: 0.3 },
              }}
            >
              {/* Card Body */}
              <div
                className={`h-full rounded-2xl p-7 sm:p-8 flex flex-col ${
                  tier.recommended
                    ? "bg-linear-to-b from-primary/5 to-white border-2 border-primary/20"
                    : "bg-white border border-border"
                }`}
              >
                {/* Recommended Badge */}
                {tier.recommended && (
                  <motion.div
                    className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-5 w-fit"
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <Star className="w-3.5 h-3.5" fill="currentColor" />
                    Recommended
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-1.5">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-text-muted">{tier.range}</p>
                </div>

                {/* Price Block */}
                <div
                  className={`mb-8 pb-8 ${
                    tier.recommended
                      ? "border-b-2 border-primary/15"
                      : "border-b border-border"
                  }`}
                >
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl sm:text-[2.5rem] font-black text-foreground">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted font-medium">
                    {tier.unit}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-8 flex-1">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                    Includes
                  </p>
                  <div className="space-y-3">
                    {features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.2 + idx * 0.04,
                          duration: 0.3,
                        }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-text-secondary leading-snug">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <MotionLink
                  href="/book-demo"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 w-full ${
                    tier.recommended
                      ? "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 active:scale-95"
                      : "bg-surface text-foreground border border-border hover:bg-surface/80 hover:border-primary/40 active:scale-95"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </MotionLink>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-14 sm:mt-18"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={4}
        >
          <p className="text-sm text-text-secondary mb-2">
            <span className="font-semibold">All plans</span> include full
            platform access with no feature gating
          </p>
          <p className="text-xs text-text-muted">
            Pricing calculated per member annually. Contact us for volume
            discounts and custom enterprise solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
