import Link from "next/link";
import { ArrowUpRight, Brain, TrendingUp, Monitor, BarChart3, Database, RefreshCw } from "lucide-react";

import type { FeatureModule } from "@/types/content";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

interface FeatureGridProps {
  modules: FeatureModule[];
  /** Render full descriptive cards (features page) vs. compact Bento layout (home). */
  variant?: "full" | "compact";
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "01": Brain,
  "02": TrendingUp,
  "03": Monitor,
  "04": BarChart3,
  "05": Database,
};

export function FeatureGrid({ modules, variant = "full" }: FeatureGridProps) {
  // If it's the compact layout (rendered on homepage), use the highly attractive Bento Grid design
  if (variant === "compact") {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {modules.map((mod, i) => {
          const Icon = iconMap[mod.index] || Brain;
          
          // Custom bento column layout mapping:
          // Mod 1 (AI) -> 2 cols
          // Mod 2 (KPI) -> 1 col
          // Mod 3 (Web) -> 1 col
          // Mod 4 (Analytics) -> 2 cols
          // Mod 5 (ERP) -> 3 cols
          const spanClass = 
            mod.index === "01" ? "lg:col-span-2" :
            mod.index === "02" ? "lg:col-span-1" :
            mod.index === "03" ? "lg:col-span-1" :
            mod.index === "04" ? "lg:col-span-2" :
            "lg:col-span-3";

          return (
            <Reveal 
              key={mod.title} 
              delay={i * 0.05} 
              className={cn(
                "group relative bg-white border border-slate-200/80 rounded-2xl flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:border-accent-ink/20 transition-all duration-300 hover:-translate-y-1 min-h-[280px]",
                spanClass
              )}
            >
              {/* Top hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1d4ed8] to-[#0ea5ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Inner card padding and content wrapper */}
              <div className="p-6 lg:p-8 flex flex-col md:flex-row gap-6 items-stretch justify-between h-full flex-1">
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent-ink transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-5 text-accent-ink" />
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#ff9800]">
                        Module {mod.index}
                      </span>
                    </div>

                    <h3 className="font-display text-lg lg:text-xl font-bold tracking-tight text-ink group-hover:text-accent-ink transition-colors mb-2.5">
                      {mod.title}
                    </h3>
                    <p className="text-xs lg:text-sm leading-relaxed text-slate-500 max-w-lg">
                      {mod.description}
                    </p>
                  </div>

                  <Link 
                    href={mod.href}
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-accent-ink font-bold hover:text-accent transition-colors mt-6"
                  >
                    Explore module
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Right Side Bento visual illustration placeholders */}
                <div className="shrink-0 flex items-center justify-center bg-slate-50 border border-slate-100 p-4 rounded-xl w-full md:w-60 min-h-[140px] relative overflow-hidden">
                  
                  {/* Visual 1: AI Neural forecast graph */}
                  {mod.index === "01" && (
                    <div className="w-full flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                        <span>FMCG Restock AI</span>
                        <span className="text-cyan-600 font-bold">96% Conf.</span>
                      </div>
                      <div className="h-12 w-full relative">
                        <svg className="size-full stroke-accent/40" fill="none" viewBox="0 0 100 30">
                          <path d="M 0 25 Q 25 5 50 20 T 100 10" strokeWidth="2" />
                          <circle cx="50" cy="20" r="2" className="fill-accent animate-pulse" />
                        </svg>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium text-center">Suggest +12 cases Soda Pack</span>
                    </div>
                  )}

                  {/* Visual 2: Circular Progress Meter */}
                  {mod.index === "02" && (
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative size-16 flex items-center justify-center">
                        <svg className="size-full rotate-[-90deg]" viewBox="0 0 36 36">
                          <path className="stroke-slate-200" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <path className="stroke-[#ff9800] transition-all duration-1000" strokeWidth="3" strokeDasharray="92, 100" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <span className="absolute font-mono text-xs font-bold text-slate-800">92%</span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-400 uppercase">Target Achievement</span>
                    </div>
                  )}

                  {/* Visual 3: Browser Window */}
                  {mod.index === "03" && (
                    <div className="w-full flex flex-col gap-1.5 bg-white border border-slate-200 rounded-lg p-2 shadow-sm">
                      <div className="flex items-center gap-1 border-b border-slate-100 pb-1.5">
                        <span className="size-1.5 rounded-full bg-slate-200" />
                        <span className="size-1.5 rounded-full bg-slate-200" />
                        <span className="w-16 h-1.5 bg-slate-100 rounded-sm" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <div className="w-full h-1 bg-[#1d4ed8]/10 rounded-sm" />
                        <div className="w-2/3 h-1 bg-slate-100 rounded-sm" />
                        <div className="w-1/2 h-1 bg-slate-100 rounded-sm" />
                      </div>
                    </div>
                  )}

                  {/* Visual 4: Analytics Area Chart */}
                  {mod.index === "04" && (
                    <div className="w-full flex flex-col gap-2">
                      <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
                        <span>Daily Collections</span>
                        <span className="text-emerald-500 font-bold">+$42.5K</span>
                      </div>
                      <div className="h-14 w-full relative">
                        <svg className="size-full fill-accent-soft stroke-accent-ink/40" viewBox="0 0 100 30" preserveAspectRatio="none">
                          <path d="M0 30 L0 20 Q 20 10 40 25 T 80 5 L 100 15 L 100 30 Z" />
                          <path d="M0 20 Q 20 10 40 25 T 80 5 L 100 15" fill="none" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Visual 5: Bidirectional ERP Sync Flow */}
                  {mod.index === "05" && (
                    <div className="w-full flex items-center justify-between gap-2 px-2">
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="p-1.5 bg-white border border-slate-200 rounded-lg"><Monitor className="size-4 text-slate-600" /></div>
                        <span className="text-[8px] font-mono text-slate-400 font-medium">RepProX</span>
                      </div>
                      
                      <div className="flex-1 flex items-center justify-center relative">
                        <div className="w-full h-[1px] border-t border-dashed border-slate-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <RefreshCw className="size-3.5 text-accent-ink animate-spin" style={{ animationDuration: "6s" }} />
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-1.5">
                        <div className="p-1.5 bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 rounded-lg"><Database className="size-4 text-accent-ink" /></div>
                        <span className="text-[8px] font-mono text-slate-400 font-medium">ERP System</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    );
  }

  // Full Descriptive Layout (rendered on full features list page)
  return (
    <ul
      className={cn(
        "grid gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 sm:grid-cols-2",
        variant === "full" && "lg:grid-cols-2",
      )}
    >
      {modules.map((mod, i) => {
        const Icon = iconMap[mod.index] || Brain;
        return (
          <Reveal as="li" key={mod.title} delay={(i % 4) * 0.06} y={20}>
            <Link
              href={mod.href}
              id={mod.href.split("#")[1]}
              className="group flex h-full scroll-mt-24 flex-col gap-5 bg-card p-7 transition-colors hover:bg-paper-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-sm border border-ink/15 bg-paper text-ink transition-colors group-hover:border-accent group-hover:text-accent-ink">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                  {mod.index}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5">
                <h3 className="font-display text-xl font-bold tracking-tight">{mod.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{mod.description}</p>
              </div>
              <ul className="flex flex-col gap-2 border-t border-ink/10 pt-4">
                {mod.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-soft transition-colors group-hover:text-accent-ink">
                Explore module
                <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
