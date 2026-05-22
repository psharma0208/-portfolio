import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full ring-focus transition will-change-transform active:translate-y-px";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-violet-600 to-cyan-400 text-black shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_40px_rgba(124,58,237,0.25)] hover:brightness-110",
  secondary:
    "glass text-[rgb(var(--fg))] hover:bg-white/10",
  ghost: "text-[rgb(var(--fg))] opacity-90 hover:bg-white/10",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm sm:text-base",
};

export function Button({
  variant = "secondary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & React.ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "secondary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string }) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  href,
  variant = "secondary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & React.ComponentPropsWithoutRef<"a"> & { href: string }) {
  return (
    <a href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
