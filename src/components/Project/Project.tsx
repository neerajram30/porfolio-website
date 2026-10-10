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
  const hasStars = Boolean(data.repo && starsDetails?.[data.repo]);
  const starsCount = data.repo ? starsDetails?.[data.repo] : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bento-card group flex flex-col justify-between p-4 sm:p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50"
    >
      <div>
        {/* Top bar with Icon, Live Status, Stars & GitHub */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
            <FolderCode className="w-4 sm:w-5 h-4 sm:h-5" />
          </div>

          <div className="flex items-center gap-2">
            {data.link && (
              <Link
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all shadow-xs"
                title="Visit Live Application"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Site</span>
              </Link>
            )}

            {hasStars && starsCount !== undefined && (
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
          {data.link ? (
            <Link
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors inline-flex items-center gap-2"
            >
              <span>{data.title}</span>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
            </Link>
          ) : (
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
              {data.title}
            </h3>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
          {data.description}
        </p>
      </div>

      {/* Tech Stack Chips & Live Action Button */}
      <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {data.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-800/90 text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {data.link && (
          <Link
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 hover:border-indigo-400 text-indigo-300 hover:text-white text-xs font-semibold transition-all shrink-0 self-start sm:self-auto group/btn"
          >
            <span>Visit Site</span>
            <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default Project;

