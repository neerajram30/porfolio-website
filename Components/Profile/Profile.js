import React from 'react'
import Github from '../Icons/Github'
import Twitter from '../Icons/Twitter'
import { motion } from "framer-motion";

function Profile() {
  return (
    <div >
      <div className='flex flex-col md:pl-20 pl-10 pt-24 md:items-start items-start mt-10'>
        <h1 className='md:text-5xl text-3xl w-fit font-black font-overpass' id='head'>Hy, I'm<span className='dark:text-twitter text-hcolor'> Neeraj MR</span> </h1>
        <div className='flex mt-8'>

          <a href='https://github.com/neerajram30' target='_blank' className='mr-5 md:w-10 md:h-10 w-5 h-5 dark:hover:text-black text-3xl hover:text-iconhover'>
            <Github />
          </a>

          <a href='https://twitter.com/neeraJramachaN2' target='_blank' className='mr-5 md:w-10 md:h-10 w-5 h-5 hover:text-twitter text-3xl'>
            <Twitter />
          </a>


        </div>

        <div className='md:w-4/6 w-5/6 pt-8 break-words ' delay={0.5}>


          <motion.p className='dark:text-darkdesc md:text-lg'
            transition={{
              duration: 0.3,
              delay: 0,
              type: "tween",
            }}
            initial={{
              y: "30px",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
          >
            I am a <span className='dark:text-twitter font-black text-hcolor'>Full Stack</span> web developer,
            <span className='dark:text-twitter font-black text-hcolor'> Machine Learning </span> enthusiast, and most importantly <span className='dark:text-twitter font-black text-hcolor'>Opensource</span> lover.
            I'm currently learning <span className='dark:text-twitter font-black text-hcolor'>NLP</span> and working on solving some problems using it


          </motion.p>




          <motion.p className='dark:text-darkdesc md:text-lg pt-8'
            transition={{
              duration: 0.3,
              delay: 0.1,
              type: "tween",
            }}
            initial={{
              y: "30px",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
          >
            I had explored web development technologies and libraries/frameworks like <span className='dark:text-twitter font-black text-hcolor'>React Js</span>,
            <span className='dark:text-twitter font-black text-hcolor'> Next Js</span>, <span className='dark:text-twitter font-black text-hcolor'>Express</span>. I am curretly learning to develop full fledged api using
            <span className='dark:text-twitter font-black text-hcolor'> Python Flask </span>framework
          </motion.p>



          <motion.p className='dark:text-darkdesc md:text-lg pt-8'
            transition={{
              duration: 0.3,
              delay: 0.2,
              type: "tween",
            }}
            initial={{
              y: "30px",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
          >
            I'm pursuing a<span className='dark:text-twitter font-black text-hcolor'> Btech </span>computer science degree from
            <span className='dark:text-twitter font-black text-hcolor'> College Of Engineering Cherthala </span>and
            expected to pass out in<span className='dark:text-twitter font-black text-hcolor'> July 2022</span>. I had participated in Technical and Non technical
            events at collge and made a good networks in the college campus

          </motion.p>
          <motion.p className='dark:text-darkdesc md:text-lg pt-8'
            transition={{
              duration: 0.3,
              delay: 0.3,
              type: "tween",
            }}
            initial={{
              y: "30px",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
          >
            I regularly pushes code to<span className='dark:text-twitter font-black text-hcolor'><a href='https://github.com/neerajram30' target='_blank'> github </a></span> and write blog post on
            <span className='dark:text-twitter font-black text-hcolor'><a href='https://dev.to/neerajram30' target='_blank'> dev.to </a></span>
          </motion.p>
        </div>

        <motion.div
          className='mt-12'
          transition={{
            duration: 0.3,
            delay: 0.5,
            type: "tween",
          }}
          initial={{
            y: "30px",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
        >
          <a target='_blank' type='submit' href='https://drive.google.com/file/d/1zj32yY-f2LRf5ZoSwexWQ7JtXD6mkUnm/view?usp=sharing'>
            <button className='bg-btn h-10 w-28 rounded-sm text-white hover:bg-btn-hover hover:border-white font-overpass font-semibold text-sm'>
              Get resume
            </button>

          </a>
        </motion.div>





      </div>

    </div>
  )
}

export default Profile