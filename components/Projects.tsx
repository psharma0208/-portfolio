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
      title="Projects built for real schools, real workflows"
      subtitle="Premium cards with clear highlights and tech stacks—optimized for recruiter scanability."
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
            <Card className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[rgb(var(--muted))]">{p.description}</p>
                </div>
              </div>

              <div className="mt-5">
                <div className="text-xs font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
                  HIGHLIGHTS
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[rgb(var(--muted))]">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-violet-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <div className="text-xs font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
                  TECH STACK
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center gap-3">
                {p.githubHref ? (
                  <ButtonLink href={p.githubHref} variant="secondary" size="sm">
                    GitHub
                  </ButtonLink>
                ) : (
                  <Link
                    href={site.github}
                    className="text-sm font-medium text-[rgb(var(--fg))] opacity-80 hover:opacity-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub profile →
                  </Link>
                )}
                {p.demoHref ? (
                  <ButtonLink href={p.demoHref} variant="primary" size="sm">
                    Demo
                  </ButtonLink>
                ) : null}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
