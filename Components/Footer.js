import React from "react";
import Github from "./Icons/Github";
import Twitter from "./Icons/Twitter";
import Dev from "./Icons/Dev";
import Instagram from "./Icons/Instagram";
import Link from "next/link";

function Footer() {
  const socialLinks = [
    {
      title: "github",
      link: "https://github.com/neerajram30",
      icon: <Github />,
    },
    {
      title: "twitter",
      link: "https://twitter.com/neeraJramachaN2",
      icon: <Twitter />,
    },
    {
      title: "instagram",
      link: "https://www.instagram.com/neeraj_ramachandran",
      icon: <Instagram />,
    },
  ];
  return (
    <div className="flex flex-col items-center pt-0 md:pt-5 pb-10">
      <div className="flex text-center md:space-x-1 space-x-8">
        {socialLinks.map(({ title, link, icon }, i) => (
          <Link
            key={title + i}
            href={link}
            target="_blank"
            className="m-2 md:w-12 md:h-12 w-5 h-5 md:text-3xl text-2xl text-black"
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Footer;
