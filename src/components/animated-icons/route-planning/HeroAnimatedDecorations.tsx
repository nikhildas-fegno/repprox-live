"use client";

import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { MapPin, Navigation, Crosshair, Map } from "lucide-react";

export function HeroAnimatedDecorations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

      {/* GPS Pin Pulse (Top Right) */}
      <motion.div
        className="absolute top-20 right-[25%] flex items-center justify-center"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <MapPin className="size-8 text-blue-600 relative z-10 drop-shadow-lg" />
        <motion.div
          className="absolute w-8 h-8 bg-blue-500/30 rounded-full"
          animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>

      {/* Navigation Arrow on Route (Bottom Left) */}
      <div className="absolute bottom-10 left-[20%] w-64 h-32 opacity-60">
        <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
          <motion.path
            d="M 0 80 Q 50 10, 100 50 T 200 20"
            fill="transparent"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        <motion.div
          className="absolute"
          animate={{
            x: [0, 50, 100, 200],
            y: [80, 25, 50, 20],
            rotate: [-20, 20, -10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Navigation className="size-5 text-blue-600 fill-blue-600" />
        </motion.div>
      </div>

      {/* Blinking Territory Nodes (Bottom Right) */}
      <div className="absolute bottom-20 right-[15%] w-40 h-40 opacity-40">
        <Map className="size-16 text-slate-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        {[
          { x: 10, y: 10, delay: 0 },
          { x: 120, y: 30, delay: 0.5 },
          { x: 40, y: 110, delay: 1 },
          { x: 130, y: 120, delay: 1.5 },
        ].map((node, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-3 h-3 bg-blue-500 rounded-full"
            style={{ left: node.x, top: node.y }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
          />
        ))}
      </div>
    </div>
  );
}
