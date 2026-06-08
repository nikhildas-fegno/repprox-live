"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset (px) the element travels in from. Set 0 for a pure fade. */
  y?: number;
  as?: "div" | "li";
}

/**
 * Scroll-triggered reveal used for staggered section entrances. Respects
 * prefers-reduced-motion by collapsing to a simple opacity fade with no travel.
 */
export function Reveal({ children, className, delay = 0, y = 28, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.2 : 0.6, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
