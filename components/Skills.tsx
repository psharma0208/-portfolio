"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/site-data";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";
import { Badge } from "./ui/Badge";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="SKILLS"
      title="A modern backend toolkit + frontend momentum"
      subtitle="Production-ready backend expertise, paired with a growing full-stack and AI-ready mindset."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ delay: idx * 0.03 }}
          >
            <Card className="h-full">
              <div className="text-sm font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
                {cat.category}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <Badge key={s} className="hover:scale-[1.02] transition-transform">
                    {s}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

