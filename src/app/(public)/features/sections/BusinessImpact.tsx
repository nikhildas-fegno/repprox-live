"use client";

import { motion } from "framer-motion";
import { 
  Brain, Sparkles, Map, Navigation, Database, Network, 
  BarChart3, PieChart, Smartphone, Wifi, Users, UserCheck, 
  ArrowRight, ShieldCheck, Zap, Globe
} from "lucide-react";
import { useState, useEffect } from "react";

const floatingIcons = [
  { icon: <Brain />, size: 48, top: "5%", left: "10%", dur: 12, opacity: 0.12, color: "text-blue-500" },
  { icon: <BarChart3 />, size: 36, top: "15%", left: "85%", dur: 14, opacity: 0.1, color: "text-cyan-500" },
  { icon: <Globe />, size: 50, top: "40%", left: "5%", dur: 10, opacity: 0.08, color: "text-indigo-500" },
  { icon: <Users />, size: 60, top: "70%", left: "12%", dur: 15, opacity: 0.15, color: "text-blue-400" },
  { icon: <Map />, size: 32, top: "80%", left: "45%", dur: 8, opacity: 0.1, color: "text-cyan-600" },
  { icon: <Smartphone />, size: 40, top: "25%", left: "30%", dur: 11, opacity: 0.12, color: "text-blue-500" },
  { icon: <ShieldCheck />, size: 55, top: "35%", left: "90%", dur: 13, opacity: 0.09, color: "text-indigo-400" },
  { icon: <Database />, size: 44, top: "85%", left: "75%", dur: 9, opacity: 0.14, color: "text-blue-600" }
];

