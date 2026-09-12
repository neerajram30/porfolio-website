"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Server, Wrench } from "lucide-react";

interface Category {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const categories: Category[] = [
  {
    title: "Frontend & Architecture",
    icon: Code2,
    skills: ["React.js", "Next.js 15", "TypeScript", "JavaScript", "Redux Toolkit", "RTK Query"],
  },
  {
    title: "UI Systems & Styling",
    icon: Layout,
    skills: ["Tailwind CSS", "Shadcn UI", "Lucide React", "Framer Motion", "CSS3 / HTML5"],
  },
  {
    title: "Backend & Cloud APIs",
    icon: Server,
    skills: ["Node.js", "GraphQL", "REST APIs", "AWS Lambda", "AWS"],
  },
  {
    title: "Testing & Tooling",
    icon: Wrench,
    skills: ["Git", "CI/CD Pipelines", "Vitest", "React Testing Library"],
  },
];

function Tools() {
  return (
    <div id="skills" className="w-full space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="p-4 rounded-xl bg-slate-900/70 border border-white/10 hover:border-indigo-500/40 transition-all hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Icon className="w-4 h-4" />
                </span>
                <h3 className="text-sm font-semibold text-slate-200">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 border border-white/5 hover:border-indigo-500/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Tools;

