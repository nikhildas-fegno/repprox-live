"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Check, 
  ShoppingBag, 
  Truck, 
  Navigation, 
  ClipboardList, 
  TrendingUp,
  Brain,
  Search,
  ShoppingCart,
  User,
  Activity,
  FileText
} from "lucide-react";

import Container from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { solutions } from "@/data/solutions";

const solutionIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "sales-force-automation": ShoppingBag,
  "distribution-van-sales": Truck,
  "route-planning-gps": Navigation,
  "task-survey-management": ClipboardList,
  "promotions-pricing": TrendingUp,
};

export function SolutionsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle tabs with reset on manual selection
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutions.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const activeSol = solutions[activeIndex];
  const ActiveIcon = solutionIconMap[activeSol.slug] || ShoppingBag;

  // Render the interactive workspace mockup based on the selected tab
  const renderWorkspaceMockup = () => {
    switch (activeSol.slug) {
      case "sales-force-automation":
        return (
          <div className="flex flex-col gap-4 h-full justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-[11px] font-mono text-slate-400">Order Dispatch Queue (Sync Active)</span>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono px-2 py-0.5 rounded-full uppercase">Approved</span>
            </div>
            
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-900/50 p-3 rounded-lg border border-white/5">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  <span className="font-medium">Solace Retailers (Order #890)</span>
                </div>
                <span className="font-mono text-[#0ea5ff] font-extrabold">$1,240.00</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-900/50 p-3 rounded-lg border border-white/5">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  <span className="font-medium">Vantage Supply (Order #891)</span>
                </div>
                <span className="font-mono text-[#0ea5ff] font-extrabold">$890.00</span>
              </div>
            </div>

            <div className="bg-[#ff9800]/10 border border-[#ff9800]/20 p-3.5 rounded-lg flex flex-col gap-1.5 mt-auto">
              <span className="text-[10px] text-[#ff9800] font-mono uppercase tracking-wider font-extrabold flex items-center gap-1">
                <Brain className="size-3" /> Credit Limit Block
              </span>
              <span className="text-[11px] text-slate-300 leading-normal">
                Automatical ERP limits enforced. Order locks applied dynamically when outstanding balance exceeds contract limits.
              </span>
            </div>
          </div>
        );

      case "distribution-van-sales":
        return (
          <div className="flex flex-col gap-4 h-full justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-[11px] font-mono text-slate-400">Mobile Warehouse Stock (Van #14)</span>
              <span className="bg-[#ff9800]/10 text-[#ff9800] border border-[#ff9800]/20 text-[9px] font-mono px-2 py-0.5 rounded-full uppercase">In Transit</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/40 p-3.5 rounded-lg border border-white/5">
                <span className="text-[9px] text-slate-500 block uppercase font-mono tracking-wider">Classic Soda</span>
                <span className="font-mono font-bold text-white text-base">142 Cases</span>
              </div>
              <div className="bg-slate-900/40 p-3.5 rounded-lg border border-white/5">
                <span className="text-[9px] text-slate-500 block uppercase font-mono tracking-wider">Juice Pack</span>
                <span className="font-mono font-bold text-white text-base">48 Cases</span>
              </div>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-lg border border-white/5 flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <FileText className="size-4 text-emerald-400" />
                <span className="text-xs text-slate-400">Loading Sheet Reconciliation</span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">100% Match</span>
            </div>
          </div>
        );

      case "route-planning-gps":
        return (
          <div className="flex flex-col gap-4 h-full justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-[11px] font-mono text-slate-400">Live Route Navigation & Compliance</span>
              <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] font-mono px-2 py-0.5 rounded-full uppercase">Tracking</span>
            </div>

            <div className="h-32 w-full border border-white/5 rounded-lg bg-slate-950/80 relative overflow-hidden flex items-center justify-center">
              <svg className="absolute inset-0 size-full stroke-[#0ea5ff]/35" fill="none">
                <path d="M 30 100 Q 100 20 160 80 T 280 50" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="30" cy="100" r="4" className="fill-[#0ea5ff]" />
                <circle cx="160" cy="80" r="4" className="fill-[#ff9800]" />
                <circle cx="280" cy="50" r="4.5" className="fill-emerald-400 animate-ping" />
                <circle cx="280" cy="50" r="3.5" className="fill-emerald-400" />
              </svg>
              <div className="absolute top-2 left-2 bg-slate-900/90 border border-white/10 px-2 py-0.5 rounded text-[8px] text-slate-400 font-mono">
                Van GPS Verified: Route B-12
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-400 mt-auto">
              <span>Sequence Adherence</span>
              <span className="font-mono font-bold text-emerald-400 flex items-center gap-1">
                <Activity className="size-3" /> 97.8% Compliance
              </span>
            </div>
          </div>
        );

      case "task-survey-management":
        return (
          <div className="flex flex-col gap-4 h-full justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-[11px] font-mono text-slate-400">Trade Merchandising Audit Checklist</span>
              <span className="bg-[#ff9800]/10 text-[#ff9800] border border-[#ff9800]/20 text-[9px] font-mono px-2 py-0.5 rounded-full uppercase">Geofenced</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs bg-slate-900/40 p-2.5 rounded-lg border border-white/5">
                <span className="text-slate-300">Shelf Share Photo Verified</span>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Passed</span>
              </div>
              <div className="flex items-center justify-between text-xs bg-slate-900/40 p-2.5 rounded-lg border border-white/5">
                <span className="text-slate-300">Competitor Price Audit Log</span>
                <span className="text-[9px] font-mono text-[#ff9800] bg-[#ff9800]/10 px-1.5 py-0.5 rounded">Flagged</span>
              </div>
            </div>

            <div className="text-[9px] text-slate-500 text-center font-mono mt-auto">
              Geofence Verified Visit: Store #412
            </div>
          </div>
        );

      case "promotions-pricing":
        return (
          <div className="flex flex-col gap-4 h-full justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-[11px] font-mono text-slate-400">Promotions & Contract Price Calculator</span>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono px-2 py-0.5 rounded-full uppercase">Applied</span>
            </div>

            <div className="bg-slate-950/80 p-3.5 rounded-lg border border-white/5 flex flex-col gap-2 mt-auto">
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Contract List Price (100 Cases)</span>
                <span className="font-mono">$2,400.00</span>
              </div>
              <div className="flex justify-between text-[11px] text-emerald-400 font-medium">
                <span>BOGO Discount Code (15%)</span>
                <span className="font-mono">-$360.00</span>
              </div>
              <div className="h-px bg-white/5 my-1" />
              <div className="flex justify-between text-xs font-bold text-white items-center">
                <span>Final Order Amount</span>
                <span className="font-mono text-[#0ea5ff] font-extrabold text-sm">$2,040.00</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section aria-labelledby="solutions-heading" className="border-b border-ink/10 bg-paper py-20 lg:py-24">
      <Container>
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Solutions"
            title={<span id="solutions-heading">Solutions Built For Modern Distribution</span>}
            description="RepPro X combines multiple operational modules into a single platform designed to improve sales execution and operational visibility."
          />
          <Reveal delay={0.1}>
            <Link
              href="/solutions"
              className="group inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink transition-colors hover:text-accent font-bold"
            >
              View all solutions
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* Dynamic Solutions Workspace Console */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Interactive Nav Tabs (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {solutions.map((sol, index) => {
              const Icon = solutionIconMap[sol.slug] || ShoppingBag;
              const isActive = index === activeIndex;

              return (
                <button
                  key={sol.slug}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left w-full p-4.5 rounded-xl border transition-all duration-300 flex items-start gap-4 group cursor-pointer ${
                    isActive 
                      ? "bg-white border-[#1d4ed8]/30 shadow-lg shadow-slate-200/50 scale-[1.01]" 
                      : "bg-[#f8fafc]/50 border-slate-200/50 hover:bg-[#f8fafc] hover:border-slate-300"
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                    isActive 
                      ? "bg-accent-soft text-accent-ink" 
                      : "bg-white text-slate-400 border border-slate-200/40"
                  }`}>
                    <Icon className="size-5" />
                  </div>
                  
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-[9px] uppercase tracking-wider ${
                        isActive ? "text-[#ff9800] font-bold" : "text-slate-400"
                      }`}>
                        {sol.audience.split(' & ')[0]}
                      </span>
                      {isActive && (
                        <span className="size-1.5 rounded-full bg-[#1d4ed8] animate-pulse" />
                      )}
                    </div>
                    
                    <h3 className={`text-sm font-bold leading-tight transition-colors ${
                      isActive ? "text-accent-ink" : "text-slate-800"
                    }`}>
                      {sol.title}
                    </h3>
                    
                    {isActive && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-xs text-slate-500 leading-relaxed mt-2"
                      >
                        {sol.summary}
                      </motion.p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Immersive Workspace Preview Panel (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 rounded-2xl border border-slate-800 bg-[#070a13] p-4 lg:p-6 shadow-2xl shadow-slate-900/30 flex flex-col justify-between overflow-hidden min-h-[360px] group">
              {/* Top ambient color glow */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5ff]/35 to-transparent pointer-events-none" />
              <div className="absolute -inset-px bg-gradient-to-b from-[#0ea5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Console Mockup Window header */}
              <div className="flex items-center justify-between border-b border-white/5 bg-slate-900/40 px-3 py-2 rounded-t-lg mb-6 -mx-4 lg:-mx-6 -mt-4 lg:-mt-6">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-500/80" />
                  <span className="size-2.5 rounded-full bg-yellow-500/80" />
                  <span className="size-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-[9px] text-slate-500 tracking-wider uppercase">
                    RepPro X // {activeSol.slug.replace(/-/g, ' ')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest">Live Agent</span>
                </div>
              </div>

              {/* Body Content with AnimatePresence */}
              <div className="flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSol.slug}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex-grow flex flex-col justify-between"
                  >
                    {renderWorkspaceMockup()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Console Footer */}
              <div className="mt-6 border-t border-white/5 pt-4 flex items-center justify-between -mx-4 lg:-mx-6 -mb-4 lg:-mb-6 px-4 lg:px-6 bg-slate-900/10">
                <div className="flex flex-col text-left">
                  <span className="text-[8px] font-mono text-slate-500 uppercase">Operational Outcome</span>
                  <span className="text-xs text-slate-300 font-semibold">{activeSol.outcomes[0]}</span>
                </div>
                <Link 
                  href={`/solutions/${activeSol.slug}`}
                  className="group/link inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent font-bold hover:text-white transition-colors"
                >
                  Explore Details
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
