"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const titleWords = ["Build", "SaaS", "Products", "With", "AI", "Precision"];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(7px)" },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.62,
      delay: index * 0.08,
      ease: [0.21, 1, 0.31, 1],
    },
  }),
};

export function HeroSection() {
  return (
    <section id="hero" className="relative px-6 pt-28 pb-20 sm:px-10 lg:px-14">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 1, 0.31, 1] }}
            className="mb-6 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-200/10 px-4 py-2 text-xs font-medium tracking-[0.24em] text-cyan-100/90 uppercase"
          >
            AI Product Studio
          </motion.p>

          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.45rem]">
            {titleWords.map((word, index) => (
              <motion.span
                key={word}
                className="mr-3 inline-block"
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {index === 1 || index === 4 ? (
                  <span className="gradient-title">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Turn raw ideas into launch-ready products in minutes. Generate UX
            flows, architecture, and growth loops with an always-on AI product
            team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.46 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton className="group glow-ring rounded-xl border border-cyan-200/50 bg-linear-to-r from-cyan-300/85 via-sky-300/90 to-teal-200/85 px-7 py-3 font-semibold text-slate-950 shadow-[0_0_35px_rgba(72,221,255,0.34)] transition duration-300 hover:shadow-[0_0_45px_rgba(72,221,255,0.52)]">
              <span className="flex items-center justify-center gap-2">
                Start Building
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </MagneticButton>

            <a
              href="#demo"
              className="magnetic-target inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3 font-medium text-slate-100 transition hover:border-cyan-200/45 hover:bg-cyan-200/10"
            >
              <PlayCircle className="h-4 w-4 text-cyan-200" />
              Watch Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="mt-11 grid max-w-2xl gap-3 sm:grid-cols-3"
          >
            {[
              ["180K+", "Automated product decisions"],
              ["96%", "Faster MVP delivery"],
              ["24/7", "AI product co-pilot"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="glass-panel rounded-xl px-4 py-4 text-left backdrop-blur"
              >
                <p className="text-xl font-semibold text-cyan-100">{value}</p>
                <p className="mt-1 text-xs text-slate-300">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.21, 1, 0.31, 1] }}
          className="relative"
        >
          <div className="absolute -inset-7 rounded-4xl bg-[radial-gradient(circle_at_center,rgba(76,187,255,0.32),transparent_65%)] blur-2xl" />
          <div className="glass-panel-strong scan-line relative overflow-hidden rounded-4xl p-5 shadow-[0_24px_90px_rgba(5,16,35,0.65)]">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
            </div>

            <div className="relative mx-auto mb-5 flex h-56 w-56 items-center justify-center rounded-full border border-cyan-200/30 bg-[radial-gradient(circle_at_center,rgba(71,170,255,0.34),rgba(15,34,70,0.2)_55%,rgba(5,10,24,0.7)_100%)] shadow-[0_0_45px_rgba(72,221,255,0.35)]">
              <div className="animate-breathe absolute inset-7 rounded-full border border-cyan-200/35" />
              <div className="animate-float absolute inset-14 rounded-full border border-sky-200/30" />
              <div className="orbit absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(72,221,255,0.9)]" />
              <span className="font-display text-xs tracking-[0.3em] text-cyan-100/90 uppercase">
                Neural Core
              </span>
            </div>

            <div className="space-y-3">
              {[
                ["Intent Mapping", "98%"],
                ["UI Autogeneration", "94%"],
                ["Launch Readiness", "91%"],
              ].map(([label, score], index) => (
                <div
                  key={label}
                  className="glass-panel rounded-xl border border-white/10 px-3 py-2"
                >
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                    <span>{label}</span>
                    <span className="text-cyan-100">{score}</span>
                  </div>
                  <motion.div
                    className="h-1.5 overflow-hidden rounded-full bg-white/10"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <motion.div
                      className="h-full rounded-full bg-linear-to-r from-cyan-200 to-sky-300"
                      initial={{ width: 0 }}
                      animate={{ width: score }}
                      transition={{ duration: 0.95, delay: 0.45 + index * 0.18 }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
