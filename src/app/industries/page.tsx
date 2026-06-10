import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart,
  Pill,
  Hammer,
  ShoppingBag,
  Truck,
  Boxes,
  Map,
  TrendingUp,
  PackageSearch,
  Crosshair,
  Users,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Activity,
  Timer,
  Zap,
  Briefcase,
  Factory,
  Package,
  Warehouse,
  Cross,
  Leaf,
  Fuel,
  Network,
  BarChart,
  Utensils,
  Construction,
  Tv
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import Container from "@/components/layout/container";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { CounterMetric } from "@/components/ui/counter-metric";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description: "Empowering businesses across multiple industries with smarter field operations, sales automation, route optimization, and distribution management solutions.",
  path: "/industries",
});

const industriesList = [
  {
    icon: ShoppingCart,
    title: "FMCG Distribution",
    description: "Improve customer coverage, optimize routes, automate collections, increase sales productivity, and streamline distributor operations.",
    color: "orange",
    capabilities: ["Route Optimization", "Sales Automation", "Collection Tracking", "Retail Visibility"],
    metrics: [{ label: "Faster Coverage", value: "35%" }, { label: "Sales Growth", value: "25%" }]
  },
  {
    icon: ShoppingBag,
    title: "Food & Beverage",
    description: "Manage fast-moving inventory, ensure product availability, monitor expiry dates, reduce wastage, and improve route efficiency.",
    color: "green",
    capabilities: ["Inventory Control", "Demand Planning", "Route Efficiency", "Product Availability"],
    metrics: [{ label: "Lower Wastage", value: "30%" }, { label: "Faster Fulfillment", value: "40%" }]
  },
  {
    icon: Pill,
    title: "Pharmaceuticals",
    description: "Ensure regulatory compliance, maintain product traceability, manage batch-controlled inventory, and improve distributor performance.",
    color: "violet",
    capabilities: ["Compliance Management", "Batch Tracking", "Product Traceability", "Audit Readiness"],
    metrics: [{ label: "Traceability", value: "99.9%" }, { label: "Faster Audits", value: "50%" }]
  },
  {
    icon: Hammer,
    title: "Manufacturing",
    description: "Streamline supply chains, improve production visibility, optimize dealer networks, and reduce operational bottlenecks.",
    color: "blue",
    capabilities: ["Supply Chain Management", "Production Tracking", "Dealer Management", "Demand Forecasting"],
    metrics: [{ label: "Lead Time Reduction", value: "20%" }, { label: "Efficiency Improvement", value: "35%" }]
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description: "Track field personnel, optimize routes, monitor activities, and improve delivery performance across complex networks.",
    color: "orange",
    capabilities: ["Fleet Tracking", "Route Optimization", "Delivery Proof", "Performance Monitoring"],
    metrics: [{ label: "On-Time Delivery", value: "95%" }, { label: "Fuel Savings", value: "15%" }]
  },
  {
    icon: Boxes,
    title: "Wholesale Distribution",
    description: "Manage large customer bases, extensive product catalogs, complex pricing structures, and promotions efficiently.",
    color: "green",
    capabilities: ["Catalog Management", "Promotion Tracking", "Bulk Pricing", "Inventory Visibility"],
    metrics: [{ label: "Order Accuracy", value: "98%" }, { label: "Faster Processing", value: "40%" }]
  },
  {
    icon: Zap,
    title: "Consumer Goods",
    description: "Improve merchandising compliance, product visibility, customer engagement, and field sales performance.",
    color: "violet",
    capabilities: ["Merchandising", "Shelf Visibility", "Promotions", "Sales Performance"],
    metrics: [{ label: "Compliance", value: "90%" }, { label: "Sales Increase", value: "20%" }]
  },
  {
    icon: Briefcase,
    title: "Field Services",
    description: "Manage service requests, dispatch technicians, track job status, and capture digital signatures from customers.",
    color: "blue",
    capabilities: ["Job Dispatching", "Technician Tracking", "Digital Signatures", "Service History"],
    metrics: [{ label: "First-Time Fix", value: "85%" }, { label: "Tech Utilization", value: "30%" }]
  }
];

