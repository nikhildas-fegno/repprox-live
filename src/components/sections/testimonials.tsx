import type { Testimonial } from "@/types/content";
import Image from "next/image";
import { Quote } from "lucide-react";

export function Testimonials({ items }: { items: Testimonial[] }) {
  const baseItems = items.length < 4 ? [...items, ...items, ...items] : items;
  const duplicatedItems = [...baseItems, ...baseItems];

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 md:w-48 bg-linear-to-r from-paper to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 md:w-48 bg-linear-to-l from-paper to-transparent pointer-events-none" />

      {/* CSS-driven marquee — runs entirely on compositor thread */}
      <div
        className="flex w-max gap-6 lg:gap-8"
        style={{
          animation: "marquee-scroll 45s linear infinite",
          willChange: "transform",
        }}
      >
        {duplicatedItems.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="w-[320px] md:w-110 shrink-0 rounded-3xl border border-slate-200/60 bg-white p-7 md:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden"
            style={{ contain: "layout style" }}
          >
            {/* Decorative quote mark */}
            <Quote className="absolute top-5 right-5 size-20 text-slate-100 -rotate-12 pointer-events-none" />

            <blockquote className="relative z-10 text-slate-700 leading-relaxed font-medium mb-8 text-sm md:text-base">
              &quot;{item.quote}&quot;
            </blockquote>

            <div className="flex items-center gap-3 border-t border-slate-100 pt-5 relative z-10">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white bg-slate-50">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-bold text-slate-900 text-sm truncate">{item.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 truncate">
                  {item.role} · {item.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </div>
  );
}
