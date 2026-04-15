"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxBackdrop() {
  const { scrollYProgress } = useScroll();
  const topBlobY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const midBlobY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const bottomBlobY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white">
      <motion.div style={{ y: gridY }} className="absolute inset-0 opacity-[0.5]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black_28%,transparent_82%)]" />
      </motion.div>

      <motion.div
        style={{ y: topBlobY }}
        className="absolute top-[-8%] left-[8%] h-[26rem] w-[26rem] rounded-full bg-slate-100/80 blur-3xl"
      />
      <motion.div
        style={{ y: midBlobY }}
        className="absolute top-[18%] right-[4%] h-[22rem] w-[22rem] rounded-full bg-slate-200/60 blur-3xl"
      />
      <motion.div
        style={{ y: bottomBlobY }}
        className="absolute bottom-[-10%] left-[28%] h-[30rem] w-[30rem] rounded-full bg-slate-100/70 blur-3xl"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_55%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.45)_92%)]" />
    </div>
  );
}
