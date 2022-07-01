import React from 'react'
import Blogs from '../Components/Blogs/Blogs'
import Link from 'next/link'
import Projects from '../Components/Projects/Projects'
import { useTheme } from 'next-themes'
import Head from 'next/head'
export default function blogs({post}) {
    const {theme, setTheme} = useTheme()

  return (
        <div className='dark:bg-gradient-to-tr dark:from-[#111827] dark:to-black min-h-screen'>
         <Head>
        <title>Neeraj M R.</title>
        <meta name="description" content="Neeraj M R developer portfolio" />
  <meta property="og:title" content="Neeraj M R" />
  <meta property="og:description" content="Neeraj M R is kerala based web developer" />
  <meta property="og:url" content="https://neerajram.vercel.app/" />
  <meta property="og:type" content="website" />
        <link rel="icon" href="/neeraj.png" />
      </Head>

      <div>

      <nav className='bg-black dark:shadow-[#eeeeee3d] shadow-nav h-14 md:fixed fixed w-full z-10'>
        <div className='md:flex space-x-3'>
        <div className='md:flex hidden text-white dark:text-white pt-5 pl-2 md:ml-12'>
        <Link 
            href="/"
            
            ><a className='hover:text-twitter ml-5 font-extrabold'>Home </a></Link>
        </div>
          <div className='md:flex pl-5 flex-1 mt-5 text-white space-x-4'>
            

            {/* <Link 
            href="#about"
            
            ><a className='hover:text-stack ml-5'>About</a></Link> */}
            <Link 
            href="/projects"
            className="ml-5"
            ><a className='hover:text-twitter ml-5 font-extrabold'>projects</a></Link>
            <Link 
            href="/blogs"
            className='ml-5'
            ><a className='hover:text-twitter ml-5 font-extrabold'>blogs</a></Link>
          </div>
          <div className='flex items-end justify-end md:pr-5 pr-5'>
          <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="pt-5 text-white dark:text-black fixed"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-6 w-6 text-yellow-300 dark:text-blue-100"
            >
              {theme === 'dark' ? (
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                color='#F4F6F0'
                />
                ) : (
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  color='yellow'
                  />
                  
                  )}
            </svg>
          </button>
                  </div>
        </div>
        {/* <div className='md:hidden flex justify-end'>
        <div className=''>
            
          </div>

          <button onClick={()=>{setOpened(!opened)}}>
            
            <span className='sr-only'>open
            </span>
              {!opened ? <p>btn</p> : <p>cls</p>}
          </button>
        </div>
        {opened ? <div className='bg-white'>home</div>: " "} */}
      </nav>
    </div>
        <Blogs data={post} theme={theme}/>

    </div>
  )
}
export async function getServerSideProps() {
    const res = await fetch(`https://dev.to/api/articles?username=neerajram30`)
    const json = await res.json()
    return { props: { post: json } }
 }