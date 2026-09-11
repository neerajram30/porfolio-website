"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, ExternalLink, Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";

interface WebsiteI {
  link: string;
  display: string;
}

interface DataI {
  designation: string;
  company: string;
  experience: string;
  location: string;
  work: string[];
  skills: string[];
  website: WebsiteI;
}

interface ExperienceI {
  data: DataI;
}

const item: Variants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};

function Experience({ data }: ExperienceI) {
  return (
    <motion.div variants={item} className="group relative flex gap-3 sm:gap-6 pb-8 sm:pb-12 last:pb-0">
      {/* Timeline Node & Glowing Line */}
      <div className="flex flex-col items-center shrink-0 pt-1">
        <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 border border-indigo-500/40 text-indigo-400 group-hover:scale-110 group-hover:border-indigo-400 group-hover:shadow-glow-indigo transition-all">
          <Briefcase className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
          <span className="absolute inset-0 rounded-full bg-indigo-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="w-0.5 bg-gradient-to-b from-indigo-500/50 via-slate-800 to-transparent flex-1 mt-2.5 sm:mt-3 group-last:hidden" />
      </div>

      {/* Experience Bento Card */}
      <div className="flex-1 bento-card p-4 sm:p-6 border border-white/10 hover:border-indigo-500/40 transition-all">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base sm:text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
              {data.designation}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1">
              <span className="text-xs sm:text-sm font-semibold text-indigo-400">
                @ {data.company}
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-400">
                <MapPin className="w-3 h-3 text-slate-400" />
                {data.location}
              </span>
              {data.website?.link && (
                <Link
                  href={data.website.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-indigo-400/80 hover:text-indigo-300 transition-colors ml-1"
                >
                  <span>{data.website.display}</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>

          <span className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[11px] sm:text-xs font-mono font-medium self-start sm:self-auto">
            {data.experience}
          </span>
        </div>

        {/* Work Bullets */}
        <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
          {data.work.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Skills Used */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-800/80 text-slate-300 border border-white/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;