export default function BusinessImpact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      className="py-24 relative overflow-hidden"
    >
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Floating Background Icons */}
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${item.color} drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]`}
            style={{ 
              top: item.top, 
              left: item.left,
              opacity: item.opacity,
            }}
            animate={{ 
              y: [0, -30, 0], 
              x: [0, 20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: item.dur, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: idx * 0.5
            }}
          >
            <div style={{ width: item.size, height: item.size }}>
              <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[1.5]">
                {item.icon}
              </div>
            </div>
          </motion.div>
        ))}
        

        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-blue-500/20 blur-[1px]"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest mb-6 uppercase shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" /> Enterprise-Grade Platform
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight lg:whitespace-nowrap"
          >
            Beyond Sales Automation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            RepProX delivers a complete distribution ecosystem with retail execution, trade promotions, collections, market intelligence, inventory control, and enterprise-grade security.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto md:auto-rows-[280px]">
          
          {/* 1. Retail Execution Excellence (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl p-8 relative overflow-hidden group bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[60px] group-hover:bg-blue-400/20 transition-colors duration-500 translate-x-1/4 -translate-y-1/4"></div>
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 border border-blue-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Retail Execution Excellence</h3>
              <p className="text-slate-600 max-w-md leading-relaxed">
                Ensure perfect in-store execution across every outlet and customer location.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                {[
                  "Shelf Audits", 
                  "Merchandising Checks", 
                  "Product Visibility Tracking", 
                  "Competitor Monitoring", 
                  "Store Compliance Verification", 
                  "Image-Based Store Audits"
                ].map((item, idx) => (
                  <span key={idx} className="text-[11px] font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md border border-blue-100/50 shadow-sm">{item}</span>
                ))}
              </div>
            </div>

            {/* Interactive Visual Element */}
            <div className="relative h-40 w-full mt-6 bg-slate-50/50 rounded-2xl border border-slate-100 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center gap-8">
                <div className="flex flex-col gap-3 items-center">
                  <div className="h-12 w-8 bg-blue-100 rounded-t-md animate-[pulse_3s_ease-in-out_infinite]"></div>
                  <span className="text-[10px] text-slate-400 font-bold">DATA</span>
                </div>
                <Sparkles className="text-blue-400 w-6 h-6 animate-[spin_4s_linear_infinite]" />
                <div className="flex flex-col gap-3 items-center">
                  <div className="h-16 w-8 bg-indigo-500 rounded-t-md shadow-[0_0_15px_rgba(99,102,241,0.4)] relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-[9px] font-bold text-indigo-600">+45%</div>
                  </div>
                  <span className="text-[10px] text-indigo-500 font-bold">INSIGHT</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Trade Promotion Management (Vertical) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-2 rounded-3xl p-8 relative overflow-hidden group bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(168,85,247,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col"
          >
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-400/10 rounded-full blur-[40px] group-hover:bg-purple-400/20 transition-colors duration-500"></div>
            
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 text-purple-600 border border-purple-100 group-hover:scale-110 transition-transform duration-500 shadow-sm">
              <Navigation className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Trade Promotion Management</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
              Create, manage, and track promotional campaigns that drive sales growth.
            </p>

            <div className="flex flex-col gap-2 relative z-10 mb-8">
              {[
                "Discount Rules", 
                "Bundle Promotions", 
                "Buy-One-Get-One Schemes", 
                "Campaign Tracking", 
                "Promotion Performance Analysis"
              ].map((item, idx) => (
                <span key={idx} className="text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 px-3 py-2 rounded-md border border-purple-100/50 shadow-sm break-words leading-tight">{item}</span>
              ))}
            </div>

            {/* Visual element */}
            <div className="relative h-48 w-full bg-slate-50 rounded-xl border border-slate-100 p-4 shrink-0 mt-auto">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path d="M 10 90 Q 30 20 50 50 T 90 10" fill="none" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
                <path d="M 10 90 Q 30 20 50 50 T 90 10" fill="none" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" strokeDasharray="150" strokeDashoffset="150" className="group-hover:animate-[dash_2s_ease-out_forwards]" />
                <circle cx="10" cy="90" r="4" fill="#A855F7" />
                <circle cx="50" cy="50" r="4" fill="#A855F7" />
                <circle cx="90" cy="10" r="6" fill="#A855F7" className="animate-pulse shadow-[0_0_10px_#A855F7]" />
              </svg>
            </div>
          </motion.div>

          {/* 3. Collection & Credit Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl p-6 relative overflow-hidden group bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mb-4 text-cyan-600 border border-cyan-100 group-hover:-translate-y-1 transition-transform duration-300">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Collection & Credit Control</h3>
            <p className="text-slate-600 text-[13px] mb-4 flex-grow relative z-10">Improve cash flow through smarter collection and customer credit management.</p>
            <div className="flex flex-wrap gap-1.5 relative z-10 mt-auto">
              {[
                "Outstanding Tracking", 
                "Aging Analysis", 
                "Credit Limit Monitoring", 
                "Payment Collection", 
                "Overdue Alerts"
              ].map((item, idx) => (
                <span key={idx} className="text-[9px] font-bold uppercase tracking-wider bg-cyan-50 text-cyan-700 px-2 py-1 rounded-md border border-cyan-100/50">{item}</span>
              ))}
            </div>
            <Network className="absolute bottom-4 right-4 w-12 h-12 text-slate-100 group-hover:text-cyan-50 transition-colors duration-500 z-0" />
          </motion.div>

          {/* 4. Survey & Market Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl p-6 relative overflow-hidden group bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(244,63,94,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center mb-4 text-rose-600 border border-rose-100 group-hover:-translate-y-1 transition-transform duration-300">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Survey & Market Insights</h3>
            <p className="text-slate-600 text-[13px] mb-4 flex-grow relative z-10">Capture valuable market intelligence directly from the field.</p>
            <div className="flex flex-wrap gap-1.5 relative z-10 mt-auto">
              {[
                "Customer Feedback", 
                "Competitor Analysis", 
                "Product Surveys", 
                "Market Research", 
                "Brand Visibility Audits"
              ].map((item, idx) => (
                <span key={idx} className="text-[9px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 px-2 py-1 rounded-md border border-rose-100/50">{item}</span>
              ))}
            </div>
            <PieChart className="absolute bottom-4 right-4 w-12 h-12 text-slate-100 group-hover:text-rose-50 transition-colors duration-500 z-0" />
          </motion.div>

          {/* 5. Distribution Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 md:row-span-1 rounded-3xl p-8 min-h-[300px] relative overflow-hidden group bg-indigo-600 text-white shadow-[0_8px_30px_rgba(79,70,229,0.2)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.4)] hover:-translate-y-2 transition-all duration-500 flex items-center justify-between"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="relative z-10 max-w-[400px]">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/20 backdrop-blur-md">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Distribution Management</h3>
              <p className="text-indigo-100 text-sm mb-6">
                Manage inventory movement across warehouses, distributors, and retail channels with complete visibility.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Warehouse Visibility", 
                  "Stock Transfers", 
                  "Inventory Tracking", 
                  "Distributor Monitoring", 
                  "Product Availability Checks"
                ].map((item, idx) => (
                  <span key={idx} className="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/50 text-indigo-100 px-3 py-1.5 rounded-md border border-indigo-400/50 backdrop-blur-sm">{item}</span>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 w-32 h-32 rounded-full border-4 border-indigo-400/30 flex items-center justify-center group-hover:border-indigo-300/50 transition-colors shrink-0 hidden sm:flex">
              <Wifi className="w-10 h-10 text-indigo-200 group-hover:text-white transition-colors group-hover:animate-pulse" />
              <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-xl group-hover:bg-indigo-300/40 transition-colors"></div>
            </div>
          </motion.div>

          {/* 6. Enterprise Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 md:row-span-1 rounded-3xl p-8 min-h-[300px] relative overflow-hidden group bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="max-w-[400px]">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600 border border-emerald-100 group-hover:-translate-y-1 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise Security</h3>
              <p className="text-slate-600 text-sm mb-6">
                Protect business operations with advanced security and access controls.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Role-Based Permissions", 
                  "Audit Logs", 
                  "Secure Authentication", 
                  "Data Encryption", 
                  "Activity Monitoring"
                ].map((item, idx) => (
                  <span key={idx} className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-md border border-emerald-100/50">{item}</span>
                ))}
              </div>
            </div>

            <div className="flex -space-x-4 shrink-0 hidden sm:flex">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-16 h-16 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center shadow-md relative z-[${10-i}] group-hover:-translate-y-2 transition-transform duration-300 delay-${i*100}`}>
                  <UserCheck className="w-6 h-6 text-emerald-500" />
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
