"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Experience from "./Experience";
import { experience } from "../config/profile";
import { Sparkles } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

function Experiences() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });


  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-slate-950/80 border-t border-white/5 overflow-hidden"
      ref={ref}
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Career Roadmap
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-base max-w-xl">
            A breakdown of my professional roles, engineering contributions, and business impacts.
          </p>
        </div>

        {/* Timeline List */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experience.map((exp, i) => (
            <Experience data={exp} key={exp.company + "_" + exp.designation + "_" + i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experiences;
