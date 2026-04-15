"use client";

import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle } from "./icons";

const titleWords = ["Build", "SaaS", "products", "with", "AI"];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: index * 0.06, ease: "easeOut" },
  }),
};

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const mockupY = useTransform(scrollYProgress, [0, 0.4], [0, 42]);

  return (
    <section id="hero" className="relative px-6 pt-28 pb-28 sm:px-10 sm:pt-32 lg:pt-36 lg:pb-32">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-slate-100"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative mx-auto w-full max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs tracking-wide text-slate-600"
        >
          AI Product Builder
        </motion.p>

        <h1 className="font-display text-5xl tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          {titleWords.map((word, index) => (
            <motion.span
              key={word}
              className="mr-3 inline-block"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl"
        >
          Generate product ideas, visualize dashboard structure, and move from concept to execution in minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <PlayCircle className="h-4 w-4" />
            View Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          style={{ y: mockupY }}
          className="mx-auto mt-16 w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Acquisition", "Activation", "Retention"].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.34 }}
                whileHover={{ y: -2, scale: 1.02 }}
                className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-left"
              >
                <p className="text-xs text-slate-500">{item}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">AI-ready module</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.36 }}
          className="mt-8 text-sm tracking-wide text-slate-400"
        >
          Scroll to explore the product story
        </motion.p>
      </div>
    </section>
  );
}
