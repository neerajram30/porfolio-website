"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Experience from "./Experience";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

function Experiences() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const experience = [
    {
      company: "TCS",
      designation: "Assistant System Engineer",
      work: [
        "Led frontend development of AI-VX Studio — reduced LCP from 4s to 2s via code splitting, lazy loading, and image optimization",
        "Migrated data-fetching to RTK Query, eliminating ~20% of stale-state and race-condition bugs",
        "Built a shared component library (15+ components) adopted across 3 products, cutting duplicate UI code by ~50%",
        "Conducted code reviews that reduced PR cycle time by ~25%",
        "Designed and implemented CI/CD pipeline, accelerating deployment cycles by ~20%",
      ],
      experience: "Dec 2022 – Present",
      location: "Kochi",
      website: { display: "tcs.com", link: process.env.NEXT_PUBLIC_TCS_URL || "" },
      skills: ["React", "Next.js", "TypeScript", "RTK Query", "Redux Toolkit", "AWS", "CI/CD"],
    },
    {
      company: "TCS",
      designation: "Assistant System Engineer Trainee",
      work: [
        "Completed TCS Initial Learning Program (ILP) at the TCS centre in Kochi",
        "Learned Java, HTML, CSS, JavaScript, SQL, and web development fundamentals",
        "Built and presented a mini-project to Talent & Development heads",
      ],
      experience: "Sep 2022 – Nov 2022",
      location: "Kochi",
      website: { display: "tcs.com", link: process.env.NEXT_PUBLIC_TCS_URL || "" },
      skills: ["Java", "HTML", "CSS", "JavaScript", "PLSQL", "MySQL"],
    },
  ];

  return (
    <div
      className="pt-10 md:pl-20 pl-5 md:pr-20 pr-5 pb-16 text-white w-screen bg-[#0e131a]"
      id="experience"
      ref={ref}
    >
      <h2 className="md:text-3xl text-xl font-bold text-white text-center mb-12">
        Experience
      </h2>

      <motion.div
        className="md:px-20"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {experience.map((exp, i) => (
          <Experience data={exp} key={exp.company + "_" + i} />
        ))}
      </motion.div>
    </div>
  );
}

export default Experiences;
