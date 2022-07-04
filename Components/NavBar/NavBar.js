import React,{useState} from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import {motion} from 'framer-motion'
import { CodeIcon, MenuIcon, XIcon } from "@heroicons/react/solid";

export default function NavBar() {

    const links = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Blogs", href: "/blogs" },
      ];
    const { theme, setTheme } = useTheme()
    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav className='bg-black dark:shadow-[#eeeeee3d] shadow-nav h-14 md:fixed fixed w-full z-10'>
            {open && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed flex flex-col items-center justify-center z-20 w-screen h-screen inset-0 bg-gray-200 dark:bg-gray-800">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ opacity: [0, 1], y: [-10, 0], rotate: [-60, 0] }}
              onClick={() => setOpen(false)}
              className="bg-gray-200 p-1 rounded-md dark:bg-gray-700 absolute top-8 right-8 ring-opacity-80 ring-gray-500 dark:ring-gray-200hover:ring-[2px]"
            >
              <XIcon className="h-8 w-8 dark:text-gray-400 text-gray-600 -mt-5 -mr-3"/>
            </motion.button>
            

            <ul className="flex font-overpass font-bold flex-col gap-12 text-center text-2xl  tracking-widest uppercase w-full bg-white text-hcolor dark:bg-gradient-to-tr dark:from-[#111827] dark:to-black dark:text-twitter items-center justify-center h-screen">
            {links.map((link,i)=>
              <motion.li
              key={link.name}
                  animate={{
                    opacity: [0, 1],
                    y: [-30, 0],
                  }}       
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Link href={link.href}>
                    <a
                      onClick={() => setOpen(false)}
                      className=" hover:text-primary-500 dark:text-gray-400  hover:font-semibold  transition-all duration-100 ease-out p-2"
                      >
                      {link.name}
                    </a>
                  </Link>
                </motion.li>
                        )
}
            </ul>
          </motion.div>
        )}
                <div className='md:flex space-x-3 justify-between'>

                    <div className='md:flex text-white dark:text-white pt-5 pl-2 md:ml-12'>

                        {links.map((link)=>

<Link
                            href={link.href}
                            passHref
                            >
                        <a className='hover:text-twitter ml-5 font-extrabold md:block hidden'>{link.name}</a>
                        </Link>
                                )
                            }
                            </div>
                    <div className='flex items-end justify-end pr-10'>
            <div className='flex space-x-8 md:mt-0 -mt-2'>

                        <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{ opacity: [0, 1], y: [-10, 0], rotate: [-60, 0] }}
                            aria-label="Toggle Dark Mode"
                            type="button"
                            className=" text-white dark:text-black"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
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
                        </motion.button>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: [0, 1], y: [-10, 0], rotate: [-60, 0] }}
            onClick={() => setOpen(true)}
            className="md:hidden"
          >
            <MenuIcon className='mt-1 h-8 w-8 -mr-3 md:-mr-0 text-white'/>
          </motion.button> 
        </div>
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
    )
}
