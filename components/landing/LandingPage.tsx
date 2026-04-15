"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { CustomCursor } from "./CustomCursor";
import { DashboardPreviewSection } from "./DashboardPreviewSection";
import { FeaturesSection } from "./FeaturesSection";
import { FinalCtaSection } from "./FinalCtaSection";
import { HeroSection } from "./HeroSection";
import { InteractiveDemoSection } from "./InteractiveDemoSection";
import { PricingSection } from "./PricingSection";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#pricing", label: "Pricing" },
];

export function LandingPage() {
  return (
    <>
      <CustomCursor />
      <AnimatedBackground />

      <main className="relative min-h-screen overflow-hidden">
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed top-3 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 backdrop-blur-xl sm:top-5 sm:px-6"
        >
          <div className="flex items-center justify-between gap-3">
            <a href="#hero" className="flex items-center gap-2">
              <Image
                src="/icon.svg"
                alt="AI Product Studio logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg ring-1 ring-cyan-200/45 shadow-[0_0_20px_rgba(72,221,255,0.35)]"
                priority
              />
              <span className="font-display text-sm tracking-[0.18em] text-slate-100 uppercase">
                AI Product Studio
              </span>
            </a>

            <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-cyan-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg border border-cyan-200/35 bg-cyan-200/10 px-3 py-1.5 text-xs text-cyan-100 transition hover:bg-cyan-200/20"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Request Access
            </button>
          </div>
        </motion.header>

        <HeroSection />
        <FeaturesSection />
        <InteractiveDemoSection />
        <DashboardPreviewSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
    </>
  );
}
