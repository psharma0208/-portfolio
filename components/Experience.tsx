"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/site-data";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="EXPERIENCE"
      title="Production experience that ships"
      subtitle="I work close to real users and real data, building systems that are secure, maintainable, and fast."
    >
      <div className="relative border-l border-neutral-200 dark:border-white/5 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
        {experience.map((item, idx) => (
          <motion.div
            key={`${item.company}-${item.start}`}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ delay: idx * 0.05 }}
            className="relative"
          >
            {/* Timeline node */}
            <span className="absolute -left-[33px] sm:-left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[rgb(var(--bg))]">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-500 ring-4 ring-violet-500/25 animate-pulse" />
            </span>

            <Card className="glow-card hover:border-violet-500/25">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between border-b border-neutral-100 dark:border-white/5 pb-4">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[rgb(var(--fg))]">
                    {item.role}
                  </h3>
                  <div className="mt-1 text-sm font-medium text-[rgb(var(--primary2))]">
                    {item.company} • {item.location}
                  </div>
                </div>
                <div className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-white/5 px-3.5 py-1 text-xs font-semibold text-[rgb(var(--muted))] border border-neutral-200 dark:border-white/5">
                  {item.start} — {item.end}
                </div>
              </div>

              <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--primary))] uppercase">
                    Key Contributions & Impact
                  </div>
                  <ul className="mt-4 space-y-3.5 text-sm leading-relaxed text-[rgb(var(--muted))] font-light">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span className="mt-1.5 inline-block h-2 w-2 flex-none rounded-full bg-violet-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-5">
                  <div>
                    <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--accent))] uppercase">
                      Core Metrics
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.metrics.map((m) => (
                        <Badge key={m} className="border-teal-500/10 bg-teal-500/5 text-teal-400 font-medium text-xs">
                          {m}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--muted))] uppercase">
                      Technology Applied
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <Badge key={t} className="border-white/5 bg-white/[0.02] text-xs font-light">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

