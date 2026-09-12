"use client";
import React, { useState } from "react";
import Project from "./Project";
import { useProjectsLogic } from "./useProjectsLogic";
import { Sparkles } from "lucide-react";

function Projects() {
  const { projects, starsDetails } = useProjectsLogic();
  const [filter, setFilter] = useState("All");

  const filterOptions = ["All", "Frontend / Web", "Developer Tools", "AI & Backend"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Developer Tools") return project.technologies.some((t) => ["CLI", "Typescript"].includes(t));
    if (filter === "Frontend / Web") return project.technologies.some((t) => ["Nextjs", "Tailwind CSS", "TypeScript"].includes(t));
    if (filter === "AI & Backend") return project.technologies.some((t) => ["Python", "Flask", "Dlib", "Drizzle ORM"].includes(t));
    return true;
  });

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-slate-950/40 overflow-hidden" id="projects">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Featured Work &amp; Creations
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-base max-w-xl">
            A curated showcase of open-source CLI tools, fullstack web applications, and developer utilities.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 p-1 sm:p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 w-full sm:w-auto">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                  filter === option
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredProjects.map((item, i) => (
            <Project
              data={item}
              key={item.title + "_" + i}
              starsDetails={starsDetails as Record<string, number | string>}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;


