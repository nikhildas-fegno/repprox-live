import type { Testimonial } from "@/types/content";
import Image from "next/image";

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div
      className="group relative flex w-[340px] shrink-0 flex-col justify-between gap-8 rounded-3xl border border-slate-200/60 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 md:w-[420px]"
    >
      <blockquote className="text-[15px] leading-relaxed text-slate-700 md:text-[16px]">
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      <div className="flex flex-col gap-5">
        <div className="h-px w-full bg-linear-to-r from-slate-100 to-transparent" />

        <div className="flex items-start gap-4">
          <div className="relative size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-slate-50">
            <Image src={item.avatar} alt={item.name} fill className="object-cover" />
          </div>
          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="text-[15px] font-bold text-slate-900 truncate">{item.name}</span>
            <span className="text-[13px] font-medium text-slate-500 truncate">
              {item.role} at {item.company}
            </span>
            {item.tagline && (
              <span className="mt-1 text-[13px] leading-relaxed text-slate-400">
                {item.tagline}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials({ items }: { items: Testimonial[] }) {
  const baseItems = items.length < 4 ? [...items, ...items, ...items] : items;
  const duplicatedItems = [...baseItems, ...baseItems];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-paper to-transparent md:w-48" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-paper to-transparent md:w-48" />

      {/* CSS-driven marquee */}
      <div
        className="flex w-max gap-5 lg:gap-6"
        style={{
          animation: "marquee-scroll 55s linear infinite",
          willChange: "transform",
        }}
      >
        {duplicatedItems.map((item, i) => (
          <TestimonialCard key={`${item.name}-${i}`} item={item} />
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
