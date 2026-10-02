import type { Metadata } from "next";
import { Clock, Monitor, Users, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookDemoForm from "./BookDemoForm";

export const metadata: Metadata = {
  title: "Book a Demo | iCoop Cooperative Management Software",
  description:
    "Book a free 30-minute walkthrough of iCoop. See how savings, loans, and member records work for your cooperative — pick a slot that suits you.",
};

const whatToExpect = [
  {
    icon: Clock,
    title: "30 minutes, no filler",
    desc: "A focused walkthrough of the modules that matter to your cooperative.",
  },
  {
    icon: Monitor,
    title: "Live product, not slides",
    desc: "We work through real savings, loan, and member workflows in the app.",
  },
  {
    icon: Users,
    title: "Bring your committee",
    desc: "Invite anyone who'll use iCoop — treasurers, secretaries, or your exco.",
  },
];

const reassurances = [
  "Free, with no obligation to buy",
  "Onboarding and data migration explained",
  "Straight answers on pricing for your size",
];

export default function BookDemoPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-background pt-28 pb-20 sm:pt-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Left rail — what the demo actually is */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-[12px] font-semibold text-primary-deep">
                Book a demo
              </span>
              <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
                See iCoop running your cooperative
              </h1>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-secondary">
                Pick a slot and we&apos;ll walk your team through savings,
                loans, and member records — with cooperative policy built into
                every form.
              </p>

              <ul className="mt-9 space-y-6">
                {whatToExpect.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary-tint text-primary">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[14px] font-semibold text-foreground">
                        {title}
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-relaxed text-text-secondary">
                        {desc}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-border bg-surface p-5">
                <ul className="space-y-2.5">
                  {reassurances.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13px] text-text-secondary"
                    >
                      <CheckCircle
                        size={15}
                        className="mt-0.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — the form */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-bold text-foreground">
                Pick your slot
              </h2>
              <p className="mt-1 mb-7 text-[13px] text-text-secondary">
                Demos run Monday–Friday, 9:00 AM – 4:30 PM WAT.
              </p>
              <BookDemoForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
