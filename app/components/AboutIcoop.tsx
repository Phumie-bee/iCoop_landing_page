"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  MonitorSmartphone,
  Network,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const phases = [
  {
    title: "For Cooperators",
    description: "Easy Access to Savings, Loans & Requests",
    icon: PiggyBank,
    image: "/forCooperatorss.png",
  },
  {
    title: "For Secretariat Staff",
    description: "Full Administrative Control & Oversight",
    icon: ShieldCheck,
    image: "/forSecretariatStaff.png",
  },
];

const highlights = [
  {
    icon: Globe,
    title: "Web-Based Access",
    description: "Access Anywhere, Anytime",
  },
  {
    icon: MonitorSmartphone,
    title: "No Installations",
    description: "Fully Browser-Based",
  },
  {
    icon: Network,
    title: "Interoperable & Scalable",
    description: "Seamless Integration",
  },
];

const cardVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.5, ease },
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
    transition: { duration: 0.35, ease },
  }),
};

export default function AboutIcoop() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 1]);

  // Auto-flip every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(([prev]) => [prev === 0 ? 1 : 0, 1]);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const phase = phases[activeIndex];

  return (
    <section
      id="about"
      className="min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14 lg:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <h2 className="section-heading mb-4 sm:mb-5">What is iCoop?</h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            A cooperative management system built to handle thrift, savings, and
            loan operations efficiently.
          </p>
        </motion.div>

        {/* Content: Flipping Card (left) + Key Highlights (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* ───── Flipping Phase Card ───── */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
          >
            {/* Tab selectors */}
            <div className="flex gap-2 mb-5">
              {phases.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setActiveIndex([i, i > activeIndex ? 1 : -1])}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    activeIndex === i
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-surface text-text-secondary hover:bg-surface/80"
                  }`}
                >
                  <p.icon className="w-4 h-4" />
                  {p.title}
                </button>
              ))}
            </div>

            {/* Card container with perspective */}
            <div
              className="relative rounded-2xl border border-border bg-white overflow-hidden"
              style={{ perspective: "1000px", minHeight: "370px" }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  className="p-6 sm:p-8"
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={direction}
                  style={{ transformOrigin: "center center" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <phase.icon className="w-5 h-5 text-primary" />
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

                  {/* Image */}
                  <div className="flex justify-center">
                    <Image
                      src={phase.image}
                      alt={phase.title}
                      width={400}
                      height={224}
                      className="w-full max-w-sm h-48 sm:h-56 object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border">
                <motion.div
                  className="h-full bg-primary"
                  key={activeIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>

          {/* ───── Key Highlights (right side) ───── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={2}
          >
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">
              Key Highlights
            </h3>

            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="group flex items-start gap-4 rounded-xl bg-surface/60 p-5 transition-colors hover:bg-surface"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 3}
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-105">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
