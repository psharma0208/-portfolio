"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Determine if the device is touch-capable.
  const isTouch = useMemo(() => {
    if (typeof window === "undefined") return true;
    return (
      ("ontouchstart" in window && window.ontouchstart !== null) ||
      (navigator.maxTouchPoints ?? 0) > 0
    );
  }, []);

  const enabled = !reducedMotion && !isTouch;

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.classList.contains("interactive");

      setHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-400/20 bg-neutral-400/5 dark:border-white/10 dark:bg-white/5 backdrop-blur-[2px]"
      animate={{
        x: pos.x,
        y: pos.y,
        scale: hovered ? 1.6 : 1,
        borderColor: hovered ? "rgba(139, 92, 246, 0.6)" : "rgba(255, 255, 255, 0.15)",
        backgroundColor: hovered ? "rgba(139, 92, 246, 0.08)" : "rgba(255, 255, 255, 0.03)",
      }}
      transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.1 }}
      aria-hidden="true"
    />
  );
}

