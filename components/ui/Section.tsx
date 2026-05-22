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
        <header className="max-w-2xl">
          {eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.22em] text-[rgb(var(--muted))]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {subtitle ? (
            <p className="mt-3 text-base leading-7 text-[rgb(var(--muted))]">{subtitle}</p>
          ) : null}
        </header>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

