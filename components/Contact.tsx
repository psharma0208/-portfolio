"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { site } from "@/lib/site-data";
import { IconGitHub, IconLinkedIn, IconMail } from "./icons";

type Status = { type: "idle" } | { type: "sending" } | { type: "sent" } | { type: "error"; message: string };

export function Contact() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
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
        <Card>
          <div className="text-sm font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
            DIRECT
          </div>
          <div className="mt-4 grid gap-3 text-sm">
            <a className="ring-focus rounded-xl p-3 hover:bg-white/10" href={site.emailHref}>
              <div className="text-xs text-[rgb(var(--muted))]">Email</div>
              <div className="mt-1 font-medium">{site.email}</div>
            </a>
            <a className="ring-focus rounded-xl p-3 hover:bg-white/10" href={site.phoneHref}>
              <div className="text-xs text-[rgb(var(--muted))]">Phone</div>
              <div className="mt-1 font-medium">{site.phoneDisplay}</div>
            </a>
            <Link
              className="ring-focus rounded-xl p-3 hover:bg-white/10"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-xs text-[rgb(var(--muted))]">LinkedIn</div>
              <div className="mt-1 font-medium">{site.linkedin}</div>
            </Link>
            <Link
              className="ring-focus rounded-xl p-3 hover:bg-white/10"
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-xs text-[rgb(var(--muted))]">GitHub</div>
              <div className="mt-1 font-medium">{site.github}</div>
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass ring-focus inline-flex h-11 w-11 items-center justify-center rounded-full opacity-90 hover:opacity-100"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="h-5 w-5" />
            </Link>
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass ring-focus inline-flex h-11 w-11 items-center justify-center rounded-full opacity-90 hover:opacity-100"
              aria-label="GitHub"
            >
              <IconGitHub className="h-5 w-5" />
            </Link>
            <Link
              href={site.emailHref}
              className="glass ring-focus inline-flex h-11 w-11 items-center justify-center rounded-full opacity-90 hover:opacity-100"
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
          <Card>
            <div className="text-sm font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
              CONTACT FORM
            </div>
            <form className="mt-5 grid gap-4" onSubmit={onSubmit}>
              <label className="grid gap-2">
                <span className="text-xs font-medium text-[rgb(var(--muted))]">Name</span>
                <input
                  className="ring-focus h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-[rgb(var(--fg))] outline-none placeholder:text-[rgb(var(--muted))] placeholder:opacity-70"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-medium text-[rgb(var(--muted))]">Email</span>
                <input
                  className="ring-focus h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-[rgb(var(--fg))] outline-none placeholder:text-[rgb(var(--muted))] placeholder:opacity-70"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-medium text-[rgb(var(--muted))]">Message</span>
                <textarea
                  className="ring-focus min-h-[120px] resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[rgb(var(--fg))] outline-none placeholder:text-[rgb(var(--muted))] placeholder:opacity-70"
                  placeholder="Tell me what you’re building…"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status.type === "sending"}
                  className="disabled:opacity-60"
                >
                  {status.type === "sending" ? "Sending..." : "Send Message"}
                </Button>
                {status.type === "sent" ? (
                  <p className="text-sm text-emerald-300">Message sent. Thank you!</p>
                ) : status.type === "error" ? (
                  <p className="text-sm text-rose-300">{status.message}</p>
                ) : (
                  <p className="text-sm text-[rgb(var(--muted))]">
                    This demo form validates and responds instantly.
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
