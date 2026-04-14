"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimationWrapper";

function MockDashboard() {
  return (
    <div className="w-full bg-card border border-border rounded-2xl overflow-hidden shadow-xl shadow-black/4">
      <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-400/70" />
        </div>
        <div className="mx-auto text-xs text-muted-foreground font-medium">
          iCoop Dashboard — Overview
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            {
              label: "Total Members",
              value: "1,247",
              change: "+12%",
              color: "text-primary",
            },
            {
              label: "Active Loans",
              value: "₦1.6B",
              change: "+5.2%",
              color: "text-primary",
            },
            {
              label: "Total Savings",
              value: "₦4.8B",
              change: "+8.7%",
              color: "text-primary",
            },
            {
              label: "Revenue",
              value: "₦240M",
              change: "+15%",
              color: "text-primary",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-muted/50 border border-border"
            >
              <div className="text-xs text-muted-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className={`text-xs font-medium ${stat.color}`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4 rounded-xl bg-muted/50 border border-border">
            <div className="text-sm font-medium text-foreground mb-4">
              Savings Growth
            </div>
            <div className="flex items-end gap-2 h-32">
              {[40, 55, 45, 60, 52, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-linear-to-t from-primary/60 to-primary/20"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
              <span>Jan</span>
              <span>Mar</span>
              <span>Jun</span>
              <span>Sep</span>
              <span>Dec</span>
            </div>
          </div>

          <div className="w-full md:w-64 p-4 rounded-xl bg-muted/50 border border-border">
            <div className="text-sm font-medium text-foreground mb-4">
              Recent Activity
            </div>
            <div className="space-y-3">
              {[
                {
                  action: "Loan approved",
                  member: "A. Yusuf",
                  amount: "₦800K",
                },
                {
                  action: "Deposit received",
                  member: "F. Bello",
                  amount: "₦50K",
                },
                { action: "New member", member: "C. Okafor", amount: "" },
                {
                  action: "Payment received",
                  member: "K. Abubakar",
                  amount: "₦125K",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-foreground font-medium truncate">
                      {item.action}
                    </div>
                    <div className="text-muted-foreground">{item.member}</div>
                  </div>
                  {item.amount && (
                    <div className="text-foreground font-medium">
                      {item.amount}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section className="relative py-24 sm:py-32 bg-muted/30 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-medium text-primary">
              Your dashboard
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Everything your board needs,{" "}
            <span className="gradient-text">one screen</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-time metrics, automated reports, and a clear view of your
            cooperative&apos;s financial health — without the guesswork.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="relative">
            <motion.div
              className="relative mx-auto max-w-5xl"
              initial={{ rotateX: 8, scale: 0.95 }}
              whileInView={{ rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ perspective: 1200 }}
            >
              <MockDashboard />
            </motion.div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary/5 blur-2xl rounded-full" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
