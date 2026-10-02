"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  FileText,
  Search,
  ThumbsUp,
  CheckCircle2,
  Banknote,
} from "lucide-react";
import SectionSpine from "./SectionSpine";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease },
  }),
};

const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const workflowSteps = [
  { icon: FileText, label: "Application" },
  { icon: Search, label: "Verification" },
  { icon: ThumbsUp, label: "Recommendation" },
  { icon: CheckCircle2, label: "Approval" },
  { icon: Banknote, label: "Payment" },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-border py-20 sm:py-28 lg:py-32">
      <SectionSpine index="03" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-12 sm:mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary-deep">
              Unique Features
            </span>
          </div>
          <h2 className="section-heading mb-4">
            Built for how cooperatives actually work
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Every iCoop feature exists to give your cooperative control,
            reach, and speed — without rigid foreign software.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4"
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Policy — hero card */}
          <motion.div
            className="card-soft p-6 sm:p-7 sm:col-span-2 lg:col-span-4 flex flex-col"
            variants={card}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Policy enforced on every form
                </h3>
                <p className="text-sm text-text-secondary">
                  Control and restriction, built in — not bolted on.
                </p>
              </div>
            </div>

            {/* faux policy check rows */}
            <div className="mt-auto grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-surface p-3.5">
                <p className="text-xs text-text-muted mb-1.5">Loan request</p>
                <p className="text-sm font-bold text-foreground mb-2">
                  ₦400,000
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-deep bg-primary-soft px-2 py-1 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Within savings limit
                </span>
              </div>
              <div className="rounded-xl border border-border bg-surface p-3.5">
                <p className="text-xs text-text-muted mb-1.5">Loan request</p>
                <p className="text-sm font-bold text-foreground mb-2">
                  ₦1,200,000
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-accent-soft px-2 py-1 rounded-md">
                  <ShieldCheck className="w-3.5 h-3.5" /> Blocked by policy
                </span>
              </div>
            </div>
          </motion.div>

          {/* Web-based */}
          <motion.div className="card-soft p-6 sm:p-7 lg:col-span-2" variants={card}>
            <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center mb-4">
              <Globe className="w-5 h-5 text-primary-deep" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1.5">
              Web-based access
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Reach your cooperators anywhere, anytime. Nothing to install —
              it runs in the browser.
            </p>
          </motion.div>

          {/* Self-configurable */}
          <motion.div className="card-soft p-6 sm:p-7 lg:col-span-2" variants={card}>
            <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center mb-4">
              <SlidersHorizontal className="w-5 h-5 text-primary-deep" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1.5">
              Fully parameter-driven
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Set up and configure schemes, products, and rules yourself — no
              developer required.
            </p>
          </motion.div>

          {/* Workflow — wide card */}
          <motion.div
            className="card-soft p-6 sm:p-7 sm:col-span-2 lg:col-span-4 flex flex-col"
            variants={card}
          >
            <h3 className="text-lg font-bold text-foreground mb-1">
              Embedded workflow engine
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Requests move through verification, recommendation, and approval —
              automatically.
            </p>

            <div className="mt-auto flex items-center justify-between gap-1">
              {workflowSteps.map((step, i) => (
                <div key={step.label} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary-deep" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-foreground leading-tight">
                      {step.label}
                    </span>
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <div className="flex-1 h-px bg-primary/30 mx-1 mb-5" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* UX — full-width closing card */}
          <motion.div
            className="card-soft p-6 sm:p-7 sm:col-span-2 lg:col-span-6 flex flex-col sm:flex-row sm:items-center gap-5"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--primary), var(--primary-deep))",
              borderColor: "transparent",
            }}
            variants={card}
          >
            <div className="w-12 h-12 shrink-0 rounded-xl bg-white/15 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Effortless experience, end to end
              </h3>
              <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                Clean, intuitive screens that members and staff actually enjoy
                using — with minimal training and a great user experience on
                every device.
              </p>
            </div>
            <a
              href="/book-demo"
              className="shrink-0 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-primary-deep transition-transform hover:scale-105"
            >
              See it live
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
