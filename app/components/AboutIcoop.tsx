"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  MonitorSmartphone,
  Network,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";
import SectionSpine from "./SectionSpine";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease },
  }),
};

const phases = [
  {
    title: "For Cooperators",
    description: "Self-service access to savings, loans & requests",
    icon: PiggyBank,
    image: "/forCooperatorss.png",
  },
  {
    title: "For Secretariat Staff",
    description: "Full administrative control & oversight",
    icon: ShieldCheck,
    image: "/forSecretariatStaff.png",
  },
];

const highlights = [
  {
    icon: Globe,
    title: "Web-based access",
    description: "Reach your cooperators anywhere, anytime — no installs.",
  },
  {
    icon: MonitorSmartphone,
    title: "Two-phased solution",
    description: "Distinct experiences for members and secretariat staff.",
  },
  {
    icon: Network,
    title: "Interoperable & scalable",
    description: "Integrates with your existing systems and grows with you.",
  },
];

export default function AboutIcoop() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(([prev]) => [prev === 0 ? 1 : 0, 1]);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const phase = phases[activeIndex];

  return (
    <section id="about" className="relative border-t border-border py-20 sm:py-28 lg:py-32">
      <SectionSpine index="01" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ─────────── Left: editorial copy ─────────── */}
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
                About iCoop
              </span>
            </div>

            <h2 className="section-heading mb-5">
              One platform.
              <br />
              <span className="text-primary">Two experiences.</span>
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mb-9">
              iCoop is a web-based{" "}
              <span className="font-semibold text-foreground">
                thrift &amp; loans management
              </span>{" "}
              platform. Cooperators get self-service access to savings, loans,
              and requests — while secretariat staff get full administrative
              control. One system, fully interoperable.
            </p>

            {/* attribute list */}
            <div className="space-y-5">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary-soft flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-deep" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─────────── Right: interactive two-phase card ─────────── */}
          <motion.div
            className="relative"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
          >
            {/* decorative offset panel */}
            <div className="absolute -inset-4 sm:-right-6 sm:-top-6 sm:-bottom-6 sm:left-6 rounded-3xl bg-primary-tint z-0" />

            <div className="relative z-10">
              {/* tab selectors */}
              <div className="flex gap-2 mb-4">
                {phases.map((p, i) => (
                  <button
                    key={p.title}
                    onClick={() =>
                      setActiveIndex([i, i > activeIndex ? 1 : -1])
                    }
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                      activeIndex === i
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "bg-white text-text-secondary border border-border hover:border-primary/40"
                    }`}
                  >
                    <p.icon className="w-4 h-4" />
                    {p.title}
                  </button>
                ))}
              </div>

              {/* card */}
              <div
                className="relative card-soft overflow-hidden"
                style={{ minHeight: "400px" }}
              >
                <motion.div
                  key={activeIndex}
                  className="p-6 sm:p-8"
                  initial={{ opacity: 0, x: direction > 0 ? 28 : -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                      <phase.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        {phase.title}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center rounded-2xl bg-surface p-4">
                    <Image
                      src={phase.image}
                      alt={phase.title}
                      width={420}
                      height={240}
                      className="w-full max-w-sm h-52 sm:h-60 object-contain"
                      priority
                    />
                  </div>
                </motion.div>

                {/* progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
                  <motion.div
                    className="h-full bg-primary"
                    key={activeIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4.5, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
