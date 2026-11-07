"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ChevronRight } from "lucide-react";
import { education } from "../config/profile";

export default function Education() {
  return (
    <section id="education" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-slate-950/40">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Award className="w-3.5 h-3.5" /> Learning &amp; Achievements
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            A foundation in computer science, hands-on learning, and student leadership.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {education.map((entry, index) => (
            <motion.article
              key={entry.qualification}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bento-card p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-2 mb-5">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
                <span className="text-xs font-mono text-indigo-300">{entry.period}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{entry.qualification}</h3>
              <p className="text-sm text-indigo-300 mt-1">{entry.subject}</p>
              <p className="text-sm text-slate-200 mt-4">{entry.institution}</p>
              <p className="text-xs text-slate-400 mt-1">{entry.board}</p>
              {entry.highlights.length > 0 && (
                <ul className="space-y-3 mt-5 pt-4 border-t border-white/10">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm text-slate-300 leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 text-indigo-400 mt-1" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
