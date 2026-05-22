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
      <div className="grid gap-6">
        {experience.map((item, idx) => (
          <motion.div
            key={`${item.company}-${item.start}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ delay: idx * 0.04 }}
          >
            <Card>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-lg font-semibold tracking-tight">{item.role}</div>
                  <div className="mt-1 text-sm text-[rgb(var(--muted))]">
                    {item.company} • {item.location}
                  </div>
                </div>
                <div className="text-sm font-medium text-[rgb(var(--muted))]">
                  {item.start} — {item.end}
                </div>
              </div>

              <div className="mt-5 grid gap-6 lg:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
                    IMPACT
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[rgb(var(--muted))]">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
                    METRICS & FOCUS
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.metrics.map((m) => (
                      <Badge key={m}>{m}</Badge>
                    ))}
                  </div>
                  <div className="mt-5 text-xs font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
                    TECH
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
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

