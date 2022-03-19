import React from 'react'

function Projects() {
  return (
    <div className='mt-20'>
      <div className='flex flex-col items-center'>
        <h2 className='md:text-4xl text-3xl ml-5 font-bold'>Projects</h2>
        <div className='flex items-center justify-center'>
        <div className='grid gap-4 grid-cols-3 grid-rows-3 mt-20'>
            <div className='w-72 h-72 border-2 rounded-lg'>
              <div>icons</div>
              <div className='ml-5 w-11/12'>
                <p className='text-xl font-bold mt-10'>Netflix clone using firebase</p>
                <p className='mt-5'>Netflix clone app powered by TMDB database and firebase</p> 
              </div>
              <div className='flex space-x-4 mt-12 ml-5'>
                <p>React JS</p>
                <p>Firebase</p>
                <p>Javascript</p>
              </div>
            </div>

  
            
            
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects