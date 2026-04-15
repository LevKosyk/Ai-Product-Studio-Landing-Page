"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

export function CustomCursor() {
  const [interactive, setInteractive] = useState(false);

  const enabled = useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") {
        return () => {};
      }

      const mediaQuery = window.matchMedia("(pointer: fine)");
      const handleChange = () => onStoreChange();
      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    },
    () => {
      if (typeof window === "undefined") {
        return false;
      }

      return window.matchMedia("(pointer: fine)").matches;
    },
    () => false,
  );

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, { stiffness: 210, damping: 26, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 210, damping: 26, mass: 0.35 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleTarget = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const nextInteractive = Boolean(
        target?.closest("a, button, .magnetic-target"),
      );
      setInteractive((current) =>
        current === nextInteractive ? current : nextInteractive,
      );
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleTarget);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleTarget);
    };
  }, [x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/25 blur-xl"
        style={{ x: smoothX, y: smoothY, scale: interactive ? 1.5 : 1 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/70 bg-cyan-100/75"
        style={{ x: smoothX, y: smoothY, scale: interactive ? 1.25 : 1 }}
      />
    </>
  );
}
