"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const problems = [
  {
    pain: "Paper registers and spreadsheets",
    detail:
      "Dues tracked in notebooks. Loan records scattered across files. One typo and the books don't balance.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    pain: "Slow approvals and delays",
    detail:
      "Loan requests wait weeks because the right person hasn't seen them. Members get frustrated. Trust erodes.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    pain: "Members in the dark",
    detail:
      "People don't know their balances, can't check loan status, and stop showing up because nobody tells them anything.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary mb-3">
            Sound familiar?
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Most cooperatives still run on{" "}
            <span className="text-muted-foreground">
              paper, phone calls, and hope
            </span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            These are the problems we hear from cooperatives every single week.
          </p>
        </FadeIn>

        <StaggerContainer
          className="mt-12 grid gap-5 sm:grid-cols-3"
          staggerDelay={0.1}
        >
          {problems.map((p) => (
            <StaggerItem key={p.pain}>
              <motion.div
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary">
                  {p.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {p.pain}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.detail}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
