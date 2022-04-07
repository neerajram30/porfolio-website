import React from 'react'
import Fade from 'react-reveal'
import Github from '../Icons/Github'
import Link from '../Icons/Link'

function Projects() {
  return (
    <div className='mt-44 pt-20' id='projects'>
      <Fade bottom>

      <div className='flex flex-col items-center'>
        <h2 className='md:text-4xl text-3xl ml-5 font-bold'>Projects</h2>
        <div className='flex items-center justify-center'>
        <div className='md:grid md:gap-4 md:grid-cols-3 mt-20 flex flex-col items-center'>
            <div className='md:w-72 w-3/4 h-80 border-2 rounded-lg'>
              <div className='flex justify-between'>
                <div className='w-10 h-10 ml-5 mt-5'>
                <a>
                  <Github/>
                </a>
                </div>
                <div className='w-10 h-10 mr-5 mt-5'>
                <a>
                  <Link/>
                </a>
                </div>
          
              </div>
              <div className='ml-5 w-11/12 mr-5'>
                <p className='text-xl font-bold mt-10'>Netflix clone using firebase</p>
                <p className='mt-5'>Netflix clone app powered by TMDB database and firebase</p> 
              </div>
              <div className='flex md:space-x-4 space-x-2 md:mt-12 ml-5 mt-5 md:text-base text-sm md:mr-2 pr-20 items-start justify-start' >
                <p>ReactJS</p>
                <p>Firebase</p>
                <p>Javascript</p>
              </div>
            </div>            
            
        </div>
        </div>
      </div>
      </Fade>
    </div>
  )
}

export default Projects