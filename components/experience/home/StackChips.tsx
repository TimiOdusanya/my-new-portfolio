import { cn } from "@/lib/utils";

type StackChipsProps = {
  items: string[];
  tone?: "ink" | "bone";
  className?: string;
};

export function StackChips({ items, tone = "ink", className }: StackChipsProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((tool) => (
        <li
          key={tool}
          className={cn(
            "rounded-full border px-3 py-1 text-[11px] tracking-[0.08em] uppercase",
            tone === "ink"
              ? "border-bone/25 bg-bone/4 text-sand"
              : "border-ink/15 bg-ink/[0.03] text-stone",
          )}
        >
          {tool}
        </li>
      ))}
    </ul>
  );
}
