import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingDown, Package, CreditCard, Wrench, XCircle, CheckCircle2,
  Building2, Wind, Droplets, Hammer, Cog, Briefcase,
  CalendarCheck, MapPin, Clock, UserCheck, Camera, FileText,
  BarChart3, Users, Warehouse, DollarSign, ShoppingCart, Navigation,
  ChevronRight, Link2, RefreshCw, TrendingUp,
} from "lucide-react";

import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { SoftwareApplicationJsonLd } from "@/components/seo/json-ld";
import Container from "@/components/layout/container";
import { Hero } from "@/components/sections/hero";
import { LogoStrip } from "@/components/sections/logo-strip";
import { MobileAppExperience } from "@/components/sections/mobile-app-experience";
import { FieldAutomation } from "@/components/sections/field-automation";
import { SolutionsShowcase } from "@/components/sections/solutions-showcase";
import { WhyChooseSection } from "@/components/sections/why-choose";
import { CoreCapabilities } from "@/components/sections/core-capabilities";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

import { homefaq, pricingFaqs, testimonials } from "@/data/pricing";
import saplogo from "@/public/home/sap.svg";
import odoologo from "@/public/home/odoo.svg";
export const metadata: Metadata = buildMetadata({
  title: `${SITE_NAME} — The Complete Field Operations & Distribution Execution Platform`,
  description:
    "Control every visit, every order, every collection, every task. RepProX manages field sales, service technicians, inventory, routes, and collections through one integrated platform.",
  path: "/",
});

const challengeCategories = [
  {
    icon: TrendingDown,
    title: "Sales Challenges",
    color: "#ef4444",
    bg: "bg-red-50",
    border: "border-red-100",
    items: [
      "Missed customer visits",
      "Poor sales team visibility",
      "Low sales productivity",
      "Delayed order processing",
    ],
  },
  {
    icon: Package,
    title: "Inventory Challenges",
    color: "#f59e0b",
    bg: "bg-amber-50",
    border: "border-amber-100",
    items: [
      "Stock shortages",
      "Excess inventory",
      "Expired products",
      "Poor inventory visibility",
    ],
  },
  {
    icon: CreditCard,
    title: "Collection Challenges",
    color: "#8b5cf6",
    bg: "bg-violet-50",
    border: "border-violet-100",
    items: [
      "Delayed collections",
      "Outstanding balances",
      "Weak cash flow visibility",
      "Manual reconciliation errors",
    ],
  },
  {
    icon: Wrench,
    title: "Service Challenges",
    color: "#0ea5e9",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "Missed service visits",
      "Lack of technician visibility",
      "Delayed work orders",
      "Poor field coordination",
    ],
  },
];

const traditionalApps = [
  {
    label: "Traditional Mobile Sales Apps",
    description: "Only capture orders — no service, no collections, no end-to-end visibility.",
  },
  {
    label: "Traditional Field Service Apps",
    description: "Only track technicians — no sales, no inventory, no ERP sync.",
  },
  {
    label: "Traditional ERP Systems",
    description: "Lack real-time field visibility — no mobile execution, no GPS verification.",
  },
];

const repproxConnects = [
  "Sales", "Inventory", "Warehousing", "Procurement",
  "Service Operations", "Collections", "ERP Systems", "Field Teams",
];

const fieldServiceIndustries = [
  { icon: Building2, name: "Facility Management" },
  { icon: Wind, name: "HVAC Contractors" },
  { icon: Droplets, name: "Pool Maintenance" },
  { icon: Hammer, name: "Engineering Services" },
  { icon: Cog, name: "Maintenance Companies" },
  { icon: Briefcase, name: "Cleaning Services" },
];

const fieldServiceCapabilities = [
  { icon: CalendarCheck, title: "Task Assignment", desc: "Assign and dispatch jobs to field technicians instantly." },
  { icon: MapPin, title: "GPS Tracking", desc: "Real-time technician location and route monitoring." },
  { icon: Clock, title: "Time Tracking", desc: "Capture job start/end times and site duration." },
  { icon: UserCheck, title: "Customer Sign-Off", desc: "Digital customer signatures on job completion." },
  { icon: Camera, title: "Photo Attachments", desc: "Geofenced photo evidence attached to each visit." },
  { icon: FileText, title: "Service Reports", desc: "Auto-generated reports with full job history." },
];

