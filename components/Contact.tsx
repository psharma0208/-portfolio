"use client";

import { site } from "@/lib/site-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IconGitHub, IconLinkedIn, IconMail } from "./icons";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

type Status = { type: "idle" } | { type: "sending" } | { type: "sent" } | { type: "error"; message: string };

export function Contact() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [mailtoFallback, setMailtoFallback] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "sending" });
    setMailtoFallback(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string; mailto?: string }
          | null;
        if (res.status === 501 && data?.mailto) setMailtoFallback(data.mailto);
        throw new Error(data?.error ?? "Something went wrong");
      }
      setStatus({ type: "sent" });
      setForm({ name: "", email: "", message: "" });
      window.setTimeout(() => setStatus({ type: "idle" }), 2500);
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Failed to send" });
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="CONTACT"
      title="Let’s build something reliable"
      subtitle="Reach out for backend roles, API work, or platform engineering discussions."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="glow-card hover:border-violet-500/20">
          <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--primary))] uppercase">
            Direct Channels
          </div>
          <div className="mt-6 grid gap-3 text-sm">
            <a className="group rounded-xl border border-neutral-100 dark:border-white/5 bg-white/[0.01] p-4 transition-all hover:bg-white/[0.03] hover:border-violet-500/20" href={site.emailHref}>
              <div className="text-xs text-[rgb(var(--muted))] font-medium uppercase tracking-wider">Email</div>
              <div className="mt-1 font-semibold font-display text-[rgb(var(--fg))] group-hover:text-[rgb(var(--primary))] transition-colors">{site.email}</div>
            </a>
            <a className="group rounded-xl border border-neutral-100 dark:border-white/5 bg-white/[0.01] p-4 transition-all hover:bg-white/[0.03] hover:border-rose-500/20" href={site.phoneHref}>
              <div className="text-xs text-[rgb(var(--muted))] font-medium uppercase tracking-wider">Phone</div>
              <div className="mt-1 font-semibold font-display text-[rgb(var(--fg))] group-hover:text-[rgb(var(--primary2))] transition-colors">{site.phoneDisplay}</div>
            </a>
            <Link
              className="group rounded-xl border border-neutral-100 dark:border-white/5 bg-white/[0.01] p-4 transition-all hover:bg-white/[0.03] hover:border-teal-500/20"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-xs text-[rgb(var(--muted))] font-medium uppercase tracking-wider">LinkedIn</div>
              <div className="mt-1 font-semibold font-display text-[rgb(var(--fg))] group-hover:text-[rgb(var(--accent))] transition-colors">{site.linkedin}</div>
            </Link>
            <Link
              className="group rounded-xl border border-neutral-100 dark:border-white/5 bg-white/[0.01] p-4 transition-all hover:bg-white/[0.03] hover:border-violet-500/20"
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-xs text-[rgb(var(--muted))] font-medium uppercase tracking-wider">GitHub</div>
              <div className="mt-1 font-semibold font-display text-[rgb(var(--fg))] group-hover:text-[rgb(var(--primary))] transition-colors">{site.github}</div>
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-neutral-100 dark:border-white/5 pt-6">
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass ring-focus inline-flex h-11 w-11 items-center justify-center rounded-full opacity-80 hover:opacity-100 transition-all hover:scale-105 hover:border-violet-500/20"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="h-5 w-5" />
            </Link>
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass ring-focus inline-flex h-11 w-11 items-center justify-center rounded-full opacity-80 hover:opacity-100 transition-all hover:scale-105 hover:border-rose-500/20"
              aria-label="GitHub"
            >
              <IconGitHub className="h-5 w-5" />
            </Link>
            <Link
              href={site.emailHref}
              className="glass ring-focus inline-flex h-11 w-11 items-center justify-center rounded-full opacity-80 hover:opacity-100 transition-all hover:scale-105 hover:border-teal-500/20"
              aria-label="Email"
            >
              <IconMail className="h-5 w-5" />
            </Link>
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        >
          <Card className="glow-card hover:border-violet-500/20">
            <div className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--primary2))] uppercase">
              Send Message
            </div>
            <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-[rgb(var(--muted))] uppercase tracking-wider">Name</span>
                <input
                  className="h-12 rounded-xl border border-neutral-200 dark:border-white/5 bg-white/[0.02] px-4 text-sm text-[rgb(var(--fg))] outline-none placeholder:text-[rgb(var(--muted))] placeholder:opacity-60 transition-all focus:border-violet-500/50 focus:bg-white/[0.04] focus:ring-2 focus:ring-violet-500/20"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-[rgb(var(--muted))] uppercase tracking-wider">Email</span>
                <input
                  className="h-12 rounded-xl border border-neutral-200 dark:border-white/5 bg-white/[0.02] px-4 text-sm text-[rgb(var(--fg))] outline-none placeholder:text-[rgb(var(--muted))] placeholder:opacity-60 transition-all focus:border-violet-500/50 focus:bg-white/[0.04] focus:ring-2 focus:ring-violet-500/20"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-[rgb(var(--muted))] uppercase tracking-wider">Message</span>
                <textarea
                  className="min-h-[120px] resize-y rounded-xl border border-neutral-200 dark:border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-[rgb(var(--fg))] outline-none placeholder:text-[rgb(var(--muted))] placeholder:opacity-60 transition-all focus:border-violet-500/50 focus:bg-white/[0.04] focus:ring-2 focus:ring-violet-500/20"
                  placeholder="Tell me what you’re building…"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-neutral-100 dark:border-white/5 pt-6 mt-2">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status.type === "sending"}
                  className="disabled:opacity-60 interactive"
                >
                  {status.type === "sending" ? "Sending..." : "Send Message"}
                </Button>
                {status.type === "sent" ? (
                  <p className="text-sm font-semibold text-emerald-400">Message sent. Thank you!</p>
                ) : status.type === "error" ? (
                  <div className="text-sm text-rose-400">
                    <p>{status.message}</p>
                    {mailtoFallback ? (
                      <p className="mt-2">
                        <a className="underline underline-offset-4" href={mailtoFallback}>
                          Open email app instead
                        </a>
                      </p>
                    ) : null}
                  </div>
                ) : (
                  <p className="text-xs text-[rgb(var(--muted))] font-light">
                    Validates and responds instantly.
                  </p>
                )}
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
