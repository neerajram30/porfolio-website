import React from 'react'
import Image from 'next/image'
import profile from '../../images/Profile.jpg'

function About() {
  return (
    <div className='md:mt-40 mt-20'>
      <div className='md:ml-28 ml-8'>
      <h2 className='md:text-4xl text-3xl ml-5 font-bold md:ml-0'>About Me</h2>
      <div className='md:flex md:flex-row flex flex-col items-center'>
      <div className='mt-5 md:w-7/12 w-10/12 md:text-lg break-words'>
      <p>I'm a Btech Computer science student from KTU (Kerala Technical University).
        My interest in learning web technologies started after I joined Btech. 
        My ambition is to become a good Software Engineer and solve some real world problems.
        Curently working on React JS, Next JS, Node JS.
      </p>
      <p>
        Here are some technologies that I'm familar with:

      </p>
      <div className='flex md:pl-10 pt-10 items-center'>
        <ul className='list-disc pl-10'>
          <li>Javascript</li>
          <li>Java</li>
          <li>C++</li>
        </ul>
        <ul className='list-disc pl-10'>
          <li>React</li>
          <li>Nodejs</li>
          <li>MongoDB</li>
        </ul>

      </div>
      </div>
      <div className='flex md:h-64 md:w-64 h-40 w-40 pt-10 md:pl-10 items-center justify-center mr-8 md:ml-10'>
          <Image src={profile} className='rounded-sm'/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default About