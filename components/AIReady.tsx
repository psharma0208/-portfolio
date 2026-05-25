"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";

export function AIReady() {
  return (
    <Section
      id="ai"
      eyebrow="AI READY"
      title="Practical AI Integration & Engineering"
      subtitle="I focus on integrating AI services into production pipelines with a strong emphasis on reliability, guardrails, and cost efficiency."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ delay: 0.02 }}
        >
          <Card className="glow-card hover:border-violet-500/25 h-full">
            <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--primary))] uppercase">
              Core AI Stack
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))] font-light">
              Integrating LLM APIs (OpenAI, Claude) using structured JSON outputs, designing resilient retry handlers, and managing context constraints effectively.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["OpenAI API", "Structured Outputs", "Context Controls"].map((x) => (
                <Badge key={x} className="border-white/5 bg-white/[0.02] text-xs font-light">{x}</Badge>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ delay: 0.06 }}
        >
          <Card className="glow-card hover:border-rose-500/25 h-full">
            <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--primary2))] uppercase">
              Engineering Principles
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[rgb(var(--muted))] font-light">
              {[
                "Strict isolation of user data boundaries for privacy.",
                "Graceful degradation handlers for API outages.",
                "Optimizing prompt sizes to keep latencies low.",
              ].map((h) => (
                <li key={h} className="flex gap-2.5 items-start">
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-rose-400" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ delay: 0.1 }}
        >
          <Card className="glow-card hover:border-teal-500/25 h-full">
            <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--accent))] uppercase">
              System Alignment
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))] font-light">
              Bringing a backend-first mindset to AI: setting up rate-limiters, tracking audit logs for model choices, and monitoring semantic latency budgets.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["System Guardrails", "Rate-Limiting", "Cost Monitoring"].map((x) => (
                <Badge key={x} className="border-white/5 bg-white/[0.02] text-xs font-light">{x}</Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

