import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import Github from '../Icons/Github'
import Twitter from '../Icons/Twitter'
import Facebook from '../Icons/Facebook'
import Dev from '../Icons/Dev'
import Instagram from '../Icons/Instagram'
import { Fade } from 'react-reveal'

function Footer() {
  return (
    <div className='flex flex-col items-center mt-20 mb-10'>
      <Fade bottom>

      <p className='text-3xl font-extrabold'>Let's connect</p>
       <div className='flex mt-10'> 
       <a href='https://github.com/neerajram30' target='_blank' className='m-2'>
      <Github/>
       </a>
       <a href='https://github.com/neerajram30' target='_blank' className='m-2'>
      <Twitter/>
       </a>
       <a href='https://github.com/neerajram30' target='_blank' className='m-2'>
      <Facebook/>
       </a>
       <a href='https://github.com/neerajram30' target='_blank' className='m-2'>
      <Dev/>
       </a>
       <a href='https://github.com/neerajram30' target='_blank' className='m-2'>
      <Instagram/>
       </a>
      </div>
      </Fade>
       </div>
  )
}

export default Footer