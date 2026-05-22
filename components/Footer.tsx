import Link from "next/link";
import { Container } from "./ui/Container";
import { site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} {site.name}. Built with Next.js + Tailwind + Framer Motion.
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link className="opacity-80 hover:opacity-100" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
          <Link className="opacity-80 hover:opacity-100" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link className="opacity-80 hover:opacity-100" href={site.resumeHref}>
            Resume
          </Link>
        </div>
      </Container>
    </footer>
  );
}

