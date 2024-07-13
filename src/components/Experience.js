import { LocationMarkerIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import Bubbles from "./Bubbles";

function Experience() {
  const experience = [
    {
      company: "TCS",
      designation: "Assistant System Engineer",
      work: "Frontend developer in TCS AI cloud product team. Developing reusable and scalable components within the React ecosystem, collaborating closely with designers and backend engineers for building cutting edge solutions.",
      experience: "Dec 2022 - Present",
      location: "Kochi",
      website: { display: "tcs.com", link: "https://www.tcs.com/" },
      skills: ["Javascript", "React", "Nextjs", "Redux", "Aws"],
    },
    {
      company: "TCS",
      designation: "Assistant System Engineer Trainee",
      work: "Attended the TCS Initial Learning Program (IPL) at the TCS center in Kochi. It was a great opportunity to gain some industry insights by working alongside an experienced Talent & Development (TD) team. I learned Java and the basics of web development, and even worked on a mini-project that we presented to the TD heads.",
      experience: "Sep 2022 - Nov 2022",
      location: "Kochi",
      website: { display: "tcs.com", link: "https://www.tcs.com/" },
      skills: ["Java", "HTML", "CSS", "Javascript", "PLSQL", "MySQL"],
    },
  ];
  return (
    <div
      className="pt-10 md:pl-20 pl-5 md:pr-20 pr-5 pb-10 text-white w-screen bg-[#0e131a]"
      id="experience"
    >
      {/* <div className=""> */}
      {/* <div className="w-2/5"> */}
      <h2 className="md:text-3xl text-xl font-bold text-white text-center">
        {" "}
        Experience
      </h2>
      {/* </div> */}
      {/* <div className=""> */}
      {/* <ul className="steps steps-vertical flex flex-col md:items-center items-start">
        {experience.map((exp, i) => (
          <li
            key={i}
            className="w-fit md:pl-20 step step-primary after:!text-white before:!text-white before:!w-1"
          >
            <div className="md:ml-[-210px] ml-10 absolute text-md w-48 md:text-end text-start pl-2 md:pl-0 mt-[-80px] md:mt-0">
              {exp.experience}
            </div>
            <div className="flex flex-col items-start md:p-5 p-3 md:w-[500px] w-72 rounded-md shadow-cards mb-5 md:mt-10 mt-20 mr-10">
              <h6 className="md:text-xl font-semibold text-start text-md">
                {exp.company}
              </h6>
              <p className="md:text-lg text-start text-sm">{exp.designation}</p>
              <p className="md:text-sm mt-2 text-start text-xs">{exp.work}</p>
            </div>
          </li>
        ))}
      </ul> */}
      <div className="md:px-20">
        {experience.map((exp, i) => (
          <div className="collapse collapse-plus bg-[#161d27] rounded-none mt-2" key={exp.company + i}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title md:text-xl text-sm font-medium">
              <div className="flex justify-between">
                <p>
                  {exp.designation}
                  {" @ "}
                  {exp.company}
                </p>
                <p className="md:block hidden">{exp.experience}</p>
              </div>
            </div>
            <div className="collapse-content">
              <div className="flex">
                <div className="flex items-center">
                  <LocationMarkerIcon className="size-4" />{" "}
                  <p className="text-sm ml-1">{exp.location}</p>
                </div>
                  
                  <Link href={exp.website.link} className="flex items-center ml-3">
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
                  <p className="ml-1">
                  {exp.website.display}
                  </p>
                  
                  </Link>
              </div>
              <div className="mt-2 md:w-9/12 w-11/12">
                <p>{exp.work}</p>
              </div>
              <div className="mt-3 mb-3">
                <Bubbles data={exp.skills} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default Experience;
