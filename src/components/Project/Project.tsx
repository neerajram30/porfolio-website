"use client";
import { motion } from "framer-motion";
import { ExternalLink, FolderCode, Smartphone, Briefcase } from "lucide-react";
import type { ProjectData } from "../config/projects";

interface ProjectProps {
  data: ProjectData;
  index: number;
}

export default function Project({ data, index }: ProjectProps) {
  const Icon = data.category === "Mobile Apps" ? Smartphone : data.category === "Business Apps" ? Briefcase : FolderCode;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.2) }}
      className="bento-card group flex flex-col justify-between p-5 sm:p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50"
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 light:text-indigo-600 border border-indigo-500/20">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800/80 light:bg-slate-200/80 text-slate-300 light:text-slate-700 border border-white/10 light:border-slate-900/10">
            {data.category}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white light:text-slate-900 group-hover:text-indigo-300 light:group-hover:text-indigo-700 transition-colors mb-3">
          {data.title}
        </h3>
        <p className="text-slate-300 light:text-slate-700 text-sm leading-relaxed mb-5">
          {data.description}
        </p>
      </div>
      <div className="pt-4 border-t border-white/10 light:border-slate-900/10">
        <div className="flex flex-wrap gap-1.5">
          {data.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-slate-800/90 light:bg-slate-200/90 text-slate-300 light:text-slate-700 border border-white/5 light:border-slate-900/10">
              {tag}
            </span>
          ))}
        </div>
        {data.link && (
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${data.linkLabel} for ${data.title}`}
            className="inline-flex items-center gap-2 mt-5 px-3 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 hover:border-indigo-400 text-indigo-300 light:text-indigo-700 hover:text-white light:hover:text-slate-900 text-xs font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400"
          >
            {data.linkLabel}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
