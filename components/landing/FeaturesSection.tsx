"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  GaugeCircle,
  LayoutTemplate,
  Sparkles,
} from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const features = [
  {
    icon: Sparkles,
    title: "AI Product Ideation",
    description:
      "Convert one line prompts into validated product concepts, user journeys, and launch hypotheses.",
  },
  {
    icon: BrainCircuit,
    title: "Autonomous Strategy Engine",
    description:
      "Your AI co-founder maps roadmap priorities, feature sequencing, and monetization paths in real time.",
  },
  {
    icon: LayoutTemplate,
    title: "Auto UI Builder",
    description:
      "Generate polished interfaces, component systems, and responsive screens tailored to your brand DNA.",
  },
  {
    icon: GaugeCircle,
    title: "Live Growth Analytics",
    description:
      "Track product health with predictive metrics and intelligent recommendations before issues surface.",
  },
];

export function FeaturesSection() {
  return (
    <SectionReveal id="features" className="px-6 py-16 sm:px-10 lg:px-14" delay={0.1}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs tracking-[0.26em] text-cyan-100/70 uppercase">
            Platform Capabilities
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Everything You Need to Ship Elite AI SaaS Experiences
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                className="glass-panel group rounded-2xl p-6 transform-3d"
                style={{ transformPerspective: 1200 }}
              >
                <div className="mb-5 inline-flex rounded-xl border border-cyan-200/30 bg-cyan-200/10 p-3">
                  <Icon className="h-5 w-5 text-cyan-100" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {feature.description}
                </p>
                <div className="mt-6 h-px w-full bg-linear-to-r from-cyan-200/0 via-cyan-200/35 to-cyan-200/0 transition group-hover:via-cyan-200/75" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
