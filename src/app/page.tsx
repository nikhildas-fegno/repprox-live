import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Truck, Smartphone, Activity, Shield, Database, Target, LineChart, Navigation, WifiOff } from "lucide-react";

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
    "RepProX unifies field sales, collections, route planning, inventory, and AI smart ordering into one integrated platform for wholesalers and distributors.",
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

const whyIcons = [Brain, Truck, Smartphone, Activity, Shield, Database, Target, LineChart, Navigation, WifiOff] as const;

const whyAccents = [
  "#7c3aed", // AI — violet
  "#0284c7", // Distribution — sky
  "#1d4ed8", // Mobile — brand blue
  "#0891b2", // Real-Time — cyan
  "#dc2626", // Security — red
  "#d97706", // ERP — amber
  "#059669", // KPI — emerald
  "#4f46e5", // Analytics — indigo
  "#ea580c", // Route — orange
  "#475569", // Offline — slate
] as const;

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

      {/* SECTION 7 — CORE PLATFORM CAPABILITIES (Logo surrounded by rings) */}
      <CoreCapabilities />

      {/* SECTION 9 — WHY REPPRO X (10-point value highlights grid) */}
      <section
        aria-labelledby="why-repprox-heading"
        className="relative border-b border-slate-200 bg-white py-24 lg:py-32 overflow-hidden"
      >
        {/* Subtle dot texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.45] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]"
        >
          <svg className="absolute inset-0 h-full w-full" fill="none">
            <defs>
              <pattern id="why-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="0.8" fill="#cbd5e1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#why-dots)" />
          </svg>
        </div>

        <Container className="relative">
          {/* Heading */}
          <div className="mb-14 text-center">
            <h2
              id="why-repprox-heading"
              className="font-display text-3xl font-bold text-slate-900 lg:text-4xl xl:text-[2.75rem] leading-tight text-balance"
            >
              Why Companies Choose{" "}
              <span className="bg-gradient-to-r from-[#1d4ed8] to-[#0ea5ff] bg-clip-text text-transparent">
                RepProX
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500">
              We design and support automated systems that help modern wholesale
              distributors and field teams grow revenue with complete
              accountability.
            </p>
          </div>

          {/* 10-point grid — 2-column horizontal cards */}
          <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
            {whyPoints.map((point, i) => {
              const Icon = whyIcons[i];
              return (
                <Reveal key={point.title} delay={i * 0.03} className="h-full">
                  <div className="group relative flex items-start gap-4 p-5 lg:p-6 rounded-2xl h-full bg-white border border-slate-200 hover:border-[#1d4ed8]/30 hover:shadow-md hover:shadow-[#1d4ed8]/6 transition-all duration-300 overflow-hidden">
                    {/* Left accent strip */}
                    <div className="absolute left-0 top-5 bottom-5 w-0.75 rounded-r-full bg-[#1d4ed8]/15 group-hover:bg-[#1d4ed8] transition-colors duration-300" />

                    {/* Icon */}
                    <div className="size-11 rounded-xl bg-[#1d4ed8]/8 text-[#1d4ed8] flex items-center justify-center shrink-0 ml-2 transition-colors duration-300 group-hover:bg-[#1d4ed8]/14">
                      <Icon className="size-5" />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-1.5 min-w-0 pt-0.5 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-[14px] lg:text-[20px] font-bold text-slate-800 leading-snug group-hover:text-[#1d4ed8] transition-colors duration-300">
                          {point.title}
                        </h3>
                        <span className="font-mono text-[9px] font-bold tabular-nums text-slate-300 shrink-0 mt-0.5 group-hover:text-[#1d4ed8]/40 transition-colors duration-300">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="text-[13px] lg:text-base text-slate-500 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 10 — TESTIMONIALS (Quotes & stats) */}
      <section aria-labelledby="testimonials-heading" className="border-b border-ink/10 bg-paper py-20 lg:py-24">
        <Container>
          <div className="mb-14 text-center">
            <SectionHeading
              eyebrow="Testimonials"
              title={<span id="testimonials-heading">See How Businesses Achieve More With RepProX</span>}
              description="Leading wholesale distributors trust RepProX with the daily numbers that scale their operations."
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
        description="From sales and distribution to collections, analytics, KPI management, and AI-powered recommendations, RepProX helps organizations improve productivity, increase revenue, and gain complete visibility."
        primary={{ label: "Request a Demo", href: "/contact" }}
        secondary={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
}
