import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { FeatureModule } from "@/types/content";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

interface FeatureGridProps {
  modules: FeatureModule[];
  /** Render full descriptive cards (features page) vs. compact tiles (home). */
  variant?: "full" | "compact";
}

export function FeatureGrid({ modules, variant = "full" }: FeatureGridProps) {
  return (
    <ul
      className={cn(
        "grid gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 sm:grid-cols-2",
        variant === "full" && "lg:grid-cols-2",
        variant === "compact" && "lg:grid-cols-4",
      )}
    >
      {modules.map((mod, i) => {
        const Icon = mod.icon;
        return (
          <Reveal as="li" key={mod.title} delay={(i % 4) * 0.06} y={20}>
            <Link
              href={mod.href}
              id={mod.href.split("#")[1]}
              className="group flex h-full scroll-mt-24 flex-col gap-5 bg-card p-7 transition-colors hover:bg-paper-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-sm border border-ink/15 bg-paper text-ink transition-colors group-hover:border-accent group-hover:text-accent-ink">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                  {mod.index}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5">
                <h3 className="font-display text-xl font-bold tracking-tight">{mod.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{mod.description}</p>
              </div>
              {variant === "full" && (
                <ul className="flex flex-col gap-2 border-t border-ink/10 pt-4">
                  {mod.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-soft transition-colors group-hover:text-accent-ink">
                Explore module
                <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
