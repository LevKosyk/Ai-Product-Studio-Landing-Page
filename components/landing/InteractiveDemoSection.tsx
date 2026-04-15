"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { SectionReveal } from "./SectionReveal";

type DemoStage = "idle" | "thinking" | "ready";

type Output = {
  title: string;
  stack: string;
  highlight: string;
};

function buildOutput(prompt: string): Output {
  const normalized = prompt.trim() || "AI SaaS";
  return {
    title: `${normalized} Dashboard`,
    stack: "AI planning, web app UI, analytics layer",
    highlight: "Suggested onboarding, pricing, and KPI modules generated.",
  };
}

export function InteractiveDemoSection() {
  const [prompt, setPrompt] = useState("A workflow automation platform for remote teams");
  const [stage, setStage] = useState<DemoStage>("idle");

  const output = useMemo(() => buildOutput(prompt), [prompt]);

  const runDemo = () => {
    setStage("thinking");
  };

  useEffect(() => {
    if (stage !== "thinking") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setStage("ready");
    }, 850);

    return () => window.clearTimeout(timeoutId);
  }, [stage]);

  return (
    <SectionReveal id="demo" className="px-6 py-28 sm:px-10 lg:py-32" delay={0.04}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">Interactive Demo</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
            Try the product experience
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <label htmlFor="idea" className="mb-2 block text-sm font-medium text-slate-700">
              Describe your SaaS idea
            </label>
            <input
              id="idea"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-900"
              placeholder="Describe your SaaS idea"
            />
            <button
              type="button"
              onClick={runDemo}
              className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Generate
            </button>
          </div>

          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
          >
            {stage === "idle" && (
              <p className="text-sm leading-relaxed text-slate-600">
                Enter an idea and click Generate to preview a structured product output.
              </p>
            )}

            {stage === "thinking" && (
              <div className="space-y-3">
                <p className="text-sm text-slate-600">Generating product structure...</p>
                {[0, 1, 2].map((line) => (
                  <motion.div
                    key={line}
                    className="h-2 rounded-full bg-slate-200"
                    animate={{ opacity: [0.45, 1, 0.45], scaleX: [0.96, 1, 0.96] }}
                    transition={{
                      duration: 0.9,
                      delay: line * 0.08,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            )}

            {stage === "ready" && (
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-lg border border-slate-200 bg-white p-4"
                >
                  <p className="text-xs text-slate-500">Generated concept</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{output.title}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className="rounded-lg border border-slate-200 bg-white p-4"
                >
                  <p className="text-xs text-slate-500">Suggested stack</p>
                  <p className="mt-1 text-sm text-slate-700">{output.stack}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                  className="rounded-lg border border-slate-200 bg-white p-4"
                >
                  <p className="text-xs text-slate-500">Key recommendation</p>
                  <p className="mt-1 text-sm text-slate-700">{output.highlight}</p>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}
