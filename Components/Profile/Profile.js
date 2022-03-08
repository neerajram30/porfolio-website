import React from 'react'
import Image from 'next/image'
import profileImg from '../../images/Profile.jpg'
function Profile() {
  return (
    <div>
      <div className='flex flex-col pl-20 pt-20 md:items-start items-center mt-10'>
        <p className='text-2xl'>Hi, I am</p>
        <h1 className='md:text-7xl text-4xl font-extrabold'>Neeraj M R</h1>
        <p className='md:text-6xl text-xl mt-2 font-extrabold'>I'm web developer.</p>
        <div className='w-5/12 pt-10 break-words'>
          <p className='text-xl'>
            I am a Btech student from kerala, curretly learning web development
            and doing some side projects.  Node js, React js, Mongodb is my favourite
            stack. 
          </p>
        </div>
        <button type='button' className='mt-10 h-10'>
          Get Resume
        </button>
      </div>

</div>
  )
}

export default Profile