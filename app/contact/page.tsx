"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../components/AnimationWrapper";
import Footer from "../components/Footer";

const contactCards = [
  {
    icon: Mail,
    label: "Email us",
    value: "info@connexxiongroup.com",
    description: "We reply within 24 hours",
    href: "mailto:info@connexxiongroup.com",
    iconBg: "bg-primary-soft",
    iconColor: "text-primary",
    accent: "border-t-primary",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+234 916 158 0000",
    description: "Mon–Fri, 9am – 5pm WAT",
    href: "tel:+2349161580000",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    accent: "border-t-violet-400",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Abuja, Nigeria",
    description: "2A Iller Crescent, Maitama, Abuja, Nigeria",
    href: "https://maps.app.goo.gl/2VkjjzMrkFX2vntA6?g_st=iw    ",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    accent: "border-t-amber-400",
  },
];

const topics = [
  { value: "", label: "Select a topic" },
  { value: "sales", label: "Sales & Pricing" },
  { value: "support", label: "Technical Support" },
  { value: "general", label: "General Inquiry" },
  { value: "partnership", label: "Partnerships" },
  { value: "demo", label: "Request a Demo" },
];

const steps = [
  {
    step: "01",
    title: "We receive your message",
    desc: "Your inquiry lands directly in our team's inbox.",
  },
  {
    step: "02",
    title: "We review and assign",
    desc: "The right team member picks up your query.",
  },
  {
    step: "03",
    title: "You get a reply",
    desc: "We respond with a clear, helpful answer within 24 hours.",
  },
];

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "We respond to all inquiries within 24 business hours. For urgent matters, please call us directly.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes! You can try iCoop free for 30 days with full access to all features. No credit card required.",
  },
  {
    q: "Can I get a personalized demo?",
    a: "Absolutely. Select 'Request a Demo' in the contact form and our team will schedule a walkthrough tailored to your cooperative's needs.",
  },
  {
    q: "Do you provide onboarding support?",
    a: "Every plan includes onboarding support. Our team guides you through setup, data migration, and member training.",
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1600));
    setStatus("success");
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          <Link href="/" aria-label="iCoop home">
            <Image
              src="/iCoop_logo_tc.png"
              alt="iCoop logo"
              width={130}
              height={52}
              className="h-7 w-auto"
              priority
            />
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors shadow-sm"
          >
            Log in
          </Link>
        </div>
      </header>
      <main className="pt-16 lg:pt-20">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-bg-start via-bg-mid to-bg-end pt-24 pb-36 sm:pt-32 sm:pb-48">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-125 w-125 rounded-full bg-primary/6 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-violet-400/8 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/4 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-border/60 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm mb-8 backdrop-blur-sm">
                <Mail className="h-3.5 w-3.5" />
                Get in Touch
              </span>
              <h1
                className="font-extrabold tracking-tight leading-[1.08] mb-6"
                style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
              >
                <span className="section-heading block">We&apos;d love to</span>
                <span className="section-heading block">hear from you</span>
              </h1>
              <p className="text-base sm:text-lg text-text-secondary max-w-lg mx-auto leading-relaxed">
                Questions about pricing, features, or need a demo &mdash; our
                team is ready to help your cooperative thrive.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── Contact cards (pulled up over hero bottom) ────── */}
        <section className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24 z-10">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactCards.map((card) => (
              <StaggerItem key={card.label}>
                <a
                  href={card.href}
                  className={`group flex flex-col gap-4 rounded-2xl bg-card border-t-[3px] ${card.accent} border-x border-b border-border p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor}`}
                  >
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-text-muted mb-1.5">
                      {card.label}
                    </p>
                    <p className="font-bold text-foreground text-sm leading-snug">
                      {card.value}
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      {card.description}
                    </p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ── Form + sidebar ────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-20 sm:pt-16 sm:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* ─ Form ───────────────────────────────────────── */}
            <div className="lg:col-span-3">
              <FadeIn direction="left">
                <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                  {/* Card header bar */}
                  <div className="px-8 py-6 border-b border-border bg-surface/60">
                    <h2 className="text-xl font-bold text-foreground">
                      Send us a message
                    </h2>
                    <p className="text-sm text-text-secondary mt-1">
                      Fill in the form and we&apos;ll get back to you shortly.
                    </p>
                  </div>

                  <div className="px-8 py-8">
                    <AnimatePresence mode="wait">
                      {status === "success" ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.25, 0.4, 0.25, 1],
                          }}
                          className="flex flex-col items-center justify-center py-14 text-center"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                              delay: 0.1,
                            }}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft mb-5"
                          >
                            <CheckCircle className="h-8 w-8 text-primary" />
                          </motion.div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            Message sent!
                          </h3>
                          <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
                            Thank you for reaching out. Our team will get back
                            to you within 24 hours.
                          </p>
                          <button
                            onClick={() => {
                              setStatus("idle");
                              setForm(emptyForm);
                            }}
                            className="mt-8 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                          >
                            Send another message
                          </button>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          onSubmit={handleSubmit}
                          className="space-y-6"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <Field label="Full name" htmlFor="name">
                              <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Amaka Okonkwo"
                                className={inputClass}
                              />
                            </Field>
                            <Field label="Email address" htmlFor="email">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                placeholder="amaka@cooperative.ng"
                                className={inputClass}
                              />
                            </Field>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <Field label="Phone (optional)" htmlFor="phone">
                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+234 800 000 0000"
                                className={inputClass}
                              />
                            </Field>
                            <Field label="Topic" htmlFor="topic">
                              <div className="relative">
                                <select
                                  id="topic"
                                  name="topic"
                                  required
                                  value={form.topic}
                                  onChange={handleChange}
                                  className={`${inputClass} appearance-none pr-10 ${!form.topic ? "text-text-muted" : "text-foreground"}`}
                                >
                                  {topics.map((t) => (
                                    <option
                                      key={t.value}
                                      value={t.value}
                                      disabled={!t.value}
                                    >
                                      {t.label}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
                              </div>
                            </Field>
                          </div>

                          <Field label="Message" htmlFor="message">
                            <textarea
                              id="message"
                              name="message"
                              required
                              rows={5}
                              value={form.message}
                              onChange={handleChange}
                              placeholder="Tell us how we can help your cooperative..."
                              className={`${inputClass} resize-none`}
                            />
                          </Field>

                          <div className="pt-1">
                            <button
                              type="submit"
                              disabled={status === "loading"}
                              className="group w-full flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white hover:bg-primary/90 disabled:opacity-70 transition-all shadow-sm hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
                            >
                              {status === "loading" ? (
                                <>
                                  <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{
                                      repeat: Infinity,
                                      duration: 0.9,
                                      ease: "linear",
                                    }}
                                    className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white block"
                                  />
                                  Sending…
                                </>
                              ) : (
                                <>
                                  Send Message
                                  <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                                </>
                              )}
                            </button>
                            <p className="text-center text-xs text-text-muted mt-4">
                              By submitting, you agree to our{" "}
                              <Link
                                href="#"
                                className="underline underline-offset-2 hover:text-foreground transition-colors"
                              >
                                Privacy Policy
                              </Link>
                              .
                            </p>
                          </div>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ─ Sidebar ────────────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* What to expect */}
              <FadeIn direction="right" delay={0.08}>
                <div className="rounded-2xl border border-border bg-card shadow-sm p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-text-muted mb-5">
                    What to expect
                  </p>
                  <div className="space-y-5">
                    {steps.map((item, i) => (
                      <div key={item.step} className="flex gap-3.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-soft text-[10px] font-bold text-primary mt-0.5">
                          {item.step}
                        </div>
                        <div
                          className={
                            i < steps.length - 1
                              ? "pb-5 border-b border-border/60 w-full"
                              : "w-full"
                          }
                        >
                          <p className="text-sm font-semibold text-foreground leading-snug">
                            {item.title}
                          </p>
                          <p className="text-xs text-text-muted mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Business hours */}
              <FadeIn direction="right" delay={0.16}>
                <div className="rounded-2xl border border-border bg-card shadow-sm p-6">
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-soft">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-text-muted">
                      Business hours
                    </p>
                  </div>
                  <div className="space-y-3">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-text-secondary">{h.day}</span>
                        <span
                          className={`font-semibold tabular-nums ${h.time === "Closed" ? "text-text-muted" : "text-foreground"}`}
                        >
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-[11px] text-text-muted border-t border-border pt-4">
                    All times in West Africa Time (WAT / UTC+1)
                  </p>
                </div>
              </FadeIn>

              {/* Help center CTA */}
              {/* <FadeIn direction="right" delay={0.24}>
                <Link
                  href="#"
                  className="group flex items-center justify-between rounded-2xl border border-border bg-linear-to-br from-primary-soft to-white p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      Browse our Help Center
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      Find instant answers to common questions
                    </p>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    <ArrowRight className="h-4 w-4 text-primary group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              </FadeIn> */}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <span className="inline-block rounded-full bg-primary-soft border border-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-5">
                FAQ
              </span>
              <h2 className="section-heading mb-4">
                Frequently asked questions
              </h2>
              <p className="text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
                Can&apos;t find what you&apos;re looking for? Reach out to our
                team directly.
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-2.5">
              {faqs.map((faq, i) => (
                <StaggerItem key={i}>
                  <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
                    <button
                      className="flex w-full items-center justify-between px-6 py-5 text-left gap-6 hover:bg-surface/60 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-sm font-semibold text-foreground leading-snug">
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: openFaq === i ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-surface"
                      >
                        <ChevronDown className="h-3.5 w-3.5 text-text-muted" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.25,
                            ease: [0.25, 0.4, 0.25, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 pt-1 text-sm text-text-secondary leading-relaxed border-t border-border/50">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CTA below FAQ */}
            <FadeIn delay={0.3} className="mt-10 text-center">
              <p className="text-sm text-text-secondary">
                Still have questions?{" "}
                <Link
                  href="info@connexxiongroup.com"
                  className="font-semibold text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
                >
                  Email our team
                </Link>
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ── Helpers ─────────────────────────────────────────── */

const inputClass =
  "w-full rounded-xl border border-border bg-surface/70 px-4 py-3 text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all hover:border-border/80";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-[11px] font-bold uppercase tracking-widest text-text-secondary"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
