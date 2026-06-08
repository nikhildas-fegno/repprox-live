import type { Industry } from "@/types/content";
import { Reveal } from "@/components/reveal";

export function IndustryShowcase({ industries }: { industries: Industry[] }) {
  return (
    <div className="flex flex-col">
      {industries.map((industry, i) => (
        <Reveal key={industry.slug} delay={Math.min(i * 0.05, 0.2)}>
          <article
            id={industry.slug}
            className="grid scroll-mt-24 gap-10 border-b border-ink/10 py-12 first:pt-0 last:border-b-0 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-16"
          >
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.22em] text-accent-ink">
                Industry / {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-3xl font-bold tracking-tight text-balance">
                {industry.name}
              </h3>
              <p className="max-w-md text-[16px] leading-relaxed text-muted-foreground">
                {industry.summary}
              </p>
              <dl className="mt-2 flex flex-wrap gap-8">
                {industry.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                      {stat.label}
                    </dt>
                    <dd className="font-display text-3xl font-bold text-accent-ink">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ul className="flex flex-col gap-3 self-start rounded-md border border-ink/10 bg-card p-7 sm:p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                Where it shows up day to day
              </span>
              {industry.useCases.map((useCase) => (
                <li key={useCase} className="flex items-start gap-3 border-t border-ink/8 pt-3 text-[15px] leading-relaxed text-ink-soft first:border-t-0 first:pt-0">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {useCase}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
