"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const avatarUrls = [
  "https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1637684666587-91e51b10a555?q=80&w=762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1601611900876-391151003440?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1726704078400-18b97334e355?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const heroMask = `radial-gradient(circle at 50% 50%, black 40%, rgba(0,0,0,0.4) 48%, rgba(0,0,0,0.1) 53%, transparent 58%)`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.3, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative min-h-screen overflow-hidden font-sans selection:bg-primary selection:text-white"
      style={{
        backgroundImage: "linear-gradient(135deg, #E6EEF5, #DCE8F3, #E9E6F4)",
      }}
    >
      {/* Background Ambiance — hidden on mobile for performance */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-white/60 blur-[100px] rounded-full" />
      </div>

      {/* Mobile/Tablet Background Image */}
      <div className="lg:hidden absolute inset-0 pointer-events-none">
        <Image
          src="/two_people.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E6EEF5]/95 via-[#DCE8F3]/90 to-[#E9E6F4]/95" />
      </div>

      {/* Right Image — desktop only, absolutely positioned with float animation */}
      <motion.div
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-full pointer-events-none"
        variants={scaleIn}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full h-full"
          style={{
            WebkitMaskImage: heroMask,
            maskImage: heroMask,
          }}
          animate={prefersReduced ? {} : { y: [0, -12, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/two_people.png"
            alt="Two people smiling and shaking hands"
            fill
            className="object-contain"
            priority
            sizes="(min-width: 1024px) 55vw, 0px"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pt-44 lg:pb-28">
        <div className="max-w-none sm:max-w-xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white shadow-sm mb-4 sm:mb-6 border border-white/80 cursor-default"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">
              The smarter way to run your co-op
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-[1.75rem] leading-[1.15] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] font-extrabold text-foreground sm:leading-[1.08] tracking-tight mb-3 sm:mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Modern Cooperative{" "}
            <span className="text-primary">Management, </span>
            <br className="hidden sm:block" />
            Simplified.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary mb-6 sm:mb-10 max-w-md lg:max-w-lg leading-relaxed font-medium"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            A purpose-built platform designed to streamline cooperative
            operations, manage loans and member records, enforce policies, and
            deliver a seamless experience for both administrators and members.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 w-full sm:w-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <motion.button
              className="px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base shadow-lg shadow-(--primary)/30 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Free Trial
              <motion.svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </motion.button>
            <motion.button
              className="px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-white hover:bg-gray-50 text-foreground font-bold text-sm sm:text-base shadow-sm transition-colors flex items-center justify-center gap-2 border border-black/5"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg
                className="w-5 h-5 text-foreground opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="mt-8 sm:mt-12 flex flex-wrap items-center gap-3 sm:gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <div className="flex -space-x-3 drop-shadow-sm">
              {avatarUrls.map((url, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4, zIndex: 10 }}
                >
                  <Image
                    src={url}
                    alt="User avatar"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover bg-white"
                  />
                </motion.div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#f59e0b] mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-4 h-4 fill-current drop-shadow-sm"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.1 + i * 0.08,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <p className="text-sm font-semibold text-text-secondary">
                Trusted by 500+ cooperatives
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
