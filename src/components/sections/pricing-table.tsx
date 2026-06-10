import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

import type { PricingPlan } from "@/types/content";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingTable({ plans }: { plans: PricingPlan[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
      {plans.map((plan, i) => (
        <Reveal key={plan.name} delay={i * 0.08} className="h-full">
          <article
            className={cn(
              "bp-corners flex h-full flex-col rounded-md border transition-shadow",
              "gap-5 p-6 lg:gap-4 lg:p-5 xl:gap-6 xl:p-7",
              plan.highlighted
                ? "border-ink bg-ink text-paper shadow-2xl shadow-ink/20 lg:-translate-y-3"
                : "border-ink/12 bg-card",
            )}
          >
            {/* Name + tagline */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-xl font-bold tracking-tight lg:text-lg xl:text-xl">
                  {plan.name}
                </h3>
                {plan.highlighted && (
                  <span className="shrink-0 rounded-full border border-accent/40 bg-accent-soft px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-white lg:text-[8px]">
                    Most chosen
                  </span>
                )}
              </div>
              <p className={cn(
                "text-xs leading-relaxed lg:text-[11px] xl:text-xs",
                plan.highlighted ? "text-paper/65" : "text-muted-foreground",
              )}>
                {plan.tagline}
              </p>
            </div>

            {/* Price */}
            <div className="flex flex-col gap-0.5 border-y border-current/10 py-4 lg:py-3 xl:py-4">
              <span className="font-display text-3xl font-extrabold tracking-tight lg:text-2xl xl:text-3xl">
                {plan.price}
              </span>
              <span className={cn(
                "font-mono text-[10px] uppercase tracking-[0.14em]",
                plan.highlighted ? "text-paper/55" : "text-ink-soft",
              )}>
                {plan.cadence}
              </span>
            </div>

            {/* Description */}
            <p className={cn(
              "text-[13px] leading-relaxed lg:text-[12px] xl:text-[13px]",
              plan.highlighted ? "text-paper/75" : "text-ink-soft",
            )}>
              {plan.description}
            </p>

            {/* Features */}
            <ul className="flex flex-1 flex-col gap-2 lg:gap-1.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed lg:text-[11px] xl:text-xs">
                  <Check
                    aria-hidden="true"
                    className={cn(
                      "mt-0.5 size-3.5 shrink-0",
                      plan.highlighted ? "text-accent" : "text-accent-ink",
                    )}
                  />
                  <span className={plan.highlighted ? "text-paper/85" : "text-ink-soft"}>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              asChild
              className={cn(
                "mt-1 w-full text-xs font-semibold lg:h-9 xl:h-10",
                plan.highlighted
                  ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                  : "bg-[#1d4ed8] text-white hover:bg-[#1e40af] shadow-md shadow-[#1d4ed8]/20 hover:shadow-lg hover:shadow-[#1d4ed8]/30 hover:-translate-y-px transition-all duration-200",
              )}
            >
              <Link href={plan.href} className="flex items-center justify-center gap-1.5">
                {plan.ctaLabel ?? "Get Started"}
                <ArrowUpRight className="size-3.5" />
              </Link>
            </Button>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
