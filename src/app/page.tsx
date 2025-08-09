"use client";

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import About from "../components/About";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      // timeout = null;
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <main className="flex flex-col items-start overflow-x-hidden">
        {!loading ? (
          <>
            <NavBar />
            <Profile />
            <section id="about">
              <About />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="experience">
              <Experiences />
            </section>
            <Footer />
          </>
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
}
