import React from 'react'
import Image from 'next/image'
import profileImg from '../../images/Profile.jpg'
import Fade from 'react-reveal'
import Github from '../Icons/Github'
import Twitter from '../Icons/Twitter'
import Dev from '../Icons/Dev'
function Profile() {
  return (
    <div>
      <div className='flex flex-col md:pl-20 pl-10 pt-20 md:items-start items-start mt-10'>
        
        

        <p className='md:text-2xl text-xl'>Hi, I am</p>
        
        <Fade top duration={4000}>
        <h1 className='md:text-7xl text-5xl font-extrabold'>Neeraj M R</h1>

        <p className='md:text-6xl text-4xl mt-2 font-extrabold'>I'm web developer.</p>
        <div className='md:w-5/12 w-5/6 pt-10 break-words'>
          <p className='md:text-xl'>
            I am a Btech student from kerala, curretly learning web development
            and doing some side projects.  Node js, React js, Mongodb is my favourite
            stack. 
          </p>
        </div>
        <button type='submit' className='mt-10 h-10 bg-red-700 rounded-sm w-32 hover:text-white'>
          Get Resume
        </button>
        <div className='flex mt-8'>
        <a href='https://github.com/neerajram30' target='_blank' className='mr-5'>
      <Github/>
       </a>
       <a href='https://github.com/neerajram30' target='_blank' className='mr-5'>
      <Twitter/>
       </a>
       <a href='https://github.com/neerajram30' target='_blank' className='mr-5'>
      <Dev/>
       </a>
       

        </div>
        </Fade>
      </div>

</div>
  )
}

export default Profile