import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";
import { CodeIcon, MenuIcon, XIcon, HomeIcon } from "@heroicons/react/solid";

export default function NavBar() {
  const links = [
    // { name: "Home", href: "/", id:'' },
    { name: "About", href: "/about", id: "about" },
    { name: "Experience", href: "/experience", id: "experience" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Skills", href: "/skills", id: "skills" },
    // { name: "Blogs", href: "/blogs", id:'blogs' },
  ];
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [hashShadow, setHasShadow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setHasShadow(false);
      } else {
        setHasShadow(true);
      }
    };

    if (window) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <nav
      className={`bg-white h-14 md:fixed fixed w-full z-10 ${
        hashShadow ? "shadow-nav" : "shadow-none"
      }`}
    >
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed flex flex-col items-center justify-end z-20 w-screen h-screen inset-0 bg-gray-200"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: [0, 1], y: [-10, 0], rotate: [-60, 0] }}
            onClick={() => setOpen(false)}
            className="p-1 rounded-md dark:bg-gray-700 absolute top-8 right-8 ring-opacity-80 ring-gray-500 dark:ring-gray-200hover:ring-[2px]"
          >
            <XIcon className="h-8 w-8 text-gray-600 -mt-5 -mr-3" />
          </motion.button>

          <ul className="flex font-overpass font-bold flex-col gap-12 text-center text-2xl  tracking-widest w-full bg-white text-hcolor items-center justify-center h-screen">
            {links.map((link, i) => (
              <motion.li
                key={link.name}
                animate={{
                  opacity: [0, 1],
                  y: [-30, 0],
                }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link href={"#" + link.id}>
                  <span
                    onClick={() => setOpen(false)}
                    className="text-black  hover:font-semibold  transition-all duration-100 ease-out p-2"
                  >
                    {link.name}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
      <div className="w-full flex justify-end pr-5 pt-1">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ opacity: [0, 1], y: [-10, 0], rotate: [-60, 0] }}
          onClick={() => setOpen(true)}
          className="md:hidden"
        >
          <MenuIcon className="mt-1 h-8 w-8 -mr-3 md:-mr-0 text-black" />
        </motion.button>
      </div>
      <div className="flex justify-between items-center h-fit pr-10">
        <div className="mt-[-30px] md:mt-0 md:pt-2">
          <Link href='#'>
          <h1 className="text-xl md:text-2xl font-black font-overpass text-primary pl-8 md:pl-20">@Neeraj</h1>
          </Link>
          </div>        
        <div className="md:flex space-x-3 justify-between">
          <div className="md:flex pl-2 md:ml-12 pt-3">
            {links.map((link) => (
              <Link
                href={"#" + link.id}
                passHref
                className="text-black ml-5 font-extrabold md:block hidden"
                key={link.id}
              >
                {/* <a className='dark:hover:text-twitter hover:text-hcolor ml-5 font-extrabold md:block hidden'>{link.name}</a> */}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
