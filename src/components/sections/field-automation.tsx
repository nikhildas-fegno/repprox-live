"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { 
  CalendarRange, 
  MapPin, 
  Database, 
  Sparkles, 
  CheckSquare, 
  RefreshCw
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import Container from "@/components/layout/container";

const automationSteps = [
  {
    step: "01",
    icon: CalendarRange,
    title: "Visit Scheduled",
    description: "Daily queues populated based on optimized route rules and visit frequencies.",
    subtext: "System Autopilot",
  },
  {
    step: "02",
    icon: MapPin,
    title: "GPS Verification",
    description: "App verifies representative is present at geofenced customer coordinates.",
    subtext: "Location Validated",
  },
  {
    step: "03",
    icon: Database,
    title: "Customer Data",
    description: "Transaction history, credit balances, and buying profiles load instantly.",
    subtext: "Profile Retrieved",
  },
  {
    step: "04",
    icon: Sparkles,
    title: "AI Opportunity",
    description: "AI recommendations suggest optimal orders and cross-selling bundles.",
    subtext: "Predictive Uplift",
  },
  {
    step: "05",
    icon: CheckSquare,
    title: "Order & Collection",
    description: "Take orders, register collections, capture digital invoice signatures.",
    subtext: "Payment Settled",
  },
  {
    step: "06",
    icon: RefreshCw,
    title: "Data Synced",
    description: "Portal and ERP databases update in real time with all visit logs.",
    subtext: "Ledger Reconciled",
  },
];

export function FieldAutomation() {
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % automationSteps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section aria-labelledby="automation-heading" className="relative border-b border-ink/10 bg-paper py-20 lg:py-24">
      {/* Blueprint Grid masked */}
      <div className="bp-grid absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />

      {/* Soft orange decorative backdrop light */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#ff9800]/5 blur-[100px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeading
            align="center"
            eyebrow="Workflow automation"
            title={<span id="automation-heading" className="text-ink">Automate Every Customer Interaction</span>}
            description="Eliminate manual paperwork and repetitive processes with intelligent workflows that guide field teams through every visit, ensuring faster execution, greater accuracy, and higher productivity."
          />
        </div>

        {/* Desktop Pipeline (Horizontal stepper on lg screens) */}
        <div className="hidden lg:grid grid-cols-6 gap-6 relative">
          {/* Connecting Line */}
          <div className="absolute top-14 left-[8%] right-[8%] h-[2px] bg-slate-200 pointer-events-none">
            {/* Glowing Active Progress Bar */}
            <motion.div 
              className="h-full bg-gradient-to-r from-[#1d4ed8] to-[#ff9800]"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (automationSteps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          {automationSteps.map((stepData, index) => {
            const Icon = stepData.icon;
            const isActive = index <= activeStep;
            const isCurrent = index === activeStep;

            return (
              <div 
                key={stepData.step} 
                className="flex flex-col items-center text-center group relative cursor-pointer"
                onClick={() => setActiveStep(index)}
              >
                {/* Step Circle */}
                <div 
                  className={`size-16 rounded-full border flex items-center justify-center relative z-10 transition-all duration-300 ${
                    isCurrent 
                      ? "bg-white border-[#0ea5ff] text-[#1d4ed8] shadow-lg shadow-[#0ea5ff]/15 scale-110" 
                      : isActive 
                        ? "bg-white border-[#1d4ed8] text-[#1d4ed8]"
                        : "bg-white border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600"
                  }`}
                >
                  <Icon className="size-6 transition-transform duration-300 group-hover:scale-110" />
                  
                  {/* Step Badge */}
                  <span className={`absolute -top-1.5 -right-1.5 size-5 text-[9px] font-mono font-bold rounded-full flex items-center justify-center border ${
                    isActive 
                      ? "bg-[#1d4ed8] border-white text-white" 
                      : "bg-slate-100 border-slate-200 text-slate-400"
                  }`}>
                    {stepData.step}
                  </span>

                  {/* Pulsing Outer Ring for Current Step */}
                  {isCurrent && (
                    <span className="absolute inset-0 rounded-full border border-[#0ea5ff] animate-ping opacity-30 pointer-events-none" />
                  )}
                </div>

                {/* Content info card */}
                <div className="mt-8 flex flex-col gap-1.5">
                  <span className={`font-mono text-[9px] uppercase tracking-widest font-semibold ${
                    isCurrent ? "text-[#ff9800]" : "text-slate-400"
                  }`}>
                    {stepData.subtext}
                  </span>
                  <h3 className={`font-display text-sm font-semibold transition-colors ${
                    isCurrent ? "text-ink font-bold" : "text-slate-800"
                  }`}>
                    {stepData.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[170px] mx-auto">
                    {stepData.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View (Vertical stacked timeline) */}
        <div className="lg:hidden flex flex-col gap-6 relative pl-6 border-l border-slate-200">
          {automationSteps.map((stepData, index) => {
            const Icon = stepData.icon;
            const isActive = index <= activeStep;
            const isCurrent = index === activeStep;

            return (
              <div 
                key={stepData.step} 
                className="flex items-start gap-4 relative group cursor-pointer"
                onClick={() => setActiveStep(index)}
              >
                {/* Geofence Node Dot */}
                <span className={`absolute -left-[30px] top-1.5 size-4 rounded-full border-2 flex items-center justify-center transition-all ${
                  isCurrent 
                    ? "bg-[#1d4ed8] border-white scale-125" 
                    : isActive 
                      ? "bg-white border-[#1d4ed8]" 
                      : "bg-white border-slate-200"
                }`}>
                  {isCurrent && <span className="size-1 bg-white rounded-full animate-ping" />}
                </span>

                {/* Card Container */}
                <div className={`flex-1 p-4 rounded-lg border transition-all ${
                  isCurrent 
                    ? "border-[#1d4ed8]/30 bg-white shadow-md shadow-[#1d4ed8]/5" 
                    : "border-slate-200/60 bg-slate-50/50 hover:bg-slate-50"
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded ${
                      isCurrent ? "bg-[#1d4ed8]/10 text-[#1d4ed8]" : "bg-slate-100 text-slate-400"
                    }`}>
                      <Icon className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">{stepData.subtext}</span>
                      <h4 className="text-sm font-semibold text-ink">{stepData.title}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {stepData.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