const features = [
  { icon: Map, title: "Route Optimization", description: "Smart routing for maximum territory coverage and efficiency." },
  { icon: TrendingUp, title: "Sales Force Automation", description: "Empower your field teams with mobile-first sales tools." },
  { icon: PackageSearch, title: "Inventory Visibility", description: "Real-time stock levels, batch tracking, and return management." },
  { icon: Crosshair, title: "Real-Time Tracking", description: "Live location monitoring and activity logging for field staff." },
  { icon: Users, title: "Customer Relationship Management", description: "Comprehensive customer profiles, history, and engagement metrics." },
  { icon: LineChart, title: "Data Analytics & Reporting", description: "Actionable insights through interactive dashboards and reports." }
];

const benefits = [
  "Increased Sales Productivity",
  "Better Territory Coverage",
  "Reduced Operational Costs",
  "Improved Customer Satisfaction",
  "Faster Decision Making",
  "Enhanced Field Visibility"
];

const metrics = [
  { value: "85%", label: "Increase in Sales Productivity" },
  { value: "70%", label: "Faster Collections" },
  { value: "80%", label: "Better Route Efficiency" },
  { value: "45%", label: "Reduction in Operational Costs" }
];

const innerOrbitNodes = [
  { name: "FMCG Distribution", icon: ShoppingCart, color: "orange", angle: 30 },
  { name: "Pharmaceuticals", icon: Pill, color: "violet", angle: 150 },
  { name: "Agriculture", icon: Leaf, color: "green", angle: 270 },
];

const outerOrbitNodes = [
  { name: "Food & Beverage", icon: Utensils, color: "green", angle: 18 },
  { name: "Manufacturing", icon: Factory, color: "blue", angle: 90 },
  { name: "Building Materials", icon: Construction, color: "blue", angle: 162 },
  { name: "Fuel & Energy", icon: Fuel, color: "orange", angle: 234 },
  { name: "Consumer Durables", icon: Tv, color: "violet", angle: 306 },
];

const backgroundParticles = [
  { left: "10%", top: "20%", size: 4, dx: 15, dy: -20, duration: 8, delay: 0 },
  { left: "85%", top: "15%", size: 5, dx: -10, dy: 25, duration: 10, delay: 1 },
  { left: "20%", top: "75%", size: 6, dx: 20, dy: -15, duration: 9, delay: 2.5 },
  { left: "80%", top: "70%", size: 4, dx: -15, dy: -15, duration: 7, delay: 1.5 },
  { left: "45%", top: "8%", size: 5, dx: 10, dy: 15, duration: 11, delay: 3 },
  { left: "15%", top: "45%", size: 4, dx: -15, dy: 10, duration: 8, delay: 0.5 },
  { left: "75%", top: "40%", size: 5, dx: 12, dy: -12, duration: 9, delay: 1.8 },
  { left: "50%", top: "85%", size: 6, dx: -8, dy: -20, duration: 10, delay: 2.2 }
];

const getCoordinates = (radius: number, angleDegrees: number) => {
  const angleRad = (angleDegrees * Math.PI) / 180;
  const x = Math.round(Math.cos(angleRad) * radius);
  const y = Math.round(Math.sin(angleRad) * radius);
  return { x, y };
};

