import React from 'react'
import Fade from 'react-reveal'
import Github from '../Icons/Github'
import Links from '../Icons/Link'


function Projects({theme}) {
  return (
    <div className='pt-20' id='projects'>

      <div className='flex flex-col items-center'>
        {/* <h2 className='md:text-4xl text-3xl ml-5 font-bold'>Projects</h2> */}
        <div className='flex items-center justify-center'>
        <div className='md:grid md:gap-4 md:grid-cols-3 flex flex-col'>
            
            <a href='https://github.com/neerajram30/Netflix-UI-clone' target='_blank'
            >
            <div className={theme==="dark"?'md:w-72 w-60 h-80 rounded-lg mt-5 bg-blogdark shadow-lg':'md:w-72 w-60 h-80 rounded-lg mt-5 bg-blogbg shadow-lg'}>
              <div className='flex justify-between'>
                <div className='w-10 h-10 ml-5 mt-5'>
                <a className='text-white text-2xl'>
                  <Github/>
                </a>
                </div>
                <div className='w-10 h-10 mr-5 mt-5'>
                <a className='text-white text-2xl'>
                  <Links/>
                </a>
                </div>
          
              </div>
              <div className='ml-5 w-11/12 mr-5'>
                <p className='text-xl font-bold mt-10 text-white hover:cursor-pointer hover:text-bloghover'>Netflix clone using firebase</p>
                <p className='mt-5 text-white'>Netflix clone app powered by TMDB database and firebase</p> 
              </div>
              <div className='flex md:space-x-4 space-x-2 md:mt-12 ml-5 mt-5 md:text-base text-sm md:mr-2 pr-20 items-start justify-start text-white' >
                <p>ReactJS</p>
                <p>Firebase</p>
                <p>Javascript</p>
              </div>
            </div>
            </a>

            <a href='https://github.com/neerajram30/God-s-Eye' target='_blank'
            >
            <div className={theme==="dark"?'md:w-72 w-60 h-80 rounded-lg mt-5 bg-blogdark shadow-lg':'md:w-72 w-60 h-80 rounded-lg mt-5 bg-blogbg shadow-lg'}>
              <div className='flex justify-between'>
                <div className='w-10 h-10 ml-5 mt-5'>
                <a className='text-white text-2xl' href='https://github.com/neerajram30/God-s-Eye'>
                  <Github/>
                </a>
                </div>
                <div className='w-10 h-10 mr-5 mt-5'>
                <a className='text-white text-2xl'>
                  <Links/>
                </a>
                </div>
          
              </div>
              <div className='ml-5 w-11/12 mr-5'>
                <p className='text-xl font-bold mt-10 text-white hover:cursor-pointer hover:text-bloghover'>God's Eye</p>
                <p className='mt-5 text-white'>Helps police officers to find missing people using technology</p> 
              </div>
              <div className='flex md:space-x-4 space-x-2 md:mt-12 ml-5 mt-5 md:text-base text-sm md:mr-2 pr-20 items-start justify-start text-white' >
                <p>Python</p>
                <p>Flask</p>
                <p>HTML</p>
              </div>
            </div>
            </a>


          

      
            
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects