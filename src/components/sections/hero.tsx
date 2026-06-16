"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Sparkles, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/layout/container";
import { HeroDashboard } from "@/components/sections/hero-dashboard";
import DotFieldRaw from "@/components/DotField";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DotField = DotFieldRaw as React.ComponentType<any>;

export function Hero() {
  const outcomes = [
    "Increase Sales",
    "Improve Collections",
    "Eliminate Stock Surprises",
    "Improve Service Delivery",
    "Gain Complete Operational Visibility",
  ];

  const capabilities = [
    "Van Sales",
    "Sales Force Automation",
    "Field Service Management",
    "Technician Management",
    "Route Planning",
    "GPS Tracking",
    "Inventory Control",
    "Batch Tracking",
    "Smart Replenishment",
    "Cash Collections",
    "SAP Business One",
    "Odoo Integration",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFF] via-[#EEF5FF] to-white border-b border-ink/10 bg-paper pt-24 pb-14 sm:pt-16 sm:pb-24 lg:pt-32 lg:pb-32">
      <Container className="relative flex flex-col items-center text-center z-10 gap-6 lg:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-3 sm:mb-6"
        >
          <Badge as="h1"
            variant="accent"
            className="border-accent-ink/20 bg-accent-soft text-accent-ink font-mono text-[11px] py-1 px-3.5 tracking-wider"
          >
            <Sparkles className="size-3.5 text-accent-ink" />
            AI-Powered Field Force Automation Software
          </Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-[clamp(2.1rem,5vw,5rem)] font-bold leading-[1.08] tracking-tight text-ink"
        >
          Transform Sales Operations Into 
          <span className="bg-linear-to-r from-[#1d4ed8] to-[#0ea5ff] bg-clip-text text-transparent">
             &nbsp;Revenue Growth
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 max-w-4xl text-balance text-sm sm:text-base lg:text-lg leading-relaxed text-ink-soft"
        >
          RepProX is an AI-powered Field Force Automation Software that helps distributors, wholesalers, FMCG companies, pharmaceutical suppliers, and field sales organizations automate sales, collections, inventory management, route planning, customer visits, and field operations from a single platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 sm:mt-6 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2.5 sm:gap-x-5 sm:gap-y-2.5 w-full sm:w-auto"
        >
          {outcomes.map((outcome, i) => (
            <div
              key={outcome}
              className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-ink-soft font-semibold${i === 4 ? " hidden sm:flex" : ""}`}
            >
              <CheckCircle2 className="size-4 shrink-0 text-[#ff9800]" />
              <span>{outcome}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto"
        >
          <Button
            asChild
            variant="accent"
            size="lg"
            className="h-12 w-full sm:w-auto border-0 bg-linear-to-r from-[#1d4ed8] to-[#0ea5ff] font-bold text-white shadow-lg shadow-[#1d4ed8]/25 transition-all duration-300 rounded-lg hover:-translate-y-0.5 hover:from-[#2563eb] hover:to-[#38bdf8] active:translate-y-0"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Request Demo
              <ArrowUpRight className="size-4.5 transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1" />
            </Link>
          </Button>
            <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 w-full sm:w-auto rounded-lg border-ink/20 font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent-soft hover:text-accent-ink hover:shadow-lg hover:shadow-accent/5"
          >
            <Link href="/features" className="flex items-center gap-2">
              Explore Features
              <ArrowUpRight className="size-4.5 -translate-x-1 -rotate-45 opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:rotate-0 group-hover/button:opacity-100" />
            </Link>
          </Button>
        </motion.div>
        <HeroDashboard />
      </Container>
    </section>
  );
}
