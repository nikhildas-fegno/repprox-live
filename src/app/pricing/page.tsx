import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { PricingTable } from "@/components/sections/pricing-table";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/reveal";
import { pricingPlans, pricingFaqs } from "@/data/pricing";
import Container from "@/components/layout/container";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Simple, per-user pricing for RepPro X — Foundation, Operating System, and Enterprise plans. No setup fees on standard plans, and every plan includes the core ERP modules.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />
      <FaqJsonLd items={pricingFaqs} />

      <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
        <div className="bp-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative pt-20 pb-16 lg:pt-28 lg:pb-20">
          <SectionHeading
            eyebrow="Pricing"
            align="center"
            title="Straightforward, per-user pricing — no surprise modules to unlock"
            description="Every plan starts with the core financial, inventory, and reporting modules. You upgrade when your operation grows in complexity — not because basic functionality was held back."
          />
        </Container>
      </section>

      <section aria-label="Pricing plans" className="bg-paper">
        <Container className="pb-20 lg:pb-24">
          <PricingTable plans={pricingPlans} />
          <Reveal delay={0.15}>
            <p className="mt-10 text-center font-mono text-[12px] uppercase tracking-[0.16em] text-ink-soft">
              Prices shown in USD · Annual billing · Implementation &amp; onboarding included on every plan
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="pricing-faq-heading" className="border-t border-ink/10 bg-paper-soft/50">
        <Container className="py-20 lg:py-24">
          <SectionHeading
            eyebrow="Pricing FAQ"
            title={<span id="pricing-faq-heading">Common questions about plans &amp; billing</span>}
            className="mb-10 lg:mb-12"
          />
          <FaqSection items={pricingFaqs} />
        </Container>
      </section>

      <CtaSection
        eyebrow="Not sure which plan fits?"
        title="Tell us about your team and we'll recommend a starting point."
        description="Most companies know within one conversation whether Foundation or Operating System fits their current stage — and what would trigger an upgrade later."
        primary={{ label: "Get a recommendation", href: "/contact" }}
        secondary={{ label: "Compare features", href: "/features" }}
      />
    </>
  );
}
