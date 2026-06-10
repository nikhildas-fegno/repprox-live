import type { Metadata } from "next";
import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Box,
  Users,
  Settings,
  Database,
  Activity,
  Wrench,
  Globe2,
  Cpu,
  BarChart3,
  Coffee,
  Pill,
  ShoppingCart,
  Building2,
  HardHat,
  Wind,
  Droplets,
  Zap,
  Check,
  X,
  RefreshCw,
  Layers,
  Target,
  Cog,
  Factory,
  AlertCircle,
  Smartphone,
  LineChart,
  Plug,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/reveal";
import Container from "@/components/layout/container";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: `${SITE_NAME} is a Field Operations & Distribution Execution Platform built by ERP experts — connecting field teams to enterprise systems in real time.`,
  path: "/company",
});

export default function CompanyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
        ]}
      />

      {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(29,78,216,0.10) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 75% 65% at 50% 0%, black, transparent)",
          }}
        />
        {/* Floating gradient orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 right-[8%] h-[520px] w-[520px] rounded-full bg-[#1d4ed8]/10 blur-[130px] animate-pulse"
            style={{ animationDuration: "7s" }}
          />
          <div
            className="absolute top-[15%] -left-48 h-[420px] w-[420px] rounded-full bg-[#0ea5ff]/8 blur-[110px] animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "2.5s" }}
          />
          <div
            className="absolute -bottom-20 left-1/2 h-[280px] w-[700px] -translate-x-1/2 rounded-full bg-[#1d4ed8]/6 blur-[90px] animate-pulse"
            style={{ animationDuration: "13s", animationDelay: "1s" }}
          />
        </div>
        <Container className="relative pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-7 text-center">

            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5">
                <span className="flex size-2 animate-pulse rounded-full bg-accent" />
                <span className="font-mono text-[12px] uppercase tracking-wider font-medium text-accent-ink">
                  Field Operations Platform
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-balance font-display text-[clamp(2.6rem,6vw,4.8rem)] font-extrabold leading-[1.05] tracking-tight">
                Built by ERP Experts.{" "}
                <span className="bg-linear-to-r from-[#1d4ed8] to-[#0ea5ff] bg-clip-text text-transparent">
                  Designed for the Field.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-2xl text-[18px] leading-relaxed text-muted-foreground lg:text-[20px]">
                Designed for modern distribution businesses, RepPro X transforms field execution, sales performance, and operational management into a connected, data-driven experience.
              </p>
            </Reveal>

          </div>
        </Container>
      </section>
      {/* ─── 4. ALLE TECH — THE COMPANY BEHIND REPPROX ──────────────── */}
      <section className="relative overflow-hidden border-b border-ink/10 bg-slate-50/50 py-24 lg:py-32">
        <div className="bp-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

        {/* Glow effects */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[#1d4ed8]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[#0ea5ff]/10 blur-[120px]" />

        <Container className="relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

            {/* Left — overview + trust factors */}
            <div className="flex flex-col items-center gap-10 text-center lg:items-start lg:text-left">
              <Reveal>
                <div className="flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#1d4ed8]/20 bg-[#eff6ff] px-3 py-1.5 self-center lg:self-start backdrop-blur-md shadow-sm">
                    <span className="flex size-2 rounded-full bg-[#0ea5ff] animate-pulse" />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1d4ed8]">
                      The Company Behind RepProX
                    </span>
                  </div>
                  <h2 className="text-balance font-display text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-ink">
                    ALLE TECH
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1d4ed8] to-[#0ea5ff]">Transforming businesses.</span>
                  </h2>
                  <p className="text-[16px] lg:text-[18px] leading-relaxed text-muted-foreground">
                    ALLE TECH is a UAE-based technology consulting and software solutions company specializing in digital transformation, ERP implementation, business automation, and custom software development. With over 10 years of experience, we help organizations streamline operations, improve efficiency, and accelerate growth.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-md">
                  <p className="font-mono text-[12px] font-bold uppercase tracking-widest text-slate-500">
                    Why businesses trust ALLE TECH
                  </p>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {[
                      "10+ Years of Industry Experience",
                      "Certified ERP Consultants",
                      "SAP Business One & Odoo Experts",
                      "Proven Digital Transformation",
                      "Reliable Long-Term Support",
                      "Creator of RepProX",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#eff6ff]">
                          <Check className="size-3 text-[#1d4ed8]" />
                        </div>
                        <span className="text-[14px] font-medium text-slate-700">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Right — premium contact card */}
            <Reveal delay={0.2}>
              <div className="group relative">
                {/* Card glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#1d4ed8] to-[#0ea5ff] opacity-15 blur-lg transition duration-500 group-hover:opacity-30" />

                <div className="relative flex flex-col gap-8 rounded-3xl border border-white bg-white/95 p-8 shadow-2xl backdrop-blur-xl lg:p-12">

                  {/* Header */}
                  <div className="flex items-center gap-5 border-b border-slate-100 pb-8">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d4ed8] to-[#0ea5ff] shadow-inner">
                      <Building2 className="size-8 text-white" />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-ink tracking-wide">ALLE TECH</p>
                      <p className="text-[14px] text-[#1d4ed8] font-medium mt-1">Technology Consulting & Software</p>
                    </div>
                  </div>

                  {/* Contact details */}
                  <ul className="flex flex-col gap-6">
                    <li className="flex items-start gap-4">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#eff6ff] border border-blue-100">
                        <MapPin className="size-4 text-[#1d4ed8]" />
                      </div>
                      <div className="pt-1.5">
                        <p className="text-[14px] font-semibold text-ink">Dubai, United Arab Emirates</p>
                        <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                          Meydan Grandstand, 604<br />Dubai, UAE
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#eff6ff] border border-blue-100">
                        <Phone className="size-4 text-[#1d4ed8]" />
                      </div>
                      <a
                        href="tel:+971585168818"
                        className="text-[15px] font-medium text-ink hover:text-[#1d4ed8] transition-colors"
                      >
                        +971 58 516 8818
                      </a>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#eff6ff] border border-blue-100">
                        <Mail className="size-4 text-[#1d4ed8]" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <a
                          href="mailto:yazan@alle-tech.com"
                          className="flex items-center text-[14px] font-medium text-ink hover:text-[#1d4ed8] transition-colors"
                        >
                          info@alle-tech.com
                  
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#eff6ff] border border-blue-100">
                        <ExternalLink className="size-4 text-[#1d4ed8]" />
                      </div>
                      <a
                        href="https://www.alle-tech.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-medium text-ink hover:text-[#1d4ed8] transition-colors underline decoration-slate-200 underline-offset-4"
                      >
                        www.alle-tech.com
                      </a>
                    </li>
                  </ul>

                  {/* Contact person */}
                  <div className="mt-4 flex items-center justify-between rounded-2xl border border-blue-100 bg-[#eff6ff]/50 px-5 py-4">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-blue-100">
                        <Users className="size-5 text-[#1d4ed8]" />
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-ink">Yazan Hidmi</p>
                        <p className="text-[12px] text-[#1d4ed8]">Sales</p>
                      </div>
                    </div>
                    <a href="mailto:yazan@alle-tech.com" className="flex size-10 items-center justify-center rounded-full bg-[#1d4ed8] text-white hover:bg-[#0ea5ff] transition-colors shadow-sm">
                      <Mail className="size-4" />
                    </a>
                  </div>

                </div>
              </div>
            </Reveal>

          </div>
        </Container>
      </section>
      {/* ─── 3. BUILT BY ERP EXPERTS ─────────────────────────────────── */}
      <section className="border-b border-ink/10 bg-paper py-20 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div>
              <SectionHeading
                eyebrow="Built by ERP Experts"
                align="center"
                title="Decades of enterprise experience, productized."
                description="RepProX isn't built by software generalists. Every design decision comes from teams who have spent years implementing and optimizing ERP systems for complex distribution and field operations businesses."
                className="lg:items-start lg:text-left"
              />
              <Reveal delay={0.1}>
                <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/8 pt-10 text-center lg:text-left">
                  {[
                    { value: "15+", label: "Years ERP Experience" },
                    { value: "50+", label: "Enterprise Deployments" },
                    { value: "12+", label: "Industries Served" },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <span className="font-display text-[2rem] font-extrabold tracking-tight text-accent-ink">
                        {s.value}
                      </span>
                      <span className="text-[12px] leading-tight text-muted-foreground">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Database,
                  title: "Deep ERP Domain Knowledge",
                  desc: "Built by practitioners who understand inventory costing, pricing matrices, route accounting, and ERP data models — not just mobile app developers.",
                },
                {
                  icon: Cpu,
                  title: "Process-First Engineering",
                  desc: "Every workflow in RepProX mirrors how distribution and field service businesses actually operate — enforcement built in, not bolted on.",
                },
                {
                  icon: BarChart3,
                  title: "Transformation Track Record",
                  desc: "From paper-based salesforce automation to AI-powered distribution execution — we've guided organizations through every stage of the digital journey.",
                },
              ].map((card, i) => (
                <Reveal key={card.title} delay={i * 0.08}>
                  <div className="flex items-start gap-5 rounded-xl border border-ink/8 bg-card p-6 transition-shadow hover:shadow-md">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff]">
                      <card.icon className="size-5 text-[#1d4ed8]" />
                    </div>
                    <div>
                      <p className="mb-1.5 font-display text-[16px] font-bold text-ink">
                        {card.title}
                      </p>
                      <p className="text-[14px] leading-relaxed text-muted-foreground">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>


      {/* ─── 5. MORE THAN A MOBILE APP ───────────────────────────────── */}
      <section className="border-b border-ink/10 bg-paper py-20 lg:py-32">
        <Container>
          <div className="mb-14">
            <SectionHeading
              eyebrow="Platform Capabilities"
              align="center"
              title="More than a mobile app."
              description="RepProX is a complete Field Operations & Distribution Execution Platform designed to drive measurable outcomes across every layer of your business."
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                color: "text-[#1d4ed8]",
                bg: "bg-[#eff6ff]",
                title: "Increase Sales Productivity",
                desc: "Route-optimized visits, AI order recommendations, and real-time customer data in the rep's hands.",
              },
              {
                icon: Activity,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                title: "Improve Collection Performance",
                desc: "Digital collections with instant ERP reconciliation — no end-of-day reconciliation delays.",
              },
              {
                icon: Box,
                color: "text-orange-600",
                bg: "bg-orange-50",
                title: "Optimize Inventory Utilization",
                desc: "Van stock, warehouse stock, and customer stock tracked in a single live inventory picture.",
              },
              {
                icon: ShieldCheck,
                color: "text-purple-600",
                bg: "bg-purple-50",
                title: "Strengthen Operational Controls",
                desc: "Enforce approval hierarchies, visit protocols, and pricing policies at the point of execution.",
              },
              {
                icon: Users,
                color: "text-pink-600",
                bg: "bg-pink-50",
                title: "Improve Customer Service Levels",
                desc: "Faster order processing, accurate delivery ETAs, and service history in the rep's hands.",
              },
              {
                icon: LineChart,
                color: "text-sky-600",
                bg: "bg-sky-50",
                title: "Real-Time Business Visibility",
                desc: "Live dashboards for KPIs, route compliance, collections, and field productivity — always current.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="group flex flex-col gap-4 rounded-xl border border-ink/8 bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-lg">
                  <div
                    className={`flex size-11 items-center justify-center rounded-xl ${item.bg}`}
                  >
                    <item.icon className={`size-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="mb-2 font-display text-[16px] font-bold text-ink">
                      {item.title}
                    </p>
                    <p className="text-[14px] leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── 6. ERP INTEGRATION ECOSYSTEM ────────────────────────────── */}
      <section className="border-b border-ink/10 bg-paper-soft/40 py-20 lg:py-32">
        <Container>
          <div className="mb-14 text-center">
            <SectionHeading
              eyebrow="ERP Integration Ecosystem"
              align="center"
              title="Seamless ERP integration. Zero data gaps."
              description="RepProX connects natively to your enterprise systems — every field transaction flows directly to your ERP in real time."
            />
          </div>

          {/* Integration flow */}
          <div className="mx-auto max-w-5xl">
            <div className="grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">

              {/* Field Operations */}
              <Reveal>
                <div className="flex h-full flex-col gap-5 rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#eff6ff]">
                      <Smartphone className="size-5 text-[#1d4ed8]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      Field Operations
                    </h3>
                  </div>
                  <ul className="flex flex-1 flex-col gap-2.5">
                    {[
                      "Customer Visits & Check-ins",
                      "Sales Orders & Quotations",
                      "Digital Collections",
                      "Van & Mobile Stock",
                      "Route Execution",
                      "Service & Task Management",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-3.5 py-2 text-[13px] font-medium text-ink"
                      >
                        <CheckCircle2 className="size-3.5 shrink-0 text-[#1d4ed8]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Sync indicator */}
              <Reveal delay={0.18}>
                <div className="flex items-center justify-center py-4 md:py-0">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/30 bg-[#eff6ff]">
                      <RefreshCw className="size-6 text-[#1d4ed8]" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent-ink">
                      Real-Time
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* ERP Systems */}
              <Reveal delay={0.3}>
                <div className="flex h-full flex-col gap-5 rounded-2xl border border-ink/10 bg-ink p-8 text-paper shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-paper/10">
                      <Database className="size-5 text-paper/80" />
                    </div>
                    <h3 className="font-display text-lg font-bold">
                      ERP Systems
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    {[
                      {
                        name: "SAP Business One",
                        accent: "bg-blue-500/20 text-blue-300 border-blue-500/20",
                      },
                      {
                        name: "Odoo",
                        accent: "bg-purple-500/20 text-purple-300 border-purple-500/20",
                      },
                      {
                        name: "Microsoft Dynamics",
                        accent: "bg-green-500/20 text-green-300 border-green-500/20",
                      },
                      {
                        name: "Oracle NetSuite",
                        accent: "bg-sky-500/20 text-sky-300 border-sky-500/20",
                      },
                    ].map((erp) => (
                      <div
                        key={erp.name}
                        className={`flex items-center justify-center rounded-xl border p-3.5 text-[13px] font-semibold ${erp.accent}`}
                      >
                        {erp.name}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sync tags */}
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {[
                  "Customers",
                  "Products",
                  "Inventory",
                  "Pricing",
                  "Transactions",
                  "Payments",
                  "Stock Counts",
                  "Service Requests",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#1d4ed8]/20 bg-[#eff6ff] px-3.5 py-1.5 text-[12px] font-semibold text-[#1d4ed8]"
                  >
                    <RefreshCw className="size-3 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── 7. OUR VISION ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-paper py-20 lg:py-32">
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-accent/5 blur-[100px]" />
        <Container className="relative">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mb-10 flex justify-center">
                <div className="flex size-14 items-center justify-center rounded-full border border-accent/20 bg-[#eff6ff]">
                  <Globe2 className="size-7 text-[#1d4ed8]" />
                </div>
              </div>
              <blockquote className="text-center">
                <p className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-ink">
                  &ldquo;Every organization deserves complete visibility and
                  control over their field operations — without sacrificing
                  the speed and flexibility that drives growth.&rdquo;
                </p>
                <footer className="mt-8 text-[17px] leading-relaxed text-muted-foreground">
                  Our vision: a world where field teams and enterprise systems
                  work as one — where every visit, order, collection, and
                  service event is tracked, optimized, and connected to the
                  business outcomes that matter.
                </footer>
              </blockquote>
            </Reveal>

            {/* 3 Founding Principles */}
            <div className="mt-16 grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Outcome-Driven",
                  desc: "Every feature is built around measurable business outcomes — not capabilities for their own sake.",
                },
                {
                  icon: Layers,
                  title: "Enterprise-Grade",
                  desc: "Built to operate at the scale, security, and reliability that enterprise organizations require.",
                },
                {
                  icon: Globe2,
                  title: "Always Connected",
                  desc: "Field and back-office data that stays in sync — online, offline, or anywhere in between.",
                },
              ].map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="flex flex-col items-center gap-4 rounded-xl border border-ink/8 bg-card p-6 text-center">
                    <div className="flex size-11 items-center justify-center rounded-full bg-[#eff6ff]">
                      <p.icon className="size-5 text-[#1d4ed8]" />
                    </div>
                    <div>
                      <p className="mb-1.5 font-display text-[15px] font-bold text-ink">
                        {p.title}
                      </p>
                      <p className="text-[13px] leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 8. WHY ORGANIZATIONS CHOOSE REPPROX ────────────────────── */}
      <section className="border-y border-ink/10 bg-paper-soft/50 py-20 lg:py-32">
        <Container>
          <div className="mb-14">
            <SectionHeading
              eyebrow="Why RepProX"
              align="center"
              title="Not just another field app."
              description="Most field service and sales tools are built for simplicity. RepProX is built for operational excellence — the difference shows in the outcomes."
            />
          </div>

          {/* Comparison table */}
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-ink/10 bg-slate-50">
              <div className="p-5 text-[12px] font-bold uppercase tracking-widest text-muted-foreground" />
              <div className="border-x border-ink/10 p-5">
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  Generic Field Apps
                </p>
              </div>
              <div className="p-5">
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1d4ed8]">
                  RepProX Platform
                </p>
              </div>
            </div>

            {/* Rows */}
            {[
              {
                category: "ERP Awareness",
                generic: "No ERP connection — siloed mobile data",
                repprox: "Native bidirectional ERP sync in real time",
              },
              {
                category: "Data Freshness",
                generic: "End-of-day batch uploads or manual entry",
                repprox: "Live data — every transaction synced instantly",
              },
              {
                category: "Inventory Control",
                generic: "No visibility into van or warehouse stock",
                repprox: "Full mobile inventory with ERP reconciliation",
              },
              {
                category: "Route Intelligence",
                generic: "Basic scheduling — no optimization",
                repprox: "AI route optimization with compliance tracking",
              },
              {
                category: "Collections",
                generic: "Manual collection logs reconciled offline",
                repprox: "Digital collections with instant ERP posting",
              },
              {
                category: "Business Intelligence",
                generic: "Basic activity reports",
                repprox: "KPI dashboards, territory analytics, AI insights",
              },
              {
                category: "Industry Depth",
                generic: "One-size-fits-all workflows",
                repprox: "Workflows built for distribution & field service",
              },
              {
                category: "Offline Operation",
                generic: "Limited or no offline functionality",
                repprox: "Full offline-first app with smart conflict resolution",
              },
            ].map((row, i) => (
              <Reveal key={row.category} delay={i * 0.04}>
                <div
                  className={`grid grid-cols-[1fr_1fr_1fr] border-b border-ink/8 last:border-b-0 ${i % 2 === 0 ? "bg-paper" : "bg-slate-50/50"
                    }`}
                >
                  <div className="p-4 lg:p-5">
                    <p className="text-[13px] font-semibold text-ink">
                      {row.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 border-x border-ink/8 p-4 lg:p-5">
                    <X className="size-3.5 shrink-0 text-red-400" />
                    <p className="text-[13px] leading-snug text-muted-foreground">
                      {row.generic}
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 p-4 lg:p-5">
                    <Check className="size-3.5 shrink-0 text-emerald-600" />
                    <p className="text-[13px] font-medium leading-snug text-ink">
                      {row.repprox}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── 9. FINAL CTA ────────────────────────────────────────────── */}
      <CtaSection
        eyebrow="Transform Your Field Operations"
        title="Ready to connect your field teams to your ERP?"
        description="Experience the difference of a platform built by ERP experts. One conversation is usually enough to show you exactly where RepProX fits."
        primary={{ label: "Request a Demo", href: "/contact" }}
        secondary={{ label: "Explore Features", href: "/features" }}
      />
    </>
  );
}
