"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setOpen(false), 900);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
          aria-hidden="true"
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
          >
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.25)]" />
            <div className="mt-4 text-center text-xs font-semibold tracking-[0.22em] text-white/70">
              LOADING
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

