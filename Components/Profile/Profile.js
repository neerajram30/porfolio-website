import React from 'react'
import Image from 'next/image'
import profileImg from '../../images/Profile.jpg'
import Fade from 'react-reveal'
import Github from '../Icons/Github'
import Twitter from '../Icons/Twitter'
import Dev from '../Icons/Dev'
import AnimatedText from 'react-animated-text-content';

function Profile({theme}) {
  return (
    <div >
      <div className='flex flex-col md:pl-20 pl-10 pt-20 md:items-start items-start mt-10'>
        <h1 className='md:text-5xl text-3xl w-fit font-black' id='head'>Hy, I'm<span className='text-twitter'> Neeraj MR</span> </h1>


        <div className='md:w-4/6 w-5/6 pt-10 break-words'>
        <p className={theme ==="dark"?'md:text-xl text-darkdesc':'md:text-lg'}>
            I am a Full Stack web developer working on individual projects. I'
          </p>
          <br/>
          <br/>
          <p className={theme ==="dark"?'md:text-xl text-darkdesc':'md:text-lg'}>
            I am a Btech student who is passonate about exploring new technologies and 
            building useful outcomes from it. 
          </p>
        </div>
        <a target='_blank'  type='submit' className='mt-10' href='https://drive.google.com/file/d/1zj32yY-f2LRf5ZoSwexWQ7JtXD6mkUnm/view?usp=sharing'>
          <button className='bg-pcolor h-10 w-28 rounded-sm text-white hover:bg-rdhover hover:border-white'>
          Get Resume
          </button>

        </a> 
        <div className='flex mt-8'>
          
        <a href='https://github.com/neerajram30' target='_blank' className={theme=="dark"?'mr-5 md:w-10 md:h-10 w-5 h-5 hover:text-black text-3xl':'mr-5 md:w-10 md:h-10 w-5 h-5 text-3xl hover:text-iconhover'}>
      <Github/>
       </a>
          
       <a href='https://twitter.com/neeraJramachaN2' target='_blank' className='mr-5 md:w-10 md:h-10 w-5 h-5 hover:text-twitter text-3xl'>
      <Twitter/>
       </a>
       <a href='https://dev.to/neerajram30' target='_blank' className={theme=="dark"?'text-3xl mr-5 md:w-10 md:h-10 w-5 h-5 hover:text-black':'text-3xl mr-5 md:w-10 md:h-10 w-5 h-5 hover:text-iconhover'}>
      <Dev/>
       </a>
       

        </div>
      </div>

</div>
  )
}

export default Profile