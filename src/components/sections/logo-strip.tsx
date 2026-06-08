"use client";

import React, { useEffect, useRef } from "react";
import Container from "@/components/layout/container";

const companies = [
  "Solace FMCG",
  "Northbound Wholesalers",
  "Alder Pharma",
  "Vantage Supply",
  "Kestrel Logistics",
  "Marrow Retail Group",
  "Tessellate Distribution",
  "Foundry Goods",
];

const successMetrics = [
  {
    value: "50%",
    label: "Faster Order Processing",
    description: "Orders instantly queued for warehouse dispatch",
  },
  {
    value: "30%",
    label: "Higher Collection Efficiency",
    description: "Real-time mobile payment logging & reconciliation",
  },
  {
    value: "40%",
    label: "Improved Route Compliance",
    description: "GPS-verified visit tracking and sequencing",
  },
  {
    value: "100%",
    label: "Real-Time Visibility",
    description: "No night syncs or spreadsheet exports between field & ERP",
  },
];

export function LogoStrip() {
  const marqueeItems = [...companies, ...companies];
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = marqueeRef.current;
    if (!element) return;

    // Run GPU-accelerated smooth infinite scroll via Web Animations API
    const animation = element.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-50%)" }
      ],
      {
        duration: 25000, // Speedy default (25 seconds per full cycle)
        iterations: Infinity,
        easing: "linear",
      }
    );

    const handleMouseEnter = () => {
      // Smoothly scale down speed to a slow glide (25% of speedy rate)
      animation.updatePlaybackRate(0.2);
    };

    const handleMouseLeave = () => {
      // Smoothly restore speedy rate (100% speed)
      animation.updatePlaybackRate(1);
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      animation.cancel();
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section aria-label="Success metrics & partners" className="border-b border-ink/10 bg-paper-soft py-16 lg:py-20">
      <Container className="flex flex-col gap-16">
        
        {/* Client Logos Marquee */}
        <div className="flex flex-col gap-6">
          <p className="text-sm lg:text-base font-bold text-ink-soft/80 text-center tracking-wide">
            Trusted by Modern Distribution Teams
          </p>
          <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div 
              ref={marqueeRef}
              className="flex w-max gap-16 motion-reduce:animate-none"
            >
              {marqueeItems.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="font-display text-lg font-bold tracking-tight text-slate-300 whitespace-nowrap hover:text-slate-500 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {successMetrics.map((metric) => (
            <div 
              key={metric.label}
              className="bg-white border border-slate-200/80 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col gap-2.5 text-center sm:text-left"
            >
              <span className="font-display text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#1d4ed8] to-[#0ea5ff] bg-clip-text text-transparent">
                {metric.value}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-sm font-bold text-ink leading-snug">
                  {metric.label}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
