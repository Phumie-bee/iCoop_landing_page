"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for small cooperatives just getting started.",
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
    period: "/month",
    description: "For growing cooperatives needing advanced features.",
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
    description: "For large cooperatives with complex requirements.",
    features: [
      "Unlimited members",
      "Multi-branch support",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security & compliance",
      "On-premise deployment option",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-medium text-primary">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your cooperative. No hidden fees, no
            surprises.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
          staggerDelay={0.15}
        >
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                className={`relative p-8 rounded-2xl border h-full flex flex-col ${
                  plan.highlighted
                    ? "border-primary bg-card shadow-xl shadow-primary/10 ring-1 ring-primary/20"
                    : "border-border bg-card"
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground text-sm">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-primary shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#cta"
                  className={`block w-full text-center py-3 rounded-full font-medium text-sm transition-all ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40"
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
