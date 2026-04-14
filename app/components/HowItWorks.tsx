"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Wallet, TrendingUp } from "lucide-react";
import { FadeIn } from "./AnimationWrapper";

const steps = [
  {
    title: "Create your cooperative",
    description:
      "Sign up and set up your cooperative in minutes. Import members from a spreadsheet or add them one by one.",
    icon: UserPlus,
  },
  {
    title: "Add members & contributions",
    description:
      "Each member gets a secure portal. Track dues, record deposits, and schedule automated reminders.",
    icon: Wallet,
  },
  {
    title: "Track savings & manage loans",
    description:
      "One-click reports for your board. Know exactly where things stand with real-time dashboards.",
    icon: TrendingUp,
  },
];

function StepConnector({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  if (index >= steps.length - 1) return null;

  return (
    <>
      {/* Desktop connector */}
      <div ref={ref} className="hidden lg:flex items-center justify-center">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
          style={{ originX: 0 }}
        >
          <div className="w-16 h-px bg-linear-to-r from-primary/40 to-primary/10" />
          <div className="h-2 w-2 rounded-full bg-primary/30" />
        </motion.div>
      </div>

      {/* Mobile connector */}
      <div className="flex lg:hidden items-center justify-center py-2">
        <motion.div
          className="h-8 w-px bg-linear-to-b from-primary/40 to-primary/10"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={inView ? { opacity: 1, scaleY: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
          style={{ originY: 0 }}
        />
      </div>
    </>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/6 px-3.5 py-1.5 text-xs font-medium text-primary mb-5">
            How it works
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Up and running <span className="gradient-text">in three steps</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            No training sessions. No complicated onboarding. Sign up and start
            managing your cooperative today.
          </p>
        </FadeIn>

        <div className="mt-16 grid items-start gap-0 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {steps.map((step, i) => (
            <div key={step.title} className="contents">
              <FadeIn delay={0.1 + i * 0.15}>
                <motion.div
                  className="group rounded-2xl border border-border bg-card p-7 text-center transition-all hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 lg:text-left"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary lg:mx-0">
                    <step.icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-primary uppercase">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              </FadeIn>
              {i < steps.length - 1 && (
                <StepConnector key={`conn-${i}`} index={i} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
