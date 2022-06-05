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
    <div className='flex flex-col items-center mt-20 pt-20 mb-10'>
      <Fade bottom>

      <p className='text-3xl font-extrabold'>Let's connect</p>
       <div className='flex mt-10 text-center'> 
       <a href='https://github.com/neerajram30' target='_blank' className={theme==="dark"?'m-2 md:w-12 md:h-12 w-5 h-5 text-4xl hover:text-black':'m-2 md:w-10 md:h-10 w-5 h-5 hover:text-iconhover text-4xl'}>
      <Github/>
       </a>
       <a href='https://twitter.com/neeraJramachaN2' target='_blank' className='text-4xl m-2 md:w-10 md:h-10 w-5 h-5 hover:text-twitter'>
      <Twitter/>
       </a>
       {/* <a href='https://github.com/neerajram30' target='_blank' className='m-2 md:w-10 md:h-10 w-5 h-5 hover:text-fb'>
      <Facebook/>
       </a> */}

        <a href='https://dev.to/neerajram30' target='_blank' className={theme==="dark"? 'text-4xl m-2 md:w-10 md:h-10 w-5 h-5 hover:text-black':'text-4xl m-2 md:w-10 md:h-10 w-5 h-5 hover:text-iconhover'}>
      <Dev/>
       </a> 

       <a href='https://www.instagram.com/neeraj_ramachandran' target='_blank' className='m-2 md:w-10 md:h-10 w-5 h-5 hover:text-insta text-4xl'>
       <Instagram/>
       </a>
       </div>
      </Fade>
      </div>
      
  )
}

export default Footer