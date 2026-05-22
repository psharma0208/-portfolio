"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 20, mass: 0.2 });
  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left bg-gradient-to-r from-violet-600 via-cyan-400 to-emerald-400"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

