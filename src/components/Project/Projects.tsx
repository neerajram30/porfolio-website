"use client";
import { motion } from "framer-motion";
import Project from "./Project";
import { useProjectsLogic } from "./useProjectsLogic";

function Projects() {
  const { ref, inView, animation, projects, starsDetails } = useProjectsLogic();

  return (
    <div
      className="pt-10 md:pl-20 pl-10 md:pr-20 pr-10 pb-10 text-white w-screen mb-10"
      id="projects"
      ref={ref}
    >
      <motion.h2
        animate={animation}
        className="md:text-3xl text-xl font-bold text-center"
      >
        Projects
      </motion.h2>

      <div className="flex flex-col items-center mt-5">
        <div className="flex items-center justify-center">
          <div className="w-screen md:px-2 px-5 md:flex md:flex-wrap md:justify-center block">
            {projects.map((item, i) => (
              <Project
                data={item}
                key={item.title + "_" + i}
                starsDetails={starsDetails}
                delay={i / 30 + 0.05}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
