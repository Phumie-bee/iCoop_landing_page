"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const features = [
  {
    title: "Member Management",
    description:
      "Every member in one place — profiles, balances, and contribution history. No more digging through folders or calling around.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    stat: "1,247",
    statLabel: "members managed",
    preview: (
      <div className="mt-4 space-y-1.5">
        {[
          "Chioma Okafor — ₦1.2M savings",
          "Emeka Nwosu — Loan active",
          "Hauwa Ibrahim — ₦820K savings",
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-2 rounded-md bg-surface/60 px-2.5 py-1.5 text-[10px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            {t}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Loan Tracking",
    description:
      "Follow every loan from application to final payment. Automated reminders keep borrowers on track and your records honest.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M12 15h4" />
      </svg>
    ),
    stat: "₦1.6B",
    statLabel: "tracked this year",
    preview: (
      <div className="mt-4 flex items-center gap-3">
        <div className="flex-1 rounded-md bg-surface/60 p-2">
          <div className="h-1.5 w-full rounded-full bg-muted">
            <div className="h-1.5 w-[72%] rounded-full bg-primary/60" />
          </div>
          <p className="mt-1 text-[9px] text-muted-foreground">72% repaid</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold text-foreground">₦28.8M</p>
          <p className="text-[9px] text-muted-foreground">remaining</p>
        </div>
      </div>
    ),
  },
  {
    title: "Savings & Deposits",
    description:
      "Watch individual and pooled savings grow in real time. Automate contribution schedules so nothing falls through the cracks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    stat: "₦4.8B",
    statLabel: "total savings",
    preview: (
      <div className="mt-4 flex items-end gap-[3px] h-10">
        {[30, 45, 38, 55, 48, 62, 58, 75, 68, 84, 78, 90].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-primary/50 to-primary/20"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Reports & Insights",
    description:
      "Generate board-ready reports in a few clicks. Clear dashboards your treasurer and auditors will actually understand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C3 20.24 3 19.96 3 19.4V3" />
        <path d="M7 14l4-4 4 4 6-6" />
        <path d="M17 8h4v4" />
      </svg>
    ),
    stat: "30+",
    statLabel: "report types",
    preview: (
      <div className="mt-4 grid grid-cols-2 gap-1.5">
        {["Balance Sheet", "Cash Flow", "Loan Aging", "Member Equity"].map((r) => (
          <div key={r} className="rounded-md bg-surface/60 px-2 py-1.5 text-[9px] text-muted-foreground text-center">
            {r}
          </div>
        ))}
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary mb-4">
            The solution
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tools designed around{" "}
            <span className="gradient-text">how cooperatives actually work</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Not another generic finance app. Every feature was built from real
            conversations with cooperative managers, treasurers, and board members.
          </p>
        </FadeIn>

        <StaggerContainer
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6"
          staggerDelay={0.1}
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <motion.div
                className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.03]"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/[0.08] text-primary">
                    {f.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold text-foreground leading-none">{f.stat}</p>
                    <p className="text-[9px] text-muted-foreground">{f.statLabel}</p>
                  </div>
                </div>

                <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground flex-1">
                  {f.description}
                </p>

                {f.preview}

                <div className="mt-4 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                  <svg className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
