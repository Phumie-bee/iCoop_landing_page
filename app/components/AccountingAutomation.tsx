"use client";

import { motion } from "framer-motion";
import { Layers, BookOpenCheck, ArrowRight } from "lucide-react";
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

const chartOfAccounts = [
  "Per savings scheme",
  "Per COOP bank",
  "Per loan type",
  "Income & unearned per loan type",
];

const postings = [
  {
    title: "Payroll Savings Upload",
    entries: [
      { side: "DR", account: "Payroll" },
      { side: "CR", account: "Savings GL & SL" },
    ],
  },
  {
    title: "Loan Granting (Upfront)",
    entries: [
      { side: "DR", account: "Loan GL & SL" },
      { side: "CR", account: "Bank / Source" },
      { side: "CR", account: "Unearned Interest" },
    ],
  },
  {
    title: "Savings Withdrawal",
    entries: [
      { side: "DR", account: "Savings GL & SL" },
      { side: "CR", account: "Bank" },
    ],
  },
];

export default function AccountingAutomation() {
  return (
    <section id="accounting" className="relative border-t border-border py-20 sm:py-28 lg:py-32">
      <SectionSpine index="04" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary-deep">
                Accounting &amp; Automation
              </span>
            </div>

            <h2 className="section-heading mb-5">
              Double-entry accounting,
              <br />
              <span className="text-primary">done automatically.</span>
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mb-8">
              iCoop maintains both Subsidiary (SL) and General (GL) ledgers.
              Every member transaction posts to the right accounts on its own —
              driven by your chart of accounts.
            </p>

            {/* SL / GL definitions */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="card-soft p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary-soft flex items-center justify-center">
                    <Layers className="w-4.5 h-4.5 text-primary-deep" />
                  </div>
                  <span className="text-sm font-extrabold text-foreground">
                    SL = Operations
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Subsidiary ledgers track every individual member transaction.
                </p>
              </div>
              <div className="card-soft p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary-soft flex items-center justify-center">
                    <BookOpenCheck className="w-4.5 h-4.5 text-primary-deep" />
                  </div>
                  <span className="text-sm font-extrabold text-foreground">
                    GL = Accounts
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  General ledgers summarize the COOP into product & scheme
                  ledgers.
                </p>
              </div>
            </div>

            {/* Chart of accounts chips */}
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-muted mb-3">
              Chart of accounts covers
            </p>
            <div className="flex flex-wrap gap-2">
              {chartOfAccounts.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white border border-border px-3.5 py-1.5 text-sm font-semibold text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: auto-posting visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
          >
            <div className="card-soft p-6 sm:p-7">
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm font-bold text-foreground">
                  iCoop does this for you
                </p>
                <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-primary-soft text-primary-deep">
                  Auto-posted
                </span>
              </div>

              <div className="space-y-3.5">
                {postings.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-xl border border-border bg-surface p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowRight className="w-3.5 h-3.5 text-primary" />
                      <span className="text-sm font-bold text-foreground">
                        {p.title}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {p.entries.map((e, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-sm"
                        >
                          <span
                            className={`inline-flex w-8 justify-center text-[11px] font-extrabold px-1.5 py-0.5 rounded ${
                              e.side === "DR"
                                ? "bg-accent-soft text-amber-700"
                                : "bg-primary-soft text-primary-deep"
                            }`}
                          >
                            {e.side}
                          </span>
                          <span className="text-text-secondary font-medium">
                            {e.account}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
