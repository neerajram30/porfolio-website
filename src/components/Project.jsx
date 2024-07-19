import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import LinkArrow from "./Icons/LinkArrow";
import Link from "next/link";
import Github from "./Icons/Github";

function Project(props) {
  const { data, starsDetails, inView, delay } = props;
  const [loaded, setLoaded] = useState(false);
  const animation = useAnimation();

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
        y: "30px",
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <motion.div
      className="hover:shadow-cards flex md:h-48 h-auto hover:cursor-pointer bg-[#0e131a] mt-5 rounded-lg md:w-5/12 md:mx-5 md:py-2 py-3"
      key={data.title}
      animate={animation}
    >
      <div className="md:w-2/6 w-2/6 h-full flex justify-center items-start md:pt-8 pl-3 md:block hidden">
        <div className="h-fit w-fit shadow-cards p-1">
          <Image src={data.image} width={160} height={70} alt={data.title} />
        </div>
      </div>
      <div className="md:px-2 md:pr-8 py-3 px-6 md:w-4/6 w-full">
        <div className="flex items-center">
          <h6 className="text-xl font-semibold">{data.title}</h6>
          <Link className="ml-4" href={data.link}>
            <LinkArrow classNames="size-4 hover:scale-105 transition-all duration-500" />
          </Link>
          <Link className="ml-3 hover:scale-105 transition-all duration-500 text-sm" href={data.github}>
            <Github/>
          </Link>
        </div>
        <p className="md:mt-2 mt-5 text-md">{data.description}</p>
        <div className="text-xs flex h-8 justify-start items-center mt-2 md:mt-0">
          <StarIcon className="size-3" />
          <p className="ml-2 font-semibold">
            {starsDetails && starsDetails[data.repo]}
          </p>
        </div>
        <div className="flex md:mt-0 mt-1">
          <Bubbles data={data.technologies} />
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
