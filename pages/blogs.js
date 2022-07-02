import React from 'react'
import Blogs from '../Components/Blogs/Blogs'
import Head from 'next/head'
import NavBar from '../Components/NavBar/NavBar'
export default function blogs({post}) {
  return (
    <div className='dark:bg-gradient-to-tr dark:from-[#111827] dark:to-black min-h-screen'>
      <Head>
        <title>Neeraj M R | Blogs</title>
        <meta name="description" content="Neeraj M R Blogs" />
        <meta property="og:title" content="Blogs by Neeraj M R" />
        <meta property="og:description" content="Neeraj M R is kerala based web developer" />
        <meta property="og:url" content="https://neerajram.vercel.app/blogs" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/neeraj.png" />
      </Head>
      <div>
        {/* <NavBar/> */}
        <Blogs data={post}/>
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles?username=neerajram30`)
  const json = await res.json()
  return { props: { post: json } }
}