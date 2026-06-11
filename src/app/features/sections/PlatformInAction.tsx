"use client";

import { motion } from "framer-motion";
import {
  Sparkles, Users, MapPin, ShoppingCart, BarChart3, Database,
  Brain, LineChart, TrendingUp, Smartphone, Cloud, Package, UserCircle, Map, Bell, Activity
} from "lucide-react";

// Using explicit coordinates for the SVG paths and card positioning
const workflowNodes = [
  { id: 1, title: "Territory Planning", icon: <Map className="w-8 h-7" />, desc: "ROUTES & COVERAGE", cx: 150, cy: 120, color: "blue" },
  { id: 2, title: "Field Execution", icon: <Activity className="w-8 h-7" />, desc: "VISITS & ACTIVITIES", cx: 375, cy: 220, color: "indigo" },
  { id: 3, title: "Sales Transactions", icon: <ShoppingCart className="w-8 h-7" />, desc: "ORDERS & COLLECTIONS", cx: 600, cy: 120, color: "purple" },
  { id: 4, title: "Performance Control", icon: <BarChart3 className="w-8 h-7" />, desc: "KPIs & MONITORING", cx: 825, cy: 220, color: "emerald" },
  { id: 5, title: "Business Intelligence", icon: <Brain className="w-8 h-7" />, desc: "REPORTS & ANALYTICS", cx: 1050, cy: 120, color: "cyan" }
];

const floatingIcons = [
  { icon: <Brain />, size: 48, top: "5%", left: "10%", dur: 12, opacity: 0.12, color: "text-blue-500" },
  { icon: <LineChart />, size: 36, top: "15%", left: "85%", dur: 14, opacity: 0.1, color: "text-cyan-500" },
  { icon: <TrendingUp />, size: 50, top: "40%", left: "5%", dur: 10, opacity: 0.08, color: "text-indigo-500" },
  { icon: <Users />, size: 60, top: "70%", left: "12%", dur: 15, opacity: 0.15, color: "text-blue-400" },
  { icon: <MapPin />, size: 32, top: "80%", left: "45%", dur: 8, opacity: 0.1, color: "text-cyan-600" },
  { icon: <Smartphone />, size: 40, top: "25%", left: "30%", dur: 11, opacity: 0.12, color: "text-blue-500" },
  { icon: <Cloud />, size: 55, top: "35%", left: "90%", dur: 13, opacity: 0.09, color: "text-indigo-400" },
  { icon: <Package />, size: 44, top: "85%", left: "75%", dur: 9, opacity: 0.14, color: "text-blue-600" },
  { icon: <UserCircle />, size: 28, top: "10%", left: "55%", dur: 7, opacity: 0.11, color: "text-cyan-500" },
  { icon: <Database />, size: 50, top: "55%", left: "80%", dur: 14, opacity: 0.15, color: "text-indigo-500" },
  { icon: <Map />, size: 36, top: "65%", left: "35%", dur: 10, opacity: 0.1, color: "text-blue-500" },
  { icon: <Bell />, size: 24, top: "45%", left: "20%", dur: 6, opacity: 0.12, color: "text-cyan-400" }
];

