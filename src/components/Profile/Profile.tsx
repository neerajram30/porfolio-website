"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { socials } from "../config/socialLinks";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

function Profile() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="h-screen md:h-screen lg:h-screen w-screen" ref={ref}>
      <motion.div
        className="flex flex-col md:pl-52 pl-10 pt-24 md:items-start items-start mt-10"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          className="md:text-5xl text-3xl w-fit font-black font-overpass text-white"
          id="head"
          variants={item}
        >
          <span>{"Hy, I'm "}</span>
          <span className="text-primary">Neeraj MR</span>
        </motion.h1>

        <motion.h6
          className="mt-2 md:text-xl text-md font-bold text-white"
          variants={item}
        >
          Fullstack Developer · React, Next.js & TypeScript
        </motion.h6>

        <motion.p
          className="md:w-3/6 w-5/6 pt-8 break-words md:text-lg text-white"
          variants={item}
        >
          Fullstack Developer with 3.7 years of experience building web
          applications using React, Next.js, and TypeScript. Specialized in
          frontend architecture, performance optimization, responsive design,
          and REST API integrations — with a proven track record of delivering
          high-performance, accessible user experiences at scale.
        </motion.p>

        <motion.div className="mt-12" variants={item}>
          <Link
            target="_blank"
            type="submit"
            href="https://drive.google.com/file/d/1dm5sVqpcV3RmzHhegYTm0v69rxJnrvDX/view"
          >
            <button className="mb-5 bg-primary h-10 w-28 rounded-sm text-white hover:border-white font-overpass font-semibold text-sm">
              Get resume
            </button>
          </Link>
        </motion.div>

        <motion.div className="flex mt-8" variants={item}>
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
      </motion.div>
    </div>
  );
}

export default Profile;
