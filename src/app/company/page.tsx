import type { Metadata } from "next";

import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { ValueProps } from "@/components/sections/value-props";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/reveal";
import { companyStats, timeline, companyValues, companyFaqs } from "@/data/company";
import Container from "@/components/layout/container";

export const metadata: Metadata = buildMetadata({
  title: "Company",
  description:
    `Learn about ${SITE_NAME} — why we started, what we believe about ERP software, and how a focused team built a platform that 1,400+ companies now run their operations on.`,
  path: "/company",
});

export default function CompanyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Company", path: "/company" }]} />
      <FaqJsonLd items={companyFaqs} />

      <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
        <div className="bp-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative pt-20 pb-16 lg:pt-28 lg:pb-20">
          <SectionHeading
            eyebrow="Company"
            align="center"
            title="We started RepProX because the data never matched"
            description="Three operations leads, three different companies, the same problem: financials, inventory, and operations living in systems that didn't talk to each other — and a closing process that took weeks to reconcile what should have been simple. We built the system we wished we'd had."
          />
        </Container>
      </section>

      <section aria-label="RepProX by the numbers" className="border-b border-ink/10 bg-paper">
        <Container className="py-16 lg:py-20">
          <Reveal>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 sm:grid-cols-4">
              {companyStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2 bg-card p-7 sm:p-8">
                  <dt className="font-mono text-[11px] uppercase leading-snug tracking-[0.16em] text-ink-soft">
                    {stat.label}
                  </dt>
                  <dd className="font-display text-3xl font-medium tracking-tight text-accent-ink sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="timeline-heading" className="border-b border-ink/10 bg-paper-soft/50">
        <Container className="py-20 lg:py-24">
          <SectionHeading
            eyebrow="How we got here"
            title={<span id="timeline-heading">From a shared frustration to 1,400+ companies</span>}
            className="mb-14 lg:mb-16"
          />
          <ol className="flex flex-col">
            {timeline.map((entry, i) => (
              <Reveal as="li" key={entry.year} delay={Math.min(i * 0.05, 0.2)}>
                <div className="grid gap-3 border-t border-ink/10 py-8 first:border-t-0 first:pt-0 sm:grid-cols-[7rem_1fr] sm:gap-8">
                  <span className="font-mono text-2xl font-medium tracking-tight text-accent-ink">
                    {entry.year}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-medium tracking-tight">{entry.title}</h3>
                    <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="values-heading" className="border-b border-ink/10 bg-paper">
        <Container className="py-20 lg:py-24">
          <SectionHeading
            eyebrow="What we believe"
            title={<span id="values-heading">The principles behind every product decision</span>}
            description="These aren't framed posters in a hallway — they're the things we actually argue about when we're deciding what to build next."
            className="mb-14 lg:mb-16"
          />
          <ValueProps items={companyValues} />
        </Container>
      </section>

      <section aria-labelledby="company-faq-heading" className="border-b border-ink/10 bg-paper-soft/50">
        <Container className="py-20 lg:py-24">
          <SectionHeading
            eyebrow="Questions"
            title={<span id="company-faq-heading">About the company</span>}
            className="mb-10 lg:mb-12"
          />
          <FaqSection items={companyFaqs} />
        </Container>
      </section>

      <CtaSection
        eyebrow="Join us"
        title="Curious what it's like to build RepProX?"
        description="We grow the team deliberately and post roles as they open. Reach out and we'll keep you posted on openings that match your background."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "See the platform", href: "/features" }}
      />
    </>
  );
}
