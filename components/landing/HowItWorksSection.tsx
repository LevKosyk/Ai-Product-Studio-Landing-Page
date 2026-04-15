"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const steps = [
  {
    number: "01",
    title: "Enter idea",
    description: "Describe your SaaS concept in a single sentence.",
  },
  {
    number: "02",
    title: "AI generates structure",
    description: "The platform creates product architecture and UI flow.",
  },
  {
    number: "03",
    title: "Export result",
    description: "Use the generated output to launch faster with confidence.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionReveal id="how" className="px-6 py-28 sm:px-10 lg:py-32" delay={0.04}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">How It Works</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
            A simple workflow from prompt to product
          </h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute top-10 right-8 left-8 hidden h-px bg-slate-200 md:block" />

          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.38, delay: index * 0.05 }}
              whileHover={{ scale: 1.01 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div className="mb-4 inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-slate-300 px-2 text-xs font-semibold text-slate-700">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-base text-slate-600">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
