import type { Metadata } from "next";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import Container from "@/components/layout/container";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import {
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Users,
  ShoppingCart,
  Lightbulb,
  Activity,
  Smartphone,
  BarChart3,
  BrainCircuit,
  MapPin,
  Clock,
  Briefcase,
  Layers,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: `Sales Force Automation | ${SITE_NAME}`,
  description:
    "Close More Deals. Increase Productivity. Gain Complete Sales Visibility with RepProX Sales Force Automation.",
  path: "/solutions/sales-force-automation",
});

const challenges = [
  { title: "Manual Order Taking", desc: "Paper-based orders and manual data entry create errors, delays, and operational inefficiencies that slow down the sales cycle." },
  { title: "Missed Customer Visits", desc: "Without proper planning and tracking, sales representatives may overlook important customer visits, resulting in lost opportunities and weaker relationships." },
  { title: "Lack of Sales Visibility", desc: "Sales managers often lack real-time insight into field activities, customer interactions, and team performance." },
  { title: "Delayed Order Processing", desc: "Orders that require multiple approvals and manual handling can delay fulfillment and negatively impact customer satisfaction." },
  { title: "Poor Customer Follow-Up", desc: "Important opportunities, quotations, and customer requests can be missed due to inconsistent follow-up processes." },
  { title: "Collection Delays", desc: "Managing outstanding payments manually often leads to delayed collections and cash flow challenges." },
  { title: "Low Sales Productivity", desc: "Sales representatives spend excessive time on reporting and administration instead of focusing on selling activities." },
];

const capabilities = [
  {
    icon: Users,
    title: "Customer Management",
    desc: "Create a complete 360-degree view of every customer relationship. Access critical customer information instantly.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    items: [
      { name: "Customer Profiles", detail: "Maintain detailed records with complete business info." },
      { name: "Contact Information", detail: "Access key decision-makers and contact history." },
      { name: "Credit Limits", detail: "View credit availability before processing orders." },
      { name: "Outstanding Balances", detail: "Monitor unpaid invoices in real time." },
      { name: "Customer History", detail: "Review previous transactions, interactions, and visits." },
    ],
  },
  {
    icon: ShoppingCart,
    title: "Sales Execution",
    desc: "Accelerate the sales cycle and improve operational efficiency through digital sales processes.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    items: [
      { name: "Quotations", detail: "Generate and share professional quotations directly." },
      { name: "Sales Orders", detail: "Capture orders instantly and submit them in real time." },
      { name: "Invoices", detail: "Access invoice information and customer billing records." },
      { name: "Sales Returns", detail: "Process returns efficiently with complete tracking." },
      { name: "Payment Collections", detail: "Record payments immediately and update records." },
    ],
  },
  {
    icon: MapPin,
    title: "Field Activity Tracking",
    desc: "Gain complete visibility into every sales representative's daily activities.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    items: [
      { name: "Visit Planning", detail: "Create optimized visit schedules based on priorities." },
      { name: "Visit Check-In", detail: "Verify customer visits through GPS-enabled check-in." },
      { name: "Visit Check-Out", detail: "Capture visit completion details and meeting outcomes." },
      { name: "Activity Notes", detail: "Record discussions, opportunities, and follow-ups." },
      { name: "Visit History", detail: "Maintain a comprehensive record of all interactions." },
    ],
  },
  {
    icon: Lightbulb,
    title: "Customer Intelligence",
    desc: "Turn customer data into actionable business insights to increase sales opportunities.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    items: [
      { name: "Purchase History", detail: "Access detailed buying records to understand preferences." },
      { name: "Buying Patterns", detail: "Identify recurring purchase trends and seasonal demand." },
      { name: "Outstanding Tracking", detail: "Monitor customer payment performance and credit risk." },
      { name: "Product Recommendations", detail: "Receive intelligent suggestions for products." },
    ],
  },
];

const aiFeatures = [
  { title: "Suggested Orders", desc: "Automatically generate recommended order quantities based on previous purchases and customer demand trends." },
  { title: "Cross-Sell Recommendations", desc: "Identify complementary products that increase basket value and customer satisfaction." },
  { title: "Upsell Opportunities", desc: "Discover premium products and higher-value alternatives that maximize revenue potential." },
  { title: "Buying Trend Analysis", desc: "Analyze purchasing behavior to predict future customer requirements." },
  { title: "Revenue Opportunity Detection", desc: "Uncover hidden sales opportunities and customers with high growth potential." },
];

