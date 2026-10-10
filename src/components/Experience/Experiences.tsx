"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Experience from "./Experience";
import { Sparkles, Briefcase } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

function Experiences() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const experience = [
    {
      company: "Tata Consultancy Services",
      designation: "Assistant System Engineer",
      work: [
        "Leveraged AWS Kiro to accelerate code and unit test development through structured prompting and validation, while maintaining engineering control over architecture and code quality",
        "Conducted rigorous performance testing and profiling to identify rendering, network, and bundle-related bottlenecks, implementing caching and optimization strategies to improve application responsiveness and Core Web Vitals",
        "Built and structured scalable frontend state management using Redux Toolkit and RTK Query, simplifying complex asynchronous workflows through caching and optimistic updates for responsive enterprise dashboards",
        "Integrated and optimized RESTful APIs, collaborating closely with backend engineers, clients, and cross-functional teams in Agile sprints to resolve issues, refine requirements, and deliver reliable production releases",
        "Designed and maintained AWS-native CI/CD pipelines using CodeCommit, CodeBuild, CodePipeline, S3 and CloudFront, automating testing, artifact creation, and controlled deployments across environments",
        "Built a monorepo-based UI component library adopted across 4 enterprise applications, reducing duplicated UI development and improving design consistency across products",
      ],
      experience: "Dec 2022 – Present",
      location: "Kochi, India",
      website: { display: "tcs.com", link: process.env.NEXT_PUBLIC_TCS_URL || "https://www.tcs.com" },
      skills: [
        "React.js",
        "TypeScript",
        "Node.js",
        "AWS Lambda",
        "Redux Toolkit",
        "RTK Query",
        "AWS CI/CD",
        "RESTful APIs",
      ],
    },
    {
      company: "Tata Consultancy Services",
      designation: "Assistant System Engineer Trainee",
      work: [
        "Graduated the TCS Initial Learning Program (ILP) at TCS Kochi campus, establishing strong foundations in enterprise software engineering",
        "Engineered fullstack web modules and database solutions using Java, SQL, HTML/CSS, and JavaScript fundamentals",
        "Built and presented enterprise prototype solutions to Talent & Development leadership in collaborative sprint teams",
      ],
      experience: "Sep 2022 – Nov 2022",
      location: "Kochi, India",
      website: { display: "tcs.com", link: process.env.NEXT_PUBLIC_TCS_URL || "https://www.tcs.com" },
      skills: ["Java", "JavaScript", "SQL", "HTML5", "CSS3", "Agile Fundamentals"],
    },
  ];

  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-slate-950/80 border-t border-white/5 overflow-hidden"
      id="experience"
      ref={ref}
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Career Roadmap
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-base max-w-xl">
            A breakdown of my professional roles, engineering contributions, and business impacts.
          </p>
        </div>

        {/* Timeline List */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experience.map((exp, i) => (
            <Experience data={exp} key={exp.company + "_" + exp.designation + "_" + i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experiences;
