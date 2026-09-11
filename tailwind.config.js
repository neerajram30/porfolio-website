import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#080C14',
        obsidianCard: '#0F172A',
        indigoGlow: '#6366F1',
        cyanGlow: '#06B6D4',
        emeraldBadge: '#10B981',
        'white': '#FAF9F6',
        'navcolor': '#36485E',
        'background': '#080C14',
        'pcolor':'#6366F1',
        'hdcolor': '#818CF8',
        'hcolor' :'#6366F1',
        'description':'#94A3B8',
        'darkdesc':'#F8FAFC',
        'hover':'#4F46E5',
        'btn':'#6366F1',
        'btn-hover':'#4F46E5',
        'react':'#61DBFB',
        'project':'#1E293B',
        'projecthe':'#F59E0B',
        'stack':'#EC255A',
        'blogbg':'#0F172A',
        'toolbg':'#1E293B',
      },
      boxShadow: {
        "inverse": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
        "nav": "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        "project": "0 0 20px rgba(99, 102, 241, 0.15)",
        "cards": "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
        "bgglow": "0 0 40px 10px rgba(99, 102, 241, 0.2)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glow-indigo": "0 0 25px -5px rgba(99, 102, 241, 0.4)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.4)",
      },
      backgroundImage: {
        'glow': 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, rgba(8, 12, 20, 0) 70%)',
        'mesh': 'radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(6, 182, 212, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(16, 185, 129, 0.08) 0px, transparent 50%)',
      },
    },
  },
  plugins: [daisyui],
}