const whyChoose = [
  { icon: Smartphone, title: "Mobile-First Experience", desc: "Empower representatives to work efficiently from anywhere using a powerful and intuitive mobile application." },
  { icon: Clock, title: "Real-Time Data Synchronization", desc: "Ensure sales teams and management always work with accurate, up-to-date information." },
  { icon: Activity, title: "Faster Decision Making", desc: "Access customer information, sales performance metrics, and operational insights instantly." },
  { icon: CheckCircle2, title: "Improved Sales Accountability", desc: "Track every customer visit, order, and activity to ensure execution excellence." },
  { icon: Users, title: "Better Customer Engagement", desc: "Provide personalized service with complete customer visibility and intelligent recommendations." },
  { icon: Layers, title: "Enhanced Collaboration", desc: "Connect sales, finance, distribution, and management teams through a unified platform." },
];

const outcomes = [
  "Increase Sales Revenue",
  "Improve Representative Productivity",
  "Faster Order Processing",
  "Better Customer Retention",
  "Improved Collection Performance",
  "Greater Sales Visibility",
  "Higher Operational Efficiency",
  "Scalable Growth",
];

export default function SalesForceAutomationPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-50 h-svh flex items-center justify-center">
        {/* Animated Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-200/40 blur-[120px] rounded-full mix-blend-multiply pointer-events-none"></div>
        <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] bg-emerald-200/40 blur-[120px] rounded-full mix-blend-multiply pointer-events-none"></div>

        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40"></div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-[1400px] mx-auto hidden lg:block">
          {/* Top Left */}
          <div className="absolute top-[15%] left-[5%] animate-bounce" style={{ animationDuration: '4s' }}>
            <div className="bg-white p-4 rounded-2xl shadow-xl shadow-blue-500/5 border border-slate-100 rotate-[-12deg]">
              <Smartphone className="size-7 text-blue-500" />
            </div>
          </div>
          {/* Bottom Left */}
          <div className="absolute bottom-[15%] left-[8%] animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
            <div className="bg-white p-3 rounded-xl shadow-xl shadow-emerald-500/5 border border-slate-100 rotate-[15deg]">
              <BarChart3 className="size-6 text-emerald-500" />
            </div>
          </div>
          {/* Top Right */}
          <div className="absolute top-[15%] right-[5%] animate-bounce" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>
            <div className="bg-white p-4 rounded-2xl shadow-xl shadow-indigo-500/5 border border-slate-100 rotate-[10deg]">
              <TrendingUp className="size-8 text-indigo-500" />
            </div>
          </div>
          {/* Bottom Right */}
          <div className="absolute bottom-[20%] right-[8%] animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
            <div className="bg-white p-3 rounded-xl shadow-xl shadow-blue-400/5 border border-slate-100 rotate-[-15deg]">
              <Users className="size-6 text-blue-400" />
            </div>
          </div>
        </div>

        <Container className="relative z-10 text-center flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 backdrop-blur-md mb-8">
              <Activity className="size-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 tracking-widest uppercase">Sales Force Automation</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-5xl font-display text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold tracking-tight text-slate-900 leading-[1.1] text-balance">
              Close More Deals.{" "}
              <br className="hidden lg:block" />
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent drop-shadow-sm">
                Increase Productivity.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="mx-auto mt-6 max-w-3xl text-xl sm:text-3xl text-slate-700 font-medium tracking-tight">
              Gain Complete Sales Visibility.
            </h2>
          </Reveal>


        </Container>
      </section>


      {/* TRANSFORM SECTION */}
      <section className="py-20 bg-blue-50/60 border-b border-blue-100/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6 text-balance">
                Transform Field Sales Into a High-Performance Revenue Engine
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Traditional sales processes often rely on manual workflows that create delays, reduce visibility, and limit growth opportunities. Sales representatives spend valuable time on administrative tasks instead of building customer relationships and generating revenue.
                </p>
                <p>
                  RepProX digitizes and automates the entire sales cycle, enabling field teams to work smarter, respond faster, and deliver exceptional customer experiences.
                </p>
                <p>
                  The platform empowers sales teams with real-time customer information, intelligent recommendations, automated workflows, and performance insights that help maximize every customer interaction.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] relative overflow-hidden flex flex-col h-full max-h-[750px]">
                <div className="absolute -right-20 -top-20 opacity-[0.03] pointer-events-none">
                  <BarChart3 className="w-80 h-80 text-blue-600" />
                </div>

                <div className="relative z-10 mb-6 shrink-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                    Challenges
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                    Business Challenges We Solve
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                    Many organizations struggle with inefficiencies that impact sales performance and customer satisfaction. RepProX addresses these challenges through automation, real-time visibility, and intelligent workflows.
                  </p>
                </div>

                <div className="flex flex-col gap-3 relative z-10 overflow-y-auto pr-3 -mr-3 pb-8 custom-scrollbar" style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}>
                  {challenges.map((challenge, idx) => (
                    <div key={idx} className="group flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50 transition-all duration-300 hover:bg-white hover:border-red-100 hover:shadow-[0_4px_20px_-5px_rgba(239,68,68,0.15)] hover:-translate-y-0.5">
                      <div className="flex items-center justify-center size-10 rounded-xl bg-red-100/50 text-red-500 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-100">
                        <AlertCircle className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 transition-colors group-hover:text-red-600">{challenge.title}</h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{challenge.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 lg:py-28 bg-blue-50/60 border-b border-blue-100/50">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-slate-900 lg:text-4xl">
              Complete Sales Force Automation Capabilities
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <Reveal key={cap.title} delay={idx * 0.1}>
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 lg:p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(6,81,237,0.1)] hover:-translate-y-1 overflow-hidden relative">
                  {/* Subtle background glow on hover */}
                  <div className={`absolute -right-20 -top-20 size-64 rounded-full blur-[100px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${cap.bg}`}></div>

                  <div className="relative z-10">
                    <div className={`mb-8 inline-flex p-4 rounded-2xl ${cap.bg} border ${cap.border} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                      <cap.icon className={`size-7 ${cap.color}`} />
                    </div>

                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-4 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                      {cap.desc}
                    </p>

                    <ul className="grid gap-3">
                      {cap.items.map((item) => (
                        <li key={item.name} className="flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors">
                          <CheckCircle2 className={`size-5 shrink-0 mt-0.5 ${cap.color} opacity-80`} />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">{item.name}</span>
                            <span className="text-slate-500 text-sm leading-snug block">{item.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* AI INTELLIGENCE */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <BrainCircuit className="w-96 h-96 text-blue-500" />
        </div>
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                <BrainCircuit className="size-4" />
                <span>Smart Selling</span>
              </div>
              <h2 className="font-display text-3xl font-bold lg:text-4xl mb-6">
                AI-Powered Sales Intelligence
              </h2>
              <div className="space-y-4 text-slate-300 text-lg">
                <p>
                  RepProX leverages advanced artificial intelligence to help sales teams sell smarter and increase revenue.
                </p>
                <p>
                  Instead of relying on guesswork, representatives receive real-time recommendations based on customer behavior, historical transactions, market trends, and purchasing patterns.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-4">
                {aiFeatures.map((feature, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <ArrowRight className="size-4 text-blue-400" />
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE REPPROX */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-slate-900 lg:text-4xl">
              Why Sales Teams Choose RepProX
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.05}>
                <div className="bg-white border border-slate-200 rounded-xl p-6 h-full shadow-sm">
                  <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                    <item.icon className="size-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* MEASURABLE BUSINESS OUTCOMES */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-slate-900 lg:text-4xl mb-6">
              Measurable Business Outcomes
            </h2>
            <p className="text-lg text-slate-600">
              Organizations implementing RepProX Sales Force Automation experience significant improvements across sales performance, operational efficiency, and customer engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {outcomes.map((outcome, idx) => (
              <Reveal key={outcome} delay={idx * 0.05}>
                <div className="group flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(16,185,129,0.15)] hover:border-emerald-200 hover:bg-emerald-50/50">
                  <div className="flex items-center justify-center size-10 rounded-full bg-emerald-50 text-emerald-500 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-100">
                    <TrendingUp className="size-5" />
                  </div>
                  <span className="font-semibold text-slate-800 transition-colors group-hover:text-emerald-950">{outcome}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CtaSection
        eyebrow="Drive Revenue Growth With Smarter Sales Execution"
        title="Ready to Enable Your Sales Teams to Sell Smarter?"
        description="By combining mobility, automation, customer intelligence, and AI-powered recommendations, RepProX helps businesses transform every customer interaction into a growth opportunity."
        primary={{ label: "Request a Demo", href: "/contact" }}
        secondary={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
}