"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  Smartphone, 
  Receipt, 
  Brain, 
  Compass, 
  Trophy, 
  WifiOff, 
  Search, 
  User, 
  ShoppingCart, 
  CheckCircle,
  Clock,
  Check
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import Container from "@/components/layout/container";

const mobileFeatures = [
  {
    icon: Smartphone,
    title: "Mobile-First Productivity",
    description: "Access customers, inventory, quotations, orders, invoices, collections, and activities from anywhere.",
  },
  {
    icon: Receipt,
    title: "Real-Time Sales & Collections",
    description: "Capture orders, generate invoices, process returns, and record customer payments instantly.",
  },
  {
    icon: Brain,
    title: "AI Smart Ordering",
    description: "Receive intelligent recommendations based on purchasing history and buying behavior.",
  },
  {
    icon: Compass,
    title: "GPS Enabled Execution",
    description: "Verify visits, optimize routes, and maintain accurate field activity records.",
  },
  {
    icon: Trophy,
    title: "Performance Visibility",
    description: "Track targets, collections, sales achievements, and productivity metrics.",
  },
  {
    icon: WifiOff,
    title: "Online & Offline Operations",
    description: "Continue working even without internet connectivity, with auto-sync on reconnect.",
  },
];

export function MobileAppExperience() {
  const [activeScreen, setActiveScreen] = React.useState<"order" | "route" | "offline">("order");

  return (
    <section aria-labelledby="mobile-app-heading" className="relative border-b border-white/5 bg-[#070a13] py-24 lg:py-28">
      {/* Background radial gradient decoration */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-[#1d4ed8] opacity-5 blur-[100px] pointer-events-none rounded-full" />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeading
            align="center"
            eyebrow="Mobile app"
            tone="paper"
            title={<span id="mobile-app-heading">Everything Your Sales Team Needs In One Mobile App</span>}
            description="Empower field representatives with a mobile-first platform that keeps sales, collections, customer information, inventory visibility, and performance insights at their fingertips."
          />
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Mobile App Mockup (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Screen toggle controls */}
            <div className="flex bg-slate-900/60 p-1.5 border border-white/5 rounded-full mb-6 font-mono text-[11px] uppercase tracking-wider">
              <button 
                onClick={() => setActiveScreen("order")} 
                className={`px-4 py-1.5 rounded-full transition-colors ${activeScreen === "order" ? "bg-[#0ea5ff] text-white" : "text-slate-400 hover:text-white"}`}
              >
                Smart Order
              </button>
              <button 
                onClick={() => setActiveScreen("route")} 
                className={`px-4 py-1.5 rounded-full transition-colors ${activeScreen === "route" ? "bg-[#0ea5ff] text-white" : "text-slate-400 hover:text-white"}`}
              >
                GPS Route
              </button>
              <button 
                onClick={() => setActiveScreen("offline")} 
                className={`px-4 py-1.5 rounded-full transition-colors ${activeScreen === "offline" ? "bg-[#0ea5ff] text-white" : "text-slate-400 hover:text-white"}`}
              >
                Offline Mode
              </button>
            </div>

            {/* Smartphone Container */}
            <div className="relative w-[310px] h-[610px] rounded-[42px] border-[10px] border-slate-800 bg-black shadow-2xl shadow-black/90 p-3 overflow-hidden flex flex-col justify-between">
              {/* Phone Speaker & Camera cut */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-30 flex items-center justify-center">
                <span className="w-12 h-1 bg-black rounded-full mb-2" />
              </div>

              {/* Status Bar */}
              <div className="flex justify-between items-center text-[10px] text-slate-400 px-4 pt-1 z-20">
                <span className="font-semibold font-mono">14:30</span>
                <div className="flex items-center gap-1.5 font-mono">
                  {activeScreen === "offline" ? (
                    <span className="flex items-center text-[#ff9800] gap-0.5 text-[8px] font-bold">
                      <WifiOff className="size-2.5" /> OFFLINE
                    </span>
                  ) : (
                    <span className="text-emerald-400 text-[8px] font-bold">5G LTE</span>
                  )}
                  <span className="size-2 bg-slate-400 rounded-sm" />
                </div>
              </div>

              {/* Screen Content */}
              <div className="flex-1 bg-[#0b0e17] rounded-[28px] overflow-hidden p-3 mt-1 flex flex-col relative">
                
                {/* Order screen content */}
                {activeScreen === "order" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col gap-3">
                    {/* User profile check */}
                    <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                      <div className="size-8 rounded-full bg-gradient-to-tr from-[#0ea5ff] to-[#1d4ed8] flex items-center justify-center text-white text-xs font-bold"><User className="size-4" /></div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-medium">Solace FMCG Retail</span>
                        <span className="text-[9px] text-slate-500">Credit Limit: $10,000</span>
                      </div>
                    </div>

                    {/* Alert */}
                    <div className="bg-[#ff9800]/10 border border-[#ff9800]/20 p-2 rounded flex flex-col gap-0.5">
                      <span className="text-[9px] text-[#ff9800] font-mono uppercase tracking-wider font-semibold">Active Credit limit check</span>
                      <span className="text-[9px] text-slate-300">Balance: $2,400 | Available: $7,600</span>
                    </div>

                    {/* Search catalog */}
                    <div className="bg-slate-900 border border-white/5 rounded px-2.5 py-1.5 flex items-center gap-2">
                      <Search className="size-3.5 text-slate-500" />
                      <span className="text-[10px] text-slate-500 font-mono">Search catalog...</span>
                    </div>

                    {/* Products with AI recommendations */}
                    <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">Recommended Products</span>
                      
                      {/* Product 1 */}
                      <div className="bg-slate-900/80 border border-white/5 p-2 rounded flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs text-white font-medium">Classic Soda (Case)</span>
                          <span className="text-[9px] text-slate-400 font-mono">Stock: 48 cases</span>
                          <span className="text-[9px] text-cyan-400 font-medium inline-flex items-center gap-0.5 mt-0.5">
                            <Brain className="size-2.5" /> Restock suggested: +12 cases
                          </span>
                        </div>
                        <span className="text-xs font-mono font-semibold text-[#0ea5ff]">$24.00</span>
                      </div>

                      {/* Product 2 */}
                      <div className="bg-slate-900/80 border border-white/5 p-2 rounded flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs text-white font-medium">Juice Pack (Case)</span>
                          <span className="text-[9px] text-slate-400 font-mono">Stock: 12 cases (Low)</span>
                        </div>
                        <span className="text-xs font-mono font-semibold text-slate-400">$32.00</span>
                      </div>

                      {/* Product 3 */}
                      <div className="bg-slate-900/80 border border-white/5 p-2 rounded flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs text-white font-medium">Sugar Zero Drink (Case)</span>
                          <span className="text-[9px] text-slate-400 font-mono">Stock: 250 cases</span>
                          <span className="text-[9px] text-[#ff9800] font-medium inline-flex items-center gap-0.5 mt-0.5">
                            <Brain className="size-2.5" /> High conversion up-sell
                          </span>
                        </div>
                        <span className="text-xs font-mono font-semibold text-[#0ea5ff]">$28.00</span>
                      </div>
                    </div>

                    {/* Bottom Checkout Action */}
                    <div className="border-t border-white/5 pt-2 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-slate-500">Order Total</span>
                        <span className="text-sm font-semibold font-mono text-white">$288.00</span>
                      </div>
                      <button className="bg-gradient-to-r from-[#0ea5ff] to-[#1d4ed8] text-white text-[10px] font-mono font-semibold uppercase tracking-wider py-1.5 px-3 rounded flex items-center gap-1">
                        Checkout <ShoppingCart className="size-3" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Route check screen */}
                {activeScreen === "route" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col gap-3">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-xs text-white font-medium">Today&apos;s Route Plan</span>
                      <span className="text-[9px] font-mono text-slate-400">Sequence Map</span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-900 p-2 rounded border border-white/5 flex flex-col">
                        <span className="text-[9px] text-slate-500">Total Visits</span>
                        <span className="text-sm font-semibold text-white">12 Locations</span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded border border-white/5 flex flex-col">
                        <span className="text-[9px] text-slate-500">Visited Done</span>
                        <span className="text-sm font-semibold text-emerald-400">8 Verified</span>
                      </div>
                    </div>

                    {/* Route Line sequence */}
                    <div className="flex-1 flex flex-col gap-2.5 overflow-y-auto">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">Visit Queue</span>
                      
                      {/* Node 1 */}
                      <div className="flex items-start gap-2.5 relative pl-4 border-l border-emerald-500">
                        <span className="absolute -left-1.5 top-1 size-3 bg-emerald-500 rounded-full border border-black flex items-center justify-center"><Check className="size-2 text-white" /></span>
                        <div className="flex-1 bg-slate-900/60 p-2 rounded border border-white/5">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] text-slate-300 font-medium">1. Solace FMCG</span>
                            <span className="text-[8px] font-mono text-emerald-400">Checked Out</span>
                          </div>
                          <span className="text-[8px] text-slate-500 flex items-center gap-0.5"><Clock className="size-2" /> Duration: 24 mins</span>
                        </div>
                      </div>

                      {/* Node 2 */}
                      <div className="flex items-start gap-2.5 relative pl-4 border-l border-emerald-500">
                        <span className="absolute -left-1.5 top-1 size-3 bg-emerald-500 rounded-full border border-black flex items-center justify-center"><Check className="size-2 text-white" /></span>
                        <div className="flex-1 bg-slate-900/60 p-2 rounded border border-white/5">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] text-slate-300 font-medium">2. MedPlus Pharmacy</span>
                            <span className="text-[8px] font-mono text-emerald-400">Checked Out</span>
                          </div>
                          <span className="text-[8px] text-slate-500 flex items-center gap-0.5"><Clock className="size-2" /> Duration: 15 mins</span>
                        </div>
                      </div>

                      {/* Node 3 */}
                      <div className="flex items-start gap-2.5 relative pl-4 border-l border-slate-800">
                        <span className="absolute -left-1.5 top-1 size-3 bg-[#ff9800] rounded-full border border-black flex items-center justify-center" />
                        <div className="flex-1 bg-slate-900 p-2 rounded border border-white/5">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] text-white font-medium">3. Eastside Wholesalers</span>
                            <span className="text-[8px] font-mono text-[#ff9800]">In Progress</span>
                          </div>
                          <span className="text-[8px] text-slate-400 flex items-center gap-0.5">GPS Verification Pending</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Offline Mode Screen */}
                {activeScreen === "offline" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col justify-between">
                    <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                      <div className="size-16 rounded-full bg-[#ff9800]/10 border border-[#ff9800]/20 flex items-center justify-center text-[#ff9800] animate-pulse">
                        <WifiOff className="size-8" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-sm font-semibold text-white">Offline Mode Active</span>
                        <span className="text-xs text-slate-400">Access full catalog, customer details, and book orders. Transactions will be saved locally.</span>
                      </div>
                    </div>

                    {/* Local DB details */}
                    <div className="bg-slate-900 border border-white/5 p-3 rounded-lg flex flex-col gap-2">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-slate-400">Pending Sync Orders</span>
                        <span className="text-[#ff9800] font-mono font-semibold">3 Orders Saved</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-slate-400">Offline DB Version</span>
                        <span className="text-slate-400 font-mono">v14.2 (Cached 2h ago)</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-emerald-400 font-medium">
                        <span className="flex items-center gap-1"><CheckCircle className="size-3" /> Database Encrypted</span>
                        <span>AES-256</span>
                      </div>
                    </div>
                  </motion.div>
                )}
                
              </div>

              {/* Home Indicator bar */}
              <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-2 mb-1" />
            </div>
          </div>

          {/* Right: 6 Feature Cards (7 Cols) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {mobileFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="bg-slate-900/40 hover:bg-slate-900/70 border border-white/5 hover:border-[#0ea5ff]/30 p-6 rounded-lg transition-all duration-300 group flex flex-col gap-4 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0ea5ff]/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#0ea5ff]/10 transition-colors" />
                  
                  {/* Icon */}
                  <div className="size-10 rounded bg-slate-800 border border-white/5 text-[#0ea5ff] flex items-center justify-center transition-all group-hover:bg-[#0ea5ff]/10 group-hover:border-[#0ea5ff]/20">
                    <Icon className="size-5" />
                  </div>

                  {/* Copy */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#0ea5ff] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feat.description}
                    </p>
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
