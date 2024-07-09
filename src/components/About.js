import Tools from "./Tools/Tools";

function About() {
  const about = [
    "Software engineer with 1+ years of industrial experience",
    "1+ year of experience working with one of the major web front-end library React js",
    "1 year of experience with Material UI",
    "Experience in working with AWS services",
  ];
  return (
    <div
      className="pt-10 md:pl-20 pl-10 md:pr-20 pr-10 pb-10 text-white w-screen bg-[#0e131a]"
      id="about"
    >
      <div className="text-center">
        <h2 className="md:text-3xl text-2xl font-bold"> About</h2>
      </div>
      <div className="md:flex mt-10 min-h-96">
        <div className="md:justify-around md:w-1/2 md:pr-32">
          <h2 className="md:text-2xl text-xl font-semibold">About me</h2>
          {/* <ul className="mt-2 pr-10">
          {about.map((item, i) => (
            <li className="flex items-center md:text-lg" key={i}>
              {item}
            </li>
          ))}
        </ul> */}
          <p className="mt-5 text-lg">
            Passionate web developer with a strong understanding of front-end
            development principles. Adept at crafting clean, reusable, and
            performant UI components using React, Redux, and modern JavaScript
            practices.
          </p>
        </div>
        <div className="md:w-1/2 md:pr-10 mt-5 md:mt-0">
          <Tools />
        </div>
      </div>
    </div>
  );
}

export default About;
