"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/site-data";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";
import { Badge } from "./ui/Badge";

function CategoryIcon({ category }: { category: string }) {
  const cn = "h-5 w-5 transition-transform group-hover:scale-110";
  switch (category.toLowerCase()) {
    case "backend":
      return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${cn} text-violet-400`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      );
    case "frontend":
      return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${cn} text-rose-400`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25M19.5 3h-15A2.25 2.25 0 002.25 5.25v9.75A2.25 2.25 0 004.5 17.25h15A2.25 2.25 0 0021.75 15V5.25A2.25 2.25 0 0019.5 3z" />
        </svg>
      );
    case "database":
      return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${cn} text-teal-400`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75m-16.5-3.75v3.75" />
        </svg>
      );
    case "cloud & devops":
      return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${cn} text-cyan-400`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      );
    case "ai":
      return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${cn} text-violet-400`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h3.75m-11.25-3h18a2.25 2.25 0 002.25-2.25V9.75A2.25 2.25 0 0018.75 7.5H5.25A2.25 2.25 0 003 9.75v6a2.25 2.25 0 002.25 2.25zM9.75 10.5h4.5m-4.5 3h4.5" />
        </svg>
      );
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${cn} text-neutral-400`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
}

function getGlowBorderClass(category: string): string {
  switch (category.toLowerCase()) {
    case "backend":
      return "hover:border-violet-500/25";
    case "frontend":
      return "hover:border-rose-500/25";
    case "database":
      return "hover:border-teal-500/25";
    case "cloud & devops":
      return "hover:border-cyan-500/25";
    case "ai":
      return "hover:border-violet-400/25";
    default:
      return "hover:border-white/10";
  }
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="SKILLS"
      title="A robust backend toolkit with modern tech adoption"
      subtitle="Heavy-duty Java and Spring Boot backend skills combined with active full-stack developments."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((cat, idx) => {
          const glowBorder = getGlowBorderClass(cat.category);
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ delay: idx * 0.03 }}
            >
              <Card className={`group glow-card h-full ${glowBorder}`}>
                <div className="flex items-center gap-3">
                  <CategoryIcon category={cat.category} />
                  <div className="font-display text-sm font-bold tracking-[0.22em] text-[rgb(var(--fg))] uppercase">
                    {cat.category}
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <Badge
                      key={s}
                      className="border-white/5 bg-white/[0.02] text-xs transition-all duration-300 hover:scale-[1.04] hover:bg-white/[0.06] hover:border-violet-500/20 cursor-default"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}