export default function PlatformInAction() {
  const coreX = 600;
  const coreY = 170;

  return (
    <section
      className="py-12 lg:py-24 relative overflow-hidden border-y border-slate-100"
      style={{
        background: "linear-gradient(180deg, #F8FBFF 0%, #EEF6FF 50%, #F6FAFF 100%)"
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft Glowing Orbs behind the icons */}
        <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px]"></div>
        <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[350px] h-[350px] bg-indigo-400/10 rounded-full blur-[90px]"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[250px] h-[250px] bg-blue-300/10 rounded-full blur-[70px]"></div>

        {/* Floating SaaS Icons */}
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${item.color} drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]`}
            style={{ top: item.top, left: item.left, opacity: item.opacity }}
            animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: item.dur, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
          >
            <div style={{ width: item.size, height: item.size }} className="[&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[1.5]">
              {item.icon}
            </div>
          </motion.div>
        ))}

        {/* Animated Data Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/40 blur-[1px]"
            style={{ top: `${Math.random() * 100}%`, left: `-5%` }}
            animate={{ x: ["0vw", "105vw"], y: [0, Math.random() * 100 - 50], opacity: [0, 1, 0] }}
            transition={{ duration: 10 + Math.random() * 15, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1736] mb-6 lg:whitespace-nowrap"
          >
            One Connected Platform Complete Sales Visibility.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#64748B]"
          >
            Watch how data flows seamlessly across planning, execution, transactions, performance management, and business intelligence to drive smarter decisions and faster growth.
          </motion.p>
        </div>

        {/* Flagship Interactive Visualization Area */}
        <div className="relative w-full pb-16 pt-8">

          {/* Mobile Vertical Diagram (hidden on md and up) */}
          <div className="md:hidden relative flex flex-col items-center gap-12 py-6 w-full max-w-[280px] mx-auto">
            {/* Vertical Flow Line */}
            <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-blue-400 via-purple-400 to-emerald-400 opacity-40 z-0 rounded-full"></div>
            
            {/* Animated dot on mobile */}
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full z-10 shadow-[0_0_10px_#3B82F6]"
              animate={{ top: ["5%", "95%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            {workflowNodes.map((node, i) => {
              const colorConfig: Record<string, { bg: string, text: string, border: string, glow: string }> = {
                blue: { bg: "bg-blue-50", text: "text-blue-600", border: "from-blue-200 to-blue-100", glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]" },
                indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "from-indigo-200 to-indigo-100", glow: "shadow-[0_0_30px_rgba(99,102,241,0.3)]" },
                purple: { bg: "bg-purple-50", text: "text-purple-600", border: "from-purple-200 to-purple-100", glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]" },
                emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "from-emerald-200 to-emerald-100", glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]" },
                rose: { bg: "bg-rose-50", text: "text-rose-600", border: "from-rose-200 to-rose-100", glow: "shadow-[0_0_30px_rgba(244,63,94,0.3)]" },
                cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "from-cyan-200 to-cyan-100", glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]" }
              };
              const conf = colorConfig[node.color] || colorConfig.blue;

              return (
                <motion.div
                  key={`mob-${node.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative z-20 w-full"
                >
                  <div className={`p-[1.5px] rounded-[24px] bg-gradient-to-b ${conf.border} transition-all duration-300`}>
                    <div className="w-full bg-white/90 backdrop-blur-xl rounded-[23px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-center text-center relative overflow-hidden">
                      <div className="absolute -top-4 -right-2 text-[60px] font-black text-slate-100 opacity-50 z-0 select-none pointer-events-none">{node.id}</div>
                      <div className={`w-14 h-14 rounded-2xl ${conf.bg} ${conf.text} flex items-center justify-center mb-5 relative z-10 shadow-sm border border-white`}>
                        {node.icon}
                      </div>
                      <h4 className="font-bold text-[#0B1736] text-[15px] leading-tight mb-2 relative z-10">{node.title}</h4>
                      <p className="text-[11px] font-medium text-slate-500 tracking-wide uppercase relative z-10">{node.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop/Tablet Diagram Container (hidden on small screens) */}
          <div className="hidden md:flex justify-center overflow-x-auto">
            <div className="min-w-[1200px] relative lg:h-[350px] 4xl:h-[450px]">

              {/* SVG Data Flow Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1200 450">
                <defs>
                  {/* Gradients for connections */}
                  <linearGradient id="core-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#18C7E6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="zig-zag-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
                  </linearGradient>
                </defs>

                {/* Zig-zag connection between cards */}
                <path
                  d={`M ${workflowNodes[0].cx} ${workflowNodes[0].cy} ${workflowNodes.slice(1).map(n => `L ${n.cx} ${n.cy}`).join(" ")}`}
                  fill="none"
                  stroke="url(#zig-zag-grad)"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Gradient Light Trail travelling along zig-zag */}
                <circle r="6" fill="#fff" className="drop-shadow-[0_0_12px_rgba(59,130,246,1)]">
                  <animateMotion dur="8s" repeatCount="indefinite" path={`M ${workflowNodes[0].cx} ${workflowNodes[0].cy} ${workflowNodes.slice(1).map(n => `L ${n.cx} ${n.cy}`).join(" ")}`} />
                </circle>
              </svg>

              {/* Premium Workflow Cards (Glassmorphism + Hover Elevation) */}
              {workflowNodes.map((node, i) => {

                const colorConfig: Record<string, { bg: string, text: string, border: string, glow: string }> = {
                  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "from-blue-200 to-blue-100", glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]" },
                  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "from-indigo-200 to-indigo-100", glow: "shadow-[0_0_30px_rgba(99,102,241,0.3)]" },
                  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "from-purple-200 to-purple-100", glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]" },
                  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "from-emerald-200 to-emerald-100", glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]" },
                  rose: { bg: "bg-rose-50", text: "text-rose-600", border: "from-rose-200 to-rose-100", glow: "shadow-[0_0_30px_rgba(244,63,94,0.3)]" },
                  cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "from-cyan-200 to-cyan-100", glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]" }
                };

                const conf = colorConfig[node.color];

                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="absolute z-20 flex flex-col items-center justify-center group cursor-default"
                    style={{
                      // Center the 200px wide card on its cx, cy
                      left: node.cx - 100,
                      top: node.cy - 85,
                      width: 200
                    }}
                  >

                    {/* Gradient Border Wrapper */}
                    <div className={`p-[1.5px] rounded-[24px] bg-gradient-to-b w-full ${conf.border} transition-all duration-300 group-hover:-translate-y-2 group-hover:${conf.glow}`}>

                      {/* Glass Card Body */}
                      <div className="w-full bg-white/80 backdrop-blur-xl rounded-[23px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-center text-center relative overflow-hidden">

                        {/* Step Number Watermark */}
                        <div className="absolute -top-4 -right-2 text-[60px] font-black text-slate-100 opacity-50 z-0 select-none pointer-events-none">
                          {node.id}
                        </div>

                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-2xl ${conf.bg} ${conf.text} flex items-center justify-center mb-5 relative z-10 transition-transform duration-300 group-hover:scale-110 shadow-sm border border-white`}>
                          {node.icon}
                        </div>

                        <h4 className="font-bold text-[#0B1736] text-[15px] leading-tight mb-2 relative z-10">{node.title}</h4>
                        <p className="text-[11px] font-medium text-slate-500 tracking-wide uppercase relative z-10">{node.desc}</p>

                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
