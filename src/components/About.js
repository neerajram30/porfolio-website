"use client";
import { useEffect, useState } from "react";
import Tools from "./Tools/Tools";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function About() {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const currentlyLearningAnimation = useAnimation();
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
      className="pt-10 md:pl-20 pl-10 md:pr-20 pr-10 pb-10 text-white w-screen bg-[#0e131a]"
      // id="about"
      ref={ref}
    >
      <div className="text-center">
        <h2 className="md:text-3xl text-2xl font-bold"> About</h2>
      </div>
      <div className="md:flex mt-10 min-h-96">
        <motion.div
          className="md:justify-around md:w-1/2 md:pr-32"
          transition={{
            duration: 0.3,
            delay: 0.5,
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
        >
          <h2 className="md:text-2xl text-xl font-semibold">About me</h2>
          <p className="mt-5 text-lg">
            {
              "I am a Software Engineer with strong fundamental knowledge in Computer Science and an eager learner's mentality. Currently working at TCS as a Frontend Web Developer. In this role, I am exploring web technologies and solving problems using them. Most of my work is related to React and its ecosystem. As a Front-End Developer, I work closely with architects, designers, and backend teams to deliver high-quality UI/UX at scale."
            }
          </p>
        </motion.div>

        <div className="md:w-1/2 md:pr-10 mt-5 md:mt-0">
          <Tools />
        </div>
      </div>
    </div>
  );
}

export default About;
