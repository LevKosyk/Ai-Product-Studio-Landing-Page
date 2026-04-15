"use client";

import { motion } from "framer-motion";
import { Check } from "./icons";
import { SectionReveal } from "./SectionReveal";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for early-stage founders validating product ideas.",
    features: [
      "3 AI product workspaces",
      "UX wireframe generation",
      "Core analytics snapshots",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$99",
    description: "For product teams building and scaling AI-native SaaS.",
    features: [
      "Unlimited workspaces",
      "Full UI builder + component kit",
      "Growth intelligence engine",
      "Priority AI strategy support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced governance and private model deployment.",
    features: [
      "Private cloud deployment",
      "Custom AI model tuning",
      "SOC2 + SSO integrations",
      "Dedicated success architect",
    ],
  },
];

export function PricingSection() {
  return (
    <SectionReveal id="pricing" className="px-6 py-20 sm:px-10 lg:px-14" delay={0.1}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs tracking-[0.25em] text-cyan-100/70 uppercase">
            Pricing
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Choose the Plan That Matches Your Product Velocity
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className={`${
                plan.highlighted
                  ? "glass-panel-strong glow-ring"
                  : "glass-panel border-white/12"
              } rounded-2xl p-6`}
            >
              <p className="text-sm text-cyan-100/80">{plan.name}</p>
              <p className="mt-3 font-display text-4xl text-white">{plan.price}</p>
              <p className="mt-3 min-h-12 text-sm text-slate-300">{plan.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-7 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-linear-to-r from-cyan-300 to-sky-300 text-slate-950 shadow-[0_0_32px_rgba(72,221,255,0.35)] hover:shadow-[0_0_44px_rgba(72,221,255,0.5)]"
                    : "border border-white/20 bg-white/5 text-slate-100 hover:border-cyan-200/45 hover:bg-cyan-200/10"
                }`}
              >
                {plan.highlighted ? "Start Pro" : "Get Started"}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
