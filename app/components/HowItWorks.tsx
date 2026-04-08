"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "./AnimationWrapper";

const steps = [
  {
    title: "Add Members",
    description:
      "Import your roster or invite members individually. Everyone gets a secure personal portal in minutes.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    title: "Manage Finances",
    description:
      "Process loans, track savings, and record every transaction. Automated workflows handle the busywork.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M12 15h4" />
      </svg>
    ),
  },
  {
    title: "Generate Reports",
    description:
      "One-click reports for your board, auditors, and members. Export to PDF or CSV anytime.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C3 20.24 3 19.96 3 19.4V3" />
        <path d="M7 14l4-4 4 4 6-6" />
        <path d="M17 8h4v4" />
      </svg>
    ),
  },
];

function ConnectorArrow({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (index >= steps.length - 1) return null;

  return (
    <div ref={ref} className="hidden lg:flex items-center justify-center">
      <motion.div
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
      >
        <svg className="h-4 w-4 text-primary" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 sm:py-36 bg-surface/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-semibold text-primary mb-5">
            How It Works
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Three steps to{" "}
            <span className="gradient-text">operational clarity</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From sign-up to full visibility, iCoop gets out of the way so you
            can focus on your members.
          </p>
        </FadeIn>

        {/* Steps grid: step — arrow — step — arrow — step */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-0">
          {steps.map((step, i) => (
            <>
              <FadeIn
                key={step.title}
                delay={0.1 + i * 0.15}
                className="relative"
              >
                <motion.div
                  className="group rounded-2xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg hover:shadow-primary/[0.04] lg:text-left"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Step number */}
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary lg:mx-0">
                    {step.icon}
                  </div>
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-primary">
                    STEP {i + 1}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              </FadeIn>
              {i < steps.length - 1 && (
                <ConnectorArrow key={`arrow-${i}`} index={i} />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
