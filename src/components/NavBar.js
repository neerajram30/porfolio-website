"use client";
import React, { useEffect } from 'react';
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";
import { CodeIcon, MenuIcon, XIcon, HomeIcon } from "@heroicons/react/solid";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const links = [
    // { name: "Home", href: "/", id:'' },
    { name: "About", href: "/about", id: "about" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Experience", href: "/experience", id: "experience" },
    // { name: "Skills", href: "/skills", id: "skills" },
    // { name: "Blogs", href: "/blogs", id:'blogs' },
  ];
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
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

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
      let current = null;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop) {
          current = section.id;
        }
      });
      navLinks.forEach((link) => {
        link.classList.remove('active'); // Remove active class from all links
        if (link.href.includes(`#${current}`)) {
          link.classList.add('active'); // Add active class to matching link
        }
      });

      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleActiveLink = (linkId, index) => {
    if (linkId === links[index]?.id) {
      setActiveLink(linkId);
    }
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <nav
      className={`bg-[#161d27] h-14 md:fixed fixed w-screen z-10 p-0
      ${hashShadow ? "shadow-nav" : "shadow-none"
        }`}
    >

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed flex flex-col items-center justify-end z-20 w-screen h-screen inset-0 bg-[#161d27]"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: [0, 1], y: [-10, 0], rotate: [-60, 0] }}
            onClick={() => setOpen(false)}
            className="p-1 rounded-md dark:bg-gray-700 absolute top-8 right-8 ring-opacity-80 ring-gray-500 dark:ring-gray-200hover:ring-[2px]"
          >
            <XIcon className="h-8 w-8 text-white -mt-5 -mr-3" />
          </motion.button>

          <ul className="flex font-bold flex-col gap-12 text-center text-2xl  tracking-widest w-full bg-[#161d27] text-white items-center justify-center h-screen">
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
                    className="text-white  hover:font-semibold  transition-all duration-100 ease-out p-2"
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
          <MenuIcon className="mt-1 h-8 w-8 -mr-3 md:-mr-0 text-white" />
        </motion.button>
      </div>
      <div className="flex justify-between items-center h-fit pr-10">
        <div className="mt-[-30px] md:mt-0 md:pt-2">
          <Link href='#'>
            <div className="text-primary ml-10 flex md:inline-flex bg-blue-300"><div><CodeIcon className="size-8 text-blue-500" /></div><h1 className="ml-3 text-lg pt-[2.5px] font-bold">Neeraj</h1></div>
          </Link>
        </div>
        <div className="md:flex space-x-3 justify-between items-center">
          <div className="md:flex pl-2 md:ml-12 pt-1 items-center">
            {links.map((link,index) => (
              <Link
                href={"#" + link.id}
                passHref
                className="nav-link text-white ml-5 font-semibold md:block hidden"
                key={link.id}
                // onClick={() => handleActiveLink(link.id, index)}
              >
                <motion.div
                // className={`${activeLink === link.id ? 'underline underline-offset-[7px] decoration-primary decoration-2':''}`}
                >
                {link.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
