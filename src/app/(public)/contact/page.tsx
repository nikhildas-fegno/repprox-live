import type { Metadata } from "next";
import { Clock, Users, Zap } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { UnifiedContactForm } from "@/components/sections/unified-contact-form";
import { Reveal } from "@/components/reveal";
import Container from "@/components/layout/container";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with the RepProX team — request a demo, ask about pricing, or talk through whether RepProX fits your operation. We respond within one business day.",
  path: "/contact",
});

const trustBadges = [
  { icon: Clock, text: "Responds within 1 business day" },
  { icon: Users, text: "100+ enterprise deployments" },
  { icon: Zap, text: "Onboard in days, not months" },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-paper py-20 lg:py-24">
        {/* Dot grid */}
        <div className="bp-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

        {/* Soft glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[80px]" />

        <Container className="relative flex flex-col items-center gap-7 text-center">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-accent-ink">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            Get in Touch
          </span>

          {/* Headline */}
          <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-ink lg:text-[3.25rem] lg:leading-[1.1]">
            Tell us where it&rsquo;s breaking down.{" "}
            <span className="bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              We&rsquo;ll show you what changes.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-[16px] leading-relaxed text-ink-soft">
            Whether you&rsquo;re evaluating ERPs for the first time or replacing a system that&rsquo;s
            stopped scaling, talk to someone who&rsquo;s configured RepProX for a business like
            yours.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-2 text-[13px] text-ink-soft shadow-sm"
              >
                <Icon className="size-3.5 shrink-0 text-accent-ink" aria-hidden="true" />
                {text}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Form ── */}
      <section className="bg-paper pb-14 lg:pb-20">
        <Container>
          <Reveal
            delay={0.05}
            className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-ink/10 bg-card shadow-2xl shadow-ink/[0.06]"
          >
            <UnifiedContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
