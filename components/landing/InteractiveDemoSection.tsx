"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { SectionReveal } from "./SectionReveal";

type DemoStage = "idle" | "thinking" | "ready";

const responseText =
  "Crafting onboarding funnel, analytics dashboard, growth loop automation, and UI blueprint...";

const suggestions = [
  "A B2B invoicing platform for agencies",
  "An AI wellness coach with habit scoring",
  "A creator marketplace with dynamic pricing",
];

export function InteractiveDemoSection() {
  const [prompt, setPrompt] = useState(suggestions[0]);
  const [stage, setStage] = useState<DemoStage>("idle");
  const [typed, setTyped] = useState("");

  const loadingBars = useMemo(
    () =>
      Array.from({ length: 6 }, (_, index) => ({
        id: index,
        delay: index * 0.12,
      })),
    [],
  );

  useEffect(() => {
    if (stage !== "thinking") {
      return;
    }

    let currentIndex = 0;
    let intervalId = 0;

    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        currentIndex += 1;
        setTyped(responseText.slice(0, currentIndex));

        if (currentIndex >= responseText.length) {
          window.clearInterval(intervalId);
          window.setTimeout(() => setStage("ready"), 260);
        }
      }, 17);
    }, 500);

    return () => {
      window.clearTimeout(startId);
      window.clearInterval(intervalId);
    };
  }, [stage]);

  const runGeneration = () => {
    if (stage === "thinking") {
      return;
    }

    setTyped("");
    setStage("thinking");
  };

  return (
    <SectionReveal id="demo" className="px-6 py-20 sm:px-10 lg:px-14" delay={0.16}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="glass-panel-strong rounded-4xl p-6 sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-3 text-xs tracking-[0.25em] text-cyan-100/70 uppercase">
                Interactive AI Demo
              </p>
              <h2 className="font-display text-3xl text-white sm:text-4xl">
                Describe Your Product, Watch It Materialize
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-xs tracking-[0.2em] text-cyan-100 uppercase">
              <Sparkles className="h-4 w-4" />
              Live Generation
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="glass-panel rounded-2xl p-5 sm:p-6">
              <label
                htmlFor="productPrompt"
                className="mb-3 block text-sm font-medium text-slate-200"
              >
                Describe your product...
              </label>
              <textarea
                id="productPrompt"
                rows={4}
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                className="w-full resize-none rounded-xl border border-white/15 bg-slate-950/55 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-cyan-200/50"
              />

              <div className="mt-3 flex flex-wrap gap-2">
                {suggestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPrompt(item)}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-200/45 hover:text-cyan-100"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <MagneticButton
                  onClick={runGeneration}
                  disabled={stage === "thinking"}
                  className="glow-ring rounded-xl bg-linear-to-r from-cyan-300 to-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {stage === "thinking" ? "Generating..." : "Generate Product"}
                </MagneticButton>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-5 sm:p-6">
              <p className="mb-3 text-xs tracking-[0.24em] text-cyan-100/75 uppercase">
                AI Output Stream
              </p>

              <div className="min-h-32 rounded-xl border border-white/12 bg-slate-950/60 p-4 text-sm text-slate-200">
                {stage === "idle" && (
                  <p className="leading-relaxed text-slate-300">
                    Your AI strategist will assemble market positioning, product
                    architecture, interface blocks, and activation loops.
                  </p>
                )}

                {stage === "thinking" && (
                  <div className="space-y-4">
                    <p className="text-slate-100">{typed}</p>
                    <div className="grid gap-2">
                      {loadingBars.map((bar) => (
                        <motion.div
                          key={bar.id}
                          className="h-2 rounded-full shimmer-track"
                          initial={{ opacity: 0.25, scaleX: 0.8 }}
                          animate={{ opacity: [0.3, 0.8, 0.3], scaleX: [0.8, 1, 0.8] }}
                          transition={{
                            delay: bar.delay,
                            duration: 1.6,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {stage === "ready" && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="space-y-4"
                  >
                    <p className="leading-relaxed text-slate-100">{responseText}</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "Smart onboarding journey",
                        "Revenue intelligence dashboard",
                        "AI-powered retention engine",
                        "Responsive design system",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-lg border border-cyan-200/25 bg-cyan-200/10 px-3 py-2 text-xs text-cyan-50"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.12 }}
                      className="rounded-xl border border-cyan-200/25 bg-slate-900/55 p-3"
                    >
                      <div className="mb-3 flex items-center justify-between text-[11px] text-slate-300">
                        <span>Generated UI Dashboard</span>
                        <span className="rounded-full border border-cyan-200/35 px-2 py-0.5 text-cyan-100">
                          v1.0
                        </span>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-3">
                        {[
                          ["MRR", "$41.2K"],
                          ["Activation", "51%"],
                          ["Churn", "2.7%"],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="rounded-lg border border-white/12 bg-white/6 px-2.5 py-2"
                          >
                            <p className="text-[10px] text-slate-400">{label}</p>
                            <p className="mt-1 text-sm font-semibold text-cyan-100">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 flex h-16 items-end gap-1.5 rounded-lg border border-white/12 bg-slate-950/60 p-2">
                        {[34, 56, 49, 73, 68, 82, 76].map((height) => (
                          <motion.div
                            key={height}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.5 }}
                            className="flex-1 rounded-sm bg-linear-to-t from-sky-300/80 to-cyan-200/90"
                          />
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
