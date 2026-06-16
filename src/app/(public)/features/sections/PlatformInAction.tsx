"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map, Activity, ShoppingCart, BarChart3, PieChart, Database } from "lucide-react";

const MapIllustration = () => (
  <svg viewBox="0 0 100 60" className="w-full h-[90px] text-blue-500">
    {/* Simple perspective map grid */}
    <g transform="translate(15, 25) scale(1, 0.5) rotate(15)">
      <rect x="0" y="0" width="60" height="60" fill="white" stroke="currentColor" strokeWidth="1" className="drop-shadow-sm" />
      <path d="M 0 20 L 60 20 M 0 40 L 60 40 M 20 0 L 20 60 M 40 0 L 40 60" stroke="currentColor" strokeWidth="0.5" className="opacity-50" />
      <path d="M 0 0 L 20 20 L 40 10 L 60 30" fill="rgba(59,130,246,0.1)" stroke="currentColor" strokeWidth="1.5" />
    </g>
    <path d="M 45 10 C 50 10 55 15 55 20 C 55 28 45 40 45 40 C 45 40 35 28 35 20 C 35 15 40 10 45 10 Z" fill="currentColor" className="group-hover:-translate-y-2 transition-transform duration-500 origin-bottom" />
    <circle cx="45" cy="18" r="3" fill="white" />
  </svg>
);

const PhoneIllustration = () => (
  <svg viewBox="0 0 100 80" className="w-full h-[90px] text-purple-500">
    {/* Phone outline */}
    <rect x="30" y="0" width="40" height="75" rx="6" fill="white" stroke="currentColor" strokeWidth="1.5" className="drop-shadow-sm" />
    <line x1="45" y1="6" x2="55" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-50" />
    
    {/* Checkmarks List */}
    <path d="M 36 18 L 40 22 L 46 16" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <line x1="50" y1="19" x2="64" y2="19" stroke="currentColor" strokeWidth="1.5" className="opacity-20" />
    
    <path d="M 36 30 L 40 34 L 46 28" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
    <line x1="50" y1="31" x2="64" y2="31" stroke="currentColor" strokeWidth="1.5" className="opacity-20" />
    
    <path d="M 36 42 L 40 46 L 46 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
    <line x1="50" y1="43" x2="64" y2="43" stroke="currentColor" strokeWidth="1.5" className="opacity-20" />
    
    <rect x="42" y="60" width="6" height="8" fill="currentColor" rx="1.5" className="opacity-40 group-hover:h-12 group-hover:-translate-y-4 transition-all duration-500" />
    <rect x="52" y="52" width="6" height="16" fill="currentColor" rx="1.5" className="opacity-70 group-hover:h-20 group-hover:-translate-y-4 transition-all duration-500 delay-100" />
    <rect x="62" y="44" width="6" height="24" fill="currentColor" rx="1.5" className="group-hover:h-28 group-hover:-translate-y-4 transition-all duration-500 delay-200" />
  </svg>
);

