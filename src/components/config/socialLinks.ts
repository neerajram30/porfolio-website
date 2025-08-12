import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { ComponentType } from "react";

interface Social {
  id: number;
  title: string;
  link: string;
  icon: ComponentType<{className?:string}>;
}

export const socials: Social[] = [
  {
    id: 1,
    title: "Github",
    link: "https://github.com/neerajram30",
    icon: SiGithub,
  },
  {
    id: 2,
    title: "X",
    link: "https://x.com/neeraJramachaN2",
    icon: SiX,
  },
  {
    id: 3,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/neeraj-m-r-173b64216/",
    icon: SiLinkedin,
  },
  {
    id: 4,
    title: "Instagram",
    link: "https://www.instagram.com/neeraj_ramachandran/",
    icon: SiInstagram,
  }
];
