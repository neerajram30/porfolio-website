"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ExternalLink, FolderCode } from "lucide-react";
import { SiGithub } from "react-icons/si";

export interface ProjectDataI {
  title: string;
  image: string;
  link: string;
  github: string;
  description: string;
  technologies: string[];
  repo: string;
}

interface ProjectI {
  data: ProjectDataI;
  starsDetails: Record<string, number | string>;
  index: number;
}

function Project({ data, starsDetails, index }: ProjectI) {
  const starsCount = starsDetails?.[data.repo] ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bento-card group flex flex-col justify-between p-4 sm:p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50"
    >
      <div>
        {/* Top bar with Icon & Star Count */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
            <FolderCode className="w-4 sm:w-5 h-4 sm:h-5" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {starsCount !== undefined && (
              <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{starsCount}</span>
              </div>
            )}

            {data.github && (
              <Link
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                title="View GitHub Repository"
              >
                <SiGithub className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Title & External Link */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
            {data.title}
          </h3>
          {data.link && (
            <Link
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
              title="Visit Live Application"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
          {data.description}
        </p>
      </div>

      {/* Tech Stack Chips & Action Link */}
      <div>
        <div className="flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-white/10">
          {data.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-800/90 text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;

