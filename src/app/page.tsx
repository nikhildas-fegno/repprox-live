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
import { SolutionsShowcase } from "@/components/sections/solutions-showcase";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { IndustryShowcase } from "@/components/sections/industry-showcase";
import { CoreCapabilities } from "@/components/sections/core-capabilities";
import { Testimonials } from "@/components/sections/testimonials";
import { PricingTable } from "@/components/sections/pricing-table";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

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

      {/* SECTION 5 — SOLUTIONS (Dynamic Tabbed Workspace Console) */}
      <SolutionsShowcase />

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

      {/* SECTION 7 — CORE PLATFORM CAPABILITIES (Logo surrounded by rings) */}
      <CoreCapabilities />

      {/* SECTION 8 — INDUSTRIES (8 Industry Showcase tabs) */}
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



      {/* SECTION 9 — WHY REPPRO X (10-point value highlights grid) */}
      <section
        aria-labelledby="why-repprox-heading"
        className="relative border-b border-ink/10 py-24 lg:py-32 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,165,255,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(29,78,216,0.10) 0%, transparent 70%), #0b1120",
        }}
      >
        {/* Subtle grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bp-grid-dark opacity-30"
        />

        <Container className="relative">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent font-bold">
              Why RepPro X
            </p>
            <h2
              id="why-repprox-heading"
              className="font-display text-3xl font-bold text-white lg:text-4xl xl:text-[2.75rem] leading-tight text-balance"
            >
              Why Companies Choose{" "}
              <span className="bg-gradient-to-r from-accent to-accent-ink bg-clip-text text-transparent">
                RepPro X
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-400">
              We design and support automated systems that help modern wholesale
              distributors and field teams grow revenue with complete
              accountability.
            </p>
          </div>

          {/* 10-point grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.05} className="h-full">
                <div
                  className={[
                    "group relative flex flex-col gap-4 p-6 rounded-2xl h-full",
                    "bg-white/[0.04] border border-white/10",
                    "backdrop-blur-sm",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-1.5",
                    "hover:bg-white/[0.07] hover:border-accent/40",
                    "hover:shadow-[0_0_0_1px_rgba(14,165,255,0.2),0_16px_48px_-12px_rgba(14,165,255,0.28)]",
                  ].join(" ")}
                >
                  {/* Glow orb on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 size-24 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Top row: icon + number */}
                  <div className="flex items-center justify-between">
                    {/* Icon */}
                    <div
                      className={[
                        "size-11 rounded-xl flex items-center justify-center shrink-0",
                        "bg-gradient-to-br from-accent-ink/40 via-accent/30 to-accent/10",
                        "border border-accent/25",
                        "text-accent",
                        "shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
                        "group-hover:from-accent-ink/60 group-hover:via-accent/50 group-hover:to-accent/20",
                        "group-hover:border-accent/50",
                        "group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_16px_rgba(14,165,255,0.3)]",
                        "transition-all duration-300",
                      ].join(" ")}
                    >
                      <Check className="size-5" strokeWidth={2.5} />
                    </div>

                    {/* Number badge */}
                    <span className="font-mono text-[11px] font-bold tabular-nums text-white/15 group-hover:text-accent/60 transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Text */}
                  <h3 className="font-display text-[0.95rem] font-bold text-white leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-[0.8rem] text-slate-400 leading-relaxed mt-auto">
                    {point.desc}
                  </p>
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
