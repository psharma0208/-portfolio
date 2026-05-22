import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
        "transition-transform duration-300 will-change-transform hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </div>
  );
}

