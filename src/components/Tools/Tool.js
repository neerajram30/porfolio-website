import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Tool (props) {
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
          delay: props.delay,
        },
      });
    } else {
      animation.start({
        y: "30px",
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.inView]);

  return (
    <div className="text-sm font-semibold font-overpass">
      <motion.p className='rounded-2xl bg-primary text-white px-5 py-2'
        animate={animation}
      >{props.tool}
      </motion.p>
    </div>
  );
}
