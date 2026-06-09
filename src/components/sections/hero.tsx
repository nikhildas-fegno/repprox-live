"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/layout/container";
import { HeroDashboard } from "@/components/sections/hero-dashboard";
import DotFieldRaw from "@/components/DotField";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DotField = DotFieldRaw as React.ComponentType<any>;

export function Hero() {
  const benefits = [
    "Increase Sales Productivity",
    "Improve Collection Efficiency",
    "Optimize Field Operations",
    "Gain Real-Time Visibility",
  ];

  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-paper pt-16 pb-24 lg:pt-20 lg:pb-32">
      {/* Dot field interactive background */}
      <div className="absolute inset-0">
        <DotField
          dotRadius={2}
          dotSpacing={24}
          bulgeStrength={15}
          glowRadius={0}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="rgba(29, 78, 216, 0.40)"
          gradientTo="rgba(14, 165, 255, 0.38)"
          glowColor="#0ea5ff"
        />
      </div>

      <Container className="relative flex flex-col items-center text-center z-10 gap-2 4xl:gap-4">
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

        <HeroDashboard />
      </Container>
    </section>
  );
}
