import ArrowRight from "../Icons/ArrowRight";

function About() {
  const about = [
    "Software engineer with 1+ years of industrial experience",
    "1+ year of experience working with one of the major web front-end library React js",
    "1 year of experience with Material UI",
    "Experience in working with AWS services",

];
  return (
    <div className="pt-16 md:pl-20 pl-10 pb-16 text-black" id="about">
      <div className="md:flex md:justify-around">
        <div className="w-2/5">
        <h2 className="md:text-3xl text-xl font-extrabold font-overpass">
          {" "}
          About Me
        </h2>
        </div>
        <ul className="w-3/5">
          {about.map((item, i) => (
            <li className="flex items-center md:text-lg " key={i}>
              
              {item}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default About;
