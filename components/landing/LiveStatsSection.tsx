"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionReveal } from "./SectionReveal";

type CounterProps = {
  from?: number;
  to: number;
  suffix?: string;
  decimals?: number;
};

function Counter({ from = 0, to, suffix = "", decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const value = useMotionValue(from);
  const rounded = useTransform(value, (latest) =>
    latest.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }),
  );

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(value, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [isInView, to, value]);

  return (
    <span ref={ref} className="font-display text-4xl text-cyan-100 sm:text-5xl">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { label: "apps generated", to: 10000, suffix: "+" },
  { label: "active users", to: 1200, suffix: "+" },
  { label: "uptime", to: 99.9, suffix: "%", decimals: 1 },
];

export function LiveStatsSection() {
  return (
    <SectionReveal className="px-6 py-18 sm:px-10 lg:px-14" delay={0.1}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="glass-panel-strong rounded-4xl p-6 sm:p-8">
          <p className="mb-6 text-xs tracking-[0.25em] text-cyan-100/70 uppercase">
            Live Stats
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="glass-panel rounded-2xl p-5"
              >
                <Counter to={stat.to} suffix={stat.suffix} decimals={stat.decimals} />
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
