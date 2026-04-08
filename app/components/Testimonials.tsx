"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

/* ── Testimonials ────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "iCoop replaced our wall of spreadsheets with a system our entire board actually uses. Transparency went through the roof.",
    name: "Maria Santos",
    role: "Treasurer, AgriCoop Philippines",
    avatar: "MS",
  },
  {
    quote:
      "The loan tracking alone saved us dozens of hours each month. Members love seeing real-time balances on their own portal.",
    name: "James Okonkwo",
    role: "Manager, Unity Credit Union",
    avatar: "JO",
  },
  {
    quote:
      "We tried three platforms before iCoop. None understood cooperative-specific workflows like dividends, patronage, and member equity.",
    name: "Priya Sharma",
    role: "Director, Women's Empowerment Co-op",
    avatar: "PS",
  },
];

/* ── Impact stats ────────────────────────────────────── */
const stats = [
  { value: "₱50M+", label: "Transactions managed" },
  { value: "500+", label: "Active cooperatives" },
  { value: "99.9%", label: "Uptime guarantee" },
  { value: "4.9/5", label: "User satisfaction" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-semibold text-primary mb-5">
            Social Proof
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Trusted by cooperatives{" "}
            <span className="gradient-text">worldwide</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Real feedback from organisations that switched to iCoop.
          </p>
        </FadeIn>

        {/* ── Stats bar ── */}
        <FadeIn delay={0.15} className="mt-14">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-6 sm:grid-cols-4 sm:p-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Testimonial cards ── */}
        <StaggerContainer
          className="mt-14 grid gap-6 md:grid-cols-3"
          staggerDelay={0.12}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg hover:shadow-primary/[0.04]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
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
