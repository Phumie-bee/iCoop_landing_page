"use client";

import { motion } from "framer-motion";
import {
  Users,
  PiggyBank,
  HandCoins,
  BarChart3,
  ShieldCheck,
  Activity,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const features = [
  {
    title: "Member Management",
    description:
      "Profiles, balances, and contribution history — all in one place. No more digging through folders.",
    icon: Users,
  },
  {
    title: "Savings Tracking",
    description:
      "Watch individual and pooled savings grow in real time. Automate schedules so nothing slips.",
    icon: PiggyBank,
  },
  {
    title: "Loan Management",
    description:
      "Follow every loan from application to final payment. Automated reminders keep things on track.",
    icon: HandCoins,
  },
  {
    title: "Financial Reports",
    description:
      "Generate board-ready reports in clicks. Clear dashboards your treasurer will actually understand.",
    icon: BarChart3,
  },
  {
    title: "Secure Data",
    description:
      "Bank-grade encryption and role-based access keep your cooperative's sensitive data protected.",
    icon: ShieldCheck,
  },
  {
    title: "Real-time Insights",
    description:
      "Live metrics on savings, loans, and member activity — know exactly where things stand, anytime.",
    icon: Activity,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/6 px-3.5 py-1.5 text-xs font-medium text-primary mb-5">
            Features
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything your cooperative{" "}
            <span className="gradient-text">needs to thrive</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Purpose-built tools designed from real conversations with
            cooperative managers, treasurers, and board members.
          </p>
        </FadeIn>

        <StaggerContainer
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <motion.div
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary/15">
                  <f.icon className="h-5.5 w-5.5" strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                  {f.description}
                </p>

                <div className="mt-5 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                  <svg
                    className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5"
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
