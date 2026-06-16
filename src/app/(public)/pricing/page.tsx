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
import { PricingComparison } from "@/components/sections/pricing-comparison";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Simple, per-user pricing for RepProX — Foundation, Operating System, and Enterprise plans. No setup fees on standard plans, and every plan includes the core ERP modules.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />
      <FaqJsonLd items={pricingFaqs} />

      <section className="relative overflow-hidden bg-paper">
        <Container className="relative pt-20 pb-16 lg:pt-28 lg:pb-20">
          <SectionHeading
            eyebrow="Pricing"
            align="center"
            title={<>Simple, Transparent Pricing for <span className="bg-linear-to-r from-[#1d4ed8] to-[#0ea5ff] bg-clip-text text-transparent">Every Stage of Growth</span></>}
            description="From essential field sales digitization to enterprise-grade AI and analytics — choose the plan that fits your team today and upgrade as you scale."
            className="max-w-3xl mx-auto"
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

      <PricingComparison />

      <section aria-labelledby="pricing-faq-heading" className="border-t border-ink/10 bg-paper-soft/50">
        <Container className="py-20 lg:py-24">
          <SectionHeading
            eyebrow="Pricing FAQ"
            title={<span id="pricing-faq-heading">Common questions about plans &amp; billing</span>}
            className="mb-10 lg:mb-12"
            align="center"
          />
          <FaqSection items={pricingFaqs} />
        </Container>
      </section>
    </>
  );
}
