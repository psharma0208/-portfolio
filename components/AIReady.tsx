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
      title="AI integration mindset (learning + building)"
      subtitle="I’m exploring practical AI features—where they actually help product and engineering outcomes."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ delay: 0.02 }}
        >
          <Card className="h-full">
            <div className="text-sm font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
              WHAT I’M LEARNING
            </div>
            <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">
              OpenAI API, prompt engineering, and safe integration patterns—so AI features are
              reliable, measurable, and maintainable.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["OpenAI API", "Prompt Engineering", "AI Integration"].map((x) => (
                <Badge key={x}>{x}</Badge>
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
          <Card className="h-full">
            <div className="text-sm font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
              HOW I THINK ABOUT AI
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[rgb(var(--muted))]">
              {[
                "Start with a clear user outcome and success metric.",
                "Keep data boundaries tight and handle failures gracefully.",
                "Prefer small, useful automations over flashy demos.",
              ].map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
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
          <Card className="h-full">
            <div className="text-sm font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
              BRANDING
            </div>
            <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">
              Backend engineer who can integrate AI thoughtfully—without sacrificing security,
              performance, or maintainability.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Security first", "Performance", "Maintainability"].map((x) => (
                <Badge key={x}>{x}</Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

