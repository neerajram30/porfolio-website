import React from 'react'
import Image from 'next/image'
import profileImg from '../../images/Profile.jpg'
function Profile() {
  return (
    <div>
      <div className='flex flex-col pl-5 pt-5 md:items-start items-center'>
        <div className='md:w-64 md:h-72 w-48 h-48'>
      <Image src={profileImg}  
       alt="Profile picture"
       className='rounded-full'
      />
        </div>

        <h1 className='md:text-5xl text-4xl pl-2'>Neeraj M R</h1>
        <p className='pl-2 md:text-2xl text-xl mt-2'>Web Developer</p>
      </div>

</div>
  )
}

export default Profile