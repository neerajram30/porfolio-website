import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import Github from '../Icons/Github'
import Twitter from '../Icons/Twitter'
import Facebook from '../Icons/Facebook'
import Dev from '../Icons/Dev'
import Instagram from '../Icons/Instagram'
import { Fade } from 'react-reveal'
import { theme } from '../../tailwind.config'

function Footer({theme}) {
  return (
    <div className='flex flex-col items-center mt-20 pt-10 pb-10 md:dark:shadow-[#eeeeee3d] shadow-inverse'>
       <div className='flex mt-10 text-center'> 
       <a href='https://github.com/neerajram30' target='_blank' className={theme==="dark"?'m-2 md:w-12 md:h-12 w-5 h-5 text-3xl hover:text-black':'m-2 md:w-10 md:h-10 w-5 h-5 hover:text-iconhover text-3xl'}>
      <Github/>
       </a>
       <a href='https://twitter.com/neeraJramachaN2' target='_blank' className='text-3xl m-2 md:w-10 md:h-10 w-5 h-5 hover:text-twitter'>
      <Twitter/>
       </a>
       {/* <a href='https://github.com/neerajram30' target='_blank' className='m-2 md:w-10 md:h-10 w-5 h-5 hover:text-fb'>
      <Facebook/>
       </a> */}

        <a href='https://dev.to/neerajram30' target='_blank' className={theme==="dark"? 'text-3xl m-2 md:w-10 md:h-10 w-5 h-5 hover:text-black':'text-3xl m-2 md:w-10 md:h-10 w-5 h-5 hover:text-iconhover'}>
      <Dev/>
       </a> 

       <a href='https://www.instagram.com/neeraj_ramachandran' target='_blank' className='m-2 md:w-10 md:h-10 w-5 h-5 hover:text-black text-3xl'>
       <Instagram/>
       </a>
       </div>
      </div>
      
  )
}

export default Footer