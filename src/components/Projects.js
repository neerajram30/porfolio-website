"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import axios from "axios";
import Bubbles from "./Bubbles";

function Projects() {
  const [loaded, setLoaded] = useState(false);
  const [starsDetails, setStarsDetails] = useState([]);
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
      description:
        "Helps police officers to find missing people using Artificial Intelligence",
      owner: "neerajram30",
      repo: "God-s-Eye",
      image:'/portfolio.png'

    },
    {
      title: "Portfolio Website",
      github: "https://github.com/neerajram30/porfolio-website",
      technologies: ["Nextjs", "Tailwind CSS", "DaisyUI"],
      description: "My personal portfolio website showcasing side projects and experience",
      owner: "neerajram30",
      repo: "porfolio-website",
      image:'/portfolio.png'
    },
  ];

  useEffect(() => {
    let starsData = [];
    const getStars = async (owner, repo) => {
      console.log(owner + "," + repo);
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}`
        );
        const stars = response?.data?.stargazers_count;
        starsData.push(stars);
      } catch (error) {
        console.log("error11");
      }
    };
    projects.map((item) => {
      getStars(item.owner, item.repo);
    });
    setStarsDetails(starsData);
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
              <div
                className="hover:shadow-cards flex md:h-44 h-auto hover:cursor-pointer hover:bg-[#0e131a] mt-5 rounded-lg md:w-5/12 md:mx-5 md:py-0 py-3"
                key={item.title}
              >
                <div className="md:w-2/6 w-2/6 h-full flex justify-center items-start md:mt-2 md:pl-0 pl-2">
                  <div className="h-fit w-fit shadow-cards p-1">
                  <Image src={item.image} width={160} height={70} alt={item.title}/>
                  </div>
                </div>
                <div className="md:px-2 md:pr-8 py-2 px-4 w-4/6">
                  <h6 className="text-xl font-semibold">{item.title}</h6>
                  <p className="mt-2 md:text-md text-sm">{item.description}</p>
                  <div className="text-xs flex h-8 justify-start items-center">
                    <StarIcon className="size-3" />
                    <p className="ml-2 font-semibold">
                      {starsDetails[i] ? starsDetails[i] : 0}
                    </p>
                  </div>
                  <div className="flex md:mt-0 mt-1">
                    <Bubbles data={item.technologies}/>
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
