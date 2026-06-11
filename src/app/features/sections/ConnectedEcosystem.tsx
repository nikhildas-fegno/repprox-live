"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, LayoutDashboard, BarChart3, Database } from "lucide-react";

const modules = [
  { id: 1, name: "Market Intelligence", icon: <Sparkles className="w-6 h-6" />, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
  { id: 2, name: "Sales Execution", icon: <TrendingUp className="w-6 h-6" />, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-200" },
  { id: 3, name: "Retail Excellence", icon: <LayoutDashboard className="w-6 h-6" />, color: "text-purple-500", bg: "bg-purple-50", border: "border-purple-200" },
  { id: 4, name: "Revenue Operations", icon: <BarChart3 className="w-6 h-6" />, color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200" },
  { id: 5, name: "Supply Chain Visibility", icon: <Database className="w-6 h-6" />, color: "text-cyan-500", bg: "bg-cyan-50", border: "border-cyan-200" }
];

export default function ConnectedEcosystem() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center">

        <div className="text-center mb-24 max-w-[1200px] w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] lg:whitespace-nowrap font-extrabold tracking-tight text-[#0B1736] mb-6"
          >
            One Platform Connecting Every Business Function
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#64748B]"
          >
            RepProX brings together customer intelligence, field productivity, retail execution, financial control, and distribution operations into a single connected ecosystem that eliminates silos and drives business growth.
          </motion.p>
        </div>

        {/* Mobile Vertical Ecosystem (hidden on md and up) */}
        <div className="md:hidden flex flex-col items-center py-6 w-full relative">
          
          {/* Vertical Glowing Line */}
          <div className="absolute top-24 bottom-10 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 rounded-full z-0 opacity-50"></div>
          
          {/* Animated dot on mobile */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#18C7E6] rounded-full z-10 shadow-[0_0_12px_#18C7E6]"
            animate={{ top: ["15%", "90%", "15%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Central Core at the Top */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-30 w-36 h-36 bg-white rounded-full shadow-[0_15px_40px_rgba(24,199,230,0.2)] border-[3px] border-[#18C7E6]/40 flex flex-col items-center justify-center mb-10"
          >
            <div className="absolute inset-0 rounded-full border-[2px] border-[#18C7E6]/50 animate-ping opacity-20" style={{ animationDuration: '4s' }}></div>
            <motion.img 
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              src="/logo.png" alt="RepPro X Core" className="w-20 h-auto object-contain z-10" 
            />
          </motion.div>

          {/* Modules Stack */}
          <div className="flex flex-col gap-6 w-full max-w-[280px] relative z-20">
            {modules.map((module, i) => (
              <motion.div
                key={`mob-${module.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`bg-white/90 backdrop-blur rounded-2xl p-4 shadow-md border ${module.border} flex items-center gap-4 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 ${module.bg} opacity-40`}></div>
                <div className={`w-12 h-12 rounded-xl flex-shrink-0 bg-white shadow-sm border border-slate-100 flex items-center justify-center relative z-10 ${module.color}`}>
                  {module.icon}
                </div>
                <div className="relative z-10 font-bold text-[#0B1736] text-[15px] leading-tight">{module.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Horizontal Ecosystem Illustration */}
        <div className="hidden md:flex relative w-full max-w-[1000px] h-[500px] items-center justify-center">
          
          {/* Glowing Connection Paths Base */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-slate-100 -translate-y-1/2 z-0 rounded-full"></div>
          
          {/* Animated Connecting Line */}
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-1/2 left-[10%] h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 -translate-y-1/2 z-0 rounded-full"
          ></motion.div>

          {/* Central RepPro X Core */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute z-30 w-56 h-56 bg-white rounded-full shadow-[0_20px_50px_rgba(24,199,230,0.15)] border-[3px] border-[#18C7E6]/40 flex flex-col items-center justify-center"
          >
            {/* Pulsing Core Rings */}
            <div className="absolute inset-0 rounded-full border-[2px] border-[#18C7E6]/50 animate-ping opacity-20" style={{ animationDuration: '4s' }}></div>
            <div className="absolute inset-0 bg-[#18C7E6]/5 blur-xl rounded-full"></div>
            
            <motion.img 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              src="/logo.png" alt="RepPro X Core" className="w-32 h-auto object-contain z-10" 
            />
          </motion.div>

          {/* Module Nodes */}
          <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
            {modules.map((module, i) => {
              // Position them in a pentagon shape around the core
              const angle = (i * 72 - 90) * (Math.PI / 180);
              const distance = 200;
              const cx = `calc(50% + ${Math.cos(angle) * distance}px)`;
              const cy = `calc(50% + ${Math.sin(angle) * distance}px)`;

              return (
                <motion.div 
                  key={module.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto group"
                  style={{ left: cx, top: cy }}
                >
                  <motion.div 
                    animate={{ y: [0, -8, 0] }} 
                    transition={{ repeat: Infinity, duration: 3, delay: i * 0.2, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-white shadow-lg border ${module.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 relative`}>
                      <div className={`absolute inset-0 rounded-2xl ${module.bg} opacity-50`}></div>
                      <div className={`relative z-10 ${module.color}`}>
                        {module.icon}
                      </div>
                    </div>
                    <div className="text-sm font-bold text-slate-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow-sm border border-slate-100">{module.name}</div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Flow Lines to Core */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 1000 500">
            {modules.map((module, i) => {
              const angle = (i * 72 - 90) * (Math.PI / 180);
              const distance = 200;
              const x2 = 500 + Math.cos(angle) * distance;
              const y2 = 250 + Math.sin(angle) * distance;

              const pathId = `flow-${module.id}`;
              const revPathId = `flow-rev-${module.id}`;

              return (
                <g key={module.id}>
                  <line id={pathId} x1="500" y1="250" x2={x2} y2={y2} stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" className="opacity-50" />
                  <line id={revPathId} x1={x2} y1={y2} x2="500" y2="250" stroke="transparent" strokeWidth="2" />

                  {/* Flow outwards */}
                  <circle r="3" fill="#18C7E6" className="opacity-70">
                    <animateMotion dur={`${1.5 + Math.random()}s`} repeatCount="indefinite">
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>

                  {/* Flow inwards */}
                  <circle r="3" fill="#3B82F6" className="opacity-70">
                    <animateMotion dur={`${2 + Math.random()}s`} repeatCount="indefinite">
                      <mpath href={`#${revPathId}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}
          </svg>

        </div>
      </div>
    </section>
  );
}
