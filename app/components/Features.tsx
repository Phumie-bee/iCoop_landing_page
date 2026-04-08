"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const features = [
  {
    title: "Member Management",
    description:
      "Onboard hundreds of members in minutes and give each one a personal dashboard with real-time account visibility.",
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
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    color: "blue",
    iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    stat: "1,247",
    statLabel: "active members",
  },
  {
    title: "Loan Tracking",
    description:
      "Track every loan in real time — from application to final repayment — with automated reminders so nothing slips through.",
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
    color: "emerald",
    iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    stat: "₱8.4M",
    statLabel: "disbursed",
  },
  {
    title: "Savings Management",
    description:
      "Visualize individual and pooled savings growth, automate contribution schedules, and keep every peso accounted for.",
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
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    color: "violet",
    iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    stat: "₱24.1M",
    statLabel: "total savings",
  },
  {
    title: "Financial Reports",
    description:
      "Generate board-ready reports in seconds — crystal-clear dashboards with exportable data so every stakeholder stays informed.",
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
    color: "amber",
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    stat: "30+",
    statLabel: "report templates",
  },
];

const colorMap: Record<string, string> = {
  blue: "group-hover:shadow-blue-500/[0.08]",
  emerald: "group-hover:shadow-emerald-500/[0.08]",
  violet: "group-hover:shadow-violet-500/[0.08]",
  amber: "group-hover:shadow-amber-500/[0.08]",
};

export default function Features() {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      {/* subtle top divider */}
      <div className="section-line mx-auto max-w-5xl" />

      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-semibold text-primary mb-5">
            Features
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <span className="gradient-text">run your cooperative</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Purpose-built tools that simplify operations, increase transparency,
            and help your cooperative grow — not just survive.
          </p>
        </FadeIn>

        <StaggerContainer
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:gap-6"
          staggerDelay={0.12}
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <motion.div
                className={`group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-shadow duration-300 hover:border-primary/20 ${colorMap[f.color]} hover:shadow-xl`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
              >
                {/* icon + mini stat */}
                <div className="flex items-start justify-between">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${f.iconBg}`}
                  >
                    {f.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground leading-none">
                      {f.stat}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {f.statLabel}
                    </p>
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                  {f.description}
                </p>

                <div className="mt-5 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
