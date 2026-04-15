"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

type SectionRevealProps = {
  delay?: number;
} & Omit<
  HTMLMotionProps<"section">,
  "variants" | "initial" | "whileInView" | "custom" | "viewport"
>;

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  ...sectionProps
}: SectionRevealProps) {
  return (
    <motion.section
      {...sectionProps}
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      custom={delay}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.section>
  );
}
