"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const testimonials = [
  {
    quote:
      "We used to spend every weekend reconciling spreadsheets. With iCoop, our books close themselves. The board actually trusts the numbers now.",
    name: "Maria Santos",
    role: "Treasurer, AgriCoop PH",
    avatar: "MS",
  },
  {
    quote:
      "Our members kept asking for their loan balances. Now they just check their portal. Support calls dropped by 60%.",
    name: "James Okonkwo",
    role: "Manager, Unity Credit Union",
    avatar: "JO",
  },
  {
    quote:
      "We tried three other platforms. None of them understood patronage, dividends, or member equity the way iCoop does.",
    name: "Priya Sharma",
    role: "Director, Women's Empowerment Co-op",
    avatar: "PS",
  },
];

const stats = [
  { value: "₱50M+", label: "Transactions tracked" },
  { value: "500+", label: "Cooperatives onboarded" },
  { value: "99.9%", label: "Uptime since launch" },
  { value: "4.9/5", label: "Average user rating" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary mb-4">
            Don&apos;t take our word for it
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Cooperatives that{" "}
            <span className="gradient-text">switched and stayed</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Hear from the treasurers, managers, and board members who made the
            move.
          </p>
        </FadeIn>

        {/* Stats bar */}
        <FadeIn delay={0.12} className="mt-12">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 rounded-xl border border-border bg-card p-5 sm:grid-cols-4 sm:p-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-bold text-foreground sm:text-2xl">
                  {s.value}
                </p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonial cards */}
        <StaggerContainer
          className="mt-12 grid gap-5 md:grid-cols-3"
          staggerDelay={0.1}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md hover:shadow-primary/[0.03]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg
                      key={i}
                      className="h-3.5 w-3.5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-[10px] font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
