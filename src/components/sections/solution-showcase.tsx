import type { Solution } from "@/types/content";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function SolutionShowcase({ solutions }: { solutions: Solution[] }) {
  return (
    <div className="flex flex-col">
      {solutions.map((solution, i) => (
        <Reveal key={solution.slug} delay={Math.min(i * 0.04, 0.16)}>
          <article
            id={solution.slug}
            className="grid scroll-mt-24 gap-10 border-b border-ink/10 py-14 first:pt-0 last:border-b-0 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-20"
          >
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-accent-ink">
                Solution / {String(i + 1).padStart(2, "0")}
              </span>
              <Badge className="self-start">{solution.audience}</Badge>
              <h3 className="text-balance font-display text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-tight tracking-tight">
                {solution.title}
              </h3>
              <p className="max-w-md text-[16px] leading-relaxed text-muted-foreground">
                {solution.summary}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {solution.modules.map((mod) => (
                  <li
                    key={mod}
                    className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft"
                  >
                    {mod}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 sm:grid-cols-2">
              <div className="flex flex-col gap-3 bg-card p-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  Before · the old way
                </span>
                <p className="text-[15px] leading-relaxed text-ink-soft">{solution.before}</p>
              </div>
              <div className="flex flex-col gap-3 bg-card p-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-ink">
                  After · with RepPro X
                </span>
                <p className="text-[15px] leading-relaxed text-ink">{solution.after}</p>
              </div>
              <ul className="col-span-full flex flex-col gap-3 bg-card p-7 pt-0 sm:pt-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  What changes for your team
                </span>
                {solution.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 border-t border-ink/8 pt-3 text-[15px] leading-relaxed text-ink-soft first:border-t-0 first:pt-0">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
