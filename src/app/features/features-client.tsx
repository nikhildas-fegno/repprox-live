"use client";

import { motion } from "motion/react";
import {
  Archive,
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  CheckCircle2,
  Database,
  LayoutDashboard,
  LineChart,
  Network,
  PieChart,
  Repeat,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import Container from "@/components/layout/container";

import PlatformInAction from "./sections/PlatformInAction";
import BusinessImpact from "./sections/BusinessImpact";
import ConnectedEcosystem from "./sections/ConnectedEcosystem";
import { CtaSection } from "@/components/sections/cta-section";
export default function FeaturesClient() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardClasses = "group relative flex flex-col bg-white rounded-[24px] border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-[8px] hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] overflow-hidden h-full z-10";

  return (
    <div className="bg-gradient-to-b from-[#F4F9FF] to-white text-[#475569] selection:bg-blue-500/20 min-h-svh relative overflow-hidden font-sans">

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Very light dotted pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNDQkQ1RTEiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)] opacity-60"></div>

        {/* Soft floating gradient orbs */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[5%] w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] left-[20%] w-[700px] h-[700px] bg-cyan-400/10 rounded-full blur-[120px]"
        />

        {/* Thin curved abstract line graphics */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path d="M-100,300 C200,400 400,100 1540,500" fill="none" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M-100,600 C300,500 600,800 1540,400" fill="none" stroke="#94A3B8" strokeWidth="1" />
        </svg>

        {/* Small floating particles */}
        <div className="absolute top-[15%] right-[25%] w-2 h-2 rounded-full bg-blue-500/40 animate-ping"></div>
        <div className="absolute top-[45%] left-[15%] w-3 h-3 rounded-full bg-purple-500/30 animate-pulse"></div>
        <div className="absolute bottom-[35%] right-[15%] w-1.5 h-1.5 rounded-full bg-emerald-500/40 animate-bounce"></div>
      </div>

      {/* SECTION HEADER */}
      <section className="pt-32 pb-20 relative z-10">
        <Container className="text-center max-w-[800px] mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-white/80 backdrop-blur text-blue-700 text-xs font-bold tracking-widest mb-8 uppercase shadow-sm">
              Product Features
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-[40px] md:text-[56px] font-bold tracking-tight mb-6 text-balance leading-[1.1] text-[#0B1736]"
            >
              Everything Your Sales Team Needs. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">In One Platform.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-[#475569] text-balance max-w-2xl mx-auto leading-relaxed"
            >
              RepProX combines AI ordering, KPI tracking, reporting, analytics, ERP integration, and management tools into one connected system.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* FEATURES GRID */}
      <section className="pb-24 relative z-10">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col gap-8"
          >
            {/* Top Row: 3 Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* CARD 01 - BLUE */}
              <motion.div variants={fadeUp} className={`${cardClasses} hover:border-blue-400 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] overflow-hidden`}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-16 -right-16 text-blue-50 opacity-50 group-hover:text-blue-100 group-hover:opacity-70 transition-all duration-700 z-0 pointer-events-none"
                >
                  <ShoppingCart className="w-64 h-64" />
                </motion.div>
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-600 border border-blue-100 shadow-sm relative z-10 group-hover:scale-110 transition-transform duration-500">
                        <ShoppingCart className="w-8 h-8" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm z-20">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#0B1736] group-hover:text-blue-600 transition-colors">AI Smart Ordering</h3>
                  <p className="text-[#64748B] mb-8 leading-relaxed text-sm">Turn Historical Data Into Future Revenue.</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {["Suggested Orders", "Reorder Recommendations", "Purchase Pattern Analysis", "Customer Buying Trends", "Cross-Selling Opportunities", "Upselling Opportunities", "Demand Prediction"].map((tag, i) => (
                      <motion.span key={tag} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50/50 border border-blue-100 text-[13px] font-medium text-blue-800 transition-colors whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 shrink-0"></span> {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CARD 02 - GREEN */}
              <motion.div variants={fadeUp} className={`${cardClasses} hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] overflow-hidden`}>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-16 -right-16 text-green-50 opacity-50 group-hover:text-green-100 group-hover:opacity-70 transition-all duration-700 z-0 pointer-events-none"
                >
                  <TrendingUp className="w-64 h-64" />
                </motion.div>
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-green-50 text-green-600 border border-green-100 shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#0B1736] group-hover:text-green-600 transition-colors">KPI & Performance Management</h3>
                  <p className="text-[#64748B] mb-8 leading-relaxed text-sm">Measure, monitor and improve field performance.</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {["Sales Targets", "Collection Targets", "Visit Targets", "Product Targets", "Customer Coverage", "Route Compliance", "Daily Tracking", "Monthly Tracking"].map((tag, i) => (
                      <motion.span key={tag} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-50/50 border border-green-100 text-[13px] font-medium text-green-800 transition-colors whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 shrink-0"></span> {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CARD 03 - PURPLE */}
              <motion.div variants={fadeUp} className={`${cardClasses} hover:border-purple-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] overflow-hidden`}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-16 -right-16 text-purple-50 opacity-50 group-hover:text-purple-100 group-hover:opacity-70 transition-all duration-700 z-0 pointer-events-none"
                >
                  <LayoutDashboard className="w-64 h-64" />
                </motion.div>
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-purple-50 text-purple-600 border border-purple-100 shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <LayoutDashboard className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#0B1736] group-hover:text-purple-600 transition-colors">Web Management Portal</h3>
                  <p className="text-[#64748B] mb-8 leading-relaxed text-sm">Manage users, territories, routes and operations.</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {["User Management", "Authorization Control", "Route Planning", "Survey Management", "Promotions", "Territory Management", "Monitoring", "Dashboards"].map((tag, i) => (
                      <motion.span key={tag} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-50/50 border border-purple-100 text-[13px] font-medium text-purple-800 transition-colors whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 shrink-0"></span> {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Bottom Row: 2 Wide Cards */}
            <div className="grid grid-cols-1 gap-8">

              {/* CARD 04 - ORANGE */}
              <motion.div variants={fadeUp} className={`group relative flex flex-col bg-white rounded-[24px] border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-500 hover:-translate-y-[8px] hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(255,138,42,0.15)] hover:border-[#FF8A2A] overflow-hidden h-full z-10`}>

                {/* Background Glow & Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wIDQwLjVoNDAiIHN0cm9rZT0iI0ZGOEEyQSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48cGF0aCBkPSJNMDAuNXY0ME00MCAwLjV2NDAiIHN0cm9rZT0iI0ZGOEEyQSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF8A2A]/5 blur-[100px] rounded-full group-hover:bg-[#FF8A2A]/10 transition-colors duration-700 pointer-events-none"></div>
                <div className="absolute -bottom-24 left-[10%] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none z-0">
                  <motion.div animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
                    <BarChart3 className="w-96 h-96 text-[#FF8A2A]" />
                  </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row h-full relative z-10">
                  <div className="p-8 lg:w-1/2 flex flex-col lg:border-r border-[#E2E8F0]/50 bg-white/60 backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#FF8A2A]/10 text-[#FF8A2A] border border-[#FF8A2A]/20 shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,138,42,0.3)] transition-all duration-500">
                        <BarChart3 className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#0B1736] group-hover:text-[#FF8A2A] transition-colors">Executive Reporting & Analytics</h3>
                    <p className="text-[#64748B] mb-8 leading-relaxed text-sm">Business intelligence and reporting for decision makers.</p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {["Sales Reports", "Collection Reports", "Inventory Reports", "Performance Reports", "Profitability Reports", "Promotion Analysis", "Commission Reports", "Customer Aging"].map((tag, i) => (
                        <motion.span key={tag} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#FF8A2A]/5 border border-[#FF8A2A]/10 text-[13px] font-medium text-[#FF8A2A] transition-colors whitespace-nowrap backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A2A] mr-2 shrink-0"></span> {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side Visuals - Analytics Dashboard */}
                  <div className="p-8 lg:w-1/2 bg-gradient-to-br from-[#FAFAFA] to-white flex flex-col items-center justify-center relative overflow-hidden min-h-[400px]">

                    <div className="w-full max-w-[340px] space-y-4 relative z-10 perspective-[1000px]">

                      {/* Floating Metric Cards */}
                      <div className="flex gap-3 mb-2 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                        {[
                          { label: "Revenue", value: "$2.4M", trend: "+12%" },
                          { label: "Margin", value: "34%", trend: "+2%" },
                          { label: "Orders", value: "8.1k", trend: "+24%" }
                        ].map((metric, i) => (
                          <div key={i} className="flex-1 bg-white/80 backdrop-blur border border-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] rounded-xl p-3 flex flex-col group-hover:shadow-[0_8px_20px_rgba(255,138,42,0.1)] transition-shadow">
                            <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mb-1">{metric.label}</span>
                            <span className="text-sm font-bold text-[#0B1736]">{metric.value}</span>
                            <span className="text-[10px] font-bold text-[#FF8A2A] mt-0.5">{metric.trend}</span>
                          </div>
                        ))}
                      </div>

                      {/* Revenue Growth Widget & KPI Chart */}
                      <div className="flex gap-4 group-hover:-translate-y-1 transition-transform duration-700 ease-out delay-75">
                        {/* Revenue Growth Widget */}
                        <div className="bg-white/90 backdrop-blur border border-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex-1 flex flex-col relative overflow-hidden group-hover:border-[#FF8A2A]/30 transition-colors">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-[#FF8A2A]/10 flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-[#FF8A2A]" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#0B1736]">Growth</div>
                              <div className="text-[10px] text-[#FF8A2A] font-bold">+18.2% YTD</div>
                            </div>
                          </div>
                          {/* Animated Line Chart SVG */}
                          <svg className="w-full h-12 overflow-visible" viewBox="0 0 100 40">
                            <defs>
                              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#FF8A2A" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#FF8A2A" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            <path d="M0,40 L0,30 C20,30 30,10 50,20 C70,30 80,5 100,0 L100,40 Z" fill="url(#lineGrad)" className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <path d="M0,30 C20,30 30,10 50,20 C70,30 80,5 100,0" fill="none" stroke="#FF8A2A" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="150" strokeDashoffset="150" className="group-hover:animate-[draw_1.5s_ease-out_forwards]" />
                            <circle cx="100" cy="0" r="3" fill="#fff" stroke="#FF8A2A" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-1000 shadow-md" />
                          </svg>
                        </div>

                        {/* Circular KPI Chart */}
                        <div className="bg-white/90 backdrop-blur border border-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex-1 flex flex-col items-center justify-center relative group-hover:border-[#FF8A2A]/30 transition-colors">
                          <div className="relative w-16 h-16">
                            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                              <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="12" fill="transparent" />
                              <circle cx="50" cy="50" r="40" stroke="#FF8A2A" strokeWidth="12" fill="transparent" strokeDasharray="251.2" strokeDashoffset="251.2" className="group-hover:animate-[fillDonut_1.5s_ease-out_forwards]" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-sm font-bold text-[#0B1736] tracking-tighter">72%</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-[#64748B] mt-2 uppercase tracking-wider">Score</span>
                        </div>
                      </div>

                      {/* Profitability Bar Chart */}
                      <div className="bg-white/90 backdrop-blur border border-white rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] group-hover:-translate-y-1 group-hover:border-[#FF8A2A]/30 transition-all duration-700 ease-out delay-150 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xs font-bold text-[#0B1736]">Profitability</span>
                          <span className="text-[10px] font-bold text-[#FF8A2A] bg-[#FF8A2A]/10 px-2 py-0.5 rounded-full">Monthly</span>
                        </div>
                        <div className="flex items-end gap-2 h-20">
                          {[30, 50, 40, 70, 55, 90, 85].map((h, i) => (
                            <div key={i} className="flex-1 bg-[#F1F5F9] rounded-t-md relative group/bar h-full">
                              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#FF8A2A] to-[#FFAB62] rounded-t-md opacity-0 group-hover:opacity-100 transition-all duration-700" style={{ height: `0%`, transitionDelay: `${i * 100}ms` }} />
                              {/* We use a style block below to trigger the height animation on hover */}
                              <style>{`.group:hover .group\\/bar:nth-child(${i + 1}) > div { height: ${h}% !important; opacity: 1 !important; }`}</style>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CARD 05 - CYAN */}
              <motion.div variants={fadeUp} className={`group relative flex flex-col bg-white rounded-[24px] border border-[#E2E8F0] shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-700 hover:-translate-y-[8px] hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(24,199,230,0.15)] hover:border-[#18C7E6]/80 overflow-hidden h-full z-10`}>

                {/* Advanced Background Elements */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDIwaDQwIiBzdHJva2U9IiMxOEM3RTYiIHN0cm9rZS1vcGFjaXR5PSIwLjA0Ii8+PHBhdGggZD0iTTIwIDB2NDAiIHN0cm9rZT0iIzE4QzdFNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDQiLz48L3N2Zz4=')] opacity-60 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(24,199,230,0.05)_0%,transparent_60%)] group-hover:bg-[radial-gradient(circle,rgba(24,199,230,0.12)_0%,transparent_70%)] transition-all duration-1000 pointer-events-none"></div>

                {/* Floating Abstract Network Waves */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 group-hover:opacity-70 transition-opacity duration-1000">
                  <svg className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] animate-[spin_60s_linear_infinite]" viewBox="0 0 1000 1000">
                    <path d="M 100 500 Q 250 300 500 500 T 900 500" fill="none" stroke="#18C7E6" strokeWidth="0.5" strokeDasharray="5 15" opacity="0.3" />
                    <path d="M 100 600 Q 300 400 500 600 T 900 600" fill="none" stroke="#18C7E6" strokeWidth="0.5" strokeDasharray="5 15" opacity="0.2" />
                  </svg>
                </div>

                <div className="flex flex-col lg:flex-row h-full relative z-10">
                  {/* Left Content Side */}
                  <div className="p-8 lg:p-10 lg:w-[45%] flex flex-col lg:border-r border-[#E2E8F0]/50 bg-white/70 backdrop-blur-md z-20">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#18C7E6]/10 to-[#18C7E6]/5 text-[#18C7E6] border border-[#18C7E6]/20 shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(24,199,230,0.3)] transition-all duration-700 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#18C7E6] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                        <Network className="w-8 h-8 relative z-10" />
                      </div>
                      <div className="text-sm font-bold text-[#18C7E6] bg-[#18C7E6]/10 px-4 py-1.5 rounded-full border border-[#18C7E6]/20 shadow-sm lg:hidden">05</div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-[#0B1736] group-hover:text-[#18C7E6] transition-colors tracking-tight">ERP Integration</h3>
                    <p className="text-[#64748B] mb-8 leading-relaxed text-base">Seamlessly connect RepPro X with your ERP ecosystem and synchronize business-critical data in real time.</p>



                    <div className="mt-auto flex flex-wrap gap-2">
                      {["SAP Business One", "Customers", "Items", "Warehouses", "Price Lists", "Inventory", "Transactions", "Collections", "Sales Analytics"].map((tag, i) => (
                        <motion.span key={tag} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="inline-flex items-center px-3 py-1.5 rounded-full bg-cyan-50/50 border border-cyan-100 shadow-sm text-[13px] font-semibold text-[#0e8b9f] group-hover:border-[#18C7E6]/30 transition-colors whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#18C7E6] mr-2 shrink-0 group-hover:animate-pulse"></span> {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side Visuals - Mobile Pipeline (hidden on md and up) */}
                  <div className="md:hidden p-6 w-full flex flex-col items-center justify-center relative overflow-hidden min-h-[450px] z-10 bg-[#F8FAFC]/50 border-t border-[#E2E8F0]/50">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDIwaDQwIiBzdHJva2U9IiMxOEM3RTYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PHBhdGggZD0iTTIwIDB2NDAiIHN0cm9rZT0iIzE4QzdFNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-50 z-0 pointer-events-none"></div>

                    {/* Source Nodes */}
                    <div className="grid grid-cols-2 gap-3 w-full max-w-[200px] relative z-20">
                      {[
                        { label: "SAP", icon: <Database className="w-5 h-5 text-blue-600" /> },
                        { label: "CRM", icon: <Users className="w-5 h-5 text-indigo-500" /> },
                        { label: "WMS", icon: <Settings className="w-5 h-5 text-cyan-600" /> },
                        { label: "ERP", icon: <Archive className="w-5 h-5 text-sky-500" /> }
                      ].map((node, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-[#E2E8F0] p-2 flex flex-col items-center justify-center">
                          <div className="mb-1 bg-slate-50 p-1.5 rounded-lg border border-slate-100">{node.icon}</div>
                          <div className="text-[9px] font-black text-[#0B1736] tracking-wide text-center">{node.label}</div>
                        </div>
                      ))}
                    </div>
                    {/* Vertical Flow Line In */}
                    <div className="h-10 w-[2px] bg-gradient-to-b from-[#E2E8F0] to-[#18C7E6]/40 my-2 relative z-10">
                      <motion.div className="w-1.5 h-1.5 bg-[#18C7E6] rounded-full absolute -left-[2px]" animate={{ top: ["0%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity }} />
                    </div>
                    {/* Center Block: RepPro X Engine */}
                    <div className="relative w-full max-w-[240px] bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_rgba(24,199,230,0.1)] border border-[#18C7E6]/40 p-5 flex flex-col items-center justify-center z-30">
                      <div className="absolute inset-0 rounded-2xl border border-[#18C7E6]/50 animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
                      <img src="/logo.png" alt="RepPro X Engine" className="w-24 h-auto object-contain mb-4" />
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {["Normalize", "Validate", "Transform", "Sync"].map((label) => (
                          <div key={label} className="px-2 py-1 bg-cyan-50 rounded border border-cyan-100 text-[8px] font-black text-cyan-900 uppercase">
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Vertical Flow Line Out */}
                    <div className="h-10 w-[2px] bg-gradient-to-b from-[#18C7E6]/40 to-[#E2E8F0] my-2 relative z-10">
                      <motion.div className="w-1.5 h-1.5 bg-[#18C7E6] rounded-full absolute -left-[2px]" animate={{ top: ["0%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }} />
                    </div>
                    {/* Destination Nodes */}
                    <div className="flex flex-wrap justify-center gap-2 w-full max-w-[280px] relative z-20">
                      {[
                        { label: "Orders", icon: <ShoppingCart className="w-4 h-4 text-emerald-500" /> },
                        { label: "Analytics", icon: <PieChart className="w-4 h-4 text-purple-500" /> },
                        { label: "Finance", icon: <TrendingUp className="w-4 h-4 text-amber-500" /> },
                        { label: "Customers", icon: <Users className="w-4 h-4 text-blue-500" /> },
                        { label: "BI Reports", icon: <BarChart3 className="w-4 h-4 text-rose-500" /> }
                      ].map((node, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-sm border border-[#E2E8F0] px-2 py-1.5 flex items-center gap-1.5">
                          <div className="bg-slate-50 p-1 rounded-md border border-slate-100">{node.icon}</div>
                          <div className="text-[9px] font-black text-[#0B1736]">{node.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Right Side Visuals - Desktop Premium Enterprise Pipeline (hidden on mobile) */}
                  <div className="hidden md:flex p-4 lg:p-8 lg:w-[55%] items-center justify-center relative overflow-hidden min-h-[600px] z-10 bg-[#F8FAFC]/50">
                    {/* Background Details */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDIwaDQwIiBzdHJva2U9IiMxOEM3RTYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PHBhdGggZD0iTTIwIDB2NDAiIHN0cm9rZT0iIzE4QzdFNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-50 z-0 pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(24,199,230,0.1)_0%,transparent_60%)] z-0 pointer-events-none"></div>
                    {/* Abstract Digital Waves & Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 z-0">
                      <svg className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] animate-[spin_60s_linear_infinite]" viewBox="0 0 1000 1000">
                        <path d="M 100 500 Q 250 300 500 500 T 900 500" fill="none" stroke="#18C7E6" strokeWidth="1" strokeDasharray="5 15" opacity="0.3" />
                        <path d="M 100 600 Q 300 400 500 600 T 900 600" fill="none" stroke="#18C7E6" strokeWidth="1" strokeDasharray="5 15" opacity="0.2" />
                      </svg>
                    </div>
                    {/* Central Diagram Container */}
                    <div className="relative w-full max-w-[500px] h-[520px] mx-auto z-10 transition-transform duration-1000 ease-out mt-12 lg:mt-0 flex flex-col justify-between">
                      {/* SVG Flow Paths */}
                      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 500 520">
                        <defs>
                          <linearGradient id="flowGradTop" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#18C7E6" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="#18C7E6" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#18C7E6" stopOpacity="0.3" />
                          </linearGradient>
                          <linearGradient id="flowGradBot" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#18C7E6" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#18C7E6" stopOpacity="0.1" />
                          </linearGradient>
                          <filter id="cyanGlowPath">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                          <marker id="glowArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                            <polygon points="0 0, 6 3, 0 6" fill="#18C7E6" opacity="0.8" />
                          </marker>
                        </defs>
                        {/* Top Nodes to Center Paths (4 sources -> Center: 250, 190) */}
                        {[62.5, 187.5, 312.5, 437.5].map((startX, i) => {
                          const pathD = `M ${startX} 85 C ${startX} 140 250 150 250 190`;
                          return (
                            <g key={`top-${i}`}>
                              {/* Background track line */}
                              <path d={pathD} fill="none" stroke="#E2E8F0" strokeWidth="2" className="group-hover:stroke-[#18C7E6]/30 transition-colors duration-700" />
                              {/* Continuous active line */}
                              <path d={pathD} fill="none" stroke="url(#flowGradTop)" strokeWidth="3" strokeDasharray="150" strokeDashoffset="150" markerEnd="url(#glowArrow)" className="opacity-40 animate-[dashFlow_3s_linear_infinite]" />
                              {/* Continuously Flowing Data Packets */}
                              <circle r="4.5" fill="#18C7E6" filter="url(#cyanGlowPath)">
                                <animateMotion dur={`${2 + (i % 2) * 0.5}s`} repeatCount="indefinite">
                                  <mpath href={`#path-top-s-${i}`} />
                                </animateMotion>
                              </circle>
                              {/* Second trailing packet */}
                              <circle r="3" fill="#ffffff" opacity="0.8" filter="url(#cyanGlowPath)">
                                <animateMotion dur={`${2 + (i % 2) * 0.5}s`} repeatCount="indefinite" begin="0.5s">
                                  <mpath href={`#path-top-s-${i}`} />
                                </animateMotion>
                              </circle>
                              <path id={`path-top-s-${i}`} d={pathD} fill="none" stroke="none" />
                            </g>
                          );
                        })}
                        {/* Center to Bottom Nodes Paths (Center: 250, 330 -> 5 destinations) */}
                        {[50, 150, 250, 350, 450].map((endX, i) => {
                          const pathD = `M 250 330 C 250 370 ${endX} 380 ${endX} 440`;
                          return (
                            <g key={`bot-${i}`}>
                              <path d={pathD} fill="none" stroke="#E2E8F0" strokeWidth="2" className="group-hover:stroke-[#18C7E6]/30 transition-colors duration-700" />
                              <path d={pathD} fill="none" stroke="url(#flowGradBot)" strokeWidth="3" strokeDasharray="150" strokeDashoffset="150" markerEnd="url(#glowArrow)" className="opacity-40 animate-[dashFlow_3s_linear_infinite]" />
                              {/* Continuously Flowing Data Packets */}
                              <circle r="4.5" fill="#18C7E6" filter="url(#cyanGlowPath)">
                                <animateMotion dur={`${2 + (i % 2) * 0.5}s`} repeatCount="indefinite" begin={`${0.5 + i * 0.2}s`}>
                                  <mpath href={`#path-bot-d-${i}`} />
                                </animateMotion>
                              </circle>
                              {/* Second trailing packet */}
                              <circle r="3" fill="#ffffff" opacity="0.8" filter="url(#cyanGlowPath)">
                                <animateMotion dur={`${2 + (i % 2) * 0.5}s`} repeatCount="indefinite" begin={`${1 + i * 0.2}s`}>
                                  <mpath href={`#path-bot-d-${i}`} />
                                </animateMotion>
                              </circle>
                              <path id={`path-bot-d-${i}`} d={pathD} fill="none" stroke="none" />
                            </g>
                          );
                        })}
                      </svg>
                      {/* 1. Top Source Nodes */}
                      <div className="flex justify-between w-full relative z-20 px-2">
                        {[
                          { label: "SAP", icon: <Database className="w-6 h-6 text-blue-600" /> },
                          { label: "CRM", icon: <Users className="w-6 h-6 text-indigo-500" /> },
                          { label: "WMS", icon: <Settings className="w-6 h-6 text-cyan-600" /> },
                          { label: "ERP", icon: <Archive className="w-6 h-6 text-sky-500" /> }
                        ].map((node, i) => (
                          <div key={i} className="w-[85px] bg-white rounded-[16px] shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-[#E2E8F0] p-3 flex flex-col items-center justify-center group-hover:border-[#18C7E6]/50 group-hover:shadow-[0_12px_30px_rgba(24,199,230,0.15)] transition-all duration-500 hover:-translate-y-1.5 relative cursor-default">
                            <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white shadow-sm z-10"></div>
                            <div className="mb-2 bg-gradient-to-br from-slate-50 to-slate-100 p-2.5 rounded-xl border border-slate-100 group-hover:scale-110 group-hover:bg-cyan-50 transition-all duration-300">{node.icon}</div>
                            <div className="text-[11px] font-black text-[#0B1736] tracking-wide text-center">{node.label}</div>
                          </div>
                        ))}
                      </div>
                      {/* Orbit Rings Background */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] z-20 pointer-events-none flex items-center justify-center">
                        {/* Outer Ring */}
                        <div className="absolute w-full h-full rounded-full border-[1px] border-[#18C7E6]/10 animate-[spin_60s_linear_infinite] flex items-center justify-center">
                          <div className="absolute top-[-1px] left-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#18C7E6]/40 to-transparent"></div>
                          <div className="absolute bottom-[-1px] right-1/4 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#18C7E6]/30 to-transparent"></div>
                        </div>
                        {/* Middle Ring */}
                        <div className="absolute w-[75%] h-[75%] rounded-full border-[1px] border-dashed border-[#18C7E6]/20 animate-[spin_40s_linear_infinite_reverse] flex items-center justify-center">
                          <div className="absolute left-[-1px] top-1/3 w-[2px] h-20 bg-gradient-to-b from-transparent via-[#18C7E6]/50 to-transparent"></div>
                        </div>
                        {/* Inner Ring */}
                        <div className="absolute w-[55%] h-[55%] rounded-full border-[1px] border-[#18C7E6]/15 animate-[spin_20s_linear_infinite] flex items-center justify-center bg-gradient-to-tr from-[#18C7E6]/[0.02] to-transparent">
                          <div className="absolute right-[-1px] bottom-1/4 w-[2px] h-16 bg-gradient-to-b from-transparent via-[#18C7E6]/60 to-transparent"></div>
                        </div>
                      </div>
                      {/* 2. Center Block: RepPro X Engine (+20% size) */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] bg-white/95 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_60px_rgba(24,199,230,0.15)] border border-[#18C7E6]/40 p-8 flex flex-col items-center justify-center z-30 transition-all duration-700 group cursor-pointer">
                        {/* Strong cyan glow underneath */}
                        <div className="absolute -inset-4 bg-[#18C7E6]/20 blur-[30px] rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#18C7E6]/10 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        {/* Selecting animation ring */}
                        <div className="absolute -inset-[2px] rounded-[34px] border-[2px] border-[#18C7E6] opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 shadow-[0_0_20px_rgba(24,199,230,0.5)] z-20 pointer-events-none"></div>
                        <div className="absolute inset-0 rounded-[32px] border-[2px] border-[#18C7E6]/80 animate-ping opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" style={{ animationDuration: '2s' }}></div>
                        <div className="relative z-10 flex flex-col items-center group-hover:scale-110 transition-transform duration-500 mb-6 mt-2">
                          <img src="/logo.png" alt="RepPro X Logo" className="w-28 h-auto object-contain drop-shadow-[0_12px_30px_rgba(24,199,230,0.4)]" />
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 w-full relative z-10">
                          {["Normalize", "Validate", "Transform", "Sync"].map((label, i) => (
                            <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-blue-50/50 rounded-lg border border-cyan-200/60 shadow-sm group-hover:border-cyan-400 group-hover:bg-white transition-all duration-300">
                              <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></span>
                              <span className="text-[10px] font-black text-cyan-900 uppercase tracking-wider">{label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* 3. Bottom Destination Nodes */}
                      <div className="flex justify-between w-full relative z-20">
                        {[
                          { label: "Orders", icon: <ShoppingCart className="w-5 h-5 text-emerald-500" /> },
                          { label: "Analytics", icon: <PieChart className="w-5 h-5 text-purple-500" /> },
                          { label: "Finance", icon: <TrendingUp className="w-5 h-5 text-amber-500" /> },
                          { label: "Customers", icon: <Users className="w-5 h-5 text-blue-500" /> },
                          { label: "BI Reports", icon: <BarChart3 className="w-5 h-5 text-rose-500" /> }
                        ].map((node, i) => (
                          <div key={i} className="w-[85px] bg-white rounded-[16px] shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-[#E2E8F0] p-3 flex flex-col items-center justify-center group-hover:border-[#18C7E6]/50 group-hover:shadow-[0_12px_30px_rgba(24,199,230,0.15)] transition-all duration-500 hover:translate-y-1.5 relative cursor-default">
                            <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_5px_#22c55e]"></div>
                            <div className="mb-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 group-hover:scale-110 transition-transform group-hover:bg-cyan-50">{node.icon}</div>
                            <div className="text-[10px] font-black text-[#0B1736] tracking-wide text-center leading-tight">{node.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </motion.div>
        </Container>
      </section>

      <PlatformInAction />

      <BusinessImpact />

      <ConnectedEcosystem />
      <CtaSection
        eyebrow="Transform Your Sales Execution"
        title="Ready to transform sales execution?"
        description="Join industry leaders who have moved past scattered tools and embraced the power of a single, unified enterprise ecosystem."
        primary={{ label: "Request a Demo", href: "/contact" }}
        secondary={{ label: "Talk to Sales", href: "/contact" }}
      />
    </div>
  );
}
