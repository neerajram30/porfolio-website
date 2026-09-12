"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { socials } from "../config/socialLinks";
import { ArrowUpRight, Terminal, Layers, Cpu } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};

function Profile() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 md:px-8 overflow-hidden bg-grid-pattern"
      ref={ref}
    >
      {/* Background Mesh Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Main Hero Column (8 cols) */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Kinetic Headline */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15]"
            variants={item}
          >
            Hi, I&apos;m <span className="gradient-text">Neeraj MR</span>
          </motion.h1>

          <motion.h2
            className="mt-3 text-lg sm:text-2xl md:text-3xl font-semibold text-slate-300 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2"
            variants={item}
          >
            <span>Fullstack Engineer</span>
            <span className="text-indigo-400 font-mono text-xs sm:text-base font-normal">
              · React, Next.js &amp; TypeScript
            </span>
          </motion.h2>

          {/* Value Proposition */}
          <motion.p
            className="mt-4 sm:mt-6 text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl font-normal"
            variants={item}
          >
            Engineer with{" "}
            <span className="text-indigo-400 font-semibold">4 years</span> of
            experience crafting production-grade web applications at scale.
            Specializing in frontend architecture, modular UI systems,
            performance optimization, and seamless API integrations.
          </motion.p>

          {/* Call to Actions & Social Links */}
          <motion.div
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full"
            variants={item}
          >
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={process.env.NEXT_PUBLIC_RESUME_DRIVE_URL || "#"}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 border border-indigo-400/30 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            >
              <span>Get Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            >
              <span>View Projects</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 sm:mt-0">
              {socials.map((social) => (
                <Link
                  title={social.title}
                  href={social.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.title + social.id}
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all hover:-translate-y-0.5"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero Bento Cards Grid Column (4 cols) */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-6 lg:mt-0 w-full">
          {/* Card 1: Experience Highlights */}
          <motion.div variants={item} className="bento-card p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Terminal className="w-5 h-5" />
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                EXPERIENCE
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">
              4 Years
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Building scalable frontend architectures &amp; web applications
            </div>
          </motion.div>

          {/* Card 2: Company Highlight */}
          <motion.div variants={item} className="bento-card p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Layers className="w-5 h-5" />
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                CURRENT ROLE
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-white leading-tight">
              Tata Consultancy Services
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Frontend Developer · Production scale applications
            </div>
          </motion.div>

          {/* Card 3: Core Stack */}
          <motion.div
            variants={item}
            className="bento-card p-4 sm:p-5 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Cpu className="w-5 h-5" />
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                CORE STACK
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {[
                "React 19",
                "Next.js 15",
                "TypeScript",
                "Tailwind CSS",
                "GraphQL",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Profile;
