"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  // Determine if the device is touch capable after client mount
  const isTouch = useMemo(() => {
    if (typeof window === "undefined") return false; // assume non-touch on server
    return (
      ("ontouchstart" in window && window.ontouchstart !== null) ||
      (navigator.maxTouchPoints ?? 0) > 0
    );
  }, []);

  const enabled = !reducedMotion && !isTouch;

  // Set mounted flag after component is mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !enabled) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mounted, enabled]);

  if (!mounted || !enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/5 backdrop-blur"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.15 }}
      aria-hidden="true"
    />
  );
}