const getCurvedPath = (x: number, y: number) => {
  const startX = 310;
  const startY = 310;
  const endX = 310 + x;
  const endY = 310 + y;
  
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;
  
  const len = Math.sqrt(x * x + y * y);
  const nx = -y / len;
  const ny = x / len;
  
  const offset = 35;
  const ctrlX = midX + nx * offset;
  const ctrlY = midY + ny * offset;
  
  return `M ${startX} ${startY} Q ${ctrlX} ${ctrlY} ${endX} ${endY}`;
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFF] via-[#EEF5FF] to-white lg:py-6 4xl:py-24">
        {/* Advanced Ambient Lighting Ecosystem */}
        <style>{`
          @keyframes glow-breathe {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
          }
          @keyframes light-beam {
            0% { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
            50% { opacity: 0.3; }
            100% { transform: translateX(200%) skewX(-15deg); opacity: 0; }
          }
          .animate-glow-breathe {
            animation: glow-breathe 12s ease-in-out infinite;
          }
          .animate-light-beam {
            animation: light-beam 15s linear infinite;
          }
        `}</style>

        {/* Base glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        {/* Massive breathing radial glows */}
        <div className="pointer-events-none absolute -left-[10%] -top-[10%] h-[1000px] w-[1000px] rounded-full bg-[#DCEBFF]/50 blur-[150px] mix-blend-multiply animate-glow-breathe"></div>
        <div className="pointer-events-none absolute right-[10%] top-[20%] h-[800px] w-[800px] rounded-full bg-[#F3EEFF]/60 blur-[130px] mix-blend-multiply animate-glow-breathe" style={{ animationDelay: "4s" }}></div>
        <div className="pointer-events-none absolute left-[30%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-[100px] mix-blend-multiply animate-glow-breathe" style={{ animationDelay: "8s" }}></div>

        {/* Moving Light Beams */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -inset-y-1/2 w-[300px] bg-gradient-to-r from-transparent via-[#DCEBFF]/40 to-transparent blur-[50px] animate-light-beam"></div>
          <div className="absolute -inset-y-1/2 w-[400px] bg-gradient-to-r from-transparent via-[#F3EEFF]/30 to-transparent blur-[60px] animate-light-beam" style={{ animationDelay: "7.5s", animationDuration: "18s" }}></div>
        </div>

        {/* Ambient edge lighting */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-[#EEF5FF] to-transparent opacity-60"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[200px] bg-gradient-to-r from-[#F8FAFF] to-transparent opacity-50"></div>

        {/* Curved connection lines in bg */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 200 Q 400 100 800 500 T 1500 300" fill="transparent" stroke="currentColor" strokeWidth="2" className="text-blue-500" />
        </svg>

        <Container className="relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left Content Column */}
            <div className="flex flex-col items-start text-left">
              <Reveal>
                <div className="mb-6 inline-flex items-center rounded-full border border-blue-200/50 bg-blue-50/80 px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-700 backdrop-blur-sm shadow-sm">
                  Industry Solutions
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl leading-[1.1]">
                  Built for <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Every Industry</span> We Serve
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mb-8 max-w-xl text-lg leading-relaxed text-ink/70">
                  Empowering businesses across multiple verticals with smarter field operations, distribution tracking, sales execution, and seamless customer engagement.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mb-10 flex flex-wrap gap-2">
                  {["FMCG", "Food & Beverage", "Pharmaceuticals", "Manufacturing", "Building Materials", "Agriculture", "Fuel & Energy", "Consumer Durables"].map((chip, i) => (
                    <span key={i} className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-ink/70 shadow-sm ring-1 ring-ink/5 transition-colors hover:text-blue-600 hover:ring-blue-200">
                      {chip}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.4} className="flex flex-col items-center justify-start gap-3 sm:flex-row w-full sm:w-auto">
                <Button asChild size="lg" className="group w-full sm:w-auto rounded-full bg-linear-to-r from-[#1d4ed8] to-[#0ea5ff] hover:bg-[#1d4ed8]/90 text-white font-semibold px-7 shadow-lg shadow-[#1d4ed8]/30 hover:shadow-xl hover:shadow-[#1d4ed8]/40 hover:-translate-y-px transition-all duration-200">
                  <Link href="/contact" className="flex items-center gap-2">
                    Request a Demo
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-slate-200 bg-white text-slate-700 font-semibold px-7 hover:border-[#1d4ed8]/30 hover:text-[#1d4ed8] hover:bg-[#1d4ed8]/5 transition-all duration-200 shadow-sm">
                  <Link href="#industries">Explore Industries</Link>
                </Button>
              </Reveal>
            </div>

            {/* Right Ecosystem Visual Column */}
            <Reveal delay={0.3} className="relative hidden lg:block">
              <style>{`
                @keyframes orbit-cw {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                @keyframes orbit-ccw {
                  0% { transform: rotate(360deg); }
                  100% { transform: rotate(0deg); }
                }
                @keyframes child-cw {
                  0% { transform: translate(-50%, -50%) rotate(0deg); }
                  100% { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes child-ccw {
                  0% { transform: translate(-50%, -50%) rotate(360deg); }
                  100% { transform: translate(-50%, -50%) rotate(0deg); }
                }
                @keyframes pulse-sphere {
                  0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 50px rgba(59, 130, 246, 0.25), inset 0 0 20px rgba(59, 130, 246, 0.1); }
                  50% { transform: translate(-50%, -50%) scale(1.05); box-shadow: 0 0 70px rgba(59, 130, 246, 0.45), inset 0 0 30px rgba(59, 130, 246, 0.2); }
                }
                @keyframes float-particle {
                  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
                  50% { transform: translate(var(--drift-x, 15px), var(--drift-y, -15px)) scale(1.2); opacity: 0.8; }
                }
                @keyframes stroke-dash {
                  to {
                    stroke-dashoffset: -200;
                  }
                }
                .animate-orbit-cw {
                  animation: orbit-cw var(--duration, 60s) linear infinite;
                }
                .animate-orbit-ccw {
                  animation: orbit-ccw var(--duration, 60s) linear infinite;
                }
                .animate-child-cw {
                  animation: child-cw var(--duration, 60s) linear infinite;
                }
                .animate-child-ccw {
                  animation: child-ccw var(--duration, 60s) linear infinite;
                }
                .animate-pulse-sphere {
                  animation: pulse-sphere 5s ease-in-out infinite;
                }
                .animate-float-particle {
                  animation: float-particle var(--duration, 8s) ease-in-out infinite;
                }
                .animate-stroke-dash {
                  animation: stroke-dash 4s linear infinite;
                }
                .orbit-container:hover .animate-orbit-cw,
                .orbit-container:hover .animate-orbit-ccw,
                .orbit-container:hover .animate-child-cw,
                .orbit-container:hover .animate-child-ccw {
                  animation-play-state: paused;
                }
                ${[...innerOrbitNodes, ...outerOrbitNodes].map((node, i) => `
                  .orbit-container:has(.card-node-${i}:hover) .path-node-${i} {
                    stroke: rgba(59, 130, 246, 0.6);
                    stroke-width: 2.5px;
                  }
                  .orbit-container:has(.card-node-${i}:hover) .dash-node-${i} {
                    stroke: rgba(99, 102, 241, 0.95);
                    stroke-width: 3.5px;
                    animation-duration: 2s;
                  }
                `).join('\n')}
              `}</style>

              <div className="orbit-container relative mx-auto aspect-square w-full max-w-[620px] select-none">
                {/* Background decorative coordinate grid */}
                <div className="absolute inset-4 rounded-full border border-blue-100/20 bg-[radial-gradient(#3b82f605_1px,transparent_1px)] bg-[size:16px_16px] -z-10"></div>
                
                {/* Subtle static orbital guide rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                  <div className="absolute w-[160px] h-[160px] rounded-full border border-blue-200/10 border-dashed"></div>
                  <div className="absolute w-[270px] h-[270px] rounded-full border border-blue-200/20"></div>
                  <div className="absolute w-[450px] h-[450px] rounded-full border border-blue-200/20"></div>
                  <div className="absolute w-[560px] h-[560px] rounded-full border border-blue-200/10 border-dashed"></div>
                </div>

                {/* Rotating Conic Light Beams from center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.04)_45deg,transparent_90deg,transparent_180deg,rgba(99,102,241,0.04)_225deg,transparent_270deg)] animate-[spin_80s_linear_infinite] pointer-events-none -z-10" />

                {/* Floating Particles in Background */}
                {backgroundParticles.map((p, idx) => (
                  <div
                    key={idx}
                    className="absolute rounded-full bg-blue-400/40 blur-[0.5px] animate-float-particle pointer-events-none -z-10"
                    style={{
                      left: p.left,
                      top: p.top,
                      width: `${p.size}px`,
                      height: `${p.size}px`,
                      '--drift-x': `${p.dx}px`,
                      '--drift-y': `${p.dy}px`,
                      '--duration': `${p.duration}s`,
                      animationDelay: `${p.delay}s`,
                    } as React.CSSProperties}
                  />
                ))}

                {/* Central Glowing Sphere */}
                <div className="absolute left-1/2 top-1/2 z-30 animate-pulse-sphere">
                  {/* Outer glowing halo */}
                  <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl pointer-events-none"></div>
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/70 bg-white/90 shadow-[0_8px_30px_rgba(59,130,246,0.15)] backdrop-blur-md p-4 text-center">
                    <div className="absolute inset-1.5 rounded-full border border-blue-100 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
                    <div className="relative z-10">
                   <img src="logo.png" alt="" />
                    </div>
                  </div>
                </div>

                {/* INNER ORBIT RING CONTAINER (rotating CCW) */}
                <div className="absolute inset-0 animate-orbit-ccw pointer-events-none z-10" style={{ '--duration': '45s' } as React.CSSProperties}>
                  {/* SVG for curved lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 620 620">
                    <defs>
                      <linearGradient id="glow-grad-inner" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {innerOrbitNodes.map((node, idx) => {
                      const { x, y } = getCoordinates(135, node.angle);
                      const pathD = getCurvedPath(x, y);
                      const absoluteIdx = idx; // idx in inner
                      return (
                        <g key={node.name}>
                          {/* Static faint connection line */}
                          <path
                            d={pathD}
                            className={`path-node-${absoluteIdx} transition-all duration-500`}
                            stroke="rgba(59, 130, 246, 0.15)"
                            strokeWidth="1.5"
                            fill="none"
                          />
                          {/* Animated dash flow */}
                          <path
                            d={pathD}
                            className={`dash-node-${absoluteIdx} animate-stroke-dash`}
                            stroke="url(#glow-grad-inner)"
                            strokeWidth="2"
                            strokeDasharray="6 24"
                            strokeDashoffset="0"
                            fill="none"
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {/* Inner Orbit Cards */}
                  {innerOrbitNodes.map((node, idx) => {
                    const { x, y } = getCoordinates(135, node.angle);
                    const absoluteIdx = idx; // idx in inner
                    const Icon = node.icon;
                    return (
                      <div
                        key={node.name}
                        className="absolute animate-child-cw pointer-events-auto"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          '--duration': '45s',
                        } as React.CSSProperties}
                      >
                        {/* Glassmorphism Card */}
                        <div
                          className={`card-node-${absoluteIdx} group/card flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/50 px-4 py-2.5 shadow-[0_8px_30px_rgba(59,130,246,0.06)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:border-blue-300/80 hover:bg-white/80 hover:shadow-[0_15px_35px_rgba(59,130,246,0.12)] cursor-pointer w-[180px]`}
                        >
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                            node.color === 'orange' ? 'bg-orange-50 text-orange-600 border border-orange-100 group-hover/card:bg-orange-100/70' :
                            node.color === 'violet' ? 'bg-violet-50 text-violet-600 border border-violet-100 group-hover/card:bg-violet-100/70' :
                            'bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover/card:bg-emerald-100/70'
                          }`}>
                            <Icon className="h-5 w-5 transition-transform duration-500 ease-out group-hover/card:scale-115" strokeWidth={2} />
                          </div>
                          <span className="font-display text-xs font-bold text-ink/80 tracking-tight leading-tight">
                            {node.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* OUTER ORBIT RING CONTAINER (rotating CW) */}
                <div className="absolute inset-0 animate-orbit-cw pointer-events-none z-20" style={{ '--duration': '65s' } as React.CSSProperties}>
                  {/* SVG for curved lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 620 620">
                    <defs>
                      <linearGradient id="glow-grad-outer" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {outerOrbitNodes.map((node, idx) => {
                      const { x, y } = getCoordinates(225, node.angle);
                      const pathD = getCurvedPath(x, y);
                      const absoluteIdx = idx + innerOrbitNodes.length; // idx in merged list
                      return (
                        <g key={node.name}>
                          {/* Static faint connection line */}
                          <path
                            d={pathD}
                            className={`path-node-${absoluteIdx} transition-all duration-500`}
                            stroke="rgba(59, 130, 246, 0.12)"
                            strokeWidth="1.2"
                            fill="none"
                          />
                          {/* Animated dash flow */}
                          <path
                            d={pathD}
                            className={`dash-node-${absoluteIdx} animate-stroke-dash`}
                            stroke="url(#glow-grad-outer)"
                            strokeWidth="1.8"
                            strokeDasharray="8 28"
                            strokeDashoffset="0"
                            fill="none"
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {/* Outer Orbit Cards */}
                  {outerOrbitNodes.map((node, idx) => {
                    const { x, y } = getCoordinates(225, node.angle);
                    const absoluteIdx = idx + innerOrbitNodes.length; // idx in merged list
                    const Icon = node.icon;
                    return (
                      <div
                        key={node.name}
                        className="absolute animate-child-ccw pointer-events-auto"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          '--duration': '65s',
                        } as React.CSSProperties}
                      >
                        {/* Glassmorphism Card */}
                        <div
                          className={`card-node-${absoluteIdx} group/card flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/50 px-4 py-2.5 shadow-[0_8px_30px_rgba(59,130,246,0.06)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:border-blue-300/80 hover:bg-white/80 hover:shadow-[0_15px_35px_rgba(59,130,246,0.12)] cursor-pointer w-[180px]`}
                        >
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                            node.color === 'orange' ? 'bg-orange-50 text-orange-600 border border-orange-100 group-hover/card:bg-orange-100/70' :
                            node.color === 'violet' ? 'bg-violet-50 text-violet-600 border border-violet-100 group-hover/card:bg-violet-100/70' :
                            node.color === 'green' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover/card:bg-emerald-100/70' :
                            'bg-blue-50 text-blue-600 border border-blue-100 group-hover/card:bg-blue-100/70'
                          }`}>
                            <Icon className="h-5 w-5 transition-transform duration-500 ease-out group-hover/card:scale-115" strokeWidth={2} />
                          </div>
                          <span className="font-display text-xs font-bold text-ink/80 tracking-tight leading-tight">
                            {node.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </Reveal>

          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      {/* Industries Grid */}
      <section id="industries-grid" className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFF] via-[#F2F7FF] to-[#EDF4FF] py-20 lg:py-32">
        {/* Soft Animated Background Gradients & Motion */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-[1000px] w-[1000px] rounded-full bg-blue-200/40 opacity-70 blur-[140px] mix-blend-multiply animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="pointer-events-none absolute -right-1/4 bottom-0 h-[800px] w-[800px] rounded-full bg-[#EAF2FF] opacity-80 blur-[120px] mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]" style={{ animationDelay: "2s" }}></div>
        <div className="pointer-events-none absolute left-1/3 top-1/2 h-[600px] w-[600px] rounded-full bg-blue-100/50 opacity-60 blur-[100px] mix-blend-multiply animate-[pulse_7s_ease-in-out_infinite]" style={{ animationDelay: "1s" }}></div>

        {/* Floating Decorative Particles */}
        <div className="absolute top-40 left-20 h-2 w-2 rounded-full bg-blue-500/30 blur-[1px]"></div>
        <div className="absolute top-60 right-32 h-3 w-3 rounded-full bg-blue-400/30 blur-[2px]"></div>
        <div className="absolute bottom-40 left-1/4 h-2.5 w-2.5 rounded-full bg-indigo-400/20 blur-[1px]"></div>

        {/* Large Floating Background Industry Icons */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Top Left - Factory */}
          <div className="absolute left-[2%] top-[5%] opacity-20 animate-[float-drift_12s_ease-in-out_infinite]" style={{ animationDelay: '0s' }}>
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_40px_rgba(59,130,246,0.2)] backdrop-blur-md">
              <Factory className="h-16 w-16 text-blue-600" strokeWidth={1} />
            </div>
          </div>
          {/* Top Right - Package */}
          <div className="absolute right-[5%] top-[10%] opacity-25 animate-[float-drift_14s_ease-in-out_infinite_reverse]" style={{ animationDelay: '1s' }}>
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_40px_rgba(139,92,246,0.2)] backdrop-blur-md">
              <Package className="h-14 w-14 text-indigo-600" strokeWidth={1} />
            </div>
          </div>
          {/* Mid Left - Network */}
          <div className="absolute left-[-2%] top-[40%] opacity-15 animate-[float-drift_16s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>
            <div className="flex h-48 w-48 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-md">
              <Network className="h-24 w-24 text-blue-500" strokeWidth={1} />
            </div>
          </div>
          {/* Mid Right - Warehouse */}
          <div className="absolute right-[2%] top-[45%] opacity-20 animate-[float-drift_15s_ease-in-out_infinite_reverse]" style={{ animationDelay: '3s' }}>
            <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_40px_rgba(99,102,241,0.2)] backdrop-blur-md">
              <Warehouse className="h-18 w-18 text-indigo-500" strokeWidth={1} />
            </div>
          </div>
          {/* Bottom Left - Leaf */}
          <div className="absolute bottom-[10%] left-[8%] opacity-25 animate-[float-drift_13s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}>
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_40px_rgba(16,185,129,0.15)] backdrop-blur-md">
              <Leaf className="h-12 w-12 text-emerald-500" strokeWidth={1} />
            </div>
          </div>
          {/* Bottom Right - BarChart */}
          <div className="absolute bottom-[5%] right-[10%] opacity-20 animate-[float-drift_17s_ease-in-out_infinite_reverse]" style={{ animationDelay: '2.5s' }}>
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_40px_rgba(139,92,246,0.2)] backdrop-blur-md">
              <BarChart className="h-16 w-16 text-purple-500" strokeWidth={1} />
            </div>
          </div>

          {/* Faint connecting lines (SVGs) to create digital ecosystem feel */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 150 Q 300 50 500 350 T 950 500" fill="transparent" stroke="currentColor" strokeWidth="2" className="text-blue-500" />
            <path d="M 850 150 Q 600 250 400 550 T 150 750" fill="transparent" stroke="currentColor" strokeWidth="2" className="text-indigo-500" />
            <path d="M 100 600 Q 400 700 700 400 T 900 200" fill="transparent" stroke="currentColor" strokeWidth="1" className="text-blue-400" strokeDasharray="5,5" />
          </svg>
        </div>

        <Container className="relative z-10">
          <style>{`
            @keyframes float-icon {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-8px) rotate(4deg); }
            }
            @keyframes float-drift {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              25% { transform: translate(15px, -20px) rotate(3deg); }
              50% { transform: translate(0, -40px) rotate(-1deg); }
              75% { transform: translate(-15px, -20px) rotate(-3deg); }
            }
            .animate-float-icon {
              animation: float-icon 4s ease-in-out infinite;
            }
          `}</style>

          {/* Glassmorphism wrapper for the whole grid area */}
          <div id="industries">
            <Reveal>
              <div className="mx-auto mb-16 max-w-4xl text-center lg:mb-24 flex flex-col items-center">
                <div className="mb-4 inline-flex items-center rounded-full border border-blue-200/50 bg-white/80 px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-700 backdrop-blur-md shadow-sm">
                  Our Expertise
                </div>
                <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">Specialized by Industry</h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">Tailored workflows and deep operational capabilities designed specifically for your vertical's unique challenges.</p>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {industriesList.map((industry, index) => (
                <Reveal key={industry.title} delay={index * 0.1}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/60 bg-white p-8 shadow-[0_8px_24px_rgba(59,130,246,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-200/60 hover:shadow-[0_24px_64px_rgba(59,130,246,0.12)]">
                    {/* Soft Background Glow on Hover */}
                    <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-blue-400/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100 group-hover:animate-pulse"></div>

                    <div className="relative z-10 mb-8 flex items-center justify-between">
                      <div className="relative">
                        {/* Soft colored glow behind each icon */}
                        <div className={`absolute inset-0 blur-xl opacity-40 transition-opacity duration-500 group-hover:opacity-60 ${industry.color === 'orange' ? 'bg-orange-400' : industry.color === 'green' ? 'bg-green-400' : industry.color === 'violet' ? 'bg-violet-400' : 'bg-blue-400'}`}></div>

                        <div className={`relative inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] shadow-sm ring-1 ring-ink/5 transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-lg ${industry.color === 'orange' ? 'bg-orange-50 text-orange-600 group-hover:ring-orange-500/30 group-hover:shadow-orange-500/20' : industry.color === 'green' ? 'bg-green-50 text-green-600 group-hover:ring-green-500/30 group-hover:shadow-green-500/20' : industry.color === 'violet' ? 'bg-violet-50 text-violet-600 group-hover:ring-violet-500/30 group-hover:shadow-violet-500/20' : 'bg-blue-50 text-blue-600 group-hover:ring-blue-500/30 group-hover:shadow-blue-500/20'}`}>
                          {/* Continuous floating animation */}
                          <div className="animate-float-icon" style={{ animationDelay: `${index * 0.2}s` }}>
                            <industry.icon className="h-8 w-8 transition-transform duration-500 ease-out group-hover:scale-110" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-1 flex-col">
                      <h3 className="mb-4 font-display text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-blue-800">{industry.title}</h3>
                      <p className="mb-6 text-sm leading-relaxed text-ink/70">{industry.description}</p>

                      <ul className="mb-8 space-y-2.5">
                        {industry.capabilities.slice(0, 3).map((cap, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm font-medium text-ink/80">
                            <CheckCircle2 className="h-4 w-4 text-blue-500/70" />
                            {cap}
                          </li>
                        ))}
                      </ul>

                    </div>

                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="bg-zinc-50 py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="mb-12 text-center">
              <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Why Businesses Choose Us</h2>
              <p className="mt-4 text-ink/70">Comprehensive tools to manage your entire field operation.</p>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.1}>
                <div className="group flex h-full gap-5 overflow-hidden rounded-[24px] border border-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink/5 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-ink/5 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <feature.icon className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:rotate-3" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-display text-lg font-bold text-ink">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-ink/70">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry Benefits */}
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="mb-6 font-display text-3xl font-bold text-ink md:text-4xl">Platform Benefits</h2>
              <p className="mb-8 text-lg text-ink/70">Drive sustainable growth and operational excellence across your entire organization.</p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-ink/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2} className="relative">
              <div className="absolute -inset-4 aspect-square rounded-full bg-blue-50/50 opacity-50 blur-3xl"></div>
              <div className="relative rounded-2xl border border-ink/10 bg-white p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-zinc-50 p-6 text-center">
                    <Activity className="mx-auto mb-3 h-8 w-8 text-blue-500" />
                    <div className="text-sm font-medium text-ink/70">Live Activity</div>
                  </div>
                  <div className="rounded-xl bg-zinc-50 p-6 text-center">
                    <Timer className="mx-auto mb-3 h-8 w-8 text-blue-500" />
                    <div className="text-sm font-medium text-ink/70">Time Saved</div>
                  </div>
                  <div className="col-span-2 rounded-xl bg-blue-600 p-6 text-center text-white shadow-md">
                    <Briefcase className="mx-auto mb-3 h-8 w-8 text-white/90" />
                    <div className="text-lg font-medium">Enterprise Grade</div>
                    <div className="text-sm text-blue-100">Built for scale and security</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Success Metrics */}
      <section className="bg-[#F8F7F4] py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="mb-12 text-center">
              <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Measurable Impact</h2>
              <p className="mt-4 text-ink/70">Real results from businesses using our platform.</p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <CounterMetric value={metric.value} label={metric.label} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#eff6ff] via-[#f8faff] to-[#eef2ff] border-t border-slate-200/60 py-20 lg:py-28 2xl:py-32">
        {/* Radial blue glow centre */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-70 rounded-full bg-[#1d4ed8]/10 blur-[90px]" />
        {/* Top-right accent blob */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#6366f1]/8 blur-[80px]" />
        {/* Bottom-left accent blob */}
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#0ea5ff]/8 blur-[70px]" />
        {/* Dot grid */}
        <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black,transparent)]">
          <svg className="absolute inset-0 h-full w-full" fill="none">
            <defs>
              <pattern id="cta-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="0.9" fill="#93c5fd" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
        </div>
        {/* Decorative large ring */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#1d4ed8]/8" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-[#1d4ed8]/12" />

        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest text-[#1d4ed8]">
                Get Started
              </p>
              <h2 className="mb-5 font-display text-3xl font-bold text-slate-900 md:text-4xl lg:text-[2.75rem] leading-tight">
                Ready to Transform Your<br className="hidden sm:block" /> Industry Operations?
              </h2>
              <p className="mb-10 text-base leading-relaxed text-slate-500 max-w-xl mx-auto">
                Discover how RepProX helps businesses streamline operations, increase productivity, and drive sustainable growth.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="group w-full sm:w-auto rounded-full bg-[#1d4ed8] hover:bg-[#1d4ed8]/90 text-white font-semibold px-8 shadow-lg shadow-[#1d4ed8]/25 hover:shadow-xl hover:shadow-[#1d4ed8]/35 hover:-translate-y-px transition-all duration-200 border-none">
                  <Link href="/contact" className="flex items-center gap-2">
                    Schedule a Demo
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-slate-200 bg-white text-slate-700 font-semibold px-8 hover:border-[#1d4ed8]/30 hover:text-[#1d4ed8] hover:bg-[#1d4ed8]/5 transition-all duration-200 shadow-sm">
                  <Link href="/contact">Talk to an Expert</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