const TransactionIllustration = () => (
  <svg viewBox="0 0 120 70" className="w-full h-[90px] text-pink-500">
    <rect x="10" y="5" width="100" height="60" rx="6" fill="white" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" className="drop-shadow-sm" />
    <text x="20" y="25" fontSize="7" fill="#94a3b8" fontWeight="bold">New Order</text>
    <text x="20" y="42" fontSize="14" fill="currentColor" fontWeight="900" className="group-hover:scale-110 origin-left transition-transform duration-500">$ 24,850</text>
    
    {/* Bars */}
    <rect x="80" y="45" width="6" height="10" fill="currentColor" rx="1.5" className="opacity-30" />
    <rect x="90" y="35" width="6" height="20" fill="currentColor" rx="1.5" className="opacity-60" />
    <rect x="100" y="20" width="6" height="35" fill="currentColor" rx="1.5" />
    
    <line x1="20" y1="52" x2="45" y2="52" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="20" y1="47" x2="32" y2="47" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PerformanceIllustration = () => (
  <svg viewBox="0 0 120 70" className="w-full h-[90px] text-emerald-500">
    <rect x="10" y="5" width="100" height="60" rx="6" fill="white" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" className="drop-shadow-sm" />
    
    {/* Line chart box */}
    <rect x="15" y="15" width="45" height="35" fill="none" stroke="#e2e8f0" strokeWidth="1" rx="2" />
    <path d="M 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 15 45 L 30 35 L 45 40 L 60 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="60" cy="20" r="2.5" fill="currentColor" className="group-hover:scale-[2.5] group-hover:fill-emerald-400 transition-all duration-500 origin-center" />
    
    <line x1="15" y1="55" x2="35" y2="55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="55" x2="60" y2="55" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
    
    {/* Donut chart */}
    <circle cx="85" cy="35" r="14" fill="none" stroke="#f1f5f9" strokeWidth="5" />
    <path d="M 85 21 A 14 14 0 1 1 71 35" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    <text x="85" y="38" fontSize="8" fill="#1e293b" textAnchor="middle" fontWeight="bold">84%</text>
  </svg>
);

const AnalyticsIllustration = () => (
  <svg viewBox="0 0 120 70" className="w-full h-[90px] text-cyan-500">
    <rect x="10" y="5" width="100" height="60" rx="6" fill="white" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" className="drop-shadow-sm" />
    
    {/* Pie chart */}
    <circle cx="35" cy="35" r="16" fill="currentColor" />
    <path d="M 35 35 L 35 19 A 16 16 0 0 1 51 35 Z" fill="white" className="opacity-30" />
    
    {/* Small pie */}
    <circle cx="65" cy="25" r="8" fill="currentColor" className="opacity-50" />
    <path d="M 65 25 L 65 17 A 8 8 0 0 1 73 25 Z" fill="white" className="opacity-40" />
    
    {/* Bars */}
    <rect x="80" y="40" width="6" height="15" fill="currentColor" rx="1.5" className="opacity-50 group-hover:-translate-y-2 transition-transform duration-500" />
    <rect x="90" y="30" width="6" height="25" fill="currentColor" rx="1.5" className="opacity-80 group-hover:-translate-y-3 transition-transform duration-500 delay-100" />
    <rect x="100" y="20" width="6" height="35" fill="currentColor" rx="1.5" className="group-hover:-translate-y-4 transition-transform duration-500 delay-200" />
  </svg>
);

const steps = [
  {
    id: '01',
    title: 'Territory Planning',
    desc: 'Plan smarter territories and optimize coverage.',
    icon: <Map className="w-6 h-6" />,
    color: 'blue',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    badgeColor: 'bg-blue-600',
    Illustration: MapIllustration
  },
  {
    id: '02',
    title: 'Field Execution',
    desc: 'Execute plans effectively with real-time activities.',
    icon: <Activity className="w-6 h-6" />,
    color: 'purple',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    badgeColor: 'bg-purple-600',
    Illustration: PhoneIllustration
  },
  {
    id: '03',
    title: 'Sales Transactions',
    desc: 'Capture orders and collections with accuracy and speed.',
    icon: <ShoppingCart className="w-6 h-6" />,
    color: 'pink',
    borderColor: 'border-pink-400',
    textColor: 'text-pink-500',
    bgColor: 'bg-pink-50',
    badgeColor: 'bg-pink-500',
    Illustration: TransactionIllustration
  },
  {
    id: '04',
    title: 'Performance Control',
    desc: 'Monitor performance and achieve more every day.',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'emerald',
    borderColor: 'border-emerald-500',
    textColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    badgeColor: 'bg-emerald-600',
    Illustration: PerformanceIllustration
  },
  {
    id: '05',
    title: 'Business Intelligence',
    desc: 'Turn data into insights that drive growth.',
    icon: <PieChart className="w-6 h-6" />,
    color: 'cyan',
    borderColor: 'border-cyan-500',
    textColor: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    badgeColor: 'bg-cyan-500',
    Illustration: AnalyticsIllustration
  }
];

export default function PlatformInAction() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#fafcff]">
      {/* Background patterns and soft glows if any */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px]"></div>
        <div className="absolute top-[30%] right-[-5%] w-[300px] h-[300px] bg-indigo-100/50 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-blue-100 bg-white text-blue-600 text-xs font-bold tracking-wider uppercase mb-8 shadow-sm"
          >
            CONNECTED PLATFORM
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[44px] font-bold tracking-tight text-[#0B1736] mb-6 leading-tight"
          >
            One Connected Platform<br/>
            <span className="text-blue-600">Complete</span> Sales Visibility.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[17px] text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Watch how data flows seamlessly across planning, execution, transactions, performance management, and business intelligence to drive smarter decisions and faster growth.
          </motion.p>
        </div>

        {/* Horizontal Cards Flow */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 lg:gap-2 mb-20 px-2 lg:px-0">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`relative flex flex-col items-center bg-white rounded-2xl border-t-[3px] ${step.borderColor} shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 px-5 pt-10 pb-6 text-center w-full max-w-[260px] lg:flex-1 shrink-0 group`}
              >
                {/* Badge Number */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${step.badgeColor} text-white text-[12px] font-black w-8 h-8 rounded-full flex items-center justify-center shadow-md`}>
                  {step.id}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-full ${step.bgColor} ${step.textColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="font-bold text-slate-900 text-[17px] mb-2">{step.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed mb-6 flex-1">{step.desc}</p>

                {/* SVG Illustration Component */}
                <div className="w-full mt-auto">
                  <step.Illustration />
                </div>
              </motion.div>

              {/* Dotted Connecting Arrow (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex flex-col justify-center shrink-0 w-6 xl:w-10 opacity-40">
                  <svg viewBox="0 0 40 10" className="w-full overflow-visible">
                    <line x1="0" y1="5" x2="35" y2="5" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className={step.textColor} />
                    <path d="M 32 1 L 38 5 L 32 9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={step.textColor} />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Floating Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] rounded-full px-6 py-3.5 transition-transform hover:-translate-y-1">
            <div className="text-blue-600">
              <Database className="w-6 h-6" fill="currentColor" strokeWidth={1} />
            </div>
            <span className="text-[16px] font-semibold text-[#0B1736] tracking-tight">
              One Platform. All Data Connected. <span className="text-blue-600">Smarter Decisions.</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
