import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/layout/container";
import { Reveal } from "@/components/reveal";
import {
  ArrowRight, Play, UserPlus, ShieldCheck, Clock, TrendingUp,
  MapPin, Bell, User, Navigation, BarChart2, CheckCircle2,
  AlertCircle, Activity, Building2, Pill, ShoppingCart, Apple,
  Hammer, Truck, Package, Wrench, Search, Box, Target
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Route Planning Software | RepProX",
  description: "Smarter Routes. Stronger Coverage.",
  path: "/solutions/route-planning",
});

import { AnimatedBackground } from "@/components/animated-icons/route-planning/BackgroundAnimations";
import { HeroAnimatedDecorations } from "@/components/animated-icons/route-planning/HeroAnimatedDecorations";

export default function RoutePlanningPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20 relative">
      <AnimatedBackground />
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
        <HeroAnimatedDecorations />
        <Container className="relative z-10 max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-8 items-center">

            {/* Left Column - Content */}
            <Reveal>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 text-xs font-bold tracking-wide uppercase bg-white mb-6">
                ROUTE PLANNING SOFTWARE
              </div>

              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0F172A] leading-[1.1] mb-6">
                Smarter Routes<br />Stronger Coverage.
              </h1>

              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
                RepProX Route Planning Software helps you plan, optimize, and execute routes with precision. Improve customer coverage, eliminate missed visits, and boost field team productivity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-8 font-semibold text-white transition-all hover:bg-blue-600 shadow-sm">
                  Request Demo <ArrowRight className="size-4" />
                </a>
              </div>

              {/* 4 Feature Icons Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 mt-8">
                <div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
                  <div className="size-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-blue-500 bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:shadow-md">
                    <UserPlus className="size-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 transition-colors group-hover:text-blue-600">Increase<br />Coverage</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
                  <div className="size-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-blue-500 bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:shadow-md group-hover:text-emerald-500">
                    <ShieldCheck className="size-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 transition-colors group-hover:text-emerald-600">Improve<br />Compliance</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
                  <div className="size-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-blue-500 bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-amber-200 group-hover:bg-amber-50 group-hover:shadow-md group-hover:text-amber-500">
                    <Clock className="size-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 transition-colors group-hover:text-amber-600">Reduce<br />Travel Time</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
                  <div className="size-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-blue-500 bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:shadow-md group-hover:text-indigo-500">
                    <TrendingUp className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 transition-colors group-hover:text-indigo-600">Boost<br />Productivity</span>
                </div>
              </div>
            </Reveal>

            {/* Right Column - Conceptual Visual */}
            <Reveal delay={0.2}>
              <div className="relative mx-auto w-full max-w-lg lg:h-[550px] flex items-center justify-center p-4 sm:p-8 bg-blue-50/80 rounded-[3rem] border border-blue-100/80 shadow-sm">

                {/* Abstract Route Rings Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[80%] aspect-square rounded-full border border-blue-200 bg-blue-100/30 animate-[spin_60s_linear_infinite]">
                    <div className="w-full h-full rounded-full border border-blue-200 border-dashed m-4"></div>
                  </div>
                  <div className="absolute w-[60%] aspect-square rounded-full border border-blue-200 bg-blue-100/20 animate-[spin_40s_linear_infinite_reverse]"></div>
                  <div className="absolute w-[40%] aspect-square rounded-full border border-blue-200 bg-blue-100/20"></div>
                </div>

                {/* Main Content Area */}
                <div className="relative w-full max-w-[380px] aspect-[4/5] z-10 flex items-center justify-center">

                  {/* Glass Base for depth */}
                  <div className="absolute inset-4 bg-white/70 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-white/40"></div>
                    {/* Stylized routes in background of glass */}
                    <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 200 300" preserveAspectRatio="none">
                      <path d="M -20 250 Q 100 200, 50 100 T 220 20" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
                      <path d="M 20 280 Q 150 250, 100 150 T 250 80" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Floating Elements (Non-dashboard UI) */}
                  <div className="relative z-10 w-full h-full">

                    {/* Floating Card 1: Route Optimization */}
                    <div className="absolute top-[15%] sm:left-[-5%] sm:right-[15%] left-2 right-2 sm:w-auto bg-white rounded-2xl p-3 sm:p-4 shadow-xl shadow-blue-900/5 border border-slate-100 flex gap-3 sm:gap-4 items-center group transition-transform hover:-translate-y-1">
                      <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <MapPin className="size-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-bold text-slate-800 text-sm">Optimized Route</h4>
                          <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">-30% Dist</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="size-2 rounded-full bg-emerald-500"></div>
                          <div className="flex-1 h-0.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-full"></div>
                          </div>
                          <div className="size-2 rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Card 2: Live Tracking */}
                    <div className="absolute top-[42%] sm:left-[10%] sm:right-[-10%] left-2 right-2 sm:w-auto bg-white rounded-2xl p-3 sm:p-4 shadow-xl shadow-blue-900/5 border border-slate-100 flex gap-3 sm:gap-4 items-center group transition-transform hover:-translate-y-1">
                      <div className="size-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                        <Navigation className="size-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-sm mb-1">Live Tracking</h4>
                        <p className="text-[11px] text-slate-500">Rep #42 • On Route</p>
                      </div>
                      <div className="size-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                        <div className="size-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Floating Card 3: Coverage */}
                    <div className="absolute top-[70%] sm:left-[-10%] sm:right-[20%] left-2 right-2 sm:w-auto bg-white rounded-2xl p-3 sm:p-4 shadow-xl shadow-blue-900/5 border border-slate-100 flex gap-3 sm:gap-4 items-center group transition-transform hover:-translate-y-1">
                      <div className="size-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                        <Target className="size-6 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-bold text-slate-800 text-sm">Coverage Rate</h4>
                          <span className="font-black text-slate-900 text-sm">100%</span>
                        </div>
                        <p className="text-[10px] text-slate-500">All planned stops visited</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Secondary Decorative Floating Badges */}
                <div className="absolute top-[20%] right-0 size-16 rounded-full bg-white border border-slate-100 shadow-xl shadow-slate-200 flex items-center justify-center animate-[bounce_4s_infinite] z-20">
                  <Clock className="size-6 text-amber-500" />
                </div>

                <div className="absolute bottom-[10%] right-[10%] size-12 rounded-full bg-slate-900 border-4 border-white shadow-xl shadow-slate-200 flex items-center justify-center animate-[bounce_5s_infinite_0.5s] z-20">
                  <Activity className="size-5 text-emerald-400" />
                </div>

              </div>
            </Reveal>

          </div>
        </Container>
      </section>

      {/* FEATURES & BUSINESS IMPACT SECTION */}
      <section className="py-16 bg-blue-50/50 border-y border-blue-100/50">
        <Container className="max-w-[1400px]">

          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 text-xs font-bold tracking-wide uppercase bg-blue-50/50 mb-4">
              POWERFUL FEATURES
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Everything You Need to Execute Perfect Routes
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive route planning, tracking, and analytics to transform your field operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_350px] gap-6 items-start">

            {/* Features Grid (4 columns, 2 rows) */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 group">
                <div className="size-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <Navigation className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-2">Smart Route Planning</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Create optimized routes in minutes based on territories, priorities, and customer locations.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 group">
                <div className="size-12 rounded-xl bg-teal-500 flex items-center justify-center shrink-0">
                  <Box className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-2">Territory Management</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Design, assign, and balance territories to ensure maximum coverage and better performance.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 group">
                <div className="size-12 rounded-xl bg-purple-600 flex items-center justify-center shrink-0">
                  <MapPin className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-2">GPS Tracking</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Track your field teams in real-time with live locations and route playback.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 group">
                <div className="size-12 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
                  <Target className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-2">Geolocation Verification</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Verify customer visits with precise check-in/check-out and location validation.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 group">
                <div className="size-12 rounded-xl bg-red-500 flex items-center justify-center shrink-0">
                  <Clock className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-2">Visit Duration Tracking</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Monitor visit duration and ensure the right time is spent with every customer.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 group">
                <div className="size-12 rounded-xl bg-cyan-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-2">Route Compliance Monitoring</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Ensure teams follow planned routes and meet operational standards.
                  </p>
                </div>
              </div>

              {/* Feature 7 */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 group">
                <div className="size-12 rounded-xl bg-yellow-500 flex items-center justify-center shrink-0">
                  <UserPlus className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-2">Missing Customer Analysis</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Identify customers not visited and take action to close coverage gaps.
                  </p>
                </div>
              </div>

              {/* Feature 8 */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 group">
                <div className="size-12 rounded-xl bg-blue-700 flex items-center justify-center shrink-0">
                  <BarChart2 className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-2">Stop Customer Analysis</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Analyze stop performance and optimize the order and frequency of visits.
                  </p>
                </div>
              </div>

            </div>

            {/* Business Impact Column */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 flex flex-col h-full">
              <h3 className="font-bold text-[#0F172A] text-lg mb-6">Business Impact</h3>

              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start group cursor-pointer">
                  <div className="size-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-200">
                    <UserPlus className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-sm mb-1 group-hover:text-emerald-600 transition-colors">Higher Customer Coverage</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Reach more customers every day with optimized routes.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group cursor-pointer">
                  <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-200">
                    <TrendingUp className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-sm mb-1 group-hover:text-blue-600 transition-colors">Improved Productivity</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Reduce travel time and increase productive selling time.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group cursor-pointer">
                  <div className="size-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-200">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-sm mb-1 group-hover:text-purple-600 transition-colors">Better Compliance</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Ensure teams follow plans and company policies.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group cursor-pointer">
                  <div className="size-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-200">
                    <AlertCircle className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-sm mb-1 group-hover:text-orange-600 transition-colors">Real-Time Visibility</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Gain complete visibility into field operations as they happen.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group cursor-pointer">
                  <div className="size-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0 text-teal-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-teal-200">
                    <BarChart2 className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-sm mb-1 group-hover:text-teal-600 transition-colors">Data-Driven Decisions</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Use insights and analytics to continuously improve performance.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* BOTTOM SECTION - Business Impact Data & Industries */}
      <section className="py-20 relative overflow-hidden bg-blue-50/50 border-t border-blue-100">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Glowing orbs for light theme */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        </div>

        <Container className="max-w-[1400px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content - Data & Metrics */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 text-xs font-bold tracking-wide uppercase bg-blue-100/50 mb-6 backdrop-blur-sm">
                MEASURABLE RESULTS
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                Route optimization that delivers <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">real ROI.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
                Companies switching to RepProX see immediate improvements in field team efficiency, fuel costs, and customer coverage from day one.
              </p>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* Metric 1 */}
                <div className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <TrendingUp className="size-5" />
                    </div>
                    <div className="text-emerald-600 font-bold text-sm">+25%</div>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#0F172A] mb-2">More Visits</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Increase daily customer interactions per rep without adding hours.</p>
                </div>

                {/* Metric 2 */}
                <div className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <Clock className="size-5" />
                    </div>
                    <div className="text-blue-600 font-bold text-sm">-30%</div>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#0F172A] mb-2">Travel Time</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Dramatically reduce windshield time with AI-optimized routing.</p>
                </div>

                {/* Metric 3 */}
                <div className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                      <ShieldCheck className="size-5" />
                    </div>
                    <div className="text-purple-600 font-bold text-sm">100%</div>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#0F172A] mb-2">Compliance</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Guarantee visits happen exactly where and when scheduled.</p>
                </div>

                {/* Metric 4 */}
                <div className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                      <BarChart2 className="size-5" />
                    </div>
                    <div className="text-amber-600 font-bold text-sm">-20%</div>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#0F172A] mb-2">Fuel Costs</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Minimize mileage and fuel consumption across your fleet.</p>
                </div>
              </div>
            </div>

            {/* Right Content - Industries */}
            <div className="relative lg:pl-10 mt-8 lg:mt-0">
              <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-900/5 relative overflow-hidden">
                {/* Decorative glow inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[60px] pointer-events-none"></div>

                <h3 className="text-2xl font-bold text-[#0F172A] mb-2 relative z-10">Built for Every Industry</h3>
                <p className="text-slate-500 mb-8 relative z-10">Flexible routing software that adapts to your specific business model and industry requirements.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                  {/* Industry Item */}
                  <div className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all group cursor-pointer shadow-sm hover:shadow">
                    <div className="size-10 rounded-lg bg-white border border-slate-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <ShoppingCart className="size-5" />
                    </div>
                    <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors text-sm">FMCG & Retail</span>
                  </div>

                  {/* Industry Item */}
                  <div className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all group cursor-pointer shadow-sm hover:shadow">
                    <div className="size-10 rounded-lg bg-white border border-slate-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Pill className="size-5" />
                    </div>
                    <span className="font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors text-sm">Pharma & Medical</span>
                  </div>

                  {/* Industry Item */}
                  <div className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-orange-50 hover:border-orange-200 transition-all group cursor-pointer shadow-sm hover:shadow">
                    <div className="size-10 rounded-lg bg-white border border-slate-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Apple className="size-5" />
                    </div>
                    <span className="font-semibold text-slate-700 group-hover:text-orange-700 transition-colors text-sm">Food & Beverage</span>
                  </div>

                  {/* Industry Item */}
                  <div className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-purple-50 hover:border-purple-200 transition-all group cursor-pointer shadow-sm hover:shadow">
                    <div className="size-10 rounded-lg bg-white border border-slate-100 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Package className="size-5" />
                    </div>
                    <span className="font-semibold text-slate-700 group-hover:text-purple-700 transition-colors text-sm">Consumer Goods</span>
                  </div>

                  {/* Industry Item */}
                  <div className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-amber-50 hover:border-amber-200 transition-all group cursor-pointer shadow-sm hover:shadow">
                    <div className="size-10 rounded-lg bg-white border border-slate-100 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Hammer className="size-5" />
                    </div>
                    <span className="font-semibold text-slate-700 group-hover:text-amber-700 transition-colors text-sm">Building Materials</span>
                  </div>

                  {/* Industry Item */}
                  <div className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-cyan-50 hover:border-cyan-200 transition-all group cursor-pointer shadow-sm hover:shadow">
                    <div className="size-10 rounded-lg bg-white border border-slate-100 text-cyan-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Building2 className="size-5" />
                    </div>
                    <span className="font-semibold text-slate-700 group-hover:text-cyan-700 transition-colors text-sm">Wholesale Dist.</span>
                  </div>

                  {/* Industry Item */}
                  <div className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all group cursor-pointer shadow-sm hover:shadow">
                    <div className="size-10 rounded-lg bg-white border border-slate-100 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Truck className="size-5" />
                    </div>
                    <span className="font-semibold text-slate-700 group-hover:text-indigo-700 transition-colors text-sm">Logistics</span>
                  </div>

                  {/* Industry Item */}
                  <div className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-rose-50 hover:border-rose-200 transition-all group cursor-pointer shadow-sm hover:shadow">
                    <div className="size-10 rounded-lg bg-white border border-slate-100 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Wrench className="size-5" />
                    </div>
                    <span className="font-semibold text-slate-700 group-hover:text-rose-700 transition-colors text-sm">Field Services</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}