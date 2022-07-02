import React from 'react'
import Projects from '../Components/Projects/Projects'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import NavBar from '../Components/NavBar/NavBar'
export default function projects() {
  const { theme, setTheme } = useTheme()
  return (
    <div className='dark:bg-gradient-to-tr dark:from-[#111827] dark:to-black min-h-screen'>
      <Head>
        <title>Neeraj M R | Projects</title>
        <meta name="description" content="Neeraj M R developer portfolio projects done" />
        <meta property="og:title" content="Neeraj M R Projects" />
        <meta property="og:description" content="Projects done by Neeraj M R" />
        <meta property="og:url" content="https://neerajram.vercel.app/projects" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/neeraj.png" />
      </Head>

      <div>
      <NavBar/>
      <Projects theme={theme} />
      </div>

    </div>
  )
}
