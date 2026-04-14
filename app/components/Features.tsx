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
    transition: { duration: 0.6, delay: i * 0.1, ease },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease },
  }),
};

/* ─── Data ─── */
const coreFeatures = [
  { icon: Globe, title: "Web-Based Access" },
  { icon: ShieldCheck, title: "Policy-Driven System" },
  { icon: Settings2, title: "Configurable Workflow" },
  { icon: Smile, title: "User-Friendly Experience" },
];

const workflowSteps = [
  { icon: PiggyBank, label: "Savings & Loans" },
  { icon: ScanSearch, label: "Verification" },
  { icon: ThumbsUp, label: "Recommendation" },
  { icon: ClipboardCheck, label: "Approval" },
  { icon: Banknote, label: "Payment" },
];

const accountingFeatures = [
  { icon: BookOpen, title: "SL & GL Accounting" },
  { icon: Zap, title: "Automated Transactions" },
  { icon: BarChart3, title: "Real-Time Financial Tracking" },
];

const reportingItems = [
  { icon: TrendingUp, title: "Loan Performance" },
  { icon: Users, title: "Member Activity" },
  { icon: Landmark, title: "Bank Reconciliation" },
  { icon: PieChart, title: "Savings vs Loans" },
];

export default function Features() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="features" className="relative bg-background overflow-hidden">
      {/* Subtle bg blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute top-40 -left-40 w-105 h-105 rounded-full bg-primary/3 blur-3xl"
          animate={prefersReduced ? {} : { x: [0, 25, 0], y: [0, 18, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-60 -right-32 w-96 h-96 rounded-full bg-slate-200/40 blur-3xl"
          animate={prefersReduced ? {} : { x: [0, -20, 0], y: [0, -14, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* ───────── SECTION HEADER ───────── */}
        <div className="pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-18">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4">
              Features & Capabilities
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4 sm:mb-5" />
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Everything you need to run your cooperative efficiently
            </p>
          </motion.div>
        </div>

        {/* ───────── CORE FEATURES ───────── */}
        <motion.h3
          className="text-center text-lg sm:text-xl font-bold text-foreground mb-6 sm:mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
        >
          Core Features
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {coreFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group flex flex-col items-center text-center rounded-2xl bg-white p-5 sm:p-6 will-change-transform"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 30px -8px rgba(0,0,0,0.08)",
                transition: { duration: 0.3, ease: "easeOut" as const },
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-3 transition-colors group-hover:bg-primary/14">
                <feature.icon
                  className="w-7 h-7 text-primary"
                  strokeWidth={1.6}
                />
              </div>
              <span className="text-sm font-semibold text-foreground">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ───────── WORKFLOW ───────── */}
        <motion.h3
          className="text-center text-lg sm:text-xl font-bold text-foreground mb-6 sm:mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
        >
          Workflow
        </motion.h3>

        <motion.div
          className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 mb-16 sm:mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={1}
        >
          <div className="flex items-center min-w-max mx-auto w-fit rounded-2xl bg-linear-to-r from-teal-50/80 via-emerald-50/60 to-teal-50/80 px-6 sm:px-8 py-6 sm:py-8">
            {workflowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <motion.div
                  className="group flex flex-col items-center text-center will-change-transform"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ y: -3, transition: { duration: 0.25 } }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center mb-2.5 shadow-sm transition-shadow group-hover:shadow-md">
                    <step.icon
                      className="w-7 h-7 sm:w-8 sm:h-8 text-teal-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
                    {step.label}
                  </span>
                </motion.div>
                {i < workflowSteps.length - 1 && (
                  <motion.div
                    className="flex items-center mx-3 sm:mx-5 text-teal-400 -mt-5"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i + 0.5}
                  >
                    <div className="w-5 sm:w-8 h-px bg-teal-300" />
                    <ArrowRight className="w-4 h-4 -ml-0.5" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ───────── ACCOUNTING & AUTOMATION ───────── */}
        <motion.h3
          className="text-center text-lg sm:text-xl font-bold text-foreground mb-6 sm:mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
        >
          Accounting & Automation
        </motion.h3>

        <motion.div
          className="rounded-2xl bg-linear-to-r from-slate-50 via-gray-50 to-slate-50 px-6 sm:px-8 py-6 sm:py-8 mb-16 sm:mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={1}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {accountingFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="group flex flex-col items-center text-center will-change-transform"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center mb-2.5 shadow-sm transition-shadow group-hover:shadow-md">
                  <feature.icon
                    className="w-7 h-7 sm:w-8 sm:h-8 text-teal-600"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-foreground">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ───────── REPORTING ───────── */}
        <motion.h3
          className="text-center text-lg sm:text-xl font-bold text-foreground mb-6 sm:mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
        >
          Reporting
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pb-20 sm:pb-28 lg:pb-32">
          {reportingItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="group flex flex-col items-center text-center will-change-transform"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/8 flex items-center justify-center mb-2.5 transition-colors group-hover:bg-primary/14">
                <item.icon
                  className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-foreground">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
