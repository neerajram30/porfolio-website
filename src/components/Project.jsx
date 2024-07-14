import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

function Project(props) {
  const { data, starsDetails, inView, delay} = props;
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
      className="hover:shadow-cards flex md:h-44 h-auto hover:cursor-pointer bg-[#0e131a] mt-5 rounded-lg md:w-5/12 md:mx-5 md:py-0 py-3"
      key={data.title}
      animate={animation}
    >
      <div className="md:w-2/6 w-2/6 h-full flex justify-center items-start md:mt-2 md:pl-0 pl-2">
        <div className="h-fit w-fit shadow-cards p-1">
          <Image src={data.image} width={160} height={70} alt={data.title} />
        </div>
      </div>
      <div className="md:px-2 md:pr-8 py-2 px-4 w-4/6">
        <h6 className="text-xl font-semibold">{data.title}</h6>
        <p className="mt-2 md:text-md text-sm">{data.description}</p>
        <div className="text-xs flex h-8 justify-start items-center">
          <StarIcon className="size-3" />
          <p className="ml-2 font-semibold">
            {starsDetails ? starsDetails : 0}
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
