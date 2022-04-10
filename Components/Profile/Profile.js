import React from 'react'
import Image from 'next/image'
import profileImg from '../../images/Profile.jpg'
import Fade from 'react-reveal'
import Github from '../Icons/Github'
import Twitter from '../Icons/Twitter'
import Dev from '../Icons/Dev'

function Profile({theme}) {
  return (
    <div>
      console.log(theme);
      <div className='flex flex-col md:pl-20 pl-10 pt-20 md:items-start items-start mt-10'>

        

        <p className={ theme ==="dark"?'text-hicolor md:text-2xl text-xl':'md:text-2xl text-xl text-pcolor'}>Hi, I am</p>
        
        <Fade top duration={4000}>
        <h1 className='md:text-7xl text-4xl w-fit font-extrabold'>Neeraj M R.</h1>

        <p className={theme === "dark" ?'md:text-6xl text-3xl mt-2 font-extrabold w-fit text-hdcolor':'md:text-6xl text-3xl mt-2 font-extrabold w-fit text-hcolor'}>I'm web developer.</p>
        <div className='md:w-5/12 w-5/6 pt-10 break-words'>
          <p className={theme ==="dark"?'md:text-xl text-darkdesc':'md:text-xl'}>
            I am a Btech student from kerala, curretly learning web development
            and doing some side projects.  Node js, React js, Mongodb is my favourite
            stack. 
          </p>
        </div>
        <button type='submit' className='mt-10 h-10 bg-hover rounded-sm w-32 text-white hover:bg-btn'>
          Get Resume
        </button>
        <div className='flex mt-8'>
        <a href='https://github.com/neerajram30' target='_blank' className='mr-5 md:w-10 md:h-10 w-5 h-5'>
      <Github/>
       </a>
       <a href='https://github.com/neerajram30' target='_blank' className='mr-5 md:w-10 md:h-10 w-5 h-5'>
      <Twitter/>
       </a>
       <a href='https://github.com/neerajram30' target='_blank' className='mr-5 md:w-10 md:h-10 w-5 h-5'>
      <Dev/>
       </a>
       

        </div>
        </Fade>
      </div>

</div>
  )
}

export default Profile