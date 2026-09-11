"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "../components/navigation/NavBar";
import Profile from "../components/Profile/Profile";
import Projects from "../components/Project/Projects";
import Experiences from "../components/Experience/Experiences";
import Loader from "../components/assets/Loader";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import CursorGlow from "../components/ui/CursorGlow";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-obsidian text-slate-100 flex flex-col items-center overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex flex-col items-center"
          >
            <NavBar />
            <Profile />
            <section id="about" className="w-full">
              <About />
            </section>
            <section id="projects" className="w-full">
              <Projects />
            </section>
            <section id="experience" className="w-full">
              <Experiences />
            </section>
            <Footer />
            <CursorGlow />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}


