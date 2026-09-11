"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function NavBar() {
  const links = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
  ];

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute("id") || "";

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveLink(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-indigo-500/5"
            : "bg-slate-900/50 backdrop-blur-md border border-white/5 shadow-lg"
        }`}
      >
        {/* Brand Identity Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-indigo-500/10 border border-indigo-500/30 group-hover:border-indigo-400/80 transition-colors">
            <Code2 className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform duration-200" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-sm md:text-base tracking-tight group-hover:text-indigo-300 transition-colors">
              Neeraj<span className="text-indigo-400">.mr</span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider font-mono">
              FULLSTACK DEV
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-white/5">
          {links.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 bg-indigo-600/30 border border-indigo-500/40 rounded-full shadow-inner shadow-indigo-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Quick Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={process.env.NEXT_PUBLIC_RESUME_DRIVE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600/80 hover:bg-indigo-500 rounded-full border border-indigo-400/40 shadow-sm shadow-indigo-500/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full text-slate-300 hover:text-white bg-slate-800/80 border border-white/10 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Glass Menu Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 z-40 md:hidden bg-slate-950/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between border-t border-white/10 pointer-events-auto"
          >
            <div className="flex flex-col gap-6 pt-4">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-widest px-2">
                <Sparkles className="w-4 h-4" /> Navigation
              </div>
              <ul className="flex flex-col gap-3">
                {links.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between p-4 rounded-xl text-lg font-semibold border transition-all ${
                        activeLink === link.id
                          ? "bg-indigo-600/20 border-indigo-500/40 text-white"
                          : "bg-slate-900/40 border-white/5 text-slate-300 hover:bg-slate-800/50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-indigo-400 opacity-60" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <a
                href={process.env.NEXT_PUBLIC_RESUME_DRIVE_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/30"
              >
                <span>Download Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

