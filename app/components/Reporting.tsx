"use client";

import { motion } from "framer-motion";
import {
  TrendingDown,
  UserX,
  Scale,
  LogOut,
  UserPlus,
  Landmark,
  FileBarChart,
  AlertTriangle,
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
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

const reports = [
  { icon: TrendingDown, title: "Non-Performing Loans", desc: "Spot loans falling behind early." },
  { icon: UserX, title: "Non-Contributing Members", desc: "Track members who stopped saving." },
  { icon: Scale, title: "Savings vs Loans", desc: "Balance exposure across the COOP." },
  { icon: LogOut, title: "Closures", desc: "Monitor member account closures." },
  { icon: UserPlus, title: "Joining", desc: "See new members as they join." },
  { icon: Landmark, title: "Bank Reconciliation", desc: "Match books against bank records." },
  { icon: FileBarChart, title: "SBU Remittance vs Upload", desc: "Reconcile monthly remittances." },
  { icon: AlertTriangle, title: "Negative / Free Savings", desc: "Flag negative or free savings." },
];

export default function Reporting() {
  return (
    <section id="reporting" className="relative border-t border-border py-20 sm:py-28 lg:py-32">
      <SectionSpine index="05" />
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
              Management Reporting
            </span>
          </div>
          <h2 className="section-heading mb-4">
            Reports that keep management in control
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Out-of-the-box reports give your secretariat and executives a clear,
            real-time picture of the cooperative&apos;s health.
          </p>
        </motion.div>

        {/* Reports grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {reports.map((r) => (
            <motion.div
              key={r.title}
              className="card-soft p-5 sm:p-6 group transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(11,31,23,0.2)]"
              variants={card}
            >
              <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                <r.icon className="w-5 h-5 text-primary-deep" strokeWidth={1.8} />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1 leading-snug">
                {r.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
