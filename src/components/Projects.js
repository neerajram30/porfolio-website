"use client";
import React, { useEffect, useState } from "react";
import Github from "./Icons/Github";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Tool from "./Tools/Tool";

function Projects() {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView();

  const animation = useAnimation();
  // const currentlyLearningAnimation = useAnimation();

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
  const projects = [
    {
      title: "God's Eye",
      github: "https://github.com/neerajram30/Netflix-UI-clone",
      technologies: ["Python", "Flask", "Dlib"],
      description: "Helps police officers to find missing people using",
    },
    {
      title: "Netflix UI Clone",
      github: "https://github.com/neerajram30/Netflix-UI-clone",
      technologies: ["React", "Firebase"],
      description: "Netflix clone app powered by TMDB database and firebase",
    },
  ];
  return (
    <div
      className="pt-10 md:pl-20 pl-10 md:pr-20 pr-10 pb-10 text-white w-screen"
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
          {/* <div className="md:grid md:gap-10 md:grid-cols-2 flex flex-col lg:grid-cols-3">
            {projects.map(
              ({ title, github, technologies, description }, index) => (
                <motion.div
                  transition={{
                    duration: 0.3,
                    delay: parseFloat(`0.${index}`),
                    type: "tween",
                  }}
                  initial={{
                    y: "30px",
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  key={index}>
                  <div>
                    <div className="md:w-72 w-60 h-80 rounded-lg mt-5 shadow-cards bg-white hover:scale-105 transition-all duration-200">
                      <div className="flex justify-between">
                        <div className="w-10 h-10 ml-5 mt-5">
                          <Link className="text-black text-2xl" href={github}>
                            <Github />
                          </Link>
                        </div>
                      </div>
                      <div className="ml-5 w-11/12 mr-5">
                        <p className="text-xl font-bold mt-10 hover:cursor-pointer font-overpass text-black">
                          {title}
                        </p>
                        <p className="mt-5 text-black">{description}</p>
                      </div>
                      <div className="flex md:space-x-2 space-x-2 md:mt-12 ml-5 mt-5 text-sm md:mr-2 items-start justify-start text-white">
                        {technologies.map((item, i) => (
                          <p
                            key={item + i}
                            className="rounded-sm pl-2 pr-2 p-0.5 text-white font-overpass font-semibold ml-2 bg-primary"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div> */}

          <div className="w-screen md:px-32 px-2">
            {projects.map((item) => (
              <div className="shadow-cards flex h-40 bg-[#0e131a] mt-5 rounded-lg">
                <div className="bg-[#000] md:w-1/6 w-2/6 h-full flex justify-center items-center">
                  image spot
                </div>
                <div className="md:px-8 py-3 px-4">
                  <h6 className="text-2xl font-semibold">{item.title}</h6>
                  <p className="md:mt-5 mt-2">
                    {item.description}
                  </p>

                  <div className="flex md:mt-5 mt-3">
                  {item.technologies.map((tech,i)=>
                    <div key={item.title+i} className="rounded-2xl bg-primary text-white px-3 py-1 mr-2 text-sm font-semibold">{tech}</div>
                  
                  )}
                </div>
                </div>

                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
