import Container from "@/components/layout/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Brain, Target, PieChart, RefreshCw, MapPin, Package, CheckCircle2 } from "lucide-react";

const featureCards = [
  {
    icon: Brain,
    title: "AI-Powered Sales Automation & Smart Ordering",
    desc: "Predict customer demand, generate intelligent order recommendations, identify cross-selling opportunities, and improve inventory planning with AI-driven sales insights."
  },
  {
    icon: Target,
    title: "KPI & Performance Management",
    desc: "Monitor sales targets, collection performance, customer coverage, route compliance, and field team productivity through real-time performance tracking."
  },
  {
    icon: PieChart,
    title: "Executive Reporting & Business Intelligence",
    desc: "Access real-time dashboards, profitability reports, sales analytics, operational KPIs, and actionable business intelligence for faster decision-making."
  },
  {
    icon: RefreshCw,
    title: "ERP Integration Software",
    desc: "Connect seamlessly with SAP Business One, Microsoft Dynamics, Oracle NetSuite, Odoo, Zoho, and custom ERP systems for synchronized business operations."
  },
  {
    icon: MapPin,
    title: "Route Planning & GPS Tracking",
    desc: "Optimize routes, verify customer visits, improve territory coverage, and monitor field activities with real-time GPS tracking and route compliance monitoring."
  },
  {
    icon: Package,
    title: "Distribution Management",
    desc: "Manage inventory, warehouses, van sales, stock transfers, collections, and real-time inventory visibility from a single platform."
  }
];

const rightPanelItems = [
  { title: "Complete Operational Visibility", desc: "Gain real-time visibility into sales, inventory, collections, routes, customer visits, and field team activities from one centralized platform." },
  { title: "AI-Powered Sales Automation", desc: "Increase order value, reduce stock-outs, and uncover revenue opportunities through intelligent recommendations and predictive ordering." },
  { title: "Distribution-Focused Platform", desc: "Purpose-built for distributors, wholesalers, FMCG businesses, and field sales teams—not generic CRM workflows." },
  { title: "Seamless ERP Integration", desc: "Keep every department aligned with real-time synchronization between field operations and enterprise systems." },
  { title: "Mobile & Offline Ready", desc: "Empower field teams with Android and iOS mobile apps that continue working even in low-connectivity environments." },
  { title: "Real-Time Performance Analytics", desc: "Track KPIs, route compliance, collections, sales targets, and operational performance through executive dashboards." }
];

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100 overflow-hidden">
      <Container>
        <div className="mb-16">
          <SectionHeading
            eyebrow="Why Businesses Choose RepProX"
            title="Enterprise Field Force Automation Software Built for Modern Distribution"
            description="RepProX combines Field Force Automation, Sales Force Automation, Distribution Management, AI-powered insights, and ERP Integration into a single platform. Designed for distributors, wholesalers, FMCG companies, and field sales organizations, it helps teams increase productivity, improve visibility, and accelerate growth."
            align="center"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left Column - Feature Cards Grid */}
          <div className="lg:col-span-7 grid h-full sm:grid-cols-2 gap-6">
            {featureCards.map((card, i) => (
               <Reveal key={card.title} delay={i * 0.05} className="flex">
                  <div className="group flex h-full w-full flex-col rounded-[24px] border border-slate-200/60 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#1d4ed8]/30 hover:shadow-xl hover:shadow-[#1d4ed8]/5">
                     <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#1d4ed8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1d4ed8] group-hover:text-white">
                       <card.icon className="size-6" strokeWidth={2} />
                     </div>
                     <h3 className="mb-3 font-display text-[17px] font-bold leading-snug text-slate-900">{card.title}</h3>
                     <p className="text-[14.5px] leading-relaxed text-slate-600">{card.desc}</p>
                  </div>
               </Reveal>
            ))}
          </div>

          {/* Right Column - Stretching Panel */}
          <div className="lg:col-span-5 flex h-full flex-col">
            <Reveal delay={0.2} className="flex h-full flex-col">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-slate-900/20 lg:p-10">
                {/* Subtle background glow */}
                <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#1d4ed8]/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-[#7c3aed]/20 blur-3xl" />

                <h2 className="relative z-10 mb-8 font-display text-[24px] font-bold text-white lg:text-[28px]">
                  Why Companies Choose RepProX
                </h2>
                
                <div className="relative z-10 mb-10 flex flex-col gap-6">
                  {rightPanelItems.map((item, i) => (
                    <div key={i} className="group flex items-start gap-4">
                      <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#1d4ed8]/20 text-[#60a5fa] transition-colors group-hover:bg-[#1d4ed8] group-hover:text-white">
                        <CheckCircle2 className="size-[14px]" strokeWidth={3} />
                      </div>
                      <div>
                        <h3 className="mb-1 text-[15px] font-bold text-white">{item.title}</h3>
                        <p className="text-[14px] leading-relaxed text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mt-auto flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mt-1 flex size-2 shrink-0 rounded-full bg-[#3b82f6]"></div>
                  <div>
                    <h4 className="mb-2 text-[15px] font-bold text-white">One Platform. Complete Visibility.</h4>
                    <p className="text-[13.5px] leading-relaxed text-slate-300">
                      From sales and distribution to collections, analytics, KPI management, and AI-powered recommendations, RepProX helps organizations streamline operations, improve productivity, and accelerate growth.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
