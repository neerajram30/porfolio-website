"use client";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import NavBar from "@/components/NavBar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Head from "next/head";
import { useEffect, useState } from "react";

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
      {/* <Head>
        <meta
          name="google-site-verification"
          content="SS5GO0NWJv7wWHeWAgKj--lo-fU-WiuBrogioNJbUnM"
        />
         <meta name="description" content="Neeraj M R React developer"/>
      </Head> */}
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
