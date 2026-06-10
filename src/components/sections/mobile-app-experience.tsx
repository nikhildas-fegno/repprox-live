"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, Receipt, Brain, Compass, Trophy, WifiOff } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import Container from "@/components/layout/container";
import dashboardImg from "@/public/home/mobile-dash/dashboard.png";
import customersImg from "@/public/home/mobile-dash/customers.png";
import productsImg from "@/public/home/mobile-dash/products.png";

const mobileFeatures = [
  {
    icon: Smartphone,
    title: "Mobile-First Productivity",
    description: "Access customers, inventory, orders, invoices, collections, and activities from anywhere, with seamless English and Arabic language support.",
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
    <section aria-labelledby="mobile-app-heading" className="relative border-b border-white/5 bg-[#070a13] py-24 lg:py-28 overflow-hidden">
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
            <div className="flex w-fit max-w-full bg-slate-900/60 p-1.5 border border-white/5 rounded-full mb-6 font-mono text-[11px] uppercase tracking-wider">
              <button 
                onClick={() => setActiveScreen("order")} 
                className={`cursor-pointer px-4 py-1.5 rounded-full transition-colors ${activeScreen === "order" ? "bg-[#0ea5ff] text-white" : "text-slate-400 hover:text-white"}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setActiveScreen("route")} 
                className={`cursor-pointer px-4 py-1.5 rounded-full transition-colors ${activeScreen === "route" ? "bg-[#0ea5ff] text-white" : "text-slate-400 hover:text-white"}`}
              >
                Customers
              </button>
              <button 
                onClick={() => setActiveScreen("offline")} 
                className={`cursor-pointer px-4 py-1.5 rounded-full transition-colors ${activeScreen === "offline" ? "bg-[#0ea5ff] text-white" : "text-slate-400 hover:text-white"}`}
              >
                Products
              </button>
            </div>

            {/* iPhone frame */}
            <div
              className="relative
                w-[252px] h-[551px] rounded-[40px]
                lg:w-[272px] lg:h-[595px] lg:rounded-[44px]
                xl:w-[292px] xl:h-[638px] xl:rounded-[47px]
                2xl:w-[308px] 2xl:h-[673px] 2xl:rounded-[50px]
                4xl:w-[320px] 4xl:h-[700px] 4xl:rounded-[52px]
                bg-gradient-to-br from-[#2c2c2e] via-[#1c1c1e] to-[#0f0f10]"
              style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.06)" }}
            >
              {/* Screen glass */}
              <div className="absolute inset-[6px] rounded-[34px] lg:rounded-[38px] xl:rounded-[41px] 2xl:rounded-[44px] 4xl:rounded-[46px] overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeScreen === "order" ? dashboardImg : activeScreen === "route" ? customersImg : productsImg}
                      alt="App screen"
                      fill
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
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
