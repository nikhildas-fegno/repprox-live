"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CheckCircle2, DollarSign, Activity, MapPin, Sparkles, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/layout/container";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const benefits = [
    "Increase Sales Productivity",
    "Improve Collection Efficiency",
    "Optimize Field Operations",
    "Gain Real-Time Visibility",
  ];

  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-paper pt-16 pb-24 lg:pt-20 lg:pb-32">
      {/* Blueprint Grid masked with radial fading for light theme */}
      <div className="bp-grid absolute inset-0 pointer-events-none opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black_80%,transparent)]" />

      {/* Glowing Ambient Gradient behind text (soft blue) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0ea5ff]/10 opacity-40 blur-[120px] pointer-events-none rounded-full" />

      <Container className="relative flex flex-col items-center text-center z-10 gap-2">
        {/* Headline */}
        {/* Version Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6"
        >
          <Badge
            variant="accent"
            className="border-accent-ink/20 bg-accent-soft text-accent-ink font-mono text-[11px] py-1 px-3.5 tracking-wider"
          >
            <Sparkles className="size-3.5 text-accent-ink" />
            AI-Powered Field Force Automation
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-ink"
        >
          Transform Field Operations Into{" "}
          <span className="bg-gradient-to-r from-[#1d4ed8] to-[#0ea5ff] bg-clip-text text-transparent">
            Revenue Growth
          </span>
        </motion.h1>


        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-balance text-base lg:text-lg leading-relaxed text-ink-soft"
        >
          One platform for modern distribution teams.
        </motion.p>

        {/* Benefits Checks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-2 text-sm text-ink-soft font-semibold"
            >
              <CheckCircle2 className="size-4.5 text-[#ff9800]" />
              <span>{benefit}</span>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button
            asChild
            variant="accent"
            size="lg"
            className="h-12 border-0 bg-gradient-to-r from-[#1d4ed8] to-[#0ea5ff] font-bold text-white shadow-lg shadow-[#1d4ed8]/25 transition-all duration-300 rounded-lg hover:-translate-y-0.5 hover:from-[#2563eb] hover:to-[#38bdf8] active:translate-y-0"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Request a Demo
              <ArrowUpRight className="size-4.5 transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-lg border-ink/20 font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent-soft hover:text-accent-ink hover:shadow-lg hover:shadow-accent/5"
          >
            <Link href="/features" className="flex items-center gap-2">
              Explore Features
              <ArrowUpRight className="size-4.5 -translate-x-1 -rotate-45 opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:rotate-0 group-hover/button:opacity-100" />
            </Link>
          </Button>
        </motion.div>

        {/* Interactive Dashboard Mockup Section (Contrasting Dark Panel) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 w-full rounded-xl border border-slate-800 bg-[#070a13] p-3 shadow-2xl shadow-slate-900/30 group"
        >
          {/* Glass Overlay Glows */}
          <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-[#0ea5ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5ff]/30 to-transparent pointer-events-none" />

          {/* Mockup Frame Header */}
          <div className="flex items-center justify-between border-b border-white/5 bg-slate-900/50 px-4 py-3 rounded-t-lg">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-500/80" />
              <span className="size-3 rounded-full bg-yellow-500/80" />
              <span className="size-3 rounded-full bg-green-500/80" />
              <span className="ml-4 font-mono text-[9px] text-slate-500 tracking-widest uppercase">
                RepProX Management Portal v5.2
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 font-mono text-[9px] text-emerald-400 bg-emerald-500/10 py-0.5 px-2 rounded-full uppercase border border-emerald-500/20">
                <span className="size-1 rounded-full bg-emerald-400 animate-ping" />
                Live Sync
              </span>
            </div>
          </div>

          {/* Mockup Inner Body */}
          <div className="bg-[#0b0e17] p-4 lg:p-6 rounded-b-lg grid gap-4 lg:gap-6 text-left">
            {/* Top Stat Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Daily Sales */}
              <div className="bg-slate-900/60 border border-white/5 p-4 rounded-lg flex flex-col gap-1 relative overflow-hidden">
                <div className="absolute top-3 right-3 text-slate-500">
                  <DollarSign className="size-4 text-[#0ea5ff]" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Daily Sales Volume
                </span>
                <span className="text-xl lg:text-2xl font-semibold text-white tracking-tight">
                  $142,840
                </span>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium mt-1">
                  <TrendingUp className="size-3" /> +12.4%{" "}
                  <span className="text-slate-500">vs yesterday</span>
                </span>
              </div>

              {/* Cash Collections */}
              <div className="bg-slate-900/60 border border-white/5 p-4 rounded-lg flex flex-col gap-1 relative overflow-hidden">
                <div className="absolute top-3 right-3 text-slate-500">
                  <Activity className="size-4 text-[#ff9800]" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Collections Cash/Cheque
                </span>
                <span className="text-xl lg:text-2xl font-semibold text-white tracking-tight">
                  $86,430
                </span>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[11px] text-slate-400">
                    Target Achieved
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-[#ff9800]">
                    94.2%
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
                  <div
                    className="bg-[#ff9800] h-full rounded-full"
                    style={{ width: "94%" }}
                  />
                </div>
              </div>

              {/* Route Compliance */}
              <div className="bg-slate-900/60 border border-white/5 p-4 rounded-lg flex flex-col gap-1 relative overflow-hidden">
                <div className="absolute top-3 right-3 text-slate-500">
                  <MapPin className="size-4 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Route Compliance
                </span>
                <span className="text-xl lg:text-2xl font-semibold text-white tracking-tight">
                  97.8%
                </span>
                <span className="text-[11px] text-slate-400 mt-2 flex items-center gap-1 font-medium">
                  <span className="size-2 rounded-full bg-emerald-500" /> 42/43
                  Vans GPS Verified
                </span>
              </div>

              {/* AI Smart Ordering Counter */}
              <div className="bg-slate-900/60 border border-white/5 p-4 rounded-lg flex flex-col gap-1 relative overflow-hidden">
                <div className="absolute top-3 right-3 text-slate-500">
                  <Sparkles className="size-4 text-cyan-400" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  AI Ordering Orders
                </span>
                <span className="text-xl lg:text-2xl font-semibold text-white tracking-tight">
                  348 Recs
                </span>
                <span className="text-[11px] text-cyan-400 mt-2 flex items-center gap-1 font-medium">
                  <TrendingUp className="size-3" /> +18.7% Up-sell Conversion
                </span>
              </div>
            </div>

            {/* Split Chart and AI Recommendation view */}
            <div className="grid lg:grid-cols-12 gap-6">
              {/* Sales Chart (8 Cols) */}
              <div className="lg:col-span-8 bg-slate-900/40 border border-white/5 p-5 rounded-lg flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-mono text-slate-400 uppercase tracking-wider">
                      Route Operations & Sales Performance
                    </span>
                    <span className="text-sm font-semibold text-slate-300">
                      Weekly Target Progress
                    </span>
                  </div>
                  <div className="flex gap-3 text-[10px] font-mono">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <span className="size-2.5 rounded bg-[#1d4ed8]" /> Actual
                      Sales
                    </span>
                    <span className="flex items-center gap-1.5 text-[#ff9800]">
                      <span className="size-2.5 rounded bg-[#ff9800]" /> Target
                      Route
                    </span>
                  </div>
                </div>

                {/* Animated Chart SVG */}
                <div className="h-56 w-full relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 600 220"
                    preserveAspectRatio="none"
                  >
                    {/* Grid Lines */}
                    <line
                      x1="0"
                      y1="50"
                      x2="600"
                      y2="50"
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="1"
                    />
                    <line
                      x1="0"
                      y1="110"
                      x2="600"
                      y2="110"
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="1"
                    />
                    <line
                      x1="0"
                      y1="170"
                      x2="600"
                      y2="170"
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="1"
                    />

                    {/* Gradient Fill under Path */}
                    <defs>
                      <linearGradient
                        id="chartGlow"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#0ea5ff"
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="100%"
                          stopColor="#0ea5ff"
                          stopOpacity="0.0"
                        />
                      </linearGradient>
                    </defs>

                    {/* Target Route Path */}
                    <path
                      d="M 0 170 Q 100 130 200 120 T 400 90 T 600 60"
                      fill="none"
                      stroke="#ff9800"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />

                    {/* Actual Path with glow */}
                    <path
                      d="M 0 180 Q 80 150 160 110 T 320 95 T 480 60 T 600 45"
                      fill="url(#chartGlow)"
                    />
                    <motion.path
                      d="M 0 180 Q 80 150 160 110 T 320 95 T 480 60 T 600 45"
                      fill="none"
                      stroke="#0ea5ff"
                      strokeWidth="3.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: reduceMotion ? 0 : 1.5,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                    />
                  </svg>

                  {/* Floating tooltip hover effect simulation */}
                  <div className="absolute top-12 left-1/3 bg-slate-950/90 border border-white/10 px-3 py-1.5 rounded shadow-xl pointer-events-none text-xs flex flex-col gap-0.5">
                    <span className="text-[10px] font-mono text-slate-500">
                      Route Region West
                    </span>
                    <span className="font-semibold text-slate-200">
                      $48,210 (Visit Done)
                    </span>
                  </div>
                </div>
              </div>

              {/* AI Recommendation Stream (4 Cols) */}
              <div className="lg:col-span-4 bg-slate-900/40 border border-white/5 p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles
                        className="size-3.5 text-cyan-400 animate-spin"
                        style={{ animationDuration: "4s" }}
                      />
                      AI smart ordering queue
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 py-0.5 px-2 rounded-full">
                      Active
                    </span>
                  </div>

                  {/* Recommendations Stack */}
                  <div className="flex flex-col gap-3">
                    {/* Item 1 */}
                    <div className="bg-slate-950/50 border border-white/5 p-3 rounded flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-white">
                          Solace FMCG Retail
                        </span>
                        <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                          94% match
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Recommend replenishment: +12 cases Soda
                      </span>
                      <span className="text-[10px] text-[#ff9800]">
                        Upsell opportunity: 4 cases Diet Drink
                      </span>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-slate-950/50 border border-white/5 p-3 rounded flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-white">
                          MedPlus Pharmacies
                        </span>
                        <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                          87% match
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Stock level depletion alert: Vitamin C pack
                      </span>
                      <span className="text-[10px] text-emerald-400">
                        Order suggested: 25 cases (FIFO rule)
                      </span>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-slate-950/50 border border-white/5 p-3 rounded flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-white">
                          Eastside Wholesalers
                        </span>
                        <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                          91% match
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Promotional alert: Bulk Material bundle
                      </span>
                      <span className="text-[10px] text-slate-500">
                        Suggested discount: 15% applied
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-center">
                  <Link
                    href="/features#ai-ordering"
                    className="text-[11px] font-mono text-slate-400 hover:text-white uppercase tracking-wider inline-flex items-center gap-1"
                  >
                    Manage AI Engine <ArrowUpRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
