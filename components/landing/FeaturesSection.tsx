"use client";

import { motion } from "framer-motion";
import { BrainCircuit, GaugeCircle, LayoutTemplate, Sparkles } from "./icons";
import { SectionReveal } from "./SectionReveal";

const features = [
  {
    icon: Sparkles,
    title: "AI Idea Generation",
    description: "Turn a prompt into a structured SaaS concept with clear positioning.",
  },
  {
    icon: LayoutTemplate,
    title: "Instant UI Blueprint",
    description: "Visualize pages, dashboard modules, and core user flows immediately.",
  },
  {
    icon: BrainCircuit,
    title: "Smart Product Logic",
    description: "Receive actionable recommendations for monetization and growth.",
  },
  {
    icon: GaugeCircle,
    title: "Export Ready",
    description: "Move from exploration to implementation with production-ready output.",
  },
];

export function FeaturesSection() {
  return (
    <SectionReveal id="features" className="px-6 py-28 sm:px-10 lg:py-32" delay={0.04}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">Features</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
            Essential tools for modern product teams
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.38, delay: index * 0.04 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_1px_0_0_rgba(15,23,42,0.02)] transition-shadow hover:shadow-md"
              >
                <motion.div
                  whileHover={{ rotate: -6 }}
                  className="mb-4 inline-flex rounded-lg border border-slate-200 p-2 text-slate-600 transition group-hover:text-slate-900"
                >
                  <Icon className="h-4 w-4" />
                </motion.div>
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{feature.description}</p>
                <motion.div
                  className="mt-4 h-px w-full bg-slate-200"
                  initial={{ scaleX: 0.5, opacity: 0.45 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.12 + index * 0.05 }}
                  style={{ originX: 0 }}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
