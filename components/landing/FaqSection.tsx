"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const faqs = [
  {
    q: "How fast can I generate a SaaS concept?",
    a: "Most users generate their first structured concept in under a minute.",
  },
  {
    q: "Can teams collaborate in one workspace?",
    a: "Yes, teams can align on ideas, product logic, and implementation paths together.",
  },
  {
    q: "Is the output ready for engineering handoff?",
    a: "The platform creates organized product plans and UI structures suitable for dev handoff.",
  },
  {
    q: "Do you support enterprise onboarding?",
    a: "Yes, enterprise onboarding includes dedicated setup support and security review.",
  },
];

export function FaqSection() {
  return (
    <SectionReveal id="faq" className="px-6 py-28 sm:px-10 lg:py-32" delay={0.04}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">FAQ</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
            Questions teams ask before they scale
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((item, index) => (
            <motion.article
              key={item.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              whileHover={{ y: -2 }}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
