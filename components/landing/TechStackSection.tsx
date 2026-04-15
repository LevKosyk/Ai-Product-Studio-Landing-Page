"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "AI APIs",
  "Cloud Deployment",
];

export function TechStackSection() {
  return (
    <SectionReveal id="tech" className="px-6 py-18 sm:px-10 lg:px-14" delay={0.1}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs tracking-[0.25em] text-cyan-100/70 uppercase">
            Tech Stack
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Built on Battle-Tested Modern Infrastructure
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {stack.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="rounded-full border border-cyan-200/40 bg-linear-to-r from-cyan-200/18 via-sky-200/10 to-cyan-200/18 px-4 py-2 text-sm text-cyan-50 shadow-[0_0_26px_rgba(72,221,255,0.2)]"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
