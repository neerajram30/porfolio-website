"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#161d27] via-[#1a2332] to-[#0e131a] light:from-white light:via-slate-50 light:to-slate-100 text-white light:text-slate-900 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md bg-[#161d27]/80 light:bg-white/80 backdrop-blur-md border border-white/5 light:border-slate-900/10 p-8 rounded-2xl shadow-2xl"
      >
        <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns={"https:" + "//www.w3.org/2000/svg"}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold mb-3 font-overpass">Something went wrong!</h2>
        <p className="text-gray-400 light:text-gray-600 text-sm mb-8 leading-relaxed">
          An unexpected error occurred while loading this page. Our team has been notified.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-lg bg-primary text-white light:text-slate-900 font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Try Again
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-2.5 rounded-lg bg-white/5 light:bg-slate-900/5 border border-white/10 light:border-slate-900/10 text-white light:text-slate-900 font-semibold text-sm hover:bg-white/10 light:hover:bg-slate-900/10 transition-colors"
          >
            Go Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}
