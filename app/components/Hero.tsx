"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimationWrapper";

function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function GridAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated grid dots */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1" className="fill-primary/10" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Animated connecting lines */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1/2 h-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 50 200 Q 200 50 350 200 Q 200 350 50 200"
            fill="none"
            className="stroke-primary/20"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M 100 100 L 300 100 L 300 300 L 100 300 Z"
            fill="none"
            className="stroke-accent/15"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <FloatingOrb
        className="w-96 h-96 bg-primary -top-20 -right-20"
        delay={0}
      />
      <FloatingOrb
        className="w-80 h-80 bg-accent -bottom-20 -left-20"
        delay={2}
      />
      <FloatingOrb
        className="w-64 h-64 bg-purple-500 top-1/3 left-1/3"
        delay={4}
      />
      <GridAnimation />

      {/* Radial fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">
                Now in Public Beta
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Simplify Cooperative <br className="hidden sm:block" />
              Management with <span className="gradient-text">iCoop</span>
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={0.35}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              The all-in-one platform to manage members, track loans, monitor
              savings, and generate insightful financial reports — all from a
              single intuitive dashboard.
            </p>
          </FadeIn>

          {/* CTA buttons */}
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#cta"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="#cta"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium text-base hover:bg-muted transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Request Demo
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            </div>
          </FadeIn>

          {/* Social proof */}
          <FadeIn delay={0.65}>
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/60 to-accent/60"
                    style={{ zIndex: 5 - i }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span>
                  Trusted by <strong className="text-foreground">500+</strong>{" "}
                  cooperatives
                </span>
                <span className="hidden sm:inline text-border">|</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
