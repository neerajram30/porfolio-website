"use client";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Bubbles from "../assets/Bubbles";

interface WebsiteI {
  link: string;
  display: string;
}

interface DataI {
  designation: string;
  company: string;
  experience: string;
  location: string;
  work: string[];
  skills: string[];
  website: WebsiteI;
}

interface ExperienceI {
  data: DataI;
}

const item: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

function Experience({ data }: ExperienceI) {
  return (
    <motion.div variants={item} className="group flex gap-3 md:gap-6">
      {/* timeline column: dot + vertical connector */}
      <div className="flex flex-col items-center shrink-0 pt-1.5">
        <span className="w-3 h-3 rounded-full bg-hcolor ring-2 ring-hcolor/30 shrink-0" />
        <span className="w-0.5 bg-hcolor/30 flex-1 mt-1.5 group-last:hidden" />
      </div>

      {/* card */}
      <div className="flex-1 bg-[#161d27] rounded-lg p-4 md:p-5 border border-white/5 hover:border-hcolor/20 transition-colors duration-300 mb-6 group-last:mb-0">
        {/* header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-3">
          <h3 className="font-bold text-base md:text-lg leading-snug">
            {data.designation}{" "}
            <span className="text-hcolor">@ {data.company}</span>
          </h3>
          <span className="text-gray-400 text-xs md:text-sm shrink-0 md:ml-4">
            {data.experience}
          </span>
        </div>

        {/* location + website */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <LocationMarkerIcon className="size-4 shrink-0" />
            {data.location}
          </span>
          <Link
            href={data.website.link}
            target="_blank"
            className="flex items-center gap-1 hover:text-hcolor transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                clipRule="evenodd"
              />
            </svg>
            {data.website.display}
          </Link>
        </div>

        {/* bullet points */}
        <ul className="space-y-1.5 mb-4 md:w-10/12">
          {data.work.map((point, i) => (
            <li key={i} className="flex gap-2 text-xs md:text-sm text-gray-300 leading-relaxed">
              <span className="text-hcolor mt-0.5 shrink-0">▹</span>
              {point}
            </li>
          ))}
        </ul>

        {/* skills */}
        <Bubbles data={data.skills} />
      </div>
    </motion.div>
  );
}

export default Experience;
