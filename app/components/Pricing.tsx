"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

type Currency = "NGN" | "USD";

const EXCHANGE_RATE = 1600; // approximate NGN per USD

interface Plan {
  name: string;
  audience: string;
  priceNGN: number | null;
  period: string;
  tagline: string;
  benefit: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    audience: "For small cooperatives",
    priceNGN: 0,
    period: "",
    tagline: "Getting started shouldn\u2019t cost anything.",
    benefit: "Everything you need to digitize a small cooperative in under 10 minutes.",
    features: [
      "Up to 50 members",
      "Basic loan tracking",
      "Savings management",
      "Email support",
      "Standard reports",
    ],
    cta: "Get started free",
    highlighted: false,
  },
  {
    name: "Growth",
    audience: "For scaling organizations",
    priceNGN: 45000,
    period: "/mo",
    tagline: "When spreadsheets stop making sense.",
    benefit: "Full visibility into finances, automated reminders, and a self-service member portal.",
    features: [
      "Up to 500 members",
      "Advanced loan management",
      "Automated payment reminders",
      "Priority support",
      "Custom reports & analytics",
      "Member self-service portal",
      "API access",
    ],
    cta: "Start 14-day free trial",
    highlighted: true,
    badge: "Most cooperatives pick this",
  },
  {
    name: "Enterprise",
    audience: "For large institutions",
    priceNGN: null,
    period: "",
    tagline: "Multi-branch, compliance-ready, fully yours.",
    benefit: "Dedicated support, custom integrations, and deployment options that fit your scale.",
    features: [
      "Unlimited members",
      "Multi-branch support",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security & compliance",
      "On-premise deployment option",
      "SLA guarantee",
    ],
    cta: "Talk to our team",
    highlighted: false,
  },
];

function formatPrice(priceNGN: number | null, currency: Currency): string {
  if (priceNGN === null) return "Custom";
  if (priceNGN === 0) return "Free";
  if (currency === "NGN") {
    return `₦${priceNGN.toLocaleString()}`;
  }
  const usd = Math.round(priceNGN / EXCHANGE_RATE);
  return `$${usd}`;
}

function CurrencyToggle({
  currency,
  onChange,
}: {
  currency: Currency;
  onChange: (c: Currency) => void;
}) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-1.5 py-1.5">
      <button
        onClick={() => onChange("NGN")}
        className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
          currency === "NGN"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ₦ NGN
      </button>
      <button
        onClick={() => onChange("USD")}
        className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
          currency === "USD"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        $ USD
      </button>
    </div>
  );
}

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("NGN");

  useEffect(() => {
    const stored = localStorage.getItem("icoop-currency");
    if (stored === "USD" || stored === "NGN") {
      setCurrency(stored);
    }
  }, []);

  const handleCurrencyChange = useCallback((c: Currency) => {
    setCurrency(c);
    localStorage.setItem("icoop-currency", c);
  }, []);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="section-line mx-auto max-w-5xl" />

      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary mb-4">
            Pricing
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Honest pricing,{" "}
            <span className="gradient-text">no surprises</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Pick the plan that fits your size. No hidden fees, no contracts.
            Upgrade or downgrade whenever you need to.
          </p>
          <div className="mt-6 flex justify-center">
            <CurrencyToggle currency={currency} onChange={handleCurrencyChange} />
          </div>
        </FadeIn>

        <StaggerContainer
          className="mt-14 grid items-start gap-5 md:grid-cols-3 lg:gap-6"
          staggerDelay={0.1}
        >
          {plans.map((plan, idx) => (
            <StaggerItem key={plan.name}>
              <motion.div
                className={`relative flex h-full flex-col rounded-xl border p-7 transition-all ${
                  plan.highlighted
                    ? "border-primary/40 bg-card shadow-lg shadow-primary/[0.05] ring-1 ring-primary/10"
                    : idx === 0
                      ? "border-border bg-card hover:shadow-md hover:shadow-black/[0.02]"
                      : "border-border bg-surface/30 hover:shadow-md hover:shadow-black/[0.02]"
                }`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-6 rounded-full bg-accent px-3.5 py-0.5 text-[10px] font-bold text-white">
                    {plan.badge}
                  </div>
                )}

                <p className="text-[11px] font-medium text-primary uppercase tracking-wider">
                  {plan.audience}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>

                <div className="mt-3 flex items-baseline gap-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${plan.name}-${currency}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="text-3xl font-extrabold text-foreground"
                    >
                      {formatPrice(plan.priceNGN, currency)}
                    </motion.span>
                  </AnimatePresence>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  )}
                </div>

                <p className="mt-2 text-sm text-muted-foreground italic">
                  {plan.tagline}
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  {plan.benefit}
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
                      ? "bg-primary text-primary-foreground shadow-sm hover:shadow-md"
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

        {/* Trust signals */}
        <FadeIn delay={0.3} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No setup fees
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Trusted by growing cooperatives
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
