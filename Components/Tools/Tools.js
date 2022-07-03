import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tool from './Tool';

function Tools() {

  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const currentlyLearningAnimation = useAnimation();
  const tools = [
    'Java',
    'Javascript',
    'React Js',
    'Next Js',
    'Node Js',
    'Express',
    'MongoDB',
    'Python',
    'Flask',
    'Fast api',
    'PostgreSQL',
    'C',
    'C++',


  ]

  useEffect(() => {
    if (loaded) return;
    if (inView) {
      setLoaded(true);
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      });
      currentlyLearningAnimation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
          delay: 1.1,
        },
      });
    } else {
      animation.start({
        y: "30px",
        opacity: 0,
      });
      currentlyLearningAnimation.start({
        y: "30px",
        opacity: 0,
      });
    }



    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);






  return (
    <div className='mt-16 md:pl-20 pl-10' id='about' ref={ref}>
      <div>
        <motion.h2
          animate={animation}
          className='md:text-3xl text-3xl font-extrabold font-overpass'>
          Familar Technologies
        </motion.h2>
        <div className='md:flex md:flex-row flex flex-col items-center'>
          <div className='mt-5 md:w-1/2 w-10/12 md:text-lg break-words flex flex-wrap mr-1'>
            {console.log(tools)}
            {tools.map((tool, i) =>
              <div className='mt-2 mr-2' key={i} >
                <Tool tool={tool} key={i} delay={i / 30 + 0.05} inView={inView}/>
              </div>
            )}

          </div>
        </div>
        <motion.p className='mt-10 text-lg font-bold'
          animate={currentlyLearningAnimation}
        >I'm currently learning
          <span className='p-1 dark:bg-twitter rounded-sm pl-2 pr-2 text-sm font-semibold ml-4 bg-hcolor text-white font-overpass'> NLP</span>
        </motion.p>
      </div>
    </div>
  )
}

export default Tools