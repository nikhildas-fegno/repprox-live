import Link from "next/link";
import { Check } from "lucide-react";

import type { PricingPlan } from "@/types/content";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingTable({ plans }: { plans: PricingPlan[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
      {plans.map((plan, i) => (
        <Reveal key={plan.name} delay={i * 0.08} className="h-full">
          <article
            className={cn(
              "bp-corners flex h-full flex-col gap-7 rounded-md border p-8 transition-shadow",
              plan.highlighted
                ? "border-ink bg-ink text-paper shadow-2xl shadow-ink/20 lg:-translate-y-3"
                : "border-ink/12 bg-card",
            )}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-bold tracking-tight">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="rounded-full border border-accent/40 bg-accent-soft px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent-ink">
                    Most chosen
                  </span>
                )}
              </div>
              <p className={cn("text-sm leading-relaxed", plan.highlighted ? "text-paper/65" : "text-muted-foreground")}>
                {plan.tagline}
              </p>
            </div>

            <div className="flex flex-col gap-1 border-y border-current/10 py-6">
              <span className="font-display text-4xl font-extrabold tracking-tight">{plan.price}</span>
              <span className={cn("font-mono text-[11px] uppercase tracking-[0.16em]", plan.highlighted ? "text-paper/55" : "text-ink-soft")}>
                {plan.cadence}
              </span>
            </div>

            <p className={cn("text-[15px] leading-relaxed", plan.highlighted ? "text-paper/75" : "text-ink-soft")}>
              {plan.description}
            </p>

            <ul className="flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
                  <Check
                    aria-hidden="true"
                    className={cn("mt-0.5 size-4 shrink-0", plan.highlighted ? "text-accent" : "text-accent-ink")}
                  />
                  <span className={plan.highlighted ? "text-paper/85" : "text-ink-soft"}>{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant={plan.highlighted ? "accent" : "outline"} size="lg" className="mt-2">
              <Link href={plan.href}>{plan.price === "Custom" ? "Talk to sales" : "Start with " + plan.name}</Link>
            </Button>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
