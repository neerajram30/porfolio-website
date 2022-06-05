import React from 'react'
import Image from 'next/image'
import profile from '../../images/Profile.jpg'
import Fade  from 'react-reveal'
import js from '../../assets/js.svg'
import reacticon from '../../assets/react.svg'
import node from '../../assets/node.svg'
import java from '../../assets/java.svg'
import mongo from '../../assets/mongodb.svg'
import cplus from '../../assets/c++.svg'
// import next from '../../assets/nextjs.svg'
import c from '../../assets/c.svg'

function About() {
  return (
    <div className='md:pt-20 md:mt-20 mt-20' id='about'>
        <Fade bottom>
      <div className='md:ml-28'>

      <h2 className='md:text-4xl text-3xl ml-5 font-bold md:ml-0'>About Me</h2>
      <div className='md:flex md:flex-row flex flex-col items-center'>
      <div className='mt-5 md:w-7/12 w-10/12 md:text-lg break-words'>
      <p>I'm a Btech Computer science student from KTU (Kerala Technical University).
        My interest in learning web technologies started after I joined Btech. 
        My ambition is to become a good Software Engineer and solve some real world problems.
        Curently working on React JS, Next JS, Node JS.
      </p>
      <p className='pt-10 font-medium text-pcolor'>
        Familar tools

      </p>
      <div className='flex justify-start pt-5 items-center'>
        <div>
        <Image src={js} alt="javascript" className='ml-10'/>
        </div>
        <div className='pl-2'>

        <Image src={reacticon} alt="react" className='ml-10'/>
        </div>
        <div className='pl-2'>
        <Image src={node} alt="node"/>

        </div>
        <div className='pl-2'>
        <Image src={java} alt="java"/>

        </div>

        <div className='pl-2'>
        <Image src={mongo} alt="mongo db"/>

        </div>
        <div className='pl-2'>

        <Image src={cplus} alt="c++"/>
        </div>
        <div className='pl-2'>

        <Image src={c} alt="c"/>
        </div >
        {/* <div className='pl-2'>

        <Image src={next} alt="next"/>
        </div> */}



      </div>
      </div>
      <div className='flex md:h-64 md:w-64 h-40 w-40 pt-10 md:pl-10 items-center justify-center md:ml-10'>
          <Image src={profile} className='rounded-sm' alt='profile'/>
      </div>
      </div>
      </div>
        </Fade>
    </div>
  )
}

export default About