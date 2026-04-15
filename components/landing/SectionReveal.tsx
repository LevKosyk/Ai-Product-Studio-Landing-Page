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
    y: 44,
    filter: "blur(7px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay,
      ease: [0.21, 1, 0.31, 1],
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
      viewport={{ once: true, amount: 0.22 }}
    >
      {children}
    </motion.section>
  );
}
