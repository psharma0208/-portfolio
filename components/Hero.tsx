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
    <section id="top" className="pt-28 sm:pt-32">
      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-semibold tracking-[0.22em] text-[rgb(var(--muted))]"
            >
              {site.experienceLabel} • {site.company} • {site.location}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Building reliable{" "}
              <span className="bg-gradient-to-r from-violet-500 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                backend systems
              </span>{" "}
              for modern education platforms.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-2xl text-base leading-7 text-[rgb(var(--muted))] sm:text-lg"
            >
              I’m <span className="font-medium text-[rgb(var(--fg))]">{site.name}</span>, a Java
              backend developer focused on clean APIs, secure authentication, and scalable database
              designs—now leveling up with Next.js, AWS, Docker, CI/CD, Redis, and AI integration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              <Badge>Spring Boot</Badge>
              <Badge>REST APIs</Badge>
              <Badge>MySQL</Badge>
              <Badge>Security (JWT)</Badge>
              <Badge>AI Integration</Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
              <ButtonAnchor href={site.resumeHref} download variant="secondary" size="md">
                Download Resume
              </ButtonAnchor>
              <ButtonLink href="#contact" variant="primary" size="md">
                Hire Me
              </ButtonLink>
              <div className="flex items-center gap-2 sm:ml-auto">
                {socials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass ring-focus inline-flex h-11 w-11 items-center justify-center rounded-full text-[rgb(var(--fg))] opacity-85 hover:opacity-100"
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
              className="mt-8 text-sm text-[rgb(var(--muted))]"
            >
              <span className="mr-2 inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Available for backend roles
              </span>
              <span className="hidden sm:inline">•</span>{" "}
              <span className="mt-2 block sm:mt-0 sm:inline">
                Typing:{" "}
                <span className="font-medium text-[rgb(var(--fg))]">
                  {text}
                  <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] bg-[rgb(var(--fg))] opacity-60" />
                </span>
                <span className="sr-only">{word}</span>
              </span>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass relative overflow-hidden rounded-3xl p-6"
          >
            <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.35),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.28),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.18),transparent_55%)]" />
            <div className="relative">
              <div className="text-xs font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
                QUICK STATS
              </div>
              <dl className="mt-5 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs text-[rgb(var(--muted))]">Experience</dt>
                  <dd className="mt-1 text-lg font-semibold">2+ years</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs text-[rgb(var(--muted))]">Core Strength</dt>
                  <dd className="mt-1 text-lg font-semibold">Secure, scalable APIs</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs text-[rgb(var(--muted))]">Currently Learning</dt>
                  <dd className="mt-1 text-lg font-semibold">Next.js • AWS • Docker • AI</dd>
                </div>
              </dl>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
