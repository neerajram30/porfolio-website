"use client";
import { useEffect, useState } from "react";
import Experience from "./Experience";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function Experiences() {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (loaded) return;
    if (inView) {
      setLoaded(true);
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      });
    } else {
      animation.start({
        y: "30px",
        opacity: 0,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  const experience = [
    {
      company: "TCS",
      designation: "Assistant System Engineer",
      work: "Frontend developer in TCS AI cloud product team. Developing reusable and scalable components within the React ecosystem, collaborating closely with designers and backend engineers for building cutting edge solutions.",
      experience: "Dec 2022 - Present",
      location: "Kochi",
      website: { display: "tcs.com", link: "https://www.tcs.com/" },
      skills: ["Javascript", "React", "Nextjs", "Redux", "Aws"],
    },
    {
      company: "TCS",
      designation: "Assistant System Engineer Trainee",
      work: "Attended the TCS Initial Learning Program (IPL) at the TCS center in Kochi. It was a great opportunity to gain some industry insights by working alongside an experienced Talent & Development (TD) team. I learned Java and the basics of web development, and even worked on a mini-project that we presented to the TD heads.",
      experience: "Sep 2022 - Nov 2022",
      location: "Kochi",
      website: { display: "tcs.com", link: "https://www.tcs.com/" },
      skills: ["Java", "HTML", "CSS", "Javascript", "PLSQL", "MySQL"],
    },
  ];
  return (
    <div
      className="pt-10 md:pl-20 pl-5 md:pr-20 pr-5 pb-10 text-white w-screen bg-[#0e131a]"
      id="experience"
      ref={ref}
    >
      <h2 className="md:text-3xl text-xl font-bold text-white text-center mb-10">
        {" "}
        Experience
      </h2>
      <div className="md:px-20 mt-5">
        {experience.map((exp, i) => (
          <Experience
            data={exp}
            key={exp.company + "_" + i}
            index={i}
            delay={i / 30 + 0.05}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
