"use client";

import { motion } from "framer-motion";
import {
  ScrollText,
  BellRing,
  SlidersHorizontal,
  CheckCircle2,
  ShieldAlert,
  Send,
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

const controls = [
  {
    icon: ScrollText,
    title: "Full activity logging",
    desc: "Every process and action on iCoop is recorded in a complete activity log.",
  },
  {
    icon: BellRing,
    title: "Email & SMS alerts",
    desc: "Sensitive actions trigger instant notifications to management.",
  },
  {
    icon: SlidersHorizontal,
    title: "Inexhaustible controls",
    desc: "Configure restrictions and approvals to match your policy — endlessly.",
  },
];

const logEntries = [
  {
    icon: CheckCircle2,
    text: "Loan approved · ₦400,000",
    meta: "by T. Bello · 2m ago",
    tone: "ok",
  },
  {
    icon: ShieldAlert,
    text: "Withdrawal flagged · policy check",
    meta: "auto · 11m ago",
    tone: "warn",
  },
  {
    icon: Send,
    text: "Alert sent to Management (SMS)",
    meta: "auto · 12m ago",
    tone: "ok",
  },
];

export default function ControlsSecurity() {
  return (
    <section
      id="controls"
      className="relative border-t border-border py-20 sm:py-28 lg:py-32"
    >
      <SectionSpine index="06" />
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
                Controls &amp; Security
              </span>
            </div>

            <h2 className="section-heading mb-5">
              Every action,
              <br />
              <span className="text-primary">fully accountable.</span>
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mb-9">
              iCoop logs everything and notifies management the moment something
              sensitive happens — so your cooperative stays transparent and in
              control.
            </p>

            <div className="space-y-5">
              {controls.map((c, i) => (
                <motion.div
                  key={c.title}
                  className="flex items-start gap-4"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary-soft flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-primary-deep" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {c.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mt-0.5">
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: activity log — the single deep-green accent card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
          >
            <div
              className="rounded-2xl p-6 sm:p-7 shadow-2xl shadow-primary-deep/20"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--primary-deep), #0d4f33)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                    <ScrollText className="w-4.5 h-4.5 text-white" />
                  </div>
                  <span className="text-sm font-bold text-white">
                    Activity Log
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white/90">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  Live
                </span>
              </div>

              <div className="space-y-2.5">
                {logEntries.map((e, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/10 p-3.5"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.4, ease }}
                  >
                    <div
                      className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center ${
                        e.tone === "warn" ? "bg-accent/30" : "bg-white/15"
                      }`}
                    >
                      <e.icon
                        className={`w-4 h-4 ${
                          e.tone === "warn" ? "text-amber-300" : "text-white"
                        }`}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white truncate">
                        {e.text}
                      </p>
                      <p className="text-xs text-white/60">{e.meta}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* notification toast */}
              <motion.div
                className="mt-4 flex items-center gap-3 rounded-xl bg-white/15 p-3.5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.85, duration: 0.45, ease }}
              >
                <BellRing className="w-4 h-4 text-white shrink-0" />
                <p className="text-xs font-medium text-white">
                  Management notified via Email &amp; SMS
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
