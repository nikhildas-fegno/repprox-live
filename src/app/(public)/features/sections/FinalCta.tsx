"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0A1229]">
      {/* Animated Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1229] via-blue-900/40 to-cyan-900/20 z-0"></div>
      
      {/* Moving Light Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full animate-[spin_15s_linear_infinite] mix-blend-screen z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full animate-[spin_20s_linear_infinite_reverse] mix-blend-screen z-0"></div>
      
      {/* Floating Dashboard Elements */}
      <motion.div 
        animate={{ y: [-20, 20, -20], rotate: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 hidden lg:flex flex-col gap-2 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 z-0 shadow-2xl"
      >
        <div className="flex gap-2 mb-2">
          <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center"><BarChart3 className="w-4 h-4 text-blue-400" /></div>
          <div className="w-24 h-8 rounded bg-white/10"></div>
        </div>
        <div className="w-32 h-2 rounded bg-white/10 mb-1"></div>
        <div className="w-24 h-2 rounded bg-white/10"></div>
      </motion.div>

      <motion.div 
        animate={{ y: [20, -20, 20], rotate: [5, -5, 5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 hidden lg:flex flex-col gap-2 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 z-0 shadow-2xl"
      >
        <div className="flex gap-2 mb-2">
          <div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center"><TrendingUp className="w-4 h-4 text-cyan-400" /></div>
          <div className="w-24 h-8 rounded bg-white/10"></div>
        </div>
        <div className="flex items-end gap-1 h-12 mt-2">
          <div className="w-6 bg-cyan-500/50 rounded-t h-1/3"></div>
          <div className="w-6 bg-cyan-500/60 rounded-t h-1/2"></div>
          <div className="w-6 bg-cyan-500/80 rounded-t h-full"></div>
        </div>
      </motion.div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8"
        >
          Ready to Transform <br className="hidden md:block" /> Sales Execution?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto"
        >
          Join industry leaders who have moved past scattered tools and embraced the power of a single, unified enterprise ecosystem.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="/contact" className="inline-flex items-center justify-center gap-2 h-16 px-10 rounded-xl bg-blue-600 text-white font-bold text-lg transition-all hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]">
            Request Demo <ArrowRight className="w-5 h-5" />
          </a>
          <a href="/contact" className="inline-flex items-center justify-center h-16 px-10 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/20 font-bold text-lg transition-all hover:scale-105 hover:bg-white/20">
            Talk to Sales
          </a>
        </motion.div>
      </div>
    </section>
  );
}