const stakeholders = [
  {
    role: "Business Owners",
    icon: BarChart3,
    color: "#1d4ed8",
    questions: [
      "How much inventory do I have?",
      "Which sales reps perform best?",
      "Which customers are overdue?",
      "How much cash was collected today?",
    ],
    outcome: "Complete business visibility.",
  },
  {
    role: "Sales Managers",
    icon: Users,
    color: "#059669",
    questions: [
      "Who visited customers today?",
      "Who missed visits?",
      "Which territories underperformed?",
      "Which customers were not visited?",
    ],
    outcome: "Higher sales productivity.",
  },
  {
    role: "Warehouse Managers",
    icon: Warehouse,
    color: "#d97706",
    questions: [
      "Which batches expire soon?",
      "What should I reorder?",
      "What stock is in each van?",
      "Which products move fastest?",
    ],
    outcome: "Better inventory control.",
  },
  {
    role: "Finance Managers",
    icon: DollarSign,
    color: "#7c3aed",
    questions: [
      "Outstanding collections?",
      "Cash reconciliation status?",
      "Customer credit exposure?",
      "Credit limit violations?",
    ],
    outcome: "Stronger financial control.",
  },
  {
    role: "Operations Managers",
    icon: Navigation,
    color: "#0891b2",
    questions: [
      "Where are my technicians?",
      "Which jobs are completed?",
      "Which sites require follow-up?",
      "Which teams are most productive?",
    ],
    outcome: "Improved workforce utilization.",
  },
  {
    role: "Procurement Managers",
    icon: ShoppingCart,
    color: "#ea580c",
    questions: [
      "What should I reorder?",
      "Which suppliers perform best?",
      "Which products are running low?",
      "Which purchase orders are delayed?",
    ],
    outcome: "Smarter purchasing decisions.",
  },
];

