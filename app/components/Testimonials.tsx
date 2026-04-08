"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const testimonials = [
  {
    quote:
      "iCoop has completely transformed how we manage our savings cooperative. We went from spreadsheets and confusion to a streamlined, transparent system in a single week.",
    name: "Maria Santos",
    role: "Treasurer, AgriCoop Philippines",
    avatar: "MS",
  },
  {
    quote:
      "The loan tracking feature alone has saved us dozens of hours per month. Our members love the self-service portal and real-time balance updates.",
    name: "James Okonkwo",
    role: "Manager, Unity Credit Union",
    avatar: "JO",
  },
  {
    quote:
      "We tried three other solutions before finding iCoop. None of them understood cooperative-specific workflows like member dividends and patronage tracking.",
    name: "Priya Sharma",
    role: "Director, Women's Empowerment Co-op",
    avatar: "PS",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-medium text-primary">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Loved by cooperatives{" "}
            <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our users are saying about how iCoop has transformed their
            organizations.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                className="relative p-8 rounded-2xl border border-border bg-card h-full flex flex-col group"
                whileHover={{ y: -4, borderColor: "var(--primary)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
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
                </div>

                <blockquote className="text-foreground leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
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
