"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    tagline: "For small cooperatives finding their feet.",
    features: [
      "Up to 50 members",
      "Basic loan tracking",
      "Savings management",
      "Email support",
      "Standard reports",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₱2,499",
    period: "/mo",
    tagline: "For established cooperatives that need full visibility.",
    features: [
      "Up to 500 members",
      "Advanced loan management",
      "Automated reminders",
      "Priority support",
      "Custom reports & analytics",
      "Member self-service portal",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "For multi-branch cooperatives with complex needs.",
    features: [
      "Unlimited members",
      "Multi-branch support",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security & compliance",
      "On-premise deployment option",
      "SLA guarantee",
    ],
    cta: "Talk to Us",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="section-line mx-auto max-w-5xl" />

      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary mb-4">
            Pricing
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, honest <span className="gradient-text">pricing</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Pick the plan that matches your size. No hidden fees, no lock-in.
            Upgrade or downgrade whenever you need to.
          </p>
        </FadeIn>

        <StaggerContainer
          className="mt-14 grid items-start gap-5 md:grid-cols-3 lg:gap-6"
          staggerDelay={0.1}
        >
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                className={`relative flex h-full flex-col rounded-xl border p-7 transition-all ${
                  plan.highlighted
                    ? "border-primary bg-card shadow-lg shadow-primary/[0.06] ring-1 ring-primary/15"
                    : "border-border bg-card hover:shadow-md hover:shadow-primary/[0.03]"
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3.5 py-0.5 text-[10px] font-bold text-primary-foreground">
                    Most Popular
                  </div>
                )}

                <h3 className="text-base font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {plan.tagline}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-foreground/90">{feat}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#cta"
                  className={`mt-7 block w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
                      : "bg-muted text-foreground hover:bg-border"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
