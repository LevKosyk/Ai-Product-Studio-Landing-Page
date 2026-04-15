"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const metrics = [
  { label: "Ideas generated", value: "24,000+", note: "Across product teams" },
  { label: "Average planning time", value: "11 min", note: "From prompt to structure" },
  { label: "Teams onboarded", value: "1,850+", note: "Startups to enterprise" },
];

export function MetricsSection() {
  return (
    <SectionReveal id="metrics" className="px-6 py-28 sm:px-10 lg:py-32" delay={0.04}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">Metrics</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
            Performance that scales with your roadmap
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-3 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">{item.value}</p>
              <p className="mt-3 text-sm text-slate-600">{item.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
