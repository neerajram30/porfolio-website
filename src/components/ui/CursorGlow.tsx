import { useEffect, useState, useRef } from "react";

// 1. Define your color profiles using standard RGBA channels
const THEMES = {
  indigo: "99, 102, 241",    // Indigo (Default Brittany Chiang style)
  emerald: "16, 185, 129",   // Emerald Green
  cyan: "6, 182, 212",       // Cyan Blue
  fuchsia: "217, 70, 239",   // Neon Fuchsia/Purple
  amber: "245, 158, 11",     // Cyberpunk Amber/Gold
};

export default function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const isMoving = useRef(false);

  const activeColor = THEMES.emerald;

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(pointerQuery.matches);

    if (!pointerQuery.matches) return;


    const handleMouseMove = (e: MouseEvent) => {
      if (!isMoving.current) {
        isMoving.current = true;
        requestAnimationFrame(() => {
          setMousePos({ x: e.clientX, y: e.clientY });
          isMoving.current = false;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isPointerDevice) return null;

  return (
        <div className="relative w-full text-slate-400 font-sans antialiased selection:bg-teal-300 selection:text-teal-900">
      
      {/* 
        SMOOTH LAYERING HOVER SPOTLIGHT
        - Automatically references theme colors via dynamic inline styling or CSS properties.
        - Uses your multi-layer transparency rule (10%, 30%, 10% gradients).
      */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-[1200px] h-[1200px] z-0 mix-blend-screen opacity-40 transition-transform duration-700 ease-[cubic-bezier(0.15,0.85,0.35,1)]"
        style={{
          transform: `translate3d(${mousePos.x - 600}px, ${mousePos.y - 600}px, 0)`,
          // TIP: If you have a specific primary color theme hex (e.g. DaisyUI primary), 
          // you can replace this RGB string. Here we match a sleek slate/indigo theme.
          "--theme-glow-rgb": "99, 102, 241", 
        } as React.CSSProperties}
      >
        {/* Layer 1: Core Center Brightness (40% stop area) */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(var(--theme-glow-rgb),0.30)_0%,rgba(var(--theme-glow-rgb),0.10)_40%,transparent_60%)] blur-sm" />

        {/* Layer 2: Mid Ambient Ring (20% to 70% stop area) */}
        {/* <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_20%,rgba(var(--theme-glow-rgb),0.10)_50%,transparent_70%)]" /> */}

        {/* Layer 3: Outer Edge Dissolve (70% to 100% stop area) */}
        {/* <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(var(--theme-glow-rgb),0.05)_0%,transparent_100%)] blur-xl" /> */}
        </div>

    </div>
  );
}
