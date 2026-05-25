"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="ABOUT ME"
      title="Backend engineering depth with system-level responsibility"
      subtitle="I design and maintain production backend systems for high-traffic education portals, ensuring high security and data integrity—while expanding into full-stack cloud and AI architectures."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glow-card hover:border-violet-500/20">
          <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--primary))] uppercase">
            Professional Profile
          </div>
          <p className="mt-5 text-base leading-relaxed text-[rgb(var(--muted))] font-light">
            I’m a focused Java Backend Developer who loves creating reliable, production-grade applications. At <span className="font-semibold text-[rgb(var(--fg))]">Entire Techno Solution</span>, I specialized in core backend architecture, designing performant REST APIs, and implementing robust Spring Security workflows using JWT.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[rgb(var(--muted))] font-light">
            I approach coding with a backend-first mindset—prioritizing data integrity, clean schema design, and query optimization before connecting user interfaces.
          </p>
        </Card>

        <Card className="glow-card hover:border-accent/25">
          <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--accent))] uppercase">
            Current Skill Expansion
          </div>
          <p className="mt-5 text-base leading-relaxed text-[rgb(var(--muted))] font-light">
            To deliver complete end-to-end features, I&apos;ve expanded my expertise into React, Next.js, and TypeScript. I&apos;m also active in containerizing systems with Docker, orchestrating on AWS, setting up automated CI/CD pipelines, and integrating AI agents via OpenAI APIs.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Next.js", "AWS", "Docker", "CI/CD", "Redis", "OpenAI API"].map((x) => (
              <Badge key={x} className="border-white/5 bg-white/[0.02] text-xs font-medium">{x}</Badge>
            ))}
          </div>
        </Card>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="glass glow-card mt-8 rounded-3xl p-8 hover:border-white/10"
      >
        <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--primary2))] uppercase">
          🚀 My Technical Roadmap
        </div>
        <ol className="mt-6 grid gap-6 text-[rgb(var(--muted))] sm:grid-cols-3">
          <li className="relative group rounded-2xl border border-white/5 bg-white/[0.01] p-5 transition-all hover:bg-white/[0.03] hover:border-violet-500/20">
            <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--primary))]">
              PHASE 01
            </div>
            <div className="mt-3 font-semibold text-[rgb(var(--fg))] font-display">Backend Core</div>
            <p className="mt-2 text-sm leading-relaxed font-light">
              Mastered Java backend fundamentals, RESTful standards, Spring Boot microservices, and MySQL schema design.
            </p>
          </li>
          <li className="relative group rounded-2xl border border-white/5 bg-white/[0.01] p-5 transition-all hover:bg-white/[0.03] hover:border-rose-500/20">
            <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--primary2))]">
              PHASE 02
            </div>
            <div className="mt-3 font-semibold text-[rgb(var(--fg))] font-display">Production Scale</div>
            <p className="mt-2 text-sm leading-relaxed font-light">
              Shipped secure endpoints for ERPs under traffic, implemented JWT, optimized DB queries, and resolved concurrency bugs.
            </p>
          </li>
          <li className="relative group rounded-2xl border border-white/5 bg-white/[0.01] p-5 transition-all hover:bg-white/[0.03] hover:border-teal-500/20">
            <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--accent))]">
              PHASE 03
            </div>
            <div className="mt-3 font-semibold text-[rgb(var(--fg))] font-display">Full-Stack & Cloud</div>
            <p className="mt-2 text-sm leading-relaxed font-light">
              Building automated CI/CD pipelines, containerizing apps with Docker, scaling on AWS, and embedding AI services.
            </p>
          </li>
        </ol>
      </motion.div>
    </Section>
  );
}
