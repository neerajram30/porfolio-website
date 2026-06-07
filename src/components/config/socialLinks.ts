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
    link: process.env.NEXT_PUBLIC_SOCIAL_GITHUB || "",
    icon: SiGithub,
  },
  {
    id: 2,
    title: "X",
    link: process.env.NEXT_PUBLIC_SOCIAL_X || "",
    icon: SiX,
  },
  {
    id: 3,
    title: "Linkedin",
    link: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "",
    icon: SiLinkedin,
  },
  {
    id: 4,
    title: "Instagram",
    link: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "",
    icon: SiInstagram,
  }
];
