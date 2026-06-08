"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  ShoppingBag, 
  Truck, 
  Map, 
  LineChart, 
  ChevronRight,
  Sparkles
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import Container from "@/components/layout/container";

const capabilityBlocks = [
  {
    id: "sales",
    title: "Sales Operations",
    icon: ShoppingBag,
    color: "#1d4ed8",
    items: ["Quotations", "Orders", "Invoices", "Returns", "Collections", "Customer History"],
  },
  {
    id: "dist",
    title: "Distribution Management",
    icon: Truck,
    color: "#ff9800",
    items: ["Van Inventory", "Stock Transfers", "Warehouse Sync", "Inventory Count", "Stock Requests"],
  },
  {
    id: "field",
    title: "Field Execution",
    icon: Map,
    color: "#0ea5ff",
    items: ["GPS Tracking", "Route Planning", "Visit Verification", "Territory Management", "Route Compliance"],
  },
  {
    id: "insights",
    title: "Management & Insights",
    icon: LineChart,
    color: "#06b6d4",
    items: ["Executive Dashboards", "KPI Management", "Performance Analytics", "Profitability Reports", "AI Smart Ordering"],
  },
];

export function CoreCapabilities() {
  const [hoveredBlock, setHoveredBlock] = React.useState<string | null>(null);

  return (
    <section aria-labelledby="capabilities-heading" className="relative border-b border-ink/10 bg-paper py-20 lg:py-24">
      {/* Blueprint Grid masked */}
      <div className="bp-grid absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />
      
      {/* Glowing backdrop decorator (soft blue) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0ea5ff]/5 blur-[120px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeading
            align="center"
            eyebrow="Core capabilities"
            title={<span id="capabilities-heading" className="text-ink">One Platform. Complete Visibility.</span>}
            description="Run all aspects of field logistics, mobile billing, territory sequencing, and business intelligence on a single connected ledger."
          />
        </div>

        {/* 3-Column Layout on Desktop */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Sales & Distribution (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {capabilityBlocks.slice(0, 2).map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.id}
                  className="bg-white border border-slate-200/80 p-6 rounded-xl relative group hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/30 transition-all duration-300"
                  onMouseEnter={() => setHoveredBlock(block.id)}
                  onMouseLeave={() => setHoveredBlock(null)}
                >
                  <div className="absolute top-0 right-0 w-1.5 h-12 rounded-tr-xl rounded-bl-xl transition-colors duration-300" style={{ backgroundColor: block.color }} />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded bg-slate-50 text-slate-800 border border-slate-200/60" style={{ color: block.color }}>
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">{block.title}</h3>
                  </div>

                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-xs text-slate-600 font-mono">
                        <ChevronRight className="size-3 text-slate-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Center Column: Interactive Orbiting Logo Graphic (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-6 min-h-[350px] relative">
            
            {/* SVG Orbit and lines */}
            <div className="absolute inset-0 size-full pointer-events-none z-0">
              <svg viewBox="0 0 200 200" className="size-full">
                {/* Orbit Circle 1 */}
                <circle 
                  cx="100" 
                  cy="100" 
                  r="65" 
                  fill="none" 
                  stroke="rgba(29, 78, 216, 0.06)" 
                  strokeWidth="1.5" 
                  strokeDasharray="6 6"
                />
                
                {/* Orbit Circle 2 */}
                <circle 
                  cx="100" 
                  cy="100" 
                  r="45" 
                  fill="none" 
                  stroke="rgba(255, 152, 0, 0.06)" 
                  strokeWidth="1.5" 
                />

                {/* Connecting Lines based on Hover States */}
                {capabilityBlocks.map((b) => {
                  let angle = 0;
                  if (b.id === "sales") angle = 150;
                  if (b.id === "dist") angle = 210;
                  if (b.id === "field") angle = 30;
                  if (b.id === "insights") angle = 330;

                  const rad = (angle * Math.PI) / 180;
                  const x2 = 100 + 75 * Math.cos(rad);
                  const y2 = 100 + 75 * Math.sin(rad);

                  const isHovered = hoveredBlock === b.id;

                  return (
                    <g key={b.id}>
                      <line
                        x1="100"
                        y1="100"
                        x2={x2}
                        y2={y2}
                        stroke={isHovered ? b.color : "rgba(15, 23, 42, 0.06)"}
                        strokeWidth={isHovered ? 2 : 1}
                        strokeDasharray={isHovered ? "0" : "3 3"}
                        className="transition-colors duration-300"
                      />
                      {isHovered && (
                        <motion.circle
                          cx={x2}
                          cy={y2}
                          r="3"
                          fill={b.color}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        />
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Glowing Logo Central Box (Matched exactly to uploaded logo) */}
            <motion.div
              animate={{ 
                boxShadow: hoveredBlock 
                  ? `0 0 30px rgba(14, 165, 255, 0.35)` 
                  : `0 0 20px rgba(14, 165, 255, 0.15)` 
              }}
              transition={{ duration: 0.3 }}
              className="relative z-10 size-28 rounded-2xl border border-white/20 bg-gradient-to-br from-[#0ea5ff] to-[#1d4ed8] p-5 shadow-2xl flex items-center justify-center cursor-pointer group"
            >
              {/* Inner Cutout Letter R & Orange Chevron (Logo styling) */}
              <div className="relative size-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="size-full fill-none">
                  {/* Outer loop of R */}
                  <path 
                    d="M32 30 H60 C70 30 76 36 76 43 C76 50 70 56 60 56 H46 V70" 
                    stroke="white" 
                    strokeWidth="11" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  {/* Spine of R */}
                  <path 
                    d="M32 30 V70" 
                    stroke="white" 
                    strokeWidth="11" 
                    strokeLinecap="round" 
                  />
                  {/* Underlay orange chevron leg */}
                  <path 
                    d="M32 70 L54 50 L76 70" 
                    stroke="#ff9800" 
                    strokeWidth="11" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>

              {/* Orbital particle decorator */}
              <div className="absolute -inset-4 rounded-full border border-slate-200/40 animate-spin pointer-events-none" style={{ animationDuration: '12s' }} />
            </motion.div>

            <span className="mt-4 font-mono text-[9px] text-slate-400 uppercase tracking-widest z-10">Central Engine Sync</span>
          </div>

          {/* Right Column: Field & Insights (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {capabilityBlocks.slice(2, 4).map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.id}
                  className="bg-white border border-slate-200/80 p-6 rounded-xl relative group hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/30 transition-all duration-300"
                  onMouseEnter={() => setHoveredBlock(block.id)}
                  onMouseLeave={() => setHoveredBlock(null)}
                >
                  <div className="absolute top-0 right-0 w-1.5 h-12 rounded-tr-xl rounded-bl-xl transition-colors duration-300" style={{ backgroundColor: block.color }} />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded bg-slate-50 text-slate-800 border border-slate-200/60" style={{ color: block.color }}>
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">{block.title}</h3>
                  </div>

                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-xs text-slate-600 font-mono">
                        {item === "AI Smart Ordering" ? (
                          <Sparkles className="size-3 text-[#ff9800] shrink-0 animate-pulse" />
                        ) : (
                          <ChevronRight className="size-3 text-slate-400 shrink-0" />
                        )}
                        <span className={item === "AI Smart Ordering" ? "text-accent-ink font-semibold" : ""}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
