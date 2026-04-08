"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const features = [
  {
    title: "Member Management",
    description:
      "Effortlessly onboard, organize, and manage all cooperative members with detailed profiles and role-based access.",
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
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Loan Tracking",
    description:
      "Track loan applications, disbursements, repayment schedules, and outstanding balances with automated reminders.",
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
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Savings Management",
    description:
      "Monitor individual and group savings accounts, automate contributions tracking, and visualize growth trends.",
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
        <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2" />
        <path d="M2 9.1C1.1 9.3 1 10.1 1 12c0 2 .5 3.3 1.5 4.5" />
        <circle cx="16.5" cy="9.5" r=".5" fill="currentColor" />
      </svg>
    ),
    gradient: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    title: "Financial Reports & Analytics",
    description:
      "Generate comprehensive reports and gain deep insights with real-time dashboards, charts, and exportable data.",
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
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-medium text-primary">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Everything you need to{" "}
            <span className="gradient-text">run your cooperative</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools designed specifically for cooperative organizations.
            Simplify operations, increase transparency, and drive growth.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          staggerDelay={0.15}
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 h-full"
                whileHover={{ y: -4 }}
              >
                {/* Hover gradient bg */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.iconBg} mb-5`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-foreground transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-5 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg
                      className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
