"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
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
  return (
    <section aria-labelledby="solutions-heading" className="border-b border-ink/10 bg-paper py-4">
      <Container>
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Solutions"
            title={<span id="solutions-heading">Solutions Built For Modern Distribution</span>}
            description="RepProX combines multiple operational modules into a single platform designed to improve sales execution and operational visibility."
          />
        </div>

        {/* Scroll-Based Sticky Stacking Cards Layout */}
        <div className="relative flex flex-col gap-8 lg:gap-16 2xl:gap-24 mt-12 lg:mt-16 pb-16 2xl:pb-32">
          {solutions.map((sol, index) => {
            const Icon = solutionIconMap[sol.slug] || ShoppingBag;

            // Offset the sticky top so they stack visibly like a deck of cards
            const topOffset = `calc(6rem + ${index * 1.5}rem)`;

            return (
              <motion.div
                key={sol.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="sticky w-full rounded-[2rem] xl:rounded-[2.5rem] border border-slate-200/80 bg-white shadow-xl p-4 lg:p-6 xl:p-8 2xl:p-10 4xl:p-14 flex items-center overflow-hidden 2xl:min-h-[calc(100vh-16rem)]"
                style={{
                  top: topOffset,
                  zIndex: index + 1,
                }}
              >
                <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 xl:gap-10 2xl:gap-20 items-center w-full">
                  {/* Content - Left */}
                  <div className="flex flex-col gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 4xl:gap-12 order-2 lg:order-1">
                    <div className="flex flex-col gap-4 lg:gap-8">
                      <div className="flex items-center gap-3 lg:gap-6">
                        <div className="flex items-center gap-3">
                          <div className="size-10 xl:size-12 rounded-xl xl:rounded-2xl bg-blue-50 text-[#1d4ed8] flex items-center justify-center shadow-sm">
                            <Icon className="size-5 xl:size-6" />
                          </div>
                        </div>
                        <h3 className="text-xl lg:text-2xl 2xl:text-3xl 4xl:text-[40px] font-bold text-slate-900 leading-tight">
                          {sol.title}
                        </h3>
                      </div>
                      <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                        {sol.summary}
                      </p>
                    </div>

                    <ul className="flex flex-col gap-1.5 lg:gap-2">
                      {sol.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm lg:text-base">
                          <div className="mt-0.5 size-4 lg:size-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                            <Check className="size-2.5 lg:size-3 text-emerald-600" />
                          </div>
                          <span className="leading-snug">{outcome}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-1 lg:mt-3">
                      <Link
                        href={`/solutions/${sol.slug}`}
                        className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white bg-slate-900 hover:bg-[#1d4ed8] px-4 py-2.5 lg:px-5 lg:py-3 2xl:px-6 2xl:py-4 rounded-xl transition-colors font-bold shadow-lg shadow-slate-900/20"
                      >
                        Explore Solution
                        <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Image - Right */}
                  <div className="order-1 lg:order-2 w-full h-full flex items-center">
                    <div className="relative w-full aspect-video 2xl:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 bg-[#f8fafc] group">
                      <Image
                        src={`/solutions/${sol.slug}.png`}
                        alt={sol.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/5 rounded-3xl pointer-events-none" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
