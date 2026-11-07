"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.dataset.theme === "light");
  }, []);

  function toggleTheme() {
    const next = !isLight;
    document.documentElement.dataset.theme = next ? "light" : "dark";
    setIsLight(next);
    try {
      localStorage.setItem("portfolio-theme", next ? "light" : "dark");
    } catch {
      // Switching still works when browser storage is unavailable.
    }
  }

  return (
    <button type="button" onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-slate-800/80 text-slate-200 light:border-slate-300 light:bg-white light:text-slate-700 hover:bg-indigo-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
      {isLight ? <Moon className="h-5 w-5" aria-hidden="true" /> : <Sun className="h-5 w-5" aria-hidden="true" />}
    </button>
  );
}
