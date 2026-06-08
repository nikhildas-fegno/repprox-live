"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ShoppingBag,
  Truck,
  Map,
  LineChart,
  Sparkles,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import Container from "@/components/layout/container";

const capabilityBlocks = [
  {
    id: "sales",
    title: "Sales Operations",
    icon: ShoppingBag,
    color: "#1d4ed8",
    items: ["Quotations", "Orders & Invoices", "Collections", "Customer History"],
  },
  {
    id: "dist",
    title: "Distribution",
    icon: Truck,
    color: "#ff9800",
    items: ["Van Inventory", "Stock Transfers", "Warehouse Sync", "Inventory Count"],
  },
  {
    id: "field",
    title: "Field Execution",
    icon: Map,
    color: "#0ea5ff",
    items: ["GPS Tracking", "Route Planning", "Visit Verification", "Territory Mgmt"],
  },
  {
    id: "insights",
    title: "Analytics & AI",
    icon: LineChart,
    color: "#06b6d4",
    items: ["Executive Dashboards", "KPI Management", "Profitability Reports", "AI Smart Ordering"],
  },
];

export function CoreCapabilities() {
  return (
    <section aria-labelledby="capabilities-heading" className="relative border-b border-white/5 bg-[#070a13] py-28 lg:py-36">
      {/* Subtle grid of tiny dots for texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full" fill="none">
          <defs>
            <pattern id="caps-dot-texture" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.5" className="fill-white/40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#caps-dot-texture)" />
        </svg>
      </div>
      
      {/* Glowing backdrop decorator — full blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0ea5ff]/10 blur-[140px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeading
            align="center"
            eyebrow="Core capabilities"
            tone="paper"
            title={<span id="capabilities-heading">One Platform. Complete Visibility.</span>}
            description="Run all aspects of field logistics, mobile billing, territory sequencing, and business intelligence on a single connected ledger."
          />
        </div>

        {/* 3-Column Layout on Desktop */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          
          {/* Left Column: Sales & Distribution (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 z-10">
            {capabilityBlocks.slice(0, 2).map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.id}
                  className="bg-slate-900/50 border border-white/8 p-7 rounded-2xl relative group hover:border-white/15 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-2 h-14 rounded-tr-2xl rounded-bl-2xl" style={{ backgroundColor: block.color }} />

                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10" style={{ color: block.color }}>
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">{block.title}</h3>
                  </div>

                  {/* Glass pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {block.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          border: `1px solid ${block.color}35`,
                          color: "rgba(203,213,225,0.9)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Interactive Bento-Console with real brand logo */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center h-full min-h-[480px] z-10">
            <div className="relative w-full h-full min-h-[480px] rounded-2xl border border-slate-800 bg-[#070a13] p-8 flex flex-col items-center justify-center overflow-hidden group shadow-2xl">
              
              {/* Blue Dynamic Light Beam (Spotlight Glow) */}
              <motion.div 
                animate={{ 
                  opacity: [0.25, 0.50, 0.25],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0ea5ff]/30 via-[#1d4ed8]/15 to-transparent blur-2xl pointer-events-none" 
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.35, 0.60, 0.35],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-60 h-60 bg-gradient-to-tr from-[#0ea5ff] to-[#1d4ed8] rounded-full blur-[70px] pointer-events-none" 
              />

              {/* Glowing Logo Card (Glassmorphism layout matching request) */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 15px rgba(14, 165, 255, 0.15)",
                    "0 0 35px rgba(14, 165, 255, 0.45)",
                    "0 0 15px rgba(14, 165, 255, 0.15)"
                  ],
                  borderColor: [
                    "rgba(255, 255, 255, 0.1)",
                    "rgba(14, 165, 255, 0.4)",
                    "rgba(255, 255, 255, 0.1)"
                  ]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10 size-28 rounded-2xl border bg-slate-900/80 p-5 shadow-2xl flex items-center justify-center cursor-pointer group-hover:scale-[1.03] transition-transform duration-300"
              >
                <img
                  src="/logo.png"
                  alt="RepPro X Logo"
                  className="size-14 object-contain filter drop-shadow-[0_0_8px_rgba(14,165,255,0.4)]"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Field & Insights (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 z-10">
            {capabilityBlocks.slice(2, 4).map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.id}
                  className="bg-slate-900/50 border border-white/8 p-7 rounded-2xl relative group hover:border-white/15 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-2 h-14 rounded-tr-2xl rounded-bl-2xl" style={{ backgroundColor: block.color }} />

                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10" style={{ color: block.color }}>
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">{block.title}</h3>
                  </div>

                  {/* Glass pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {block.items.map((item) => {
                      const isAI = item === "AI Smart Ordering";
                      return (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-colors duration-200"
                          style={{
                            background: isAI
                              ? "rgba(14,165,255,0.12)"
                              : "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            border: isAI
                              ? "1px solid rgba(14,165,255,0.40)"
                              : `1px solid ${block.color}35`,
                            color: isAI ? "#0ea5ff" : "rgba(203,213,225,0.9)",
                          }}
                        >
                          {isAI && (
                            <Sparkles className="size-3 shrink-0 animate-pulse" />
                          )}
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
