"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  size: 2 + (index % 4),
  left: `${(index * 17) % 100}%`,
  top: `${(index * 29 + 8) % 100}%`,
  duration: 11 + (index % 7) * 2,
  delay: (index % 6) * 0.7,
  driftX: ((index % 5) - 2) * 12,
}));

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const deepLayerY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const midLayerY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-[-18%] opacity-70"
        style={{ y: deepLayerY }}
      >
        <div className="section-grid animate-grid-drift absolute inset-0" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{ y: midLayerY }}
      >
        <div className="animate-breathe absolute top-[12%] left-[10%] h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(72,221,255,0.42),transparent_68%)] blur-2xl" />
        <div className="animate-float absolute top-[22%] right-[10%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(95,145,255,0.35),transparent_72%)] blur-3xl" />
        <div className="animate-float-delayed absolute bottom-[8%] left-[28%] h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(47,240,199,0.24),transparent_72%)] blur-3xl" />
      </motion.div>

      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-cyan-200/60"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
              boxShadow: "0 0 18px rgba(114, 230, 255, 0.55)",
            }}
            animate={{
              y: [0, -34, 0],
              x: [0, particle.driftX, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.18, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-50">
        {Array.from({ length: 9 }).map((_, index) => (
          <motion.div
            key={`stream-${index}`}
            className="absolute top-0 h-full w-px bg-linear-to-b from-transparent via-cyan-200/30 to-transparent"
            style={{ left: `${10 + index * 11}%` }}
            animate={{ opacity: [0.25, 0.8, 0.25] }}
            transition={{
              duration: 4 + index * 0.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,transparent_5%,rgba(2,4,11,0.6)_48%,rgba(2,4,11,0.98)_100%)]" />
    </div>
  );
}
