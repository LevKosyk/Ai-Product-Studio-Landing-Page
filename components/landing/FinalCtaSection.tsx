"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { SectionReveal } from "./SectionReveal";

export function FinalCtaSection() {
  return (
    <SectionReveal className="px-6 pt-6 pb-24 sm:px-10 lg:px-14" delay={0.1}>
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          whileHover={{ y: -3 }}
          className="glass-panel-strong rounded-4xl px-6 py-12 text-center sm:px-10"
        >
          <p className="mb-4 text-xs tracking-[0.26em] text-cyan-100/70 uppercase">
            Final Call
          </p>
          <h2 className="font-display text-3xl text-white sm:text-5xl">
            Start Building With AI Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Join ambitious teams shipping category-leading SaaS products with a
            studio designed for speed, intelligence, and visual excellence.
          </p>

          <div className="mt-10 flex justify-center">
            <MagneticButton className="group glow-ring rounded-xl bg-linear-to-r from-cyan-300 to-sky-300 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_35px_rgba(72,221,255,0.42)] hover:shadow-[0_0_48px_rgba(72,221,255,0.58)]">
              <span className="flex items-center gap-2">
                Launch AI Studio
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
