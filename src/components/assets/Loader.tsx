"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1500;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressFraction = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progressFraction, 3);
      const current = Math.floor(eased * 100);

      setProgress(current);

      if (progressFraction >= 1) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] text-slate-200 select-none overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -6, filter: "blur(6px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Subtle Ambient Radial Vignette */}
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-indigo-600/10 via-indigo-500/5 to-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Center Minimalist Brand & Loader */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Monogram Mark */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl mb-5"
        >
          {/* Subtle Corner Accent Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-transparent to-cyan-500/10" />

          {/* Monogram Text */}
          <span className="font-mono font-bold text-lg tracking-wider text-white">
            N<span className="text-indigo-400">.</span>
          </span>

          {/* Active Status Pulse Dot */}
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
          </span>
        </motion.div>

        {/* Name & Role */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col items-center mb-7"
        >
          <h1 className="text-base sm:text-lg font-semibold tracking-tight text-white">
            Neeraj M R
          </h1>
          <p className="text-[11px] sm:text-xs text-slate-400 font-mono tracking-widest uppercase mt-1">
            Frontend React Developer
          </p>
        </motion.div>

        {/* Ultra-Minimal Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-48 sm:w-56 flex flex-col items-center"
        >
          {/* Thin Progress Bar */}
          <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400 rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Counter & State */}
          <div className="flex items-center justify-between w-full mt-3 text-[11px] font-mono text-slate-500">
            <span className="tracking-wider">INITIALIZING</span>
            <span className="text-slate-400 tabular-nums">
              {progress.toString().padStart(2, "0")}%
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
