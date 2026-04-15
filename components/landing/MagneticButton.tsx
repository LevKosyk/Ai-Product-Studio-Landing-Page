"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export function MagneticButton({
  children,
  className,
  onClick,
  disabled,
}: MagneticButtonProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 15, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 15, mass: 0.4 });

  const handleMove: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    pointerX.set(Math.max(Math.min(x * 0.24, 12), -12));
    pointerY.set(Math.max(Math.min(y * 0.24, 12), -12));
  };

  const resetPosition = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.button
      type="button"
      className={`magnetic-target relative ${className ?? ""}`}
      style={{ x: smoothX, y: smoothY }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.01 }}
      onMouseMove={handleMove}
      onMouseLeave={resetPosition}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
