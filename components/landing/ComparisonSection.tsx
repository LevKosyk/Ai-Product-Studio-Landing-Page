"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const rows = [
  {
    metric: "Time",
    traditional: "Weeks",
    ai: "Minutes",
    detail: "A linear workflow vs. an immediate product outline.",
  },
  {
    metric: "Complexity",
    traditional: "High",
    ai: "Simple",
    detail: "Many moving parts reduced into one guided flow.",
  },
  {
    metric: "Cost",
    traditional: "Expensive",
    ai: "Affordable",
    detail: "Fewer hours, fewer tools, less overhead.",
  },
];

export function ComparisonSection() {
  return (
    <SectionReveal id="comparison" className="px-6 py-28 sm:px-10 lg:py-32" delay={0.04}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">Comparison</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
            Traditional development vs AI builder
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            A clearer view of how the AI workflow compresses the product loop without sacrificing quality.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.04)]">
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 px-6 py-5 text-xs font-medium tracking-[0.18em] text-slate-500 uppercase">
            <p>Metric</p>
            <p>Traditional</p>
            <p>AI Builder</p>
          </div>

          {rows.map((row, index) => (
            <motion.div
              key={row.metric}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.28, delay: index * 0.03 }}
              whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.9)" }}
              className="grid grid-cols-3 border-b border-slate-200 px-6 py-6 text-base text-slate-700 last:border-b-0"
            >
              <div>
                <p className="font-medium text-slate-900">{row.metric}</p>
                <p className="mt-2 max-w-xs text-sm text-slate-500">{row.detail}</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">{row.traditional}</p>
                <p className="mt-2 text-sm text-slate-500">Manual planning, multiple revisions.</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">{row.ai}</p>
                <p className="mt-2 text-sm text-slate-500">Guided generation, immediate clarity.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
