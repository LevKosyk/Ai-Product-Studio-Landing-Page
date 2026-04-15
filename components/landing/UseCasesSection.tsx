"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const useCases = [
  {
    title: "Startup",
    description: "Validate product direction before writing full production code.",
  },
  {
    title: "Freelancer",
    description: "Turn client ideas into clear product concepts quickly.",
  },
  {
    title: "Agency",
    description: "Standardize ideation and shorten delivery cycles for teams.",
  },
  {
    title: "Developer",
    description: "Move from rough concept to implementation plan in minutes.",
  },
];

export function UseCasesSection() {
  return (
    <SectionReveal id="use-cases" className="px-6 py-28 sm:px-10 lg:py-32" delay={0.04}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">Use Cases</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
            Designed for modern product builders
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
