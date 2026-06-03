"use client";
import { useEffect, useState } from "react";
import NavBar from "../components/navigation/NavBar";
import Profile from "../components/Profile/Profile";
import Projects from "../components/Project/Projects";
import Experiences from "../components/Experience/Experiences";
import Loader from "../components/assets/Loader";
import About from "../components/About/About";
import Footer from '../components/Footer/Footer'
import CursorGlow from "src/components/ui/CursorGlow";
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
            <CursorGlow/>
          </>
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
}
