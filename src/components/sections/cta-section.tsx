import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import Container from "@/components/layout/container";

interface CtaSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CtaSection({
  eyebrow = "Ready when you are",
  title,
  description,
  primary = { label: "Request a demo", href: "/contact" },
  secondary = { label: "Contact Sales", href: "/contact" },
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-paper-soft border-t border-b border-ink/10 py-20 lg:py-24">
      {/* Blueprint grid with light opacity */}
      <div className="bp-grid absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,black,transparent)]" />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-accent-ink">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            {eyebrow}
            <span className="h-px w-8 bg-current" aria-hidden="true" />
          </span>
          <h2 className="text-balance font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.08] tracking-tight text-ink">
            {title}
          </h2>
          <p className="max-w-xl text-balance text-sm lg:text-base leading-relaxed text-ink-soft">
            {description}
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild variant="accent" size="lg" className="bg-gradient-to-r from-[#1d4ed8] to-[#0ea5ff] hover:from-[#2563eb] hover:to-[#38bdf8] text-white border-0 font-bold shadow-lg shadow-[#1d4ed8]/10 h-12">
              <Link href={primary.href} className="flex items-center gap-2">
                {primary.label}
                <ArrowUpRight className="size-4.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-ink/20 text-ink hover:bg-white font-bold h-12">
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
