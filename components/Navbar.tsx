"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { navItems, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { ButtonLink } from "./ui/Button";

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.8" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.8" strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const desktopLinks = useMemo(
    () =>
      navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-[rgb(var(--fg))] opacity-80 transition hover:opacity-100"
        >
          {item.label}
        </Link>
      )),
    [],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="nav-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="#top" className="group inline-flex items-center gap-2 ring-focus rounded-full px-2 py-1">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.35)]" />
            <span className="text-sm font-semibold tracking-tight">{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {desktopLinks}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden md:inline-flex" />
            <ButtonLink href="#contact" variant="primary" size="sm" className="hidden md:inline-flex">
              Hire Me
            </ButtonLink>

            <button
              type="button"
              className={cn(
                "glass ring-focus inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden",
              )}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="glass mt-3 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
                    NAVIGATION
                  </div>
                  <ThemeToggle />
                </div>
                <div className="mt-4 grid gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="ring-focus rounded-xl px-3 py-2 text-sm font-medium opacity-90 hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <ButtonLink href="#contact" variant="primary" size="sm" className="mt-2">
                    Hire Me
                  </ButtonLink>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
