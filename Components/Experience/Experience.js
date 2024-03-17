import React from "react";

function Experience() {
  const experience = [
    {
      company: "Tata Consultancy Services (Kochi)",
      designation: "Assistant System Engineer",
      work: "Worked as UI developer in TCS product team",
      experience: "Dec 2022 - Present",
    },
    {
      company: "Tata Consultancy Services (Kochi)",
      designation: "Assistant System Engineer Trainee",
      work: "Training in Java, SQL, Comminication skills",
      experience: "Sep 2022 - Nov 2022",
    },
  ];
  return (
    <div
      className="pt-16 md:pl-20 pl-10 bg-white flex flex-col justify-center items-center pb-10 text-black"
      id="experience"
    >
      {/* <div className=""> */}
      {/* <div className="w-2/5"> */}
      <h2 className="md:text-3xl text-xl font-extrabold font-overpass">
        {" "}
        Experience
      </h2>
      {/* </div> */}
      {/* <div className=""> */}
        <ul className="steps steps-vertical flex flex-col md:items-center items-start">
          {experience.map((exp) => (
            <>
            <li className="w-full md:pl-20 step step-primary after:!text-white before:!text-white before:!w-1">
              <div className="md:ml-[-210px] ml-10 absolute text-md w-48 md:text-end text-start pl-2 md:pl-0 mt-[-80px] md:mt-0">{exp.experience}</div>
              <div className="flex flex-col items-start md:p-5 p-3 md:w-[500px] w-72 rounded-md shadow-cards mb-5 md:mt-10 mt-20 mr-10">
                <h6 className="md:text-xl font-semibold text-start text-md">{exp.company}</h6>
                <p className="md:text-lg text-start text-sm">{exp.designation}</p>
                <p className="md:text-sm mt-2 text-start text-xs">{exp.work}</p>
                </div>
                
            </li>
            </>
          ))}
        </ul>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default Experience;
