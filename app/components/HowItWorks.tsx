"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "./AnimationWrapper";

const steps = [
  {
    title: "Add your members",
    description:
      "Import a spreadsheet or add people one by one. Each member gets their own secure portal within minutes.",
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
    title: "Manage the money",
    description:
      "Track loans, record deposits, and schedule reminders. The busywork handles itself so you don't have to.",
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
    title: "See the full picture",
    description:
      "One-click reports for your board, auditors, and members. Always know exactly where things stand.",
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

function ConnectorLine({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (index >= steps.length - 1) return null;

  return (
    <div ref={ref} className="hidden lg:flex items-center justify-center px-2">
      <motion.div
        className="relative flex items-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
      >
        {/* Dashed line */}
        <div className="w-12 border-t-2 border-dashed border-primary/20" />
        {/* Arrow head */}
        <svg
          className="h-3 w-3 -ml-0.5 text-primary/30"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M2 1l8 5-8 5V1z" />
        </svg>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 bg-surface/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary mb-4">
            How it works
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Up and running <span className="gradient-text">in three steps</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            No training sessions. No complicated setup. Just sign up and start
            managing.
          </p>
        </FadeIn>

        {/* Steps grid */}
        <div className="mt-14 grid items-start gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-0">
          {steps.map((step, i) => (
            <>
              <FadeIn
                key={step.title}
                delay={0.1 + i * 0.12}
                className="relative"
              >
                <motion.div
                  className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:shadow-md hover:shadow-primary/[0.03] lg:text-left"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.08] text-primary lg:mx-0">
                    {step.icon}
                  </div>
                  <span className="mb-1.5 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold tracking-wider text-primary uppercase">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              </FadeIn>
              {i < steps.length - 1 && (
                <ConnectorLine key={`line-${i}`} index={i} />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
