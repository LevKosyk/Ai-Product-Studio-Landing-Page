"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const testimonials = [
  {
    name: "Maya Chen",
    role: "Founder, OrbitDesk",
    message: "We now turn product ideas into usable roadmaps in less than an hour.",
  },
  {
    name: "Noah Patel",
    role: "Product Lead, VelocityOps",
    message: "The platform gave our team alignment faster than traditional planning workflows.",
  },
  {
    name: "Ari Gomez",
    role: "Independent Developer",
    message: "It keeps the process focused and clear without adding complexity.",
  },
];

export function TestimonialsSection() {
  return (
    <SectionReveal className="px-6 py-28 sm:px-10 lg:py-32" delay={0.04}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">Social Proof</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
            Trusted by teams building AI products
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              animate={{ y: [0, -3, 0] }}
              className="rounded-2xl border border-slate-200 bg-white p-7"
              transition={{
                duration: 0.35,
                delay: index * 0.04,
                y: {
                  duration: 3.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  delay: index * 0.2,
                  ease: "easeInOut",
                },
              }}
            >
              <p className="mb-2 text-lg leading-none text-slate-300">&ldquo;</p>
              <p className="text-base leading-relaxed text-slate-700">{item.message}</p>
              <p className="mt-5 text-base font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
