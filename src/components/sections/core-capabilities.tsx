"use client";

import React, { useEffect, useRef } from "react";
import { ShoppingBag, Truck, Map, LineChart, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import Container from "@/components/layout/container";

const capabilityBlocks = [
  {
    id: "sales",
    title: "Sales Operations",
    description: "Capture orders, invoices, and collections from the field in real time.",
    icon: ShoppingBag,
    color: "#1d4ed8",
    items: [
      "Quotations",
      "Orders & Invoices",
      "Collections",
      "Customer History",
    ],
  },
  {
    id: "dist",
    title: "Distribution",
    description: "Manage van stock, transfers, and warehouse sync across all operations.",
    icon: Truck,
    color: "#1d4ed8",
    items: [
      "Van Inventory",
      "Stock Transfers",
      "Warehouse Sync",
      "Inventory Count",
    ],
  },
  {
    id: "field",
    title: "Field Execution",
    description: "Verify visits, plan routes, and track field teams with GPS precision.",
    icon: Map,
    color: "#1d4ed8",
    items: [
      "GPS Tracking",
      "Route Planning",
      "Visit Verification",
      "Territory Mgmt",
    ],
  },
  {
    id: "insights",
    title: "Analytics & AI",
    description: "Turn field data into actionable insights with dashboards and AI recommendations.",
    icon: LineChart,
    color: "#1d4ed8",
    items: [
      "Executive Dashboards",
      "KPI Management",
      "Profitability Reports",
      "AI Smart Ordering",
    ],
  },
];

class Spark {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
  life = 0;
  maxLife = 0;
  size = 0;
  wobble = 0;
  wobbleSpeed = 0;
  type: "dot" | "streak" = "dot";
  canvasW = 0;
  canvasH = 0;

  constructor(w: number, h: number) {
    this.canvasW = w;
    this.canvasH = h;
    this.reset(true);
  }

  reset(init: boolean) {
    const cx = this.canvasW / 2;
    const spread = 55;
    this.x = cx + (Math.random() - 0.5) * spread * 2;
    this.y = init
      ? this.canvasH * 0.6 + Math.random() * this.canvasH * 0.4
      : this.canvasH + 5;
    this.vy = -(0.6 + Math.random() * 1.4);
    this.vx = (Math.random() - 0.5) * 0.4;
    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleSpeed = 0.03 + Math.random() * 0.03;
    this.life = 0;
    this.maxLife = 90 + Math.random() * 90;
    this.size = 1.2 + Math.random() * 2.8;
    this.type = Math.random() < 0.35 ? "dot" : "streak";
  }

  update() {
    this.life++;
    this.wobble += this.wobbleSpeed;
    this.x += this.vx + Math.sin(this.wobble) * 0.35;
    this.y += this.vy;
    if (this.life >= this.maxLife || this.y < -10) this.reset(false);
  }

  draw(ctx: CanvasRenderingContext2D) {
    const t = this.life / this.maxLife;
    const alpha = t < 0.12 ? t / 0.12 : t > 0.65 ? (1 - t) / 0.35 : 1;

    if (this.type === "dot") {
      const r = this.size * (1 - t * 0.3);
      const g = ctx.createRadialGradient(
        this.x,
        this.y,
        0,
        this.x,
        this.y,
        r * 2.2,
      );
      const core =
        t < 0.35
          ? `rgba(220,240,255,${alpha * 0.95})`
          : `rgba(120,200,255,${alpha * 0.85})`;
      g.addColorStop(0, core);
      g.addColorStop(0.45, `rgba(40,140,255,${alpha * 0.45})`);
      g.addColorStop(1, `rgba(0,80,200,0)`);
      ctx.beginPath();
      ctx.arc(this.x, this.y, r * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    } else {
      const len = this.size * 4 * (1 - t * 0.4);
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(Math.atan2(this.vy, this.vx) + Math.PI / 2);
      const sg = ctx.createLinearGradient(0, -len, 0, len * 0.4);
      sg.addColorStop(0, `rgba(210,235,255,${alpha})`);
      sg.addColorStop(0.35, `rgba(50,155,255,${alpha * 0.6})`);
      sg.addColorStop(1, `rgba(0,80,200,0)`);
      ctx.beginPath();
      ctx.moveTo(0, -len);
      ctx.quadraticCurveTo(this.size * 0.4, 0, 0, len * 0.4);
      ctx.quadraticCurveTo(-this.size * 0.4, 0, 0, -len);
      ctx.fillStyle = sg;
      ctx.fill();
      ctx.restore();
    }
  }
}

export function CoreCapabilities() {
  const sparkCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = sparkCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const parent = canvas.parentElement!;

    const resize = () => {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      sparks.forEach((s) => {
        s.canvasW = canvas.width;
        s.canvasH = canvas.height;
      });
    };

    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    const sparks = Array.from(
      { length: 42 },
      () => new Spark(canvas.width, canvas.height),
    );

    window.addEventListener("resize", resize);

    let raf: number;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparks.forEach((s) => {
        s.update();
        s.draw(ctx);
      });
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      aria-labelledby="capabilities-heading"
      className="relative border-b border-white/5 bg-[#070a13] py-28 lg:py-36"
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]"
        aria-hidden="true"
      >
        <svg className="absolute inset-0 h-full w-full" fill="none">
          <defs>
            <pattern
              id="caps-dot-texture"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="0.5" className="fill-white/40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#caps-dot-texture)" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeading
            align="center"
            eyebrow="Core capabilities"
            tone="paper"
            title={
              <span id="capabilities-heading">
                One Platform. Complete Visibility.
              </span>
            }
            description="Run all aspects of field logistics, mobile billing, territory sequencing, and business intelligence on a single connected ledger."
          />
        </div>

        {/* 3-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-6 z-10">
            {capabilityBlocks.slice(0, 2).map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.id}
                  className="bg-slate-900/50 border border-white/8 p-7 rounded-2xl relative group hover:border-white/15 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 right-0 w-2 h-14 rounded-tr-2xl rounded-bl-2xl"
                    style={{ backgroundColor: block.color }}
                  />
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="p-2.5 rounded-xl bg-slate-900 border border-white/10"
                      style={{ color: block.color }}
                    >
                      <Icon className="size-5 text-[#ff9800]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {block.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {block.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {block.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-mono font-medium"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          border: `1px solid ${block.color}35`,
                          color: "rgba(203,213,225,0.9)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center h-full min-h-[480px] z-10">
            <div className="relative w-full h-full min-h-[480px] rounded-2xl border border-slate-800 bg-[#070a13] flex flex-col items-center justify-center overflow-hidden shadow-2xl">
              {/* Soft blue glow at bottom */}
              <div
                className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[320px] h-[180px] rounded-full pointer-events-none z-[5]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(30,130,255,0.28) 0%, rgba(14,100,255,0.10) 45%, transparent 75%)",
                  filter: "blur(28px)",
                }}
              />

              {/* Spark canvas */}
              <canvas
                ref={sparkCanvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
              />

              {/* Logo card */}
              <div className="relative z-20 size-32 rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                <img
                  src="/logo.png"
                  alt="RepPro X Logo"
                  className="size-20 object-contain relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col gap-6 z-10">
            {capabilityBlocks.slice(2, 4).map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.id}
                  className="bg-slate-900/50 border border-white/8 p-7 rounded-2xl relative group hover:border-white/15 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 right-0 w-2 h-14 rounded-tr-2xl rounded-bl-2xl"
                    style={{ backgroundColor: block.color }}
                  />
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="p-2.5 rounded-xl bg-slate-900 border border-white/10"
                      style={{ color: block.color }}
                    >
                      <Icon className="size-5 text-[#ff9800]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {block.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {block.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {block.items.map((item) => {
                      const isAI = item === "AI Smart Ordering";
                      return (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-mono font-medium transition-colors duration-200"
                          style={{
                            background: isAI
                              ? "rgba(14,165,255,0.12)"
                              : "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            border: isAI
                              ? "1px solid rgba(14,165,255,0.40)"
                              : `1px solid ${block.color}35`,
                            color: isAI ? "#0ea5ff" : "rgba(203,213,225,0.9)",
                          }}
                        >
                          {isAI && (
                            <Sparkles className="size-3 shrink-0 animate-pulse" />
                          )}
                          {item}
                        </span>
                      );
                    })}
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
