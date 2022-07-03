import React from 'react'
import Github from '../Icons/Github'
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className='pt-20 p-5' id='projects'>

      <div className='flex flex-col items-center'>
        {/* <h2 className='md:text-4xl text-3xl ml-5 font-bold'>Projects</h2> */}
        <div className='flex items-center justify-center'>
          <div className='md:grid md:gap-4 md:grid-cols-2 flex flex-col lg:grid-cols-3'>


            <motion.div
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
              }}>

              <a href='https://github.com/neerajram30/Netflix-UI-clone'
                target='_blank'
              >
                <div className='md:w-72 w-60 h-80 rounded-lg mt-5 dark:shadow-[#00acee3d]  shadow-project dark:bg-transparent shadow-[#eeeeee3d] bg-blogbg'>
                  <div className='flex justify-between'>
                    <div className='w-10 h-10 ml-5 mt-5'>
                      <a className='text-white text-2xl'>
                        <Github />
                      </a>
                    </div>
                    {/* <div className='w-10 h-10 mr-5 mt-5'>
                <a className='text-2xl'>
                <Links/>
                </a>
              </div> */}
                  </div>
                  <div className='ml-5 w-11/12 mr-5 text-white'>
                    <p className='text-xl font-bold mt-10 hover:cursor-pointer font-overpass dark:text-twitter text-white'>Netflix UI Clone</p>
                    <p className='mt-5'>Netflix clone app powered by TMDB database and firebase</p>
                  </div>
                  <div className='flex md:space-x-1 space-x-2 md:mt-12 ml-5 mt-5 text-sm md:mr-2 pr-20 items-start justify-start w-11/12 mr-5' >
                    <p className='dark:bg-twitter rounded-sm pl-2 pr-2 p-0.5 bg-hcolor text-white font-overpass font-semibold'>ReactJS</p>
                    <p className='dark:bg-twitter rounded-sm pl-2 pr-2 p-0.5 bg-hcolor text-white font-overpass font-semibold'>Firebase</p>
                    <p className='dark:bg-twitter rounded-sm pl-2 pr-2 p-0.5 bg-hcolor text-white font-overpass font-semibold'>Javascript</p>
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div
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
              }}>

              <a href='https://github.com/neerajram30/God-s-Eye' target='_blank'
                className=''>
                <div className='md:w-72 w-60 h-80 rounded-lg mt-5 dark:shadow-[#00acee3d]  shadow-project dark:bg-transparent shadow-[#eeeeee3d] bg-blogbg'>
                  <div className='flex justify-between'>
                    <div className='w-10 h-10 ml-5 mt-5'>
                      <a className='text-white text-2xl' href='https://github.com/neerajram30/God-s-Eye'>
                        <Github />
                      </a>
                    </div>
                    {/* <div className='w-10 h-10 mr-5 mt-5'>
                <a className='text-white text-2xl'>
                  <Links/>
                </a>
              </div> */}

                  </div>
                  <div className='ml-5 w-11/12 mr-5'>
                    <p className='text-xl font-bold mt-10 text-white hover:cursor-pointer hover:text-bloghover font-overpass dark:text-twitter'>God's Eye</p>
                    <p className='mt-5 text-white'>Helps police officers to find missing people using technology</p>
                  </div>
                  <div className='flex md:space-x-2 space-x-2 md:mt-12 ml-5 mt-5 text-sm md:mr-2 items-start justify-start text-white' >
                    <p className='dark:bg-twitter rounded-sm pl-2 pr-2 p-0.5 bg-hcolor text-white font-overpass font-semibold'>Python</p>
                    <p className='dark:bg-twitter rounded-sm pl-2 pr-2 p-0.5 bg-hcolor text-white font-overpass font-semibold'>Flask</p>
                    <p className='dark:bg-twitter rounded-sm pl-2 pr-2 p-0.5 bg-hcolor text-white font-overpass font-semibold'>HTML</p>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects