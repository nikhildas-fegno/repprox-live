"use client";

import React, { useState } from "react";
import { 
  ShoppingBag, 
  CupSoda, 
  HeartPulse, 
  Hammer, 
  Package, 
  Warehouse, 
  Truck,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Activity
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import type { Industry } from "@/types/content";
import { Reveal } from "@/components/reveal";

const industryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "fmcg": ShoppingBag,
  "food-beverage": CupSoda,
  "pharma": HeartPulse,
  "building-materials": Hammer,
  "consumer-goods": Package,
  "wholesale": Warehouse,
  "logistics": Truck,
};

export function IndustryShowcase({ industries }: { industries: Industry[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];
  const ActiveIcon = industryIconMap[activeIndustry.slug] || ShoppingBag;

  return (
    <div className="flex flex-col gap-10 mt-12">
      {/* Horizontal Interactive Tab Controls */}
      <Reveal delay={0.05}>
        <div className="flex flex-wrap lg:flex-nowrap gap-2 pb-2 border-b border-slate-200 overflow-x-auto scrollbar-none">
          {industries.map((ind, idx) => {
            const Icon = industryIconMap[ind.slug] || ShoppingBag;
            const isActive = idx === activeIndex;

            return (
              <button
                key={ind.slug}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-4 py-3.5 rounded-xl border font-mono text-[12px] uppercase tracking-wider font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive 
                    ? "bg-white border-[#1d4ed8]/30 shadow-md shadow-slate-200/40 text-accent-ink" 
                    : "bg-slate-50/50 border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                <Icon className={`size-4.5 ${isActive ? "text-accent-ink" : "text-slate-400"}`} />
                {ind.name.replace(" Distribution", "").replace(" Operations", "")}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Main Split Console Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Summary & Key Performance Metrics (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.slug}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col gap-4 text-left"
            >
              <div className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                  <ActiveIcon className="size-4.5" />
                </span>
                <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  Target Vertical
                </span>
              </div>

              <h3 className="font-display text-2xl lg:text-3xl font-extrabold tracking-tight text-ink">
                {activeIndustry.name}
              </h3>
              
              <p className="text-sm lg:text-base leading-relaxed text-slate-500">
                {activeIndustry.summary}
              </p>

              {/* Dynamic Large Performance Cards */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {activeIndustry.stats.map((stat) => (
                  <div 
                    key={stat.label}
                    className="bg-white border border-slate-200/60 p-4.5 rounded-xl shadow-sm flex flex-col gap-1 text-left"
                  >
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold leading-normal min-h-[28px]">
                      {stat.label}
                    </span>
                    <span className="font-display text-2xl lg:text-3xl font-extrabold text-accent-ink tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Operational Challenge & Help Panel (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative flex-grow bg-slate-900 border border-slate-800 rounded-2xl p-5 lg:p-7 shadow-xl shadow-slate-950/20 flex flex-col justify-between overflow-hidden min-h-[350px] group text-left">
            {/* Ambient upper border light grid */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff9800]/25 to-transparent pointer-events-none" />

            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6 -mx-5 lg:-mx-7 -mt-5 lg:-mt-7 px-5 lg:px-7 bg-slate-950/10">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                Day-To-Day Operational Workflows
              </span>
              <span className="text-[9px] font-mono text-[#ff9800] bg-[#ff9800]/10 border border-[#ff9800]/25 py-0.5 px-2 rounded-full uppercase">
                Optimized
              </span>
            </div>

            {/* List of Challenges & Helps */}
            <div className="flex-grow flex flex-col gap-4 justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col gap-4"
                >
                  {activeIndustry.useCases.map((useCase, uIdx) => {
                    // Split the useCase by " -> " to format Challenge vs Help
                    const parts = useCase.split(" -> ");
                    const challengeText = parts[0]?.replace("Challenge: ", "") || "";
                    const helpText = parts[1]?.replace("Help: ", "") || "";

                    return (
                      <div 
                        key={uIdx}
                        className="bg-slate-950/50 border border-white/5 p-4 rounded-xl flex flex-col gap-2 relative overflow-hidden"
                      >
                        {/* Colored left bar guides */}
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#ff9800] to-red-500 opacity-80" />

                        <div className="flex flex-col md:flex-row md:items-start gap-3">
                          {/* Challenge */}
                          <div className="flex-1 flex flex-col gap-1 pl-1">
                            <span className="text-[8px] font-mono text-red-400 uppercase font-extrabold tracking-wider">
                              Operational Bottleneck
                            </span>
                            <span className="text-xs text-slate-300 font-semibold leading-normal">
                              {challengeText}
                            </span>
                          </div>

                          <div className="hidden md:flex shrink-0 items-center justify-center pt-2">
                            <ArrowRight className="size-3.5 text-slate-600" />
                          </div>

                          {/* Help */}
                          <div className="flex-1 flex flex-col gap-1 pl-1 md:pl-0 border-l border-white/5 md:border-l-0">
                            <span className="text-[8px] font-mono text-emerald-400 uppercase font-extrabold tracking-wider">
                              RepProX Automation Solution
                            </span>
                            <span className="text-xs text-slate-400 leading-normal">
                              {helpText}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Panel footer summary */}
            <div className="mt-6 border-t border-white/5 pt-4 flex items-center justify-between -mx-5 lg:-mx-7 -mb-5 lg:-mb-7 px-5 lg:px-7 bg-slate-950/10">
              <span className="text-[8px] font-mono text-slate-500 uppercase">Field Verification Mode</span>
              <span className="text-[10px] font-mono font-semibold text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="size-3.5" /> geofence & ledger synced
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
