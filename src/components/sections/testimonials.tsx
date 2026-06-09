"use client";

import type { Testimonial } from "@/types/content";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function Testimonials({ items }: { items: Testimonial[] }) {
  // Ensure we have enough items to span the screen smoothly
  const baseItems = items.length < 4 ? [...items, ...items, ...items] : items;
  // Duplicate exactly once to create a seamless 50% loop offset
  const duplicatedItems = [...baseItems, ...baseItems];

  return (
    <div className="relative flex w-full overflow-hidden py-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      {/* Left/Right Gradient fade masks for smooth entry/exit */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-r from-paper to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-l from-paper to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-6 lg:gap-8 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 40, // Adjust speed
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, i) => (
          <div 
            key={`${item.name}-${i}`} 
            className="w-[360px] md:w-[480px] shrink-0 rounded-[2.5rem] border border-slate-200/60 bg-white p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:border-blue-100 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden"
          >
             {/* Decorative Background Quote */}
             <Quote className="absolute top-6 right-6 size-24 text-slate-100 opacity-60 -rotate-12 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0" />

             <div className="relative z-10">
               <blockquote className="text-slate-800 leading-relaxed font-medium mb-10 text-base md:text-lg">
                 "{item.quote}"
               </blockquote>
             </div>
             
             <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6 relative z-10">
               <img 
                 src={item.avatar.src} 
                 alt={item.name}
                 loading="lazy"
                 className="size-12 md:size-14 rounded-full border-2 border-white shadow-md object-cover group-hover:scale-105 transition-transform duration-300 bg-slate-50"
               />
               <div className="flex flex-col gap-0.5">
                 <span className="font-bold text-slate-900 text-sm md:text-base">{item.name}</span>
                 <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-slate-500">
                   {item.role} @ {item.company}
                 </span>
               </div>
             </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
