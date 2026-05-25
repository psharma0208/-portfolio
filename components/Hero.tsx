"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/lib/site-data";
import { ButtonAnchor, ButtonLink } from "./ui/Button";
import { Container } from "./ui/Container";
import { Badge } from "./ui/Badge";
import { IconGitHub, IconLinkedIn, IconMail } from "./icons";

const typingPhrases = [
  "Java Backend Developer",
  "Spring Boot Engineer",
  "REST API Specialist",
  "AI-Ready Engineer",
] as const;

function useTypewriter(words: readonly string[]) {
  const [i, setI] = useState(0);
  const [sub, setSub] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const word = words[i] ?? "";
    const isDone = sub >= word.length;
    const isEmpty = sub <= 0;

    const t = window.setTimeout(
      () => {
        if (forward) {
          if (isDone) {
            setForward(false);
            return;
          }
          setSub((v) => v + 1);
        } else {
          if (isEmpty) {
            setForward(true);
            setI((v) => (v + 1) % words.length);
            return;
          }
          setSub((v) => v - 1);
        }
      },
      forward ? (isDone ? 900 : 45) : 22,
    );
    return () => window.clearTimeout(t);
  }, [forward, i, sub, words]);

  const text = (words[i] ?? "").slice(0, sub);
  return { text, word: words[i] ?? "" };
}

export function Hero() {
  const { text, word } = useTypewriter(typingPhrases);
  const socials = useMemo(
    () => [
      {
        label: "LinkedIn",
        href: site.linkedin,
        icon: <IconLinkedIn className="h-5 w-5" />,
      },
      { label: "GitHub", href: site.github, icon: <IconGitHub className="h-5 w-5" /> },
      { label: "Email", href: site.emailHref, icon: <IconMail className="h-5 w-5" /> },
    ],
    [],
  );

  return (
    <section id="top" className="relative pt-28 sm:pt-36 overflow-hidden">
      {/* Floating light orbs for premium aura effect */}
      <div className="absolute top-10 right-1/4 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 left-10 -z-10 h-80 w-80 rounded-full bg-rose-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -z-10 h-96 w-96 rounded-full bg-teal-500/5 blur-[150px] pointer-events-none" />

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold tracking-[0.25em] text-[rgb(var(--primary))] uppercase"
            >
              {site.experienceLabel} • {site.company} • {site.location}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="font-display mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl sm:leading-[1.1] text-[rgb(var(--fg))]"
            >
              Building{" "}
              <span className="text-gradient-primary">
                reliable backend
              </span>{" "}
              systems for modern platforms.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-[rgb(var(--muted))] sm:text-lg font-light"
            >
              I’m <span className="font-semibold text-[rgb(var(--fg))]">{site.name}</span>, a Java
              backend developer focused on clean APIs, secure authentication, and scalable database
              designs—now leveling up with Next.js, AWS, Docker, CI/CD, Redis, and AI integration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              <Badge className="border-violet-500/10 bg-violet-500/5 text-violet-400">Spring Boot</Badge>
              <Badge className="border-cyan-500/10 bg-cyan-500/5 text-cyan-400">REST APIs</Badge>
              <Badge className="border-teal-500/10 bg-teal-500/5 text-teal-400">MySQL</Badge>
              <Badge className="border-rose-500/10 bg-rose-500/5 text-rose-400">Security (JWT)</Badge>
              <Badge className="border-purple-500/10 bg-purple-500/5 text-purple-400">AI Integration</Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <ButtonAnchor href={site.resumeHref} download variant="secondary" size="md">
                Download Resume
              </ButtonAnchor>
              <ButtonLink href="#contact" variant="primary" size="md">
                Hire Me
              </ButtonLink>
              <div className="flex items-center gap-3 sm:ml-auto">
                {socials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass ring-focus inline-flex h-11 w-11 items-center justify-center rounded-full text-[rgb(var(--fg))] opacity-80 transition hover:scale-105 hover:opacity-100 hover:border-violet-500/30"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-8 text-sm text-[rgb(var(--muted))] flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/5 pt-6"
            >
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for full-time backend roles
              </span>
              <span className="hidden sm:inline opacity-30">•</span>{" "}
              <span className="inline-block">
                Currently coding:{" "}
                <span className="font-semibold text-[rgb(var(--fg))]">
                  {text}
                  <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] bg-violet-400 opacity-80 animate-ping" />
                </span>
                <span className="sr-only">{word}</span>
              </span>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass glow-card relative overflow-hidden rounded-3xl p-8"
          >
            <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(244,63,94,0.25),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(45,212,191,0.15),transparent_55%)]" />
            <div className="relative">
              <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--primary))] uppercase">
                ⚡ Quick Highlights
              </div>
              <dl className="mt-6 grid gap-4">
                <div className="group rounded-2xl border border-white/5 bg-white/[0.01] p-5 transition-all hover:bg-white/[0.03]">
                  <dt className="text-xs text-[rgb(var(--muted))] font-medium uppercase tracking-wider">Experience</dt>
                  <dd className="mt-1 text-2xl font-bold font-display text-gradient-purple-cyan">2+ Years</dd>
                  <dd className="mt-0.5 text-xs text-[rgb(var(--muted))]">Building production education portals</dd>
                </div>
                <div className="group rounded-2xl border border-white/5 bg-white/[0.01] p-5 transition-all hover:bg-white/[0.03]">
                  <dt className="text-xs text-[rgb(var(--muted))] font-medium uppercase tracking-wider">Core Strength</dt>
                  <dd className="mt-1 text-lg font-bold font-display text-[rgb(var(--fg))]">Secure & Scalable APIs</dd>
                  <dd className="mt-0.5 text-xs text-[rgb(var(--muted))]">Spring Security, JWT, Query Optimization</dd>
                </div>
                <div className="group rounded-2xl border border-white/5 bg-white/[0.01] p-5 transition-all hover:bg-white/[0.03]">
                  <dt className="text-xs text-[rgb(var(--muted))] font-medium uppercase tracking-wider">Learning Curve</dt>
                  <dd className="mt-1 text-lg font-bold font-display text-[rgb(var(--accent))]">Next.js • AWS • Docker • AI</dd>
                  <dd className="mt-0.5 text-xs text-[rgb(var(--muted))]">Adding full-stack & AI depth</dd>
                </div>
              </dl>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}

