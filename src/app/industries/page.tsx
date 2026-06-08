import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { IndustryShowcase } from "@/components/sections/industry-showcase";
import { CtaSection } from "@/components/sections/cta-section";
import { industries } from "@/data/industries";
import Container from "@/components/layout/container";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "RepPro X is configured for the realities of wholesale distribution, manufacturing, retail & e-commerce, and professional services — not retrofitted generic templates.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }]} />

      <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
        <div className="bp-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative pt-20 pb-16 lg:pt-28 lg:pb-20">
          <SectionHeading
            eyebrow="Product / Industries"
            align="center"
            title="Operational realities differ. Your ERP shouldn't pretend otherwise."
            description="A distributor's reorder logic isn't a manufacturer's bill of materials, and a retailer's promotions aren't a services firm's project budgets. RepPro X ships with the workflows, reports, and data structures each industry actually needs."
          />
        </Container>
      </section>

      <section aria-label="Industries served by RepPro X" className="bg-paper">
        <Container className="py-20 lg:py-24">
          <IndustryShowcase industries={industries} />
        </Container>
      </section>

      <CtaSection
        eyebrow="Don't see yours?"
        title="RepPro X is configurable well beyond these four industries."
        description="These are where we have the deepest, most battle-tested workflows — but the underlying platform is flexible enough to model almost any product- or service-based operation. Tell us about yours."
        primary={{ label: "Describe your business", href: "/contact" }}
        secondary={{ label: "See the platform", href: "/features" }}
      />
    </>
  );
}
