"use client";

import React from "react";
import { motion, AnimatePresence, useReducedMotion, type TargetAndTransition, type Transition } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  CalendarRange,
  MapPin,
  Database,
  ShoppingCart,
  WifiOff,
  RefreshCw,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import Container from "@/components/layout/container";

// Per-icon infinite animation configs — each icon gets its own live loop
const iconAnimations: Array<{
  animate: TargetAndTransition;
  transition: Transition;
}> = [
    // CalendarRange — gentle vertical float
    {
      animate: { y: [0, -5, 0] },
      transition: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
    },
    // MapPin — geofence bounce-pulse
    {
      animate: { y: [0, -6, 0], scale: [1, 1.18, 1] },
      transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
    },
    // Database — data-upload nudge
    {
      animate: { y: [0, -4, 0], opacity: [1, 0.75, 1] },
      transition: { duration: 2.0, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
    },
    // Sparkles — twinkle rotate + scale
    {
      animate: { rotate: [0, 18, -18, 0], scale: [1, 1.22, 1] },
      transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
    },
    // CheckSquare — confirmation pop
    {
      animate: { scale: [1, 1.22, 0.92, 1] },
      transition: { duration: 1.7, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
    },
    // RefreshCw — perpetual spin
    {
      animate: { rotate: [0, 360] },
      transition: { duration: 2.4, repeat: Infinity, ease: "linear" },
    },
  ];

const automationSteps = [
  {
    step: "01",
    icon: CalendarRange,
    title: "Visit Scheduled",
    description: "Admin assigns visits, deliveries, collections, and field tasks.",
    subtext: "TASK ASSIGNED",
    color: "#0ea5ff",
  },
  {
    step: "02",
    icon: MapPin,
    title: "GPS Verification",
    description: "Representative's arrival is verified through GPS and geofencing.",
    subtext: "LOCATION VALIDATED",
    color: "#1d4ed8",
  },
  {
    step: "03",
    icon: Database,
    title: "Customer Data",
    description: "Order history, balances, and customer details are instantly available.",
    subtext: "CUSTOMER PROFILE",
    color: "#6366f1",
  },
  {
    step: "04",
    icon: ShoppingCart,
    title: "Sales Execution",
    description: "Create orders, collect payments, and capture signatures.",
    subtext: "ORDER & COLLECTION",
    color: "#a855f7",
  },
  {
    step: "05",
    icon: WifiOff,
    title: "Work Anywhere",
    description: "Continue sales activities even without an internet connection.",
    subtext: "OFFLINE OPERATION",
    color: "#22c55e",
  },
  {
    step: "06",
    icon: RefreshCw,
    title: "Real-Time Updates",
    description: "Data automatically syncs to the portal and ERP when online.",
    subtext: "DATA SYNCED",
    color: "#ff9800",
  },
];

export function FieldAutomation() {
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = React.useState(0);

  // Auto-advance — remove activeStep from deps to avoid interval reset on every tick
  React.useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % automationSteps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section
      aria-labelledby="automation-heading"
      className="relative border-b border-ink/10 bg-paper py-20 lg:py-24 overflow-hidden"
    >
      {/* Blueprint Grid */}
      <div className="bp-grid absolute inset-0 pointer-events-none opacity-[0.18] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] bg-[#0ea5ff]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[360px] h-[360px] bg-[#ff9800]/5 blur-[120px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeading
            align="center"
            eyebrow="Workflow automation"
            title={
              <span id="automation-heading" className="text-ink">
                Automate Every Customer Interaction
              </span>
            }
            description="Eliminate manual paperwork and repetitive processes with intelligent workflows that guide field teams through every visit, ensuring faster execution, greater accuracy, and higher productivity."
          />
        </div>

        {/* ── Desktop Pipeline (Horizontal stepper lg+) ── */}
        <div className="hidden lg:grid grid-cols-6 gap-4 relative">
          {/* Connector track */}
          <div className="absolute top-8 left-[8%] right-[8%] h-[2px] bg-ink/8 pointer-events-none overflow-hidden rounded-full">
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #1d4ed8 0%, #0ea5ff 40%, #a855f7 70%, #ff9800 100%)",
              }}
              initial={{ width: "0%" }}
              animate={{
                width: `${(activeStep / (automationSteps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
            />
          </div>

          {automationSteps.map((stepData, index) => {
            const Icon = stepData.icon;
            const isActive = index <= activeStep;
            const isCurrent = index === activeStep;
            const anim = iconAnimations[index];

            return (
              <div
                key={stepData.step}
                className="flex flex-col items-center text-center group relative cursor-pointer select-none"
                onClick={() => setActiveStep(index)}
              >
                {/* Icon circle container */}
                <div className="relative z-10">
                  {/* Glow halo behind circle */}
                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-full blur-lg opacity-30 scale-150 -z-10 transition-opacity duration-500"
                      style={{ background: stepData.color }}
                    />
                  )}

                  {/* Pulsing rings on current step */}
                  {isCurrent && !reduceMotion && (
                    <>
                      <span
                        className="absolute inset-[-6px] rounded-full border opacity-25 pointer-events-none animate-ping"
                        style={{
                          borderColor: stepData.color,
                          animationDuration: "1.4s",
                        }}
                      />
                      <span
                        className="absolute inset-[-12px] rounded-full border opacity-10 pointer-events-none animate-ping"
                        style={{
                          borderColor: stepData.color,
                          animationDuration: "1.4s",
                          animationDelay: "0.35s",
                        }}
                      />
                    </>
                  )}

                  {/* Main circle */}
                  <motion.div
                    className="size-16 rounded-full border-2 flex items-center justify-center transition-all duration-500"
                    animate={{ scale: isCurrent ? 1.13 : 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                      background: "white",
                      borderColor: isActive ? stepData.color : "rgba(15,23,42,0.10)",
                      color: isActive ? stepData.color : "#94a3b8",
                      boxShadow: isCurrent
                        ? `0 0 0 4px ${stepData.color}1a, 0 8px 32px ${stepData.color}35`
                        : isActive
                          ? `0 4px 16px ${stepData.color}25`
                          : "none",
                    }}
                  >
                    {/* Animated icon */}
                    <motion.div
                      animate={!reduceMotion ? anim.animate : {}}
                      transition={
                        !reduceMotion
                          ? { ...anim.transition, delay: index * 0.18 }
                          : {}
                      }
                    >
                      <Icon className="size-6" />
                    </motion.div>

                    {/* Step number badge */}
                    <span
                      className="absolute -top-1.5 -right-1.5 size-5 text-[8px] font-mono font-bold rounded-full flex items-center justify-center border-2 border-white transition-all duration-300"
                      style={{
                        background: isActive ? stepData.color : "#e2e8f0",
                        color: isActive ? "white" : "#94a3b8",
                      }}
                    >
                      {stepData.step}
                    </span>
                  </motion.div>
                </div>

                {/* Label / description */}
                <motion.div
                  className="mt-7 flex flex-col gap-1.5 px-1"
                  animate={{ opacity: isActive ? 1 : 0.45 }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className="font-mono text-[9px] uppercase tracking-widest font-bold transition-colors duration-300"
                    style={{ color: isCurrent ? stepData.color : "#94a3b8" }}
                  >
                    {stepData.subtext}
                  </span>
                  <h3
                    className={`font-display text-sm font-bold leading-snug transition-colors duration-300 ${isCurrent ? "text-ink" : "text-slate-600"
                      }`}
                  >
                    {stepData.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed max-w-[150px] mx-auto">
                    {stepData.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile View (Vertical timeline) ── */}
        <div className="lg:hidden flex flex-col gap-3 relative pl-9">
          {/* Vertical track */}
          <div className="absolute left-4.5 top-5 bottom-5 w-0.5 bg-ink/8 rounded-full overflow-hidden">
            <motion.div
              className="w-full rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, #1d4ed8 0%, #0ea5ff 40%, #a855f7 70%, #ff9800 100%)",
              }}
              initial={{ height: "0%" }}
              animate={{
                height: `${((activeStep + 0.65) / automationSteps.length) * 100}%`,
              }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
            />
          </div>

          {automationSteps.map((stepData, index) => {
            const Icon = stepData.icon;
            const isActive = index <= activeStep;
            const isCurrent = index === activeStep;
            const anim = iconAnimations[index];

            return (
              <div
                key={stepData.step}
                className="flex items-start gap-3 relative group cursor-pointer"
                onClick={() => setActiveStep(index)}
              >
                {/* Timeline node dot */}
                <span
                  className="absolute -left-[21px] top-[18px] size-2 rounded-full border-2 border-white flex items-center justify-center z-10 transition-all duration-400"
                  style={{
                    background: isActive ? stepData.color : "#e2e8f0",
                    boxShadow: isCurrent
                      ? `0 0 0 3px ${stepData.color}30, 0 0 12px ${stepData.color}50`
                      : "none",
                    transform: isCurrent ? "scale(1.35)" : "scale(1)",
                  }}
                >
                  {isCurrent && (
                    <span
                      className="size-1.5 bg-white rounded-full animate-ping"
                    />
                  )}
                </span>

                {/* Card */}
                <motion.div
                  className="flex-1 p-4 rounded-xl border transition-all duration-300"
                  animate={{
                    scale: isCurrent ? 1.015 : 1,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  style={{
                    background: isCurrent ? `${stepData.color}06` : "white",
                    borderColor: isCurrent
                      ? `${stepData.color}35`
                      : "rgba(15,23,42,0.08)",
                    boxShadow: isCurrent
                      ? `0 4px 20px ${stepData.color}18`
                      : "none",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    {/* Icon bubble */}
                    <div
                      className="p-2.5 rounded-lg shrink-0"
                      style={{
                        background: `${stepData.color}15`,
                        color: stepData.color,
                      }}
                    >
                      <motion.div
                        animate={!reduceMotion ? anim.animate : {}}
                        transition={
                          !reduceMotion
                            ? { ...anim.transition, delay: index * 0.18 }
                            : {}
                        }
                      >
                        <Icon className="size-5" />
                      </motion.div>
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span
                        className="font-mono text-[9px] uppercase tracking-wider font-bold"
                        style={{ color: stepData.color }}
                      >
                        {stepData.subtext}
                      </span>
                      <h4 className="text-sm font-bold text-ink leading-tight">
                        {stepData.title}
                      </h4>
                    </div>

                    <span
                      className="ml-auto shrink-0 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded-md"
                      style={{
                        background: `${stepData.color}15`,
                        color: stepData.color,
                      }}
                    >
                      {stepData.step}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-2.5 leading-relaxed">
                    {stepData.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
