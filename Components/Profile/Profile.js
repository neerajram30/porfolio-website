import React from 'react'
import Github from '../Icons/Github'
import Twitter from '../Icons/Twitter'
import { motion } from "framer-motion";

function Profile() {
  return (
    <div >
      <div className='flex flex-col md:pl-20 pl-10 pt-24 md:items-start items-start mt-10'>
        <h1 className='md:text-5xl text-3xl w-fit font-black font-overpass' id='head'>Hy, I'm<span className='dark:text-twitter text-hcolor'> Neeraj MR</span> </h1>
        <div>
        <h6 className='mt-2 md:text-xl text-md font-overpass font-bold'>
        ASE at Tata Consultancy Services
        </h6>
        </div>
        <div className='flex mt-8'>

          <a href='https://github.com/neerajram30' target='_blank' className='mr-5 md:w-10 md:h-10 w-5 h-5 dark:hover:text-black text-3xl hover:text-iconhover'>
            <Github />
          </a>

          <a href='https://twitter.com/neeraJramachaN2' target='_blank' className='mr-5 md:w-10 md:h-10 w-5 h-5 hover:text-twitter text-3xl'>
            <Twitter />
          </a>


        </div>

        <div className='md:w-4/6 w-5/6 pt-8 break-words' delay={0.5}>

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
            <span className='dark:text-twitter font-black text-hcolor'>Full Stack</span> web developer, specialized in 
            <span className='dark:text-twitter font-black text-hcolor'> MERN Stack </span>. I like to use and promote <span className='dark:text-twitter font-black text-hcolor'> Opensource </span> softwares and take part in opensource communities.


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
            <span className='dark:text-twitter font-black text-hcolor'> Next Js</span>, <span className='dark:text-twitter font-black text-hcolor'>Express</span>. I am currently working as a 
            <span className='dark:text-twitter font-black text-hcolor'> UI developer </span> at TCS.
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
            I pursuied <span className='dark:text-twitter font-black text-hcolor'> Btech </span>computer science degree from
            <span className='dark:text-twitter font-black text-hcolor'> College Of Engineering Cherthala </span>and
             passed out in<span className='dark:text-twitter font-black text-hcolor'> July 2022</span>. I had participated in Technical and Non technical
            events at college and made a good networks in the college campus.

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
            I regularly pushes code to<span className='dark:text-twitter font-black text-hcolor'><a href='https://github.com/neerajram30' target='_blank'> github </a></span> and occasionally write blog post on
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
          <a target='_blank' type='submit' href='https://docs.google.com/document/d/1yx3aN8A6M-x4-zhUWtQqO-2D34otXFMWeiAs2qbwAKU/edit?usp=sharing'>
            <button className='dark:bg-btn bg-hcolor h-10 w-28 rounded-sm text-white dark:hover:bg-btn-hover hover:bg-hdcolor hover:border-white font-overpass font-semibold text-sm'>
              Get resume
            </button>

          </a>
        </motion.div>





      </div>

    </div>
  )
}

export default Profile
