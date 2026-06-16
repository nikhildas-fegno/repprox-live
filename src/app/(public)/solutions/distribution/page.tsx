import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/layout/container";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import {
  Truck, Package, AlertTriangle, ArrowDown, CheckCircle, Database, BrainCircuit, Users, DollarSign, Zap, Route, Smartphone, BarChart, Box, Activity, Search, ArrowUpRight,
  Eye, Tag, Calendar, History, Shield, Target, FileText, TrendingUp, PieChart, Hourglass, ShieldCheck, Clock,
  ArrowRightLeft, CheckSquare, RefreshCw, UserCheck, MapPin, SearchCheck, XCircle, ArrowRight
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Distribution & Van Sales Software | RepProX",
  description: "Manage every product movement from warehouse to customer with RepProX.",
  path: "/solutions/distribution",
});

export default function DistributionPage() {
  return (
    <>
      {/* HERO SECTION - SPLIT LAYOUT */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFF] via-[#EEF5FF] to-white py-24 lg:h-svh lg:flex lg:items-center">

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-8">
                <Truck className="size-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-700 tracking-wide uppercase">Distribution & Van Sales</span>
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance leading-tight mb-6">
                Manage Every Product Movement From Warehouse To Customer
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10 text-balance">
                RepProX Distribution & Van Sales gives distributors complete control over inventory, van stock, warehouse transfers, route execution, deliveries, and field sales operations through one connected platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 font-semibold text-white transition-all hover:bg-indigo-500 shadow-sm">
                  Request Demo
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              {/* Distribution Flow Dashboard Mockup */}
              <div className="relative mx-auto w-full max-w-lg lg:h-[500px] flex items-center justify-center p-4 sm:p-8">
                {/* Main Dashboard Panel */}
                <div className="relative w-full min-h-[450px] sm:h-full bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-indigo-100/50 overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-red-400"></div>
                      <div className="size-3 rounded-full bg-amber-400"></div>
                      <div className="size-3 rounded-full bg-emerald-400"></div>
                    </div>
                    <div className="px-3 py-1 bg-white rounded-full border border-slate-200 text-[10px] font-bold text-slate-500 tracking-wider">LIVE FEED</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 sm:p-6 flex flex-col gap-6 relative">
                    {/* Top Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 transition-all hover:bg-indigo-50">
                        <div className="flex items-center gap-3 mb-2">
                          <Database className="size-5 text-indigo-500" />
                          <span className="text-sm font-semibold text-slate-700">Warehouse</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-900">8,459</p>
                        <p className="text-xs text-indigo-600 mt-1 flex items-center gap-1"><ArrowUpRight className="size-3" /> 12% vs last wk</p>
                      </div>
                      <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 transition-all hover:bg-emerald-50">
                        <div className="flex items-center gap-3 mb-2">
                          <Truck className="size-5 text-emerald-500" />
                          <span className="text-sm font-semibold text-slate-700">Active Vans</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-900">24<span className="text-sm text-slate-500 font-medium">/28</span></p>
                        <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1"><Activity className="size-3" /> On Route</p>
                      </div>
                    </div>

                    {/* Live Activity List */}
                    <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-100 p-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Recent Operations</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="size-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Box className="size-4 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">Delivery #4829</p>
                              <p className="text-xs text-slate-500">Supermarket Downtown</p>
                            </div>
                          </div>
                          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Completed</span>
                        </div>
                        <div className="flex items-center justify-between group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="size-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <AlertTriangle className="size-4 text-amber-600" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">Low Stock Alert</p>
                              <p className="text-xs text-slate-500">Van #12 (North Route)</p>
                            </div>
                          </div>
                          <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-md">Pending</span>
                        </div>
                        <div className="flex items-center justify-between group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="size-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Database className="size-4 text-purple-600" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">Stock Transfer</p>
                              <p className="text-xs text-slate-500">Main WH to City Hub</p>
                            </div>
                          </div>
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">In Transit</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Floating Icons */}
                <div className="hidden sm:flex absolute -left-12 top-1/4 size-14 rounded-full bg-white border border-slate-100 shadow-lg shadow-indigo-100/50 items-center justify-center z-30 animate-[bounce_4s_infinite]">
                  <Package className="size-6 text-indigo-500" />
                </div>
                <div className="hidden sm:flex absolute -left-6 top-1/2 size-14 rounded-full bg-indigo-600 border-2 border-white shadow-lg shadow-indigo-200/50 items-center justify-center z-20 animate-[bounce_5s_infinite_0.5s]">
                  <Truck className="size-6 text-white" />
                </div>
                <div className="hidden sm:flex absolute -left-16 bottom-1/4 size-14 rounded-full bg-emerald-500 border-2 border-white shadow-lg shadow-emerald-200/50 items-center justify-center z-10 animate-[bounce_6s_infinite_1s]">
                  <Activity className="size-6 text-white" />
                </div>

                <div className="hidden sm:flex absolute -right-10 top-1/3 size-14 rounded-full bg-slate-900 border-2 border-white shadow-lg shadow-slate-200/50 items-center justify-center z-30 animate-[bounce_5s_infinite_0.2s]">
                  <Route className="size-6 text-emerald-400" />
                </div>
                <div className="hidden sm:flex absolute -right-6 bottom-1/3 size-14 rounded-full bg-white border border-slate-100 shadow-lg shadow-slate-200/50 items-center justify-center z-20 animate-[bounce_4s_infinite_0.7s]">
                  <CheckCircle className="size-6 text-indigo-500" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* BUSINESS CHALLENGES */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Distribution Operations Are Hard To Control</h2>
            <p className="text-slate-600 text-lg">Most distributors struggle with:</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Inventory discrepancies between warehouses and vans",
              "Stock shortages during customer visits",
              "Delayed replenishment requests",
              "Manual stock transfer processes",
              "Lack of visibility into field inventory",
              "Delivery execution delays",
              "Untracked van movements",
              "Inefficient route execution",
              "Lost sales due to unavailable stock"
            ].map((challenge, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-white border-l-4 border-l-red-500 border-y border-r border-slate-200 rounded-r-xl p-5 shadow-sm h-full flex items-start gap-3 transition-transform hover:-translate-y-1 hover:shadow-md">
                  <AlertTriangle className="size-5 text-red-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 font-medium leading-snug">{challenge}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SOLUTION OVERVIEW */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">One Platform For Complete Distribution Execution</h2>
            <p className="text-slate-600 text-lg">
              RepProX connects every stage of the distribution cycle, providing real-time inventory visibility and empowering every team member.
            </p>
          </div>

          <Reveal>
            <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 max-w-6xl mx-auto relative">
              <div className="hidden lg:block absolute top-[4.5rem] left-8 w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 z-0"></div>

              {[
                { name: "Warehouse", icon: Database, items: ["Stock Control", "Dispatching", "Transfers"] },
                { name: "Management", icon: Activity, items: ["Live Tracking", "Approvals", "Analytics"] },
                { name: "Sales Reps", icon: Users, items: ["Order Taking", "Merchandising", "Collections"] },
                { name: "Drivers", icon: Truck, items: ["Route Guidance", "Proof of Delivery", "Returns"] },
                { name: "Customers", icon: Box, items: ["Real-time ETA", "E-Invoices", "Feedback"] }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full lg:w-[22%] group hover:-translate-y-2 transition-all duration-300">
                  <div className="size-[72px] rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shadow-inner mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                    <step.icon className="size-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-bold text-lg text-slate-900 text-center mb-4">{step.name}</span>
                  <ul className="space-y-3 w-full">
                    {step.items.map((item, j) => (
                      <li key={j} className="text-sm font-medium text-slate-600 flex items-center gap-2">
                        <div className="size-1.5 bg-indigo-400 rounded-full shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {i < 4 && <ArrowDown className="absolute -bottom-10 left-1/2 -translate-x-1/2 size-6 text-indigo-300 lg:hidden" />}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>


      {/* FEATURE SECTIONS (Zig Zag) */}
      <section className="py-20 lg:py-32 bg-white">
        <Container className="flex flex-col gap-24 lg:gap-32">
          {/* Feature 1 */}
          <div className="bg-blue-50/50 border border-blue-100/50 rounded-3xl p-6 lg:p-8 shadow-sm relative overflow-hidden">

            <div className="relative z-10 flex flex-col xl:flex-row gap-8 xl:gap-6 items-center">

              {/* Left Column Showcase */}
              <div className="w-full xl:w-[60%] relative">

                {/* Decorative Background Illustration */}
                <div className="absolute top-[10px] right-0 w-[40%] max-w-[340px] opacity-[0.3] pointer-events-none hidden lg:block -z-10">
                  <div className="relative w-full aspect-[4/3] flex flex-col items-center justify-center">

                    {/* Motion lines behind truck */}
                    <div className="absolute top-[38%] -left-[10%] w-[25%] h-[3px] bg-[#C7C5FF] rounded-full"></div>
                    <div className="absolute top-[52%] -left-[25%] w-[40%] h-[3px] bg-[#C7C5FF] rounded-full"></div>
                    <div className="absolute top-[66%] -left-[15%] w-[25%] h-[3px] bg-[#C7C5FF] rounded-full"></div>

                    {/* The exact Truck icon from Lucide */}
                    <Truck
                      className="w-[85%] h-auto text-[#C7C5FF]"
                      strokeWidth={1.5}
                    />

                    {/* Dotted shadow track beneath the truck */}
                    <div className="absolute bottom-[12%] left-[-20%] right-[5%] h-[0] border-b-[4px] border-dotted border-[#C7C5FF]/80"></div>

                    {/* Subtle blurred ground shadow */}
                    <div className="absolute bottom-[8%] left-[-10%] right-[10%] h-[12px] bg-[#C7C5FF]/50 blur-[10px] rounded-full"></div>

                  </div>
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-[11px] font-bold uppercase tracking-wider mb-6">
                    <Truck className="size-3.5" strokeWidth={2.5} /> Van Inventory Management
                  </div>

                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-4 leading-tight">
                    Vehicle Inventory <br className="hidden lg:block" /> Intelligence
                  </h2>

                  <p className="text-slate-600 text-lg mb-10 max-w-xl leading-relaxed">
                    Gain complete visibility and control over stock movement, inventory levels, and vehicle operations in real time.
                  </p>

                  {/* Mini Information Cards (2x2) */}
                  <div className="grid sm:grid-cols-2 gap-4 w-full">
                    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                        <Truck className="size-6 text-indigo-600" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a1f36] text-[15px] mb-0.5">Real-Time Visibility</h4>
                        <p className="text-[13px] text-slate-500 leading-snug">Track inventory across all vehicles in real-time</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                        <ShieldCheck className="size-6 text-indigo-600" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a1f36] text-[15px] mb-0.5">Better Accuracy</h4>
                        <p className="text-[13px] text-slate-500 leading-snug">Ensure accurate stock and reduce discrepancies</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                        <BarChart className="size-6 text-indigo-600" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a1f36] text-[15px] mb-0.5">Smarter Decisions</h4>
                        <p className="text-[13px] text-slate-500 leading-snug">Data-driven insights for better planning</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                        <TrendingUp className="size-6 text-indigo-600" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a1f36] text-[15px] mb-0.5">Sales Ready</h4>
                        <p className="text-[13px] text-slate-500 leading-snug">Keep the right stock ready to sell</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Features & Benefits Panel */}
              <div className="w-full xl:w-[45%]">
                <div className="bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-6 sm:px-8 sm:py-10">
                  <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-between">

                    {/* Capabilities List */}
                    <div className="flex-1">
                      <div className="border-b-2 border-indigo-600 pb-3 mb-5 w-full">
                        <h3 className="flex items-center justify-between gap-2 font-bold text-[#1a1f36] text-[15px]">
                          Capabilities <CheckCircle className="size-5 text-indigo-600" />
                        </h3>
                      </div>
                      <ul className="space-y-0">
                        {[
                          { text: "Real-Time Van Stock Visibility", icon: Eye },
                          { text: "Vehicle Inventory Tracking", icon: Truck },
                          { text: "Product Availability Monitoring", icon: Package },
                          { text: "Batch & Lot Tracking", icon: Tag },
                          { text: "Inventory Movement History", icon: History },
                          { text: "Van Replenishment Management", icon: ArrowUpRight },
                          { text: "Mobile Inventory Access", icon: Smartphone },
                          { text: "Inventory Status Monitoring", icon: Activity }
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0 text-[13px] font-medium text-slate-600">
                            <item.icon className="size-[18px] text-indigo-600 shrink-0" strokeWidth={2} />
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business Benefits List */}
                    <div className="flex-1">
                      <div className="border-b-2 border-amber-500 pb-3 mb-5 w-full">
                        <h3 className="flex items-center justify-between gap-2 font-bold text-[#1a1f36] text-[15px]">
                          Business Benefits <Zap className="size-5 text-amber-500" />
                        </h3>
                      </div>
                      <ul className="space-y-0">
                        {[
                          { text: "Reduce Stock Discrepancies", icon: Shield },
                          { text: "Improve Inventory Accuracy", icon: Target },
                          { text: "Increase Sales Readiness", icon: TrendingUp },
                          { text: "Prevent Product Shortages", icon: Hourglass }
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0 text-[13px] font-medium text-slate-600">
                            <item.icon className="size-[18px] text-amber-500 shrink-0" strokeWidth={2} />
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-blue-50/50 border border-blue-100/50 rounded-3xl p-6 lg:p-8 shadow-sm relative overflow-hidden">
            <div className="grid xl:grid-cols-2 gap-12 lg:gap-16 items-stretch relative z-10">
              <Reveal delay={0.2} className="order-2 xl:order-1">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold uppercase tracking-wider mb-6">
                  <Database className="size-3.5" strokeWidth={2.5} /> Stock Requests
                </div>

                <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a1f36] mb-6 text-balance leading-tight">
                  Made Simple <br className="hidden xl:block" /> Keep Inventory Flowing
                </h2>

                <p className="text-slate-600 text-lg mb-10 max-w-xl leading-relaxed">
                  Enable field teams to request inventory instantly whenever stock levels fall below operational requirements. Ensure faster replenishment and uninterrupted distribution activities.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-between w-full mt-2">
                  {/* Capabilities Card */}
                  <div className="flex-1 bg-white rounded-3xl p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500 transition-all duration-300 group-hover:h-1.5"></div>
                    <div className="border-b border-slate-100 pb-3 mb-4 w-full">
                      <h3 className="flex items-center justify-between gap-2 font-bold text-[#1a1f36] text-[15px]">
                        Capabilities <CheckCircle className="size-5 text-emerald-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-emerald-600" />
                      </h3>
                    </div>
                    <ul className="space-y-0">
                      {[
                        { text: "Inventory Replenishment Requests", icon: FileText },
                        { text: "Low Stock Notifications", icon: AlertTriangle },
                        { text: "Request Approval Workflow", icon: ShieldCheck },
                        { text: "Priority-Based Request Processing", icon: ArrowUpRight },
                        { text: "Warehouse Allocation Management", icon: Database },
                        { text: "Request Status Tracking", icon: Activity },
                        { text: "Mobile Request Submission", icon: Smartphone },
                        { text: "Real-Time Updates", icon: RefreshCw }
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 py-2.5 border-b border-slate-50 last:border-0 text-[13px] font-medium text-slate-600">
                          <div className="size-6 rounded-md bg-emerald-50 flex items-center justify-center shrink-0">
                            <item.icon className="size-3.5 text-emerald-600" strokeWidth={2} />
                          </div>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Business Benefits Card */}
                  <div className="flex-1 bg-white rounded-3xl p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500 transition-all duration-300 group-hover:h-1.5"></div>
                    <div className="border-b border-slate-100 pb-3 mb-4 w-full">
                      <h3 className="flex items-center justify-between gap-2 font-bold text-[#1a1f36] text-[15px]">
                        Business Benefits <Zap className="size-5 text-amber-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-600" />
                      </h3>
                    </div>
                    <ul className="space-y-0">
                      {[
                        { text: "Eliminate Stock-Outs", icon: Package },
                        { text: "Improve Product Availability", icon: Eye },
                        { text: "Reduce Replenishment Delays", icon: Clock },
                        { text: "Increase Operational Efficiency", icon: TrendingUp }
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 py-2.5 border-b border-slate-50 last:border-0 text-[13px] font-medium text-slate-600">
                          <div className="size-6 rounded-md bg-amber-50 flex items-center justify-center shrink-0">
                            <item.icon className="size-3.5 text-amber-500" strokeWidth={2} />
                          </div>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              {/* Right Column Workflow Visualization */}
              <Reveal className="order-1 xl:order-2 h-full flex flex-col justify-center">
                <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-3xl p-6 sm:px-8 sm:py-6 relative overflow-hidden shadow-sm w-full">

                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>

                  <div className="relative z-10">
                    <h3 className="font-bold text-[#1a1f36] text-lg mb-6 flex items-center gap-2">
                      <ArrowRightLeft className="size-5 text-emerald-500" /> Stock Request Workflow
                    </h3>

                    <div className="relative">
                      {/* Vertical Connecting Line */}
                      <div className="absolute left-[22px] top-[28px] bottom-[28px] w-[2px] bg-emerald-200"></div>

                      <div className="space-y-5">
                        {/* Step 1 */}
                        <div className="flex gap-4 sm:gap-5 relative z-10 group">
                          <div className="size-11 rounded-full bg-white border-2 border-emerald-200 flex items-center justify-center shrink-0 z-10 shadow-sm transition-colors group-hover:border-emerald-400">
                            <FileText className="size-5 text-emerald-600" />
                          </div>
                          <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 flex-1 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-md transition-all relative overflow-hidden group-hover:-translate-y-0.5">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-[14px] text-slate-800">Stock Request</h4>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">10:00 AM</span>
                            </div>
                            <p className="text-[12px] text-slate-500">Field team requests 50x Product A</p>
                          </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-4 sm:gap-5 relative z-10 group">
                          <div className="size-11 rounded-full bg-white border-2 border-emerald-200 flex items-center justify-center shrink-0 z-10 shadow-sm transition-colors group-hover:border-emerald-400">
                            <ShieldCheck className="size-5 text-emerald-600" />
                          </div>
                          <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 flex-1 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-md transition-all relative overflow-hidden group-hover:-translate-y-0.5">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-[14px] text-slate-800">Approval Process</h4>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">10:15 AM</span>
                            </div>
                            <p className="text-[12px] text-slate-500">Manager approves the transfer</p>
                          </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-4 sm:gap-5 relative z-10 group">
                          <div className="size-11 rounded-full bg-white border-2 border-emerald-200 flex items-center justify-center shrink-0 z-10 shadow-sm transition-colors group-hover:border-emerald-400">
                            <Database className="size-5 text-emerald-600" />
                          </div>
                          <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 flex-1 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-md transition-all relative overflow-hidden group-hover:-translate-y-0.5">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-[14px] text-slate-800">Warehouse Allocation</h4>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">10:30 AM</span>
                            </div>
                            <p className="text-[12px] text-slate-500">Stock is picked and packed</p>
                          </div>
                        </div>

                        {/* Step 4 (Active/Pulsing Step) */}
                        <div className="flex gap-4 sm:gap-5 relative z-10 group">
                          <div className="size-11 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center shrink-0 z-10 shadow-sm relative">
                            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-30"></div>
                            <Truck className="size-5 text-emerald-700" />
                          </div>
                          <div className="bg-white border-2 border-emerald-400/50 rounded-2xl p-4 sm:p-5 flex-1 shadow-[0_8px_30px_-4px_rgba(16,185,129,0.15)] relative overflow-hidden -translate-y-0.5">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500"></div>
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-[14px] text-emerald-900">Inventory Dispatch</h4>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-700 flex items-center gap-1">
                                <RefreshCw className="size-3 animate-spin" /> In Transit
                              </span>
                            </div>
                            <p className="text-[12px] text-emerald-700/80 font-medium">Van 04 is currently en route</p>
                          </div>
                        </div>

                        {/* Step 5 */}
                        <div className="flex gap-4 sm:gap-5 relative z-10 group">
                          <div className="size-11 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center shrink-0 z-10 transition-colors">
                            <UserCheck className="size-5 text-slate-400" />
                          </div>
                          <div className="bg-white/60 border border-slate-100 rounded-2xl p-4 sm:p-5 flex-1 shadow-sm relative overflow-hidden opacity-70">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-[14px] text-slate-600">Field Team Receipt</h4>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-400">Pending</span>
                            </div>
                            <p className="text-[12px] text-slate-400">Awaiting confirmation</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

{/* Feature 3: Stock Transfers */}
          <div className="bg-sky-50/50 border border-sky-100/50 rounded-3xl p-6 lg:p-8 shadow-sm relative overflow-hidden">
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center relative z-10 mb-10">
              
              {/* Left Panel: Warehouse A */}
              <Reveal className="order-1">
                <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-sky-400"></div>
                  <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
                    <Database className="size-5 text-sky-500" /> Warehouse A (Main)
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                      <span className="text-sm text-slate-500">Current Stock</span>
                      <span className="text-sm font-bold text-slate-800">4,500 Units</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                      <span className="text-sm text-slate-500">Transfer Qty</span>
                      <span className="text-sm font-bold text-sky-600">-250 Units</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Status</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-700 flex items-center gap-1">
                        <RefreshCw className="size-3 animate-spin" /> Dispatching
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Center: Animated connection */}
              <Reveal delay={0.1} className="order-3 lg:order-2 flex justify-center py-2 lg:py-0">
                <div className="flex flex-col items-center gap-3">
                  <div className="hidden lg:flex items-center w-24 relative justify-center">
                    <div className="absolute inset-0 w-full h-0.5 bg-sky-200 border-t-2 border-dashed border-sky-300 top-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10 bg-sky-50 p-2 rounded-full border-2 border-sky-200 animate-pulse">
                      <ArrowRight className="size-6 text-sky-500" />
                    </div>
                  </div>
                  {/* Mobile alternative */}
                  <div className="lg:hidden flex items-center justify-center relative h-16">
                    <div className="absolute inset-0 h-full w-0.5 bg-sky-200 border-l-2 border-dashed border-sky-300 left-1/2 -translate-x-1/2"></div>
                    <div className="relative z-10 bg-sky-50 p-2 rounded-full border-2 border-sky-200 animate-pulse">
                      <ArrowDown className="size-6 text-sky-500" />
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3 py-1 rounded-full border border-sky-200 shadow-sm">Transferring</span>
                </div>
              </Reveal>

              {/* Right Panel: Warehouse B */}
              <Reveal delay={0.2} className="order-2 lg:order-3">
                <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-400"></div>
                  <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
                    <MapPin className="size-5 text-indigo-500" /> Branch B (North)
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                      <span className="text-sm text-slate-500">Incoming Inventory</span>
                      <span className="text-sm font-bold text-emerald-600">+250 Units</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                      <span className="text-sm text-slate-500">Expected Arrival</span>
                      <span className="text-sm font-bold text-slate-800">14:30 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Transfer History</span>
                      <span className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-2 cursor-pointer">View Log</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bottom Section: Title, Description, Cards */}
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start relative z-10">
              <Reveal delay={0.3}>
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-[11px] font-bold uppercase tracking-wider mb-6">
                  <ArrowRightLeft className="size-3.5" strokeWidth={2.5} /> Stock Transfers
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1a1f36] mb-6 text-balance leading-tight">
                  Seamlessly Move Inventory Between Locations
                </h2>
                <p className="text-slate-600 text-lg mb-0 leading-relaxed">
                  Track and manage the movement of goods between main warehouses, regional branches, and mobile vans with complete transparency.
                </p>
              </Reveal>

              <Reveal delay={0.4} className="flex gap-4 sm:gap-6 flex-col sm:flex-row h-full">
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-center">
                  <h4 className="font-bold text-[#1a1f36] text-[14px] mb-4 flex items-center justify-between">
                    Capabilities <CheckCircle className="size-4 text-emerald-500" />
                  </h4>
                  <ul className="space-y-2.5">
                    {["Multi-Location Routing", "Batch/Lot Tracking", "Transfer Approvals", "Discrepancy Checks"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-[13px] font-medium text-slate-600">
                        <div className="size-1.5 rounded-full bg-emerald-400"></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-center">
                  <h4 className="font-bold text-[#1a1f36] text-[14px] mb-4 flex items-center justify-between">
                    Benefits <Zap className="size-4 text-amber-500" />
                  </h4>
                  <ul className="space-y-2.5">
                    {["Reduce Stock Loss", "Optimize Stock Levels", "Improve Visibility", "Faster Replenishment"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-[13px] font-medium text-slate-600">
                        <div className="size-1.5 rounded-full bg-amber-400"></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

{/* Feature 4: Stock Transfer Confirmation */}
          <div className="bg-purple-50/50 border border-purple-100/50 rounded-3xl p-6 lg:p-8 shadow-sm relative overflow-hidden">
            
            {/* Top Section */}
            <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12 relative z-10">
              <Reveal>
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-[11px] font-bold uppercase tracking-wider mb-6">
                  <CheckSquare className="size-3.5" strokeWidth={2.5} /> Transfer Confirmation
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1a1f36] mb-6 text-balance leading-tight">
                  Verify Every Product Movement
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Ensure absolute accuracy by verifying transfers at the destination. Catch discrepancies instantly and maintain an airtight audit trail.
                </p>
              </Reveal>
            </div>

            <div className="grid xl:grid-cols-[1fr_1.5fr_1fr] gap-6 lg:gap-8 items-stretch relative z-10">
              
              {/* Left: Transfer Details */}
              <Reveal delay={0.1} className="h-full">
                <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-purple-400"></div>
                  <h3 className="font-bold text-slate-800 text-[15px] mb-6 flex items-center gap-2 pb-3 border-b border-slate-100">
                    <FileText className="size-4 text-purple-500" /> Transfer Details
                  </h3>
                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Transfer ID</p>
                      <p className="text-[13px] font-medium text-slate-800">TRN-2023-8942</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Source</p>
                      <p className="text-[13px] font-medium text-slate-800">Warehouse A</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Destination</p>
                      <p className="text-[13px] font-medium text-slate-800">Van 04 (John D.)</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Quantity</p>
                      <p className="text-[13px] font-bold text-purple-600">250 Units</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Center: Confirmation Workflow */}
              <Reveal delay={0.2} className="h-full">
                <div className="bg-white/60 backdrop-blur-sm border border-purple-100 rounded-3xl p-6 relative overflow-hidden shadow-sm h-full flex flex-col justify-center">
                  <div className="flex justify-between items-center relative z-10 px-2 sm:px-6">
                    {/* Background Line */}
                    <div className="absolute left-[10%] right-[10%] top-[20px] h-[2px] bg-purple-100 -z-10"></div>
                    
                    {/* Steps */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="size-10 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center shadow-sm">
                        <Clock className="size-4 text-purple-500" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 text-center">Pending</span>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                      <div className="size-10 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center shadow-sm">
                        <SearchCheck className="size-4 text-purple-500" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 text-center">Verification</span>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                      <div className="size-10 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center shadow-sm">
                        <Box className="size-4 text-purple-500" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 text-center">Validation</span>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                      <div className="size-10 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pulse">
                        <CheckCircle className="size-4 text-emerald-600" />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 text-center">Approved</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Right: Audit & Exceptions */}
              <Reveal delay={0.3} className="h-full">
                <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-rose-400"></div>
                  <h3 className="font-bold text-slate-800 text-[15px] mb-6 flex items-center gap-2 pb-3 border-b border-slate-100">
                    <Shield className="size-4 text-rose-500" /> Audit & Exceptions
                  </h3>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <XCircle className="size-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[12px] font-bold text-slate-800">Discrepancy Logged</p>
                        <p className="text-[11px] text-slate-500 leading-tight mt-1">2 units missing from Batch #A492</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <History className="size-4 text-indigo-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[12px] font-bold text-slate-800">Audit Trail Created</p>
                        <p className="text-[11px] text-slate-500 leading-tight mt-1">Manager notified at 14:32 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bottom Benefits */}
            <Reveal delay={0.4} className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { text: "Ensure Accountability", icon: Users },
                  { text: "Catch Errors Instantly", icon: Search },
                  { text: "Enforce Compliance", icon: ShieldCheck },
                  { text: "Streamline Approvals", icon: CheckSquare }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/60 border border-purple-100 rounded-xl p-4 flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                      <item.icon className="size-4 text-purple-600" />
                    </div>
                    <span className="text-[12px] font-bold text-slate-700 leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

{/* Feature 5: Inventory Count */}
          <div className="bg-amber-50/50 border border-amber-100/50 rounded-3xl p-6 lg:p-8 shadow-sm relative overflow-hidden">
            <div className="grid xl:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start relative z-10 mb-8">
              
              {/* Left Side: Title & Dashboard */}
              <div className="space-y-10">
                <Reveal>
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-[11px] font-bold uppercase tracking-wider mb-6">
                    <PieChart className="size-3.5" strokeWidth={2.5} /> Inventory Count
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1a1f36] mb-6 text-balance leading-tight">
                    Perform Faster, More Accurate Inventory Audits
                  </h2>
                  <p className="text-slate-600 text-lg mb-0 leading-relaxed max-w-xl">
                    Conduct seamless stock checks, detect variances in real-time, and automatically reconcile inventory differences to maintain a healthy bottom line.
                  </p>
                </Reveal>

                {/* Split Analytics Dashboard */}
                <Reveal delay={0.1}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div className="size-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                          <Activity className="size-5 text-indigo-600" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700">In Progress</span>
                      </div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Count Progress</p>
                      <div className="flex items-end gap-2">
                        <p className="text-3xl font-display font-bold text-slate-800">84%</p>
                        <p className="text-[12px] text-slate-500 font-medium mb-1">of Warehouse A</p>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 mt-4">
                        <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '84%' }}></div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div className="size-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                          <Target className="size-5 text-emerald-600" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700">Excellent</span>
                      </div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Count Accuracy</p>
                      <div className="flex items-end gap-2">
                        <p className="text-3xl font-display font-bold text-slate-800">99.2%</p>
                        <p className="text-[12px] text-emerald-600 font-medium mb-1 flex items-center"><ArrowUpRight className="size-3 mr-0.5" /> +0.5%</p>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-4 border-t border-slate-50 pt-3">Variance Detected: <span className="text-rose-500 font-bold">12 Units</span></p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Side: Checklist */}
              <Reveal delay={0.2} className="h-full">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-slate-100 h-full flex flex-col justify-center group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-[#1a1f36] text-[16px] mb-6 flex items-center gap-2">
                    <CheckSquare className="size-5 text-amber-500" /> Core Capabilities
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { text: "Blind & Guided Counts", icon: Eye },
                      { text: "Barcode/QR Scanning", icon: Search },
                      { text: "Variance Detection", icon: AlertTriangle },
                      { text: "Automatic Reconciliation", icon: RefreshCw },
                      { text: "Multi-User Counting", icon: Users },
                      { text: "Count Approvals", icon: ShieldCheck }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[13px] font-medium text-slate-600">
                        <div className="size-7 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                          <item.icon className="size-3.5 text-amber-600" />
                        </div>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Bottom Benefits */}
            <Reveal delay={0.3}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Reduce Discrepancies", desc: "Catch errors before they cost money." },
                  { title: "Save Time Auditing", desc: "Cut manual counting hours by half." },
                  { title: "Improve Order Accuracy", desc: "Fulfill orders from exact stock counts." },
                  { title: "Identify Shrinkage", desc: "Spot theft or lost items quickly." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/60 border border-amber-100 rounded-xl p-4">
                    <h4 className="font-bold text-[#1a1f36] text-[13px] mb-1">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

{/* Feature 6: Warehouse Synchronization */}
          <div className="bg-slate-50/50 border border-slate-100/50 rounded-3xl p-6 lg:p-10 shadow-sm relative overflow-hidden">
            
            {/* Center Visual: Network Diagram */}
            <Reveal className="mb-12 relative z-10">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] p-8 sm:p-12">
                <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative">
                  
                  {/* Connection Lines (Desktop) */}
                  <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-slate-100 -translate-y-1/2 -z-10"></div>
                  
                  {/* Distribution Center */}
                  <div className="flex flex-col items-center gap-3 relative bg-white px-4">
                    <div className="size-16 rounded-2xl bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center shadow-md">
                      <Database className="size-8 text-indigo-600" />
                    </div>
                    <div className="text-center">
                      <p className="text-[13px] font-bold text-slate-800">Dist. Center</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Primary Node</p>
                    </div>
                  </div>

                  {/* Sync Indicators */}
                  <div className="flex md:flex-row flex-col items-center gap-4">
                    <RefreshCw className="size-5 text-indigo-400 animate-spin" />
                  </div>

                  {/* Warehouse A */}
                  <div className="flex flex-col items-center gap-3 relative bg-white px-4">
                    <div className="size-14 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center shadow-md">
                      <Database className="size-6 text-emerald-600" />
                    </div>
                    <div className="text-center">
                      <p className="text-[12px] font-bold text-slate-800">Warehouse A</p>
                      <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mt-0.5 flex items-center justify-center gap-1"><CheckCircle className="size-3" /> Synced</p>
                    </div>
                  </div>

                  {/* Sync Indicators */}
                  <div className="flex md:flex-row flex-col items-center gap-4">
                    <RefreshCw className="size-5 text-emerald-400 animate-spin" />
                  </div>

                  {/* Warehouse B */}
                  <div className="flex flex-col items-center gap-3 relative bg-white px-4">
                    <div className="size-14 rounded-2xl bg-sky-50 border-2 border-sky-200 flex items-center justify-center shadow-md">
                      <Database className="size-6 text-sky-600" />
                    </div>
                    <div className="text-center">
                      <p className="text-[12px] font-bold text-slate-800">Warehouse B</p>
                      <p className="text-[10px] text-sky-600 font-bold uppercase tracking-widest mt-0.5 flex items-center justify-center gap-1"><CheckCircle className="size-3" /> Synced</p>
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>

            {/* Middle Grid: Capabilities & Benefits */}
            <div className="grid md:grid-cols-2 gap-8 relative z-10 mb-8">
              <Reveal delay={0.1}>
                <h3 className="font-bold text-[#1a1f36] text-[18px] mb-4 flex items-center gap-2">
                  <BrainCircuit className="size-5 text-indigo-500" /> Synchronization Capabilities
                </h3>
                <ul className="space-y-3">
                  {["Multi-Warehouse Linking", "Real-Time Stock Updates", "Automated Reconciliation", "Cross-Location Search"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[13px] font-medium text-slate-600">
                      <div className="size-6 rounded-md bg-indigo-50 flex items-center justify-center shrink-0">
                        <CheckCircle className="size-3.5 text-indigo-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <h3 className="font-bold text-[#1a1f36] text-[18px] mb-4 flex items-center gap-2">
                  <Zap className="size-5 text-amber-500" /> Business Benefits
                </h3>
                <ul className="space-y-3">
                  {["Eliminate Data Silos", "Prevent Double Selling", "Optimize Network Inventory", "Unified Reporting"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[13px] font-medium text-slate-600">
                      <div className="size-6 rounded-md bg-amber-50 flex items-center justify-center shrink-0">
                        <CheckCircle className="size-3.5 text-amber-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Bottom: Metrics */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 border border-slate-100 flex flex-col items-center justify-center text-center">
                  <p className="text-2xl font-display font-bold text-indigo-600 mb-1">99.9%</p>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Data Accuracy</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100 flex flex-col items-center justify-center text-center">
                  <p className="text-2xl font-display font-bold text-emerald-600 mb-1 flex items-center gap-1"><CheckCircle className="size-5" /> Online</p>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Sync Status</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100 flex flex-col items-center justify-center text-center">
                  <p className="text-2xl font-display font-bold text-sky-600 mb-1">Real-Time</p>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Update Frequency</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100 flex flex-col items-center justify-center text-center">
                  <p className="text-2xl font-display font-bold text-purple-600 mb-1">24/7</p>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Active Connectivity</p>
                </div>
              </div>
            </Reveal>
          </div>

{/* Feature 7: Real-Time Inventory Visibility */}
          <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-3xl p-6 lg:p-8 shadow-sm relative overflow-hidden">
            
            {/* Top Title */}
            <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
              <Reveal>
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold uppercase tracking-wider mb-6">
                  <Eye className="size-3.5" strokeWidth={2.5} /> Command Center
                </div>
                <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#1a1f36] mb-6 text-balance leading-tight">
                  Total Inventory Visibility Across Your Entire Network
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  A premium control-tower experience giving you live visibility into warehouse stock, van inventory, product availability, and movement trends.
                </p>
              </Reveal>
            </div>

            <div className="grid xl:grid-cols-[2fr_1fr] gap-8 items-start relative z-10">
              
              {/* Main Dashboard Panel */}
              <Reveal delay={0.1}>
                <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.08)] p-6 sm:p-8">
                  <h3 className="font-bold text-slate-800 text-lg mb-6 flex items-center justify-between">
                    <span>Live Inventory Levels</span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100"><RefreshCw className="size-3 animate-spin" /> LIVE</span>
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {/* Widget 1 */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex justify-between items-start mb-2">
                        <Database className="size-5 text-indigo-500" />
                        <span className="text-[10px] font-bold text-slate-400">Total</span>
                      </div>
                      <p className="text-2xl font-display font-bold text-slate-800 mb-1">124,500</p>
                      <p className="text-[11px] font-medium text-slate-500">Warehouse Stock</p>
                    </div>
                    {/* Widget 2 */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex justify-between items-start mb-2">
                        <Truck className="size-5 text-emerald-500" />
                        <span className="text-[10px] font-bold text-slate-400">Deployed</span>
                      </div>
                      <p className="text-2xl font-display font-bold text-slate-800 mb-1">8,240</p>
                      <p className="text-[11px] font-medium text-slate-500">Van Stock</p>
                    </div>
                    {/* Widget 3 */}
                    <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100">
                      <div className="flex justify-between items-start mb-2">
                        <AlertTriangle className="size-5 text-rose-500" />
                        <span className="text-[10px] font-bold text-rose-400">Alerts</span>
                      </div>
                      <p className="text-2xl font-display font-bold text-rose-700 mb-1">14</p>
                      <p className="text-[11px] font-medium text-rose-600">Low Stock SKUs</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <h4 className="font-bold text-slate-800 text-[13px] mb-4">Top Product Availability</h4>
                    <div className="space-y-4">
                      {/* Product Bar 1 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1.5">
                          <span>Product Alpha</span>
                          <span>92% Stocked</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      {/* Product Bar 2 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1.5">
                          <span>Product Beta</span>
                          <span>45% Stocked (Reorder)</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Side Insights Panel */}
              <div className="flex flex-col gap-6">
                <Reveal delay={0.2}>
                  <div className="bg-indigo-900 rounded-3xl p-6 shadow-md text-white relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
                    <h3 className="font-bold text-white text-[15px] mb-6 flex items-center gap-2">
                      <BarChart className="size-4 text-indigo-300" /> Insights Panel
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <TrendingUp className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[12px] font-bold text-indigo-50">Movement Analysis</p>
                          <p className="text-[11px] text-indigo-200 mt-1">Velocity up 12% this week</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <PieChart className="size-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[12px] font-bold text-indigo-50">Availability Trends</p>
                          <p className="text-[11px] text-indigo-200 mt-1">High demand in North Region</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Activity className="size-4 text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[12px] font-bold text-indigo-50">Inventory Performance</p>
                          <p className="text-[11px] text-indigo-200 mt-1">Stock turnover rate healthy</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Reveal>

                {/* Bottom Benefits */}
                <Reveal delay={0.3}>
                  <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm group hover:-translate-y-1 transition-all duration-300">
                    <h3 className="font-bold text-[#1a1f36] text-[14px] mb-4 flex items-center gap-2">
                      <Zap className="size-4 text-amber-500" /> Business Benefits
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        "Proactive Decision Making",
                        "Prevent Lost Sales",
                        "Optimize Supply Chain",
                        "Improve Customer Satisfaction"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[12px] font-medium text-slate-600">
                          <CheckCircle className="size-3.5 text-emerald-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
                </Container>
      </section>

      {/* CTA */}
      <CtaSection
        eyebrow="Optimize Your Supply Chain"
        title="Ready to Transform Your Distribution Network?"
        description="Connect your warehouse, vans, and customers on a single real-time platform."
        primary={{ label: "Request Demo", href: "/contact" }}
        secondary={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
}