"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects, site } from "@/lib/site-data";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { ButtonLink } from "./ui/Button";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="PROJECTS"
      title="Projects built for real schools & workflows"
      subtitle="Selected ERP platforms and system modules built with a focus on database stability, scalability, and operational workflows."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ delay: idx * 0.04 }}
            className="h-full"
          >
            <Card className="glow-card flex h-full flex-col hover:border-violet-500/20 group justify-between">
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-violet-400 transition-colors group-hover:bg-violet-500/10 group-hover:text-violet-300">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0A2.25 2.25 0 003 15v1.5a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 16.5V15a2.25 2.25 0 00-2.25-2.25m-19.5 0h19.5m-16.5-3.75h.008v.008H3.75V6a2.25 2.25 0 012.25-2.25h5.25a2.25 2.25 0 012.25 2.25v1.313" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[rgb(var(--fg))] group-hover:text-[rgb(var(--primary))] transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))] font-light">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="font-display text-[10px] font-bold tracking-[0.25em] text-[rgb(var(--primary2))] uppercase">
                    Highlights
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[rgb(var(--muted))] font-light">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 items-start">
                        <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-rose-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="mt-6">
                  <div className="font-display text-[10px] font-bold tracking-[0.25em] text-[rgb(var(--muted))] uppercase">
                    Tech Stack
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Badge key={t} className="border-white/5 bg-white/[0.01] text-xs font-light py-0.5 px-2">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-neutral-100 dark:border-white/5 pt-4">
                  {p.githubHref ? (
                    <ButtonLink href={p.githubHref} variant="secondary" size="sm">
                      GitHub
                    </ButtonLink>
                  ) : (
                    <Link
                      href={site.github}
                      className="text-xs font-semibold text-[rgb(var(--fg))] opacity-75 hover:opacity-100 hover:text-[rgb(var(--primary))] transition-all flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub profile <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">→</span>
                    </Link>
                  )}
                  {p.demoHref ? (
                    <ButtonLink href={p.demoHref} variant="primary" size="sm">
                      Demo
                    </ButtonLink>
                  ) : null}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
