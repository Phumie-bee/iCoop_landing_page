"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-24" aria-label="Hero">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -left-24 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[100px]" />
        <div className="absolute -bottom-32 -right-24 h-[350px] w-[350px] rounded-full bg-accent/[0.04] blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Image composite area ── */}
        <motion.div
          className="relative mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {/* "Trusted by" badge — top right */}
          <motion.div
            className="absolute -top-2 right-0 z-20 sm:-top-3 sm:right-4 lg:right-0"
            initial={{ opacity: 0, y: -12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200/60 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400">
                <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              Trusted by 1500+ Cooperatives
            </span>
          </motion.div>

          {/* Images container */}
          <div className="relative mt-10 sm:mt-12">
            {/* Main people image — left */}
            <motion.div
              className="relative w-[58%] sm:w-[55%]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            >
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-slate-900/8">
                <Image
                  src="/three_people.png"
                  alt="Team of cooperative members collaborating"
                  width={700}
                  height={467}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Dashboard card — right, overlapping */}
            <motion.div
              className="absolute right-0 top-[5%] w-[52%] sm:w-[55%] sm:top-[3%] lg:w-[55%]"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            >
              <div className="rounded-2xl bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-100 overflow-hidden">
                <Image
                  src="/side_image.png"
                  alt="iCoop dashboard showing cooperative management features"
                  width={650}
                  height={433}
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>

            {/* "3 New Requests" badge */}
            <motion.div
              className="absolute right-[2%] top-[2%] z-20 sm:right-[1%] sm:-top-[1%]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: EASE }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg shadow-red-500/25">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-400 text-[9px] font-bold">
                  13
                </span>
                New Requests
              </span>
            </motion.div>

            {/* Floating "Next Meeting" card — bottom right */}
            <motion.div
              className="absolute bottom-[3%] right-[5%] z-20 sm:bottom-[5%] sm:right-[3%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3 rounded-xl bg-[#2c4a6e] px-4 py-2.5 shadow-xl shadow-slate-900/15"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">Next Meeting</p>
                  <p className="text-[10px] text-blue-200">Today at 3:00 PM!</p>
                </div>
                <span className="ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Bottom row: CTAs + Feature highlights ── */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-12 flex flex-wrap items-center justify-between gap-6 sm:mt-14 lg:mt-16"
        >
          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5">
            <motion.a
              href="#cta"
              className="inline-flex items-center justify-center rounded-xl bg-[#2d8a4e] px-8 py-4 text-base font-semibold text-white shadow-md shadow-green-600/20 transition-all hover:bg-[#247a42] hover:shadow-lg hover:shadow-green-600/30"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Now
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="text-base font-semibold text-[#1e293b] underline decoration-slate-300 underline-offset-4 transition-colors hover:decoration-slate-500"
              whileHover={{ x: 2 }}
            >
              Watch a Demo
            </motion.a>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-base font-semibold text-[#1e293b]">
                No More<br />Paperwork
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </span>
              <span className="text-base font-semibold text-[#1e293b]">
                Better<br />Engagement
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