const erpSyncItems = [
  "Customers", "Products", "Inventory", "Pricing",
  "All Transactions", "Stock Count", "Payments", "Service Requests",
];

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationJsonLd />

      {/* SECTION 1 — HERO */}
      <Hero />

      {/* SECTION 2 — TRUSTED BY */}
      <LogoStrip />

      {/* SECTION 3 — MOBILE APP EXPERIENCE */}
      <MobileAppExperience />

      {/* SECTION 4 — INTELLIGENT FIELD AUTOMATION */}
      <FieldAutomation />

      {/* SECTION 5 — WHY TRADITIONAL METHODS FAIL */}
      <section
        aria-labelledby="traditional-heading"
        className="relative border-b border-slate-100 bg-white py-20 lg:py-28 overflow-hidden"
      >
        <Container className="relative">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-accent-ink/25 bg-accent-ink/[0.07] px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-accent-ink">
              <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true" />
              Sales & Distribution Challenges
            </span>
            <h2
              id="traditional-heading"
              className="mt-3 font-display text-3xl font-bold leading-tight text-slate-900 lg:text-4xl xl:text-[2.75rem] text-balance max-w-4xl mx-auto"
            >
              Field Force Automation Software for {" "}
              <span className="bg-linear-to-r from-[#ef4444] to-[#f97316] bg-clip-text text-transparent">
                Distribution Challenges
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-base text-slate-500 leading-relaxed">
              Traditional tools create blind spots across sales, inventory, collections, and field operations. RepProX unifies Field Force Automation and Distribution Management into a single platform for complete operational transparency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="flex h-full flex-col gap-4">
              {traditionalApps.map((app, i) => (
                <Reveal key={app.label} delay={i * 0.06} className="flex flex-1">
                  <div className="flex w-full items-start gap-4 rounded-[20px] border border-red-100/80 bg-[#fff8f8] p-5 lg:p-6">
                    <div className="mt-0.5 flex shrink-0 items-center justify-center">
                      <XCircle className="size-[22px] text-red-400" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-display text-[15px] font-bold text-slate-900">{app.label}</p>
                      <p className="mt-1 text-[14px] text-slate-500 leading-relaxed">{app.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.24} className="flex flex-1">
                <div className="flex w-full items-start gap-4 rounded-[20px] border border-red-100/80 bg-[#fff8f8] p-5 lg:p-6">
                  <div className="mt-0.5 size-[22px] shrink-0 rounded-full bg-[#ef4444] flex items-center justify-center">
                    <span className="text-white font-bold text-sm leading-none">!</span>
                  </div>
                  <div>
                    <p className="font-display text-[15px] font-bold text-slate-900">The Result:</p>
                    <p className="mt-1 text-[14px] text-slate-500 leading-relaxed">
                      Disconnected teams, manual work, data gaps, and missed opportunities.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="flex h-full">
              <div className="flex w-full flex-col rounded-3xl border border-[#1d4ed8]/10 bg-[#f4f7fe] p-8 lg:p-10">
                <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-[#1d4ed8]">
                  RepProX Connects
                </p>
                <h3 className="mb-4 font-display text-2xl font-bold text-slate-900 lg:text-[28px]">
                  One platform. Every function.
                </h3>
                <p className="mb-8 text-[15px] leading-relaxed text-slate-500">
                  RepProX connects every part of your business — automates sales operations, optimizes field execution, improves collections, and gives you complete control of your distribution network in real time.
                </p>
                <div className="mb-8 flex flex-wrap gap-3">
                  {repproxConnects.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[13px] font-semibold text-blue-600 shadow-sm shadow-blue-900/5"
                    >
                      <CheckCircle2 className="size-[18px] shrink-0 text-blue-500" strokeWidth={2} />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4 rounded-xl border border-blue-200/50 bg-[#e4edff] p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1d4ed8]">
                    <TrendingUp className="size-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">The Outcome:</p>
                    <p className="text-[13px] text-slate-600">
                      Unified operations, real-time visibility, higher productivity, and better business outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SECTION 6 — SOLUTIONS */}
      <SolutionsShowcase />
      
      {/* SECTION 6.5 — WHY CHOOSE */}
      <WhyChooseSection />

      {/* SECTION 7 — CORE PLATFORM CAPABILITIES */}
      <CoreCapabilities />


      {/* SECTION 8 — ERP INTEGRATION */}
      <section
        aria-labelledby="erp-heading"
        className="relative border-b border-slate-100 bg-slate-50/40 py-12 lg:py-24"
      >
        <Container>
          {/* Header */}
          <div className="mb-16 text-center lg:mb-20">
            <span className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-accent-ink/25 bg-accent-ink/[0.07] px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-accent-ink">
              <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true" />
              ERP Integration
            </span>
            <h2
              id="erp-heading"
              className="font-display text-4xl font-bold leading-tight text-slate-900 lg:text-5xl"
            >
              Powered By Your ERP
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500 leading-relaxed">
              RepProX integrates natively with leading ERP platforms — keeping your field operations perfectly synchronized with your back office in real time.
            </p>
          </div>

          {/* ERP Platform Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              {
                logo: saplogo,
                name: "SAP Business One",
                badge: "Native Integration",
                desc: "Bidirectional sync with full SAP B1 module coverage — inventory, sales orders, pricing, customer master data, payments, and service records stay perfectly aligned.",
                points: ["Customer & Product Master Sync", "Sales Orders & Invoices", "Inventory & Stock Transfers", "Payments & Collections"],
              },
              {
                logo: odoologo,
                name: "Odoo",
                badge: "Full Module Coverage",
                desc: "Complete Odoo integration across sales, inventory, field service, and procurement modules — your back-office data flows seamlessly into field operations.",
                points: ["Sales & Purchase Orders", "Inventory Management", "Field Service Module", "Accounting & Payments"],
              },
            ].map((erp, i) => (
              <Reveal key={erp.name} delay={i * 0.08}>
                <div className="group flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 hover:border-[#1d4ed8]/30 hover:shadow-xl hover:shadow-[#1d4ed8]/5 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="size-16 rounded-2xl border border-slate-100 bg-[#eff6ff] flex items-center justify-center shrink-0">
                    <img src={erp.logo.src} alt={`${erp.name} logo`} className="size-12 object-contain" />
                    </div>
                    <span className="mt-1 shrink-0 rounded-full border border-[#1d4ed8]/20 bg-[#eff6ff] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1d4ed8]">
                      {erp.badge}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-slate-900">{erp.name}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{erp.desc}</p>
                  </div>
                  <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                    {erp.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="size-4 shrink-0 text-[#1d4ed8]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 9 — TESTIMONIALS */}
      <section aria-labelledby="testimonials-heading" className="border-b border-ink/10 bg-paper py-12 lg:py-24">
        <Container>
          <div className="mb-14 text-center">
            <SectionHeading
              eyebrow="Testimonials"
              title={<span id="testimonials-heading">What Business Leaders Say About RepProX</span>}
              description="Leading wholesale distributors trust RepProX with the daily numbers that scale their operations."
              align="center"
            />
          </div>
          <Testimonials items={testimonials} />
        </Container>
      </section>

      {/* SECTION 10 — FAQ */}
      <section aria-labelledby="faq-heading" className="border-b border-ink/10 bg-paper py-12 lg:py-24">
        <Container>
          <div className="mb-14 text-center">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title={<span id="faq-heading">Frequently Asked Questions</span>}
              description="Learn about SAP/Odoo ERP synchronization, field service capabilities, offline mobile, and setup."
              align="center"
            />
          </div>
          <FaqSection items={homefaq} />
        </Container>
      </section>

      {/* SECTION 11 — FINAL CTA */}
      <CtaSection
        eyebrow="One Platform. Complete Control."
        title="Ready to Control Every Visit, Order & Collection?"
        description="RepProX helps organizations manage field sales teams, service technicians, inventory, collections, routes, and customer activities through one integrated platform. Get complete operational visibility today."
        primary={{ label: "Request a Demo", href: "/contact" }}
        secondary={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
}
