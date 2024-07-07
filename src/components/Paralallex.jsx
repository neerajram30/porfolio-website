import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
function Paralallex({ backgroundImage, backgroundColor, children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="h-64 bg-blue-500 flex items-center justify-center"
    >
      <h1 className="text-white text-2xl">Scroll to Animate</h1>
    </motion.div>
  )
}

export default Paralallex
