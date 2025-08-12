"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { socials } from "../config/socialLinks";
function Footer() {
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
    <div className="pt-10 md:pl-20 pl-10 md:pr-20 pr-10 pb-10 text-white w-screen" ref={ref}>
      <motion.div 
      className="md:flex justify-between w-full mb-14"
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
        <div className="w-3/4">
          <h6 className="text-2xl font-semibold mb-2">Contact</h6>
          <div>
            <Link
              href="mailto:neerajramachardn30@gmail.com"
              className="text-lg"
            >
              neerajramachandran30@gmail.com
            </Link>
          </div>
          <div>
            <Link href="tel:+918129390516" className="text-lg">
              +91 8129390516
            </Link>
          </div>
        </div>
        <div className="w-1/4 md:mt-0 mt-10">
          <h6 className="text-2xl font-semibold mb-5">Social</h6>
          <div className="flex">
            {socials.map((social) => (
              <Link
                title={social.title}
                href={social.link}
                key={social.title + social.id}
                className="md:w-10 md:h-10 w-5 h-5 text-xl text-white md:mr-0 mr-5"
                target="_blank"
              >
                <social.icon/>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
      <hr className="text-white bg-white" />

      <div className="text-center pt-8">
        <motion.p 
        className="text-xs"
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
        >© Copyright 2024 . Made by Neeraj M R. Powered by Next js</motion.p>
      </div>
    </div>
  );
}

export default Footer;
