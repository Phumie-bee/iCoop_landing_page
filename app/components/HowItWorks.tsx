"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "./AnimationWrapper";

const steps = [
  {
    step: "01",
    title: "Sign Up & Configure",
    description:
      "Create your cooperative account in minutes. Set up member roles, savings plans, and loan parameters tailored to your organization.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Onboard Members",
    description:
      "Invite members via email or bulk import. Each member gets a personalized portal to view their accounts, loans, and contributions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Manage & Track",
    description:
      "Process loans, monitor savings, and record transactions with ease. Automated workflows keep everything organized and compliant.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Analyze & Grow",
    description:
      "Leverage powerful analytics to understand trends, predict cash flow, and make data-driven decisions for cooperative growth.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

function ConnectorLine({ index }: { index: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (index >= steps.length - 1) return null;

  return (
    <svg
      ref={ref}
      className="hidden lg:block absolute top-12 -right-[calc(50%-24px)] w-[calc(100%-48px)] h-[2px] z-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.line
        x1="0"
        y1="1"
        x2="100%"
        y2="1"
        className="stroke-primary/30"
        strokeWidth="2"
        strokeDasharray="6 4"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{
          duration: 1,
          delay: 0.5 + index * 0.3,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-medium text-primary">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Get started in{" "}
            <span className="gradient-text">four simple steps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From setup to full operation, iCoop makes it seamless to digitize
            your cooperative.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <FadeIn key={step.step} delay={0.15 * index} className="relative">
              <ConnectorLine index={index} />
              <motion.div
                className="relative z-10 text-center lg:text-left"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Step number indicator */}
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
