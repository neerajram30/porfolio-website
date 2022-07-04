import React from 'react'
import Github from '../Icons/Github'
import Twitter from '../Icons/Twitter'
import Dev from '../Icons/Dev'
import Instagram from '../Icons/Instagram'

function Footer() {
  return (
    <div className='flex flex-col items-center mt-20 pt-0 pb-10 md:pt-10 dark:shadow-[#eeeeee3d] shadow-inverse'>
      <div className='flex mt-10 text-center md:space-x-1 space-x-8'>
        <a href='https://github.com/neerajram30' target='_blank' className='m-2 md:w-12 md:h-12 w-5 h-5 md:text-3xl text-2xl dark:hover:text-black hover:text-iconhover '>
          <Github />
        </a>
        <a href='https://twitter.com/neeraJramachaN2' target='_blank' className='md:text-3xl text-2xl m-2 md:w-10 md:h-10 w-5 h-5 hover:text-twitter'>
          <Twitter />
        </a>
        {/* <a href='https://github.com/neerajram30' target='_blank' className='m-2 md:w-10 md:h-10 w-5 h-5 hover:text-fb'>
      <Facebook/>
       </a> */}

        <a href='https://dev.to/neerajram30' target='_blank' className='md:text-3xl text-2xl m-2 md:w-10 md:h-10 w-5 h-5 dark:hover:text-black hover:text-iconhover'>
          <Dev />
        </a>

        <a href='https://www.instagram.com/neeraj_ramachandran' target='_blank' className='m-2 md:w-10 md:h-10 w-5 h-5 hover:text-black md:text-3xl text-2xl'>
          <Instagram />
        </a>
      </div>
    </div>

  )
}

export default Footer