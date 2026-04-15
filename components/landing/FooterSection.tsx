"use client";

import { motion } from "framer-motion";

const quickLinks = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works" },
  { href: "#demo", label: "Demo" },
  { href: "#metrics", label: "Metrics" },
  { href: "#comparison", label: "Comparison" },
  { href: "#faq", label: "FAQ" },
];

const columns = [
  {
    title: "Product",
    items: ["Features", "Demo", "Use Cases", "Metrics"],
  },
  {
    title: "Company",
    items: ["About", "Careers", "Contact", "Privacy"],
  },
  {
    title: "Resources",
    items: ["Docs", "Guides", "Support", "Terms"],
  },
];

export function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-24 sm:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="border-b border-slate-200 pb-12 lg:pb-16">
          <p className="text-xs font-medium tracking-[0.3em] text-slate-500 uppercase">
            AI Product Studio
          </p>
          <h3 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-[6.5rem]">
            AI Product Studio
          </h3>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            A premium AI SaaS platform for shaping ideas, visualizing products, and shipping with clarity.
          </p>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="max-w-md text-base leading-relaxed text-slate-600">
              Make your next product feel obvious from the first click.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  whileHover={{ y: -2 }}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {column.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-slate-900">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AI Product Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-slate-800">Privacy</a>
            <a href="#" className="transition hover:text-slate-800">Terms</a>
            <a href="#" className="transition hover:text-slate-800">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
