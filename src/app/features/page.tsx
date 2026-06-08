import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { featureModules } from "@/data/features";
import Container from "@/components/layout/container";

export const metadata: Metadata = buildMetadata({
  title: "Features",
  description:
    "Explore every RepPro X module — financial management, inventory & warehouse, operations, reporting, supply chain, CRM, compliance, and integrations — all on one data model.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Features", path: "/features" }]} />

      <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
        <div className="bp-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative pt-20 pb-16 lg:pt-28 lg:pb-20">
          <SectionHeading
            eyebrow="Product / Features"
            align="center"
            title="Eight modules. Built to run as one system, not eight."
            description="Most ERPs bolt separate products together behind a shared login. RepPro X is designed from a single data model outward — so a change in inventory shows up in financials the same instant, with no sync job in between."
          />
        </Container>
      </section>

      <section aria-label="All RepPro X modules" className="bg-paper">
        <Container className="py-20 lg:py-24">
          <FeatureGrid modules={featureModules} variant="full" />
        </Container>
      </section>

      <CtaSection
        eyebrow="Go deeper"
        title="Want a walkthrough of how the modules connect?"
        description="In a 30-minute session, we'll map RepPro X's modules onto your current stack and show you exactly what would change on day one."
        primary={{ label: "Book a walkthrough", href: "/contact" }}
        secondary={{ label: "Compare plans", href: "/pricing" }}
      />
    </>
  );
}
