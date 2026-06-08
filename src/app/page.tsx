import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { SoftwareApplicationJsonLd } from "@/components/seo/json-ld";
import Container from "@/components/layout/container";
import { Hero } from "@/components/sections/hero";
import { LogoStrip } from "@/components/sections/logo-strip";
import { MobileAppExperience } from "@/components/sections/mobile-app-experience";
import { FieldAutomation } from "@/components/sections/field-automation";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { IndustryShowcase } from "@/components/sections/industry-showcase";
import { CoreCapabilities } from "@/components/sections/core-capabilities";
import { Testimonials } from "@/components/sections/testimonials";
import { PricingTable } from "@/components/sections/pricing-table";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

import { solutions } from "@/data/solutions";
import { featureModules } from "@/data/features";
import { industries } from "@/data/industries";
import { pricingPlans, pricingFaqs, testimonials } from "@/data/pricing";

export const metadata: Metadata = buildMetadata({
  title: `${SITE_NAME} — AI-Powered Field Force Automation & Distribution Management`,
  description:
    "RepPro X unifies field sales, collections, route planning, inventory, and AI smart ordering into one integrated platform for wholesalers and distributors.",
  path: "/",
});

const whyPoints = [
  { title: "AI-Powered Sales Intelligence", desc: "Predict stock counts and suggest smart replenishment recommendations." },
  { title: "Complete Distribution Management", desc: "Sync regional warehouses and manage inventory across delivery vans." },
  { title: "Mobile & Web Platform", desc: "An offline-first rep mobile app synced to a powerful central manager portal." },
  { title: "Real-Time Visibility", desc: "Log field collections, signatures, and geofences as they happen." },
  { title: "Enterprise Security", desc: "Role-based privileges, device logs, and immutable audit trails." },
  { title: "ERP Integration", desc: "Bidirectional master data sync with SAP Business One, NetSuite, and more." },
  { title: "KPI Management", desc: "Enforce collections and visits targets directly on the rep mobile dashboard." },
  { title: "Executive Analytics", desc: "Access route durations, P&L statements, and business intelligence." },
  { title: "Route Optimization", desc: "GPS planning saves transit mileage costs and boosts customer coverage." },
  { title: "Offline Capability", desc: "All catalog lookups, ordering, and collections run offline without signals." },
];

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationJsonLd />
      
      {/* SECTION 1 — HERO (Centered layout + dashboard mockup) */}
      <Hero />

      {/* SECTION 2 — TRUSTED BY GROWING DISTRIBUTION BUSINESSES (Marquee + 4 Stats) */}
      <LogoStrip />

      {/* SECTION 3 — MOBILE APP EXPERIENCE (Sole Dark Section) */}
      <MobileAppExperience />

      {/* SECTION 4 — INTELLIGENT FIELD AUTOMATION (6-step timeline flow) */}
      <FieldAutomation />

      {/* SECTION 5 — SOLUTIONS (5 Cards linking to dedicated solution pages) */}
      <section aria-labelledby="solutions-heading" className="border-b border-ink/10 bg-paper py-20 lg:py-24">
        <Container>
          <div className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Solutions"
              title={<span id="solutions-heading">Solutions Built For Modern Distribution</span>}
              description="RepPro X combines multiple operational modules into a single platform designed to improve sales execution and operational visibility."
            />
            <Reveal delay={0.1}>
              <Link
                href="/solutions"
                className="group inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink transition-colors hover:text-accent font-bold"
              >
                View all solutions
                <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          {/* Solutions Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <Reveal key={sol.slug} delay={i * 0.05} className="h-full">
                <article className="bg-white border border-slate-200/80 p-6 rounded-xl flex flex-col h-full hover:border-[#1d4ed8]/30 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300">
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                      Target · {sol.audience}
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink leading-snug">
                      {sol.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">
                    {sol.summary}
                  </p>
                  
                  {/* Small outcomes checklist */}
                  <ul className="flex flex-col gap-2 border-t border-slate-100 pt-4 mb-6">
                    {sol.outcomes.slice(0, 2).map((out) => (
                      <li key={out} className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
                        <Check className="size-3.5 text-accent-ink shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={`/solutions/${sol.slug}`}
                    className="mt-auto group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-accent-ink font-semibold"
                  >
                    Learn more 
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 6 — FEATURES (5 Enterprise Feature Grid) */}
      <section aria-labelledby="features-heading" className="border-b border-ink/10 bg-paper-soft py-20 lg:py-24">
        <Container>
          <div className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Enterprise features"
              title={<span id="features-heading">Enterprise Features That Drive Results</span>}
              description="Eliminate disconnected processes with real-time analytics, mobile workflows, and seamless ERP sync."
            />
            <Reveal delay={0.1}>
              <Link
                href="/features"
                className="group inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink transition-colors hover:text-accent font-bold"
              >
                View all features
                <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
          <FeatureGrid modules={featureModules} variant="compact" />
        </Container>
      </section>

      {/* SECTION 7 — INDUSTRIES (8 Industry Showcase tabs) */}
      <section aria-labelledby="industries-heading" className="border-b border-ink/10 bg-paper py-20 lg:py-24">
        <Container>
          <div className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Industries We Empower"
              title={<span id="industries-heading">Configured for the realities of field sales & distribution</span>}
              description="RepPro X is purpose-built for distribution, wholesale, and logistics operations — avoiding generic configurations."
            />
            <Reveal delay={0.1}>
              <Link
                href="/industries"
                className="group inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink transition-colors hover:text-accent font-bold"
              >
                Explore industries
                <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
          <IndustryShowcase industries={industries} />
        </Container>
      </section>

      {/* SECTION 8 — CORE PLATFORM CAPABILITIES (Logo surrounded by rings) */}
      <CoreCapabilities />

      {/* SECTION 9 — WHY REPPRO X (10-point value highlights grid) */}
      <section aria-labelledby="why-repprox-heading" className="border-b border-ink/10 bg-paper-soft py-20 lg:py-24">
        <Container>
          <div className="mb-16 text-center">
            <SectionHeading
              eyebrow="Why RepPro X"
              title={<span id="why-repprox-heading">Why Companies Choose RepPro X</span>}
              description="We design and support automated systems that help modern wholesale distributors and field teams grow revenue with complete accountability."
              align="center"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.04} className="h-full">
                <div className="bg-white border border-slate-200/60 p-5 rounded-xl flex flex-col gap-2 h-full hover:border-[#1d4ed8]/20 transition-all duration-300">
                  <div className="size-6.5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="size-3.5" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-ink leading-tight">{point.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{point.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 10 — TESTIMONIALS (Quotes & stats) */}
      <section aria-labelledby="testimonials-heading" className="border-b border-ink/10 bg-paper py-20 lg:py-24">
        <Container>
          <div className="mb-14 text-center">
            <SectionHeading
              eyebrow="From the field"
              title={<span id="testimonials-heading">See How Businesses Achieve More With RepPro X</span>}
              description="Leading wholesale distributors trust RepPro X with the daily numbers that scale their operations."
              align="center"
            />
          </div>
          <Testimonials items={testimonials} />
        </Container>
      </section>


      {/* SECTION 11 — FAQ (Accordion FAQ list) */}
      <section aria-labelledby="faq-heading" className="border-b border-ink/10 bg-paper py-20 lg:py-24">
        <Container>
          <div className="mb-14 text-center">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title={<span id="faq-heading">Frequently Asked Questions</span>}
              description="Learn about database scaling, SAP/NetSuite ERP synchronization, offline mobile capabilities, and setup."
              align="center"
            />
          </div>
          <FaqSection items={pricingFaqs} />
        </Container>
      </section>

      {/* SECTION 12 — FINAL CTA (Full control, demo request trigger) */}
      <CtaSection
        eyebrow="One Platform. Complete Control."
        title="Ready to automate your field sales & collections?"
        description="From sales and distribution to collections, analytics, KPI management, and AI-powered recommendations, RepPro X helps organizations improve productivity, increase revenue, and gain complete visibility."
        primary={{ label: "Request a Demo", href: "/contact" }}
        secondary={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
}
