"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^([0-9.]+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

export function CounterMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  const { num, suffix } = parseValue(value);
  const isDecimal = !Number.isInteger(num);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setCount(eased * num);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, num]);

  const display = isDecimal ? count.toFixed(1) : Math.round(count).toString();

  return (
    <div
      ref={ref}
      className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[24px] border border-ink/5 bg-white p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
    >
      <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-blue-500 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-3 font-display text-4xl font-bold text-blue-600 md:text-5xl tabular-nums">
        {display}{suffix}
      </div>
      <div className="text-sm font-medium uppercase tracking-wider text-ink/80">
        {label}
      </div>
    </div>
  );
}
