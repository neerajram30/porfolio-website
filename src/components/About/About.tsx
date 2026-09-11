"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tools from "../Tools/Tools";
import { Sparkles, Award, Cpu, CheckCircle2 } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};

const specializations = [
  "Frontend Architecture",
  "Performance Optimization",
  "Responsive Design",
  "REST API Integration",
  "Fullstack Integration",
];

const stats = [
  { value: "3.7+", label: "Years Experience" },
  { value: "15+", label: "Components Built" },
  { value: "3", label: "Enterprise Products" },
];

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-slate-950/60 border-y border-white/5 overflow-hidden" ref={ref}>
      <motion.div
        className="w-full max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="flex flex-col items-center text-center mb-10 sm:mb-16" variants={item}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> About &amp; Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Crafting High-Performance <span className="gradient-text">Web Experiences</span>
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-base max-w-xl">
            Passionate about modern web standards, modular frontend architectures, and fluid interactive UIs.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Bio & Key Specializations (6 cols) */}
          <motion.div className="lg:col-span-6 flex flex-col gap-6" variants={item}>
            <div className="bento-card p-5 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>Background &amp; Expertise</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
                Fullstack Developer with <span className="text-indigo-400 font-semibold">3.7 years</span> of experience building enterprise web applications using React, Next.js, and TypeScript. Currently at <span className="text-indigo-400 font-semibold">Tata Consultancy Services</span> as a Frontend Developer, specializing in clean architecture, performance optimization, and REST API integrations.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Core Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8 pt-6 border-t border-white/10 text-center">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-2 sm:p-3 rounded-xl bg-slate-900/60 border border-white/5">
                    <p className="text-xl sm:text-3xl font-black text-indigo-400">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tech Stack Matrix (6 cols) */}
          <motion.div className="lg:col-span-6 bento-card p-5 sm:p-6 md:p-8" variants={item}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Technology Matrix</span>
            </h3>
            <Tools />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;


