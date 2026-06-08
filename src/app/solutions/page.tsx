import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SolutionShowcase } from "@/components/sections/solution-showcase";
import { CtaSection } from "@/components/sections/cta-section";
import { solutions } from "@/data/solutions";
import Container from "@/components/layout/container";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "See how RepProX transforms financial close, inventory accuracy, procure-to-pay, workflow automation, and reporting — with before-and-after outcomes for each team.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }]} />

      <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
        <div className="bp-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative pt-20 pb-16 lg:pt-28 lg:pb-20">
          <SectionHeading
            eyebrow="Product / Solutions"
            align="center"
            title="The same platform, mapped to the work each team actually does"
            description="Features describe what RepProX can do. Solutions describe what changes for the people doing the work — from the close, to the warehouse floor, to the boardroom deck."
          />
        </Container>
      </section>

      <section aria-label="Solutions by team and workflow" className="bg-paper">
        <Container className="py-20 lg:py-24">
          <SolutionShowcase solutions={solutions} />
        </Container>
      </section>

      <CtaSection
        eyebrow="Find your fit"
        title="Tell us which of these looks most like your week."
        description="We'll walk through the solution that matches your biggest current friction — and show you exactly how RepProX would change it, using your own data where possible."
        primary={{ label: "Talk to our team", href: "/contact" }}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
