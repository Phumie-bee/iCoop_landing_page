"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Settings2,
  Smile,
  ArrowRight,
  PiggyBank,
  ScanSearch,
  ThumbsUp,
  ClipboardCheck,
  Banknote,
  BookOpen,
  Zap,
  BarChart3,
  TrendingUp,
  Users,
  Landmark,
  PieChart,
} from "lucide-react";

/* ─── Easing ─── */
const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease },
  }),
};

/* ─── Data ─── */
const features = [
  {
    icon: Globe,
    title: "Web-Based Access",
    tag: "Core",
    color: "bg-primary/8 text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Policy-Driven System",
    tag: "Core",
    color: "bg-primary/8 text-primary",
  },
  {
    icon: Settings2,
    title: "Configurable Workflow",
    tag: "Core",
    color: "bg-primary/8 text-primary",
  },
  {
    icon: Smile,
    title: "User-Friendly Experience",
    tag: "Core",
    color: "bg-primary/8 text-primary",
  },
  {
    icon: BookOpen,
    title: "SL & GL Accounting",
    tag: "Accounting",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Zap,
    title: "Automated Transactions",
    tag: "Accounting",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: BarChart3,
    title: "Real-Time Tracking",
    tag: "Accounting",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: TrendingUp,
    title: "Loan Performance",
    tag: "Reports",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Users,
    title: "Member Activity",
    tag: "Reports",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Landmark,
    title: "Bank Reconciliation",
    tag: "Reports",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: PieChart,
    title: "Savings vs Loans",
    tag: "Reports",
    color: "bg-violet-50 text-violet-600",
  },
];

const workflowSteps = [
  { icon: PiggyBank, label: "Savings & Loans" },
  { icon: ScanSearch, label: "Verification" },
  { icon: ThumbsUp, label: "Recommendation" },
  { icon: ClipboardCheck, label: "Approval" },
  { icon: Banknote, label: "Payment" },
];

const tagColors: Record<string, string> = {
  Core: "bg-primary/10 text-primary",
  Accounting: "bg-amber-100/70 text-amber-700",
  Reports: "bg-violet-100/70 text-violet-700",
};

export default function Features() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="features"
      className="relative bg-background overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      {/* py-20 sm:py-28 lg:py-32 */}
      {/* Subtle bg blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute top-40 -left-40 w-105 h-105 rounded-full bg-primary/3 blur-3xl"
          animate={prefersReduced ? {} : { x: [0, 25, 0], y: [0, 18, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* ───────── HEADER ───────── */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <h2 className="section-heading mb-3">Platform Capabilities</h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Everything you need to run your cooperative efficiently
          </p>
        </motion.div>

        {/* ───────── FEATURE GRID ───────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10 sm:mb-12">
          {features.map((feature, i) => {
            const colorParts = feature.color.split(" ");
            return (
              <motion.div
                key={feature.title}
                className="group relative flex flex-col items-center text-center rounded-xl bg-white p-4 sm:p-5 will-change-transform cursor-default"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                whileHover={{
                  y: -3,
                  boxShadow: "0 8px 24px -6px rgba(0,0,0,0.08)",
                  transition: { duration: 0.25, ease: "easeOut" as const },
                }}
              >
                {/* Category tag */}
                <span
                  className={`absolute top-2 right-2 text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${tagColors[feature.tag]}`}
                >
                  {feature.tag}
                </span>

                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${colorParts[0]} flex items-center justify-center mb-2.5 transition-transform group-hover:scale-105`}
                >
                  <feature.icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${colorParts[1]}`}
                    strokeWidth={1.6}
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-foreground leading-tight">
                  {feature.title}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* ───────── WORKFLOW PIPELINE ───────── */}
        <motion.div
          className="rounded-xl bg-white p-4 sm:p-5"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={2}
        >
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider text-center mb-4">
            Loan Processing Workflow
          </p>
          <div className="flex items-center justify-center overflow-x-auto pb-1 -mx-2 px-2">
            <div className="flex items-center min-w-max">
              {workflowSteps.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <motion.div
                    className="group flex flex-col items-center text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i + 3}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-1.5 transition-shadow group-hover:shadow-md">
                      <step.icon
                        className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-foreground whitespace-nowrap">
                      {step.label}
                    </span>
                  </motion.div>
                  {i < workflowSteps.length - 1 && (
                    <div className="flex items-center mx-2 sm:mx-4 text-teal-300 -mt-4">
                      <div className="w-4 sm:w-6 h-px bg-teal-200" />
                      <ArrowRight className="w-3.5 h-3.5 -ml-0.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
