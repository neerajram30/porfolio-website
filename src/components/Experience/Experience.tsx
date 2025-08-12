"use client";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Bubbles from "../assets/Bubbles";
import { useAnimation, motion } from "framer-motion";

interface WebsiteI {
  link: string;
  display: string;
}

interface DataI {
  designation: string;
  company: string;
  experience: string;
  location: string;
  work: string;
  skills: string[];
  website: WebsiteI;
}

interface ExperienceI {
  data: DataI;
  index: number;
  delay: number;
  inView?: boolean;
}

function Experience(props: ExperienceI) {
  const { data, index, delay, inView } = props;
  const animation = useAnimation();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (loaded) return;
    if (props.inView) {
      setLoaded(true);
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.2,
          delay: delay,
        },
      });
    } else {
      animation.start({
        y: "200px",
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.div
      className="collapse collapse-plus bg-[#161d27] rounded-none mt-2"
      //   key={data.company + index}
      animate={animation}
    >
      <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
      <div className="collapse-title md:text-xl text-sm font-medium">
        <div className="flex justify-between">
          <p>
            {data.designation}
            {" @ "}
            {data.company}
          </p>
          <p className="md:block hidden">{data.experience}</p>
        </div>
      </div>
      <div className="collapse-content">
        <div className="flex">
          <div className="flex items-center">
            <LocationMarkerIcon className="size-4" />{" "}
            <p className="text-sm ml-1">{data.location}</p>
          </div>

          <Link href={data.website.link} className="flex items-center ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="ml-1">{data.website.display}</p>
          </Link>
        </div>
        <div className="mt-2 md:w-9/12 w-11/12">
          <p>{data.work}</p>
        </div>
        <div className="mt-3 mb-3">
          <Bubbles data={data.skills} />
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
