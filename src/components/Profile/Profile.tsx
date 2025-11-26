"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { socials } from "../config/socialLinks";

function Profile() {
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
    <div className="h-screen md:h-screen lg:h-screen w-screen" ref={ref}>
      <div className="flex flex-col md:pl-52 pl-10 pt-24 md:items-start items-start mt-10">
        <motion.h1
          className="md:text-5xl text-3xl w-fit font-black font-overpass text-white"
          id="head"
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
          <span>{"Hy, I'm "}</span>
          <span className="text-primary">Neeraj MR</span>{" "}
        </motion.h1>
        <motion.div
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
          <h6 className="mt-2 md:text-xl text-md font-bold text-white">
            {/* ASE at Tata Consultancy Services */}
            Frontend Developer
          </h6>
        </motion.div>

        <motion.div
          className="md:w-3/6 w-5/6 pt-8 break-words"
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
          <p className="md:text-lg text-white">
            Passionate Software Engineer with a strong understanding of Fronend
            and Backend technologies, including React JS, Redux, Node.js, and
            Express.js. Experienced in building scalable web applications and
            implementing responsive designs. Proficient in collaborating with
            cross-functional teams to deliver high-quality software solutions
            that meet user requirements. Committed to continuous learning and
            staying updated with the latest industry trends and best practices
            in software development.
          </p>
        </motion.div>
        <motion.div
          className="mt-12"
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
          <Link
            target="_blank"
            type="submit"
            href="https://drive.google.com/file/d/1dm5sVqpcV3RmzHhegYTm0v69rxJnrvDX/view"
          >
            <button className="mb-5 bg-primary h-10 w-28 rounded-sm text-white  hover:border-white font-overpass font-semibold text-sm">
              Get resume
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="flex mt-8"
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
          {socials.map((social) => (
            <Link
              title={social.title}
              href={social.link}
              key={social.title + social.id}
              className="md:w-10 md:h-10 w-5 h-5 text-xl text-white md:mr-0 mr-5"
            >
              <social.icon />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;
