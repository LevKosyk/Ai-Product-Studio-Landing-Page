"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "./icons";
import { SectionReveal } from "./SectionReveal";

export function FinalCtaSection() {
  return (
    <SectionReveal className="px-6 pt-16 pb-32 sm:px-10" delay={0.04}>
      <div className="mx-auto w-full max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.38 }}
          className="font-display text-4xl tracking-tight text-slate-900 sm:text-6xl"
        >
          Start building in minutes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.38, delay: 0.06 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
        >
          Create your next SaaS concept with a workflow built for speed, clarity, and execution.
        </motion.p>

        <motion.a
          href="#demo"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.3, delay: 0.12 }}
          whileHover={{ scale: 1.02 }}
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-base font-medium text-white transition hover:opacity-90"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </SectionReveal>
  );
}
