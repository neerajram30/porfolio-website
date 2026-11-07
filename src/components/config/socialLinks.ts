import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import { ComponentType } from "react";
import { profile } from "./profile";

interface Social {
  id: number;
  title: string;
  link: string;
  icon: ComponentType<{ className?: string }>;
}

export const socials: Social[] = [
  { id: 1, title: "LinkedIn", link: profile.linkedin, icon: SiLinkedin },
  { id: 2, title: "Email", link: `mailto:${profile.email}`, icon: Mail },
  { id: 3, title: "Instagram", link: profile.instagram, icon: SiInstagram },
  { id: 4, title: "GitHub", link: profile.github, icon: SiGithub },
];
