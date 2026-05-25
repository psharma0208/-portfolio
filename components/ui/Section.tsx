import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-24", className)}>
      <Container>
        <header className="max-w-3xl">
          {eyebrow ? (
            <p className="font-display text-xs font-bold tracking-[0.25em] text-[rgb(var(--primary))] uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-[rgb(var(--fg))]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[rgb(var(--muted))] font-light">
              {subtitle}
            </p>
          ) : null}
        </header>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}


