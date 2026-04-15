"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const revenueBars = [48, 68, 62, 80, 74, 92, 86];

export function DashboardPreviewSection() {
  return (
    <SectionReveal className="px-6 py-18 sm:px-10 lg:px-14" delay={0.1}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs tracking-[0.24em] text-cyan-100/70 uppercase">
            Dashboard Preview
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            AI-Controlled Command Center for Product Operators
          </h2>
        </div>

        <div className="glass-panel-strong rounded-4xl p-5 sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-panel rounded-2xl p-5"
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm text-slate-300">Revenue Signal</p>
                <p className="text-sm font-semibold text-cyan-100">+34.8%</p>
              </div>

              <div className="flex h-44 items-end gap-3 rounded-xl border border-white/10 bg-slate-950/55 px-4 py-3">
                {revenueBars.map((height, index) => (
                  <motion.div
                    key={height}
                    className="relative flex-1 rounded-md bg-linear-to-t from-sky-300/85 to-cyan-200/90"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-400">
                      W{index + 1}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-5">
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-panel rounded-2xl p-5"
              >
                <p className="mb-4 text-sm text-slate-300">Conversion Funnel</p>
                <div className="space-y-3">
                  {[
                    ["Visitors", 100],
                    ["Trial Starts", 76],
                    ["Activated", 51],
                    ["Paid", 32],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-1 flex items-center justify-between text-xs text-slate-300">
                        <span>{label}</span>
                        <span className="text-cyan-100">{value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-linear-to-r from-cyan-200 to-sky-300"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="glass-panel rounded-2xl p-5"
              >
                <p className="mb-4 text-sm text-slate-300">Team Highlights</p>
                <div className="space-y-2 text-xs text-slate-300">
                  {[
                    "AI shipped 14 user stories this sprint",
                    "Retention cohort +9.2% week-over-week",
                    "Latency dropped to 143ms average",
                  ].map((line) => (
                    <div
                      key={line}
                      className="rounded-lg border border-white/10 bg-white/4 px-3 py-2"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
