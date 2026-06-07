"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import Project from "./Project";

function Projects() {
  const [loaded, setLoaded] = useState(false);
  const [starsDetails, setStarsDetails] = useState(null);
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
      title: "Speghetti Slicer",
      github: "https://github.com/neerajram30/spaghetti-slicer",
      technologies: ["Typescript", "CLI"],
      description:
        "An AST-based CLI that audits and refactors React/TypeScript projects",
      owner: "neerajram30",
      repo: "spaghetti-slicer",
      image: "/spaghetti_slicer.png",
      link: "https://www.npmjs.com/package/spaghetti-slicer",
    },
    {
      title: "Async Hub",
      github: "https://github.com/neerajram30/async-hub",
      technologies: ["Nextjs", "Drizzle ORM", "Tailwind CSS"],
      description:
        "An async video hub for global teams to capture screen recordings and manage timestamped discussions.",
      owner: "neerajram30",
      repo: "async-hub",
      image: "/async_hub.png",
      link: "https://github.com/neerajram30/async-hub",
    },
    {
      title: "God's Eye",
      github: "https://github.com/neerajram30/God-s-Eye",
      technologies: ["Python", "Flask", "Dlib"],
      description:
        "Helps police officers to find missing people using Artificial Intelligence",
      owner: "neerajram30",
      repo: "God-s-Eye",
      image: "/godeye.jpg",
      link: "https://github.com/neerajram30/God-s-Eye",
    },
    {
      title: "Portfolio Website",
      github: "https://github.com/neerajram30/porfolio-website",
      technologies: ["Nextjs", "Tailwind CSS", "DaisyUI"],
      description:
        "My personal portfolio website showcasing side projects and experience",
      owner: "neerajram30",
      repo: "porfolio-website",
      image: "/portfolio.png",
      link: "https://neerajram.netlify.app/",
    },
   
  ];

  useEffect(() => {
    let starsData = [];
    const getStars = async (owner, repo) => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}`
        );
        const stars = response?.data?.stargazers_count;
        starsData.push({ [repo]: stars });
        setStarsDetails((prev) => {
          return { ...prev, [repo]: stars };
        });
      } catch (error) {
        console.log("error11");
      }
    };
    projects.map((item) => {
      getStars(item.owner, item.repo);
    });
  }, []);

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
