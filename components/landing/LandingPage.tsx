"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ComparisonSection } from "./ComparisonSection";
import { FeaturesSection } from "./FeaturesSection";
import { FinalCtaSection } from "./FinalCtaSection";
import { FooterSection } from "./FooterSection";
import { FaqSection } from "./FaqSection";
import { HeroSection } from "./HeroSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { InteractiveDemoSection } from "./InteractiveDemoSection";
import { MetricsSection } from "./MetricsSection";
import { ParallaxBackdrop } from "./ParallaxBackdrop";
import { TestimonialsSection } from "./TestimonialsSection";
import { UseCasesSection } from "./UseCasesSection";
import { useScroll, useTransform } from "framer-motion";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works" },
  { href: "#demo", label: "Demo" },
  { href: "#metrics", label: "Metrics" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#comparison", label: "Comparison" },
  { href: "#faq", label: "FAQ" },
];

export function LandingPage() {
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <ParallaxBackdrop />
      <main className="min-h-screen bg-white text-slate-900">
        <motion.div
          aria-hidden="true"
          className="fixed top-0 left-0 z-50 h-0.5 origin-left bg-slate-900"
          style={{ scaleX: progressScale, width: "100%" }}
        />
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur"
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
            <a href="#hero" className="flex items-center gap-3">
              <Image
                src="/icon.svg"
                alt="AI Product Studio logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-md"
                priority
              />
              <span className="font-display text-base tracking-tight text-slate-900 sm:text-lg">
                AI Product Studio
              </span>
            </a>

            <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#demo"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Get Started
            </a>
          </div>
        </motion.header>

        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <InteractiveDemoSection />
        <MetricsSection />
        <UseCasesSection />
        <TestimonialsSection />
        <ComparisonSection />
        <FaqSection />
        <FinalCtaSection />
        <FooterSection />
      </main>
    </>
  );
}
