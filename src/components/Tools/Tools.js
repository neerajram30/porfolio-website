"use client"
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tool from "./Tool";

function Tools() {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const currentlyLearningAnimation = useAnimation();
  const tools = [
    "Javascript",
    "React Js",
    "Node JS",
    "Next JS",
    "Tailwind CSS",
    "GraphQL",
    "Git",
    "Github",
    "Aws Services",
    "CI/CD Pipeline",
    "Docker",
  ];

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
      currentlyLearningAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
          delay: 1.1,
        },
      });
    } else {
      animation.start({
        y: "30px",
        opacity: 0,
      });
      currentlyLearningAnimation.start({
        y: "30px",
        opacity: 0,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div
      className=""
      ref={ref}
      id="skills"
    >
      <div>
        <h2
          className='md:text-2xl text-xl font-semibold'>
          My Skills
        </h2>
        <div className="md:flex md:flex-row flex flex-col md:items-center items-start">
          <div className="mt-5 md:text-lg break-words flex flex-wrap mr-1">
            {tools.map((tool, i) => (
              <div className="mt-3 md:mr-4 mr-2" key={i}>
                <Tool
                  tool={tool}
                  key={i}
                  delay={i / 30 + 0.05}
                  inView={inView}
                />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Tools;
