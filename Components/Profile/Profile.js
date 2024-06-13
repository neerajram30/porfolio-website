import React from "react";
import Github from "../Icons/Github";
import Twitter from "../Icons/Twitter";
import { motion } from "framer-motion";
import Link from "next/link";

function Profile() {
  return (
    <div className="h-auto md:h-screen lg:h-screen bg-white">
      <div className="flex flex-col md:pl-20 pl-10 pt-24 md:items-start items-start mt-10">
        <h1
          className="md:text-5xl text-3xl w-fit font-black font-overpass text-black" 
          id="head"
        >
          Hy, I'm
          <span className="text-primary"> Neeraj MR</span>{" "}
        </h1>
        <div>
          <h6 className="mt-2 md:text-xl text-md font-overpass font-bold text-black">
            {/* ASE at Tata Consultancy Services */}
            Frontend Developer
          </h6>
        </div>
        <div className="flex mt-8">
          <Link
            href="https://github.com/neerajram30"
            className="mr-5 md:w-10 md:h-10 w-5 h-5 dark:hover:text-black text-3xl hover:text-iconhover text-black"
          >
            <Github />
          </Link>

          <Link
            href="https://twitter.com/neeraJramachaN2"
            className="mr-5 md:w-10 md:h-10 w-5 h-5 hover:text-twitter text-3xl text-black"
          >
            <Twitter />
          </Link>
        </div>

        <div className="md:w-4/6 w-5/6 pt-8 break-words">
          <p className="md:text-lg text-black">
            Passionate web developer with a strong understanding of front-end
            development principles. Adept at crafting clean, reusable, and
            performant UI components using React, Redux, and modern JavaScript
            practices.
          </p>
        </div>
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
            type="submit"
            href="https://drive.google.com/file/d/1GbmgU_YQuA5fDJVQBUtyDIoBr56RfeKM/view?usp=sharing"
          >
            <button className="mb-5 bg-primary h-10 w-28 rounded-sm text-white  hover:border-white font-overpass font-semibold text-sm">
              Get resume
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;
