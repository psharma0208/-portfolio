"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="ABOUT"
      title="Backend-first mindset with product-level ownership"
      subtitle="I build production-grade backend services with a focus on security, maintainability, and performance—then connect the dots with modern frontend and DevOps."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <div className="text-sm font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
            PROFESSIONAL SUMMARY
          </div>
          <p className="mt-4 text-base leading-7 text-[rgb(var(--muted))]">
            I’m a Java Backend Developer experienced in Spring Boot, REST APIs, and MySQL. I’ve
            worked on real-world education platforms where reliability, data correctness, and
            secure access control are non-negotiable.
          </p>
          <p className="mt-4 text-base leading-7 text-[rgb(var(--muted))]">
            My day-to-day work includes designing APIs, implementing authentication and
            authorization, optimizing queries, and collaborating with teams to ship stable releases.
          </p>
        </Card>

        <Card>
          <div className="text-sm font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
            CURRENT FOCUS
          </div>
          <p className="mt-4 text-base leading-7 text-[rgb(var(--muted))]">
            I’m expanding into React and Next.js to better understand end-to-end product delivery.
            I’m also learning AWS, Docker, CI/CD, Redis, and AI integration to build faster and
            smarter systems.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["React", "Next.js", "AWS", "Docker", "CI/CD", "Redis", "OpenAI API"].map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </Card>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6"
      >
        <div className="text-sm font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
          CAREER JOURNEY (SNAPSHOT)
        </div>
        <ol className="mt-4 grid gap-3 text-[rgb(var(--muted))] sm:grid-cols-3">
          <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
              STEP 01
            </div>
            <div className="mt-2 font-medium text-[rgb(var(--fg))]">Backend fundamentals</div>
            <p className="mt-2 text-sm leading-6">
              Java, Spring Boot, clean REST conventions, and database design.
            </p>
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
              STEP 02
            </div>
            <div className="mt-2 font-medium text-[rgb(var(--fg))]">Production systems</div>
            <p className="mt-2 text-sm leading-6">
              Real traffic, secure auth, bug fixes, performance and stability improvements.
            </p>
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
              STEP 03
            </div>
            <div className="mt-2 font-medium text-[rgb(var(--fg))]">Full-stack & AI</div>
            <p className="mt-2 text-sm leading-6">
              Next.js + cloud + DevOps + AI integration to deliver complete solutions.
            </p>
          </li>
        </ol>
      </motion.div>
    </Section>
  );
}
