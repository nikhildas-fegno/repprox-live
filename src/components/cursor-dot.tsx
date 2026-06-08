"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, select, textarea, label, summary, [data-cursor-hide]";

/**
 * A small glowing dot that trails the cursor across the entire site — the
 * same "live ping" motif as the hero's GPS/geofence visuals, just promoted to
 * a global touch. Position is lerped toward the pointer in a rAF loop and
 * written via `transform` on a ref (no React re-renders, no layout writes),
 * so it stays smooth. It hides itself — rather than overlapping awkwardly —
 * over links, buttons, and anything else whose computed cursor is `pointer`,
 * so it never competes with the native pointer over interactive content.
 * Skipped for touch devices (no persistent pointer) and prefers-reduced-motion.
 */
export function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = dotRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let hasMoved = false;
    let overInteractive = false;
    let frame = 0;

    const applyVisibility = () => {
      node.style.opacity = hasMoved && !overInteractive ? "1" : "0";
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      hasMoved = true;

      const target = event.target;
      overInteractive =
        target instanceof Element &&
        (target.closest(INTERACTIVE_SELECTOR) !== null || getComputedStyle(target).cursor === "pointer");

      applyVisibility();
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      node.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handlePointerMove);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-70 hidden opacity-0 transition-opacity duration-200 ease-out will-change-transform sm:block"
    >
      <span className="absolute inset-0 -m-1 size-2.5 animate-ping rounded-full bg-accent/25 blur-[1px]" />
      <span className="relative block size-2 rounded-full bg-accent/55 blur-[0.5px] shadow-[0_0_16px_5px_rgba(14,165,255,0.3)]" />
    </div>
  );
}
