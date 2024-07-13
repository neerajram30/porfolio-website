import React from "react";
import Github from "./Icons/Github";
import Twitter from "./Icons/Twitter";
import Dev from "./Icons/Dev";
import Instagram from "./Icons/Instagram";
import Link from "next/link";
import { socials } from "@/config/socialLinks";

function Footer() {
  return (
    <div className="pt-10 md:pl-20 pl-10 md:pr-20 pr-10 pb-10 text-white w-screen">
      <div className="md:flex justify-between w-full mb-14">
        <div className="w-3/4">
          <h6 className="text-2xl font-semibold mb-2">Contact</h6>
          <div>
            <Link
              href="mailto:neerajramachardn30@gmail.com"
              className="text-lg"
            >
              neerajramachandran30@gmail.com
            </Link>
          </div>
          <div>
            <Link href="tel:+918129390516" className="text-lg">
              +91 8129390516
            </Link>
          </div>
        </div>
        <div className="w-1/4 md:mt-0 mt-10">
          <h6 className="text-2xl font-semibold mb-5">Social</h6>
          <div className="flex">
            {socials.map((social) => (
              <Link
                title={social.title}
                href={social.link}
                key={social.title + social.id}
                className="md:w-10 md:h-10 w-5 h-5 text-xl text-white md:mr-0 mr-5"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="text-white bg-white" />

      <div className="text-center pt-8">
        <p className="text-xs">© Copyright 2024 . Made by Neeraj M R. Powered by Next js</p>
      </div>
    </div>
  );
}

export default Footer;
