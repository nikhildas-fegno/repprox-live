import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "paper";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2.5 self-start rounded-full border px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em]",
          align === "center" && "self-center",
          tone === "ink"
            ? "border-accent-ink/25 bg-accent-ink/[0.07] text-accent-ink"
            : "border-accent/30 bg-accent/10 text-accent",
        )}
      >
        <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "text-balance font-display text-[clamp(2.25rem,4.5vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight",
          tone === "paper" && "text-paper",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-balance text-[17px] leading-[1.7]",
            tone === "ink" ? "text-muted-foreground" : "text-paper/70",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
