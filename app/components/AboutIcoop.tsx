"use client";

import { motion } from "framer-motion";
import {
  Globe,
  MonitorSmartphone,
  Network,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";

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
    title: "No Installations Required",
    description: "Fully Browser-Based Platform",
  },
  {
    icon: Network,
    title: "Interoperable & Scalable",
    description: "Designed for Seamless Integration",
  },
];

export default function AboutIcoop() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14 sm:mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 ">
            What{" "}
            <span className="relative inline-block">
              i
              <span className="absolute left-1/2 -translate-x-1/2 -top-[0.09em] w-[0.32em] h-[0.32em] bg-primary rounded-full" />
            </span>
            s{" "}
            <span className="">
              <span className="relative inline-block">
                i
                <span className="absolute left-1/2 -translate-x-1/2 -top-[0.09em] w-[0.32em] h-[0.32em] bg-primary rounded-full" />
              </span>
              Coop?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            iCoop is a browser-based cooperative management system built to
            handle thrift, savings, and loan operations efficiently.
          </p>
        </motion.div>

        {/* Two-Phase Solution */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
        >
          <h3 className="text-lg sm:text-xl font-bold text-foreground border-gray-100/90! border-t-2  border-b-2  py-3">
            A Two-Phase Solution
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              className="relative rounded-2xl border-2 border-primary/20 bg-white/60 backdrop-blur-sm p-6 sm:p-8 text-center overflow-hidden group hover:border-primary/40 transition-colors"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={i + 2}
              whileHover={{ y: -4 }}
            >
              {/* Dashed top border accent */}
              <div className="absolute top-0 left-6 right-6 h-px border-t-2 border-dashed border-primary/30" />

              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6 flex items-center justify-center gap-2">
                <phase.icon className="w-5 h-5 text-primary" />
                {phase.title}
              </h4>

              {/* Image */}
              <div className="mb-4 sm:mb-6 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={phase.image}
                  alt={phase.title}
                  className="w-full max-w-xs h-48 sm:h-56 object-contain"
                />
              </div>

              <p className="text-sm sm:text-base font-medium text-text-secondary">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Highlights */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={4}
        >
          <div className="w-16 h-px bg-primary/30 mx-auto mb-6 sm:mb-8" />
          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            Key Highlights
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex flex-col items-center text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={i + 5}
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </motion.div>
              <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
