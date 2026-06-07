import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useGitHubStars } from "./useGitHubStars";

export interface ProjectData {
  title: string;
  github: string;
  technologies: string[];
  description: string;
  owner: string;
  repo: string;
  image: string;
  link: string;
}

export const PROJECTS_LIST: ProjectData[] = [
  {
    title: "Speghetti Slicer",
    github: process.env.NEXT_PUBLIC_SPAGHETTI_SLICER_GITHUB || "",
    technologies: ["Typescript", "CLI"],
    description:
      "An AST-based CLI that audits and refactors React/TypeScript projects",
    owner: "neerajram30",
    repo: "spaghetti-slicer",
    image: "/spaghetti_slicer.png",
    link: process.env.NEXT_PUBLIC_SPAGHETTI_SLICER_NPM || "",
  },
  {
    title: "Async Hub",
    github: process.env.NEXT_PUBLIC_ASYNC_HUB_GITHUB || "",
    technologies: ["Nextjs", "Drizzle ORM", "Tailwind CSS"],
    description:
      "An async video hub for global teams to capture screen recordings and manage timestamped discussions.",
    owner: "neerajram30",
    repo: "async-hub",
    image: "/async_hub.png",
    link: process.env.NEXT_PUBLIC_ASYNC_HUB_GITHUB || "",
  },
  {
    title: "God's Eye",
    github: process.env.NEXT_PUBLIC_GODS_EYE_GITHUB || "",
    technologies: ["Python", "Flask", "Dlib"],
    description:
      "Helps police officers to find missing people using Artificial Intelligence",
    owner: "neerajram30",
    repo: "God-s-Eye",
    image: "/godeye.jpg",
    link: process.env.NEXT_PUBLIC_GODS_EYE_GITHUB || "",
  },
  {
    title: "Portfolio Website",
    github: process.env.NEXT_PUBLIC_PORTFOLIO_GITHUB || "",
    technologies: ["Nextjs", "Tailwind CSS", "DaisyUI"],
    description:
      "My personal portfolio website showcasing side projects and experience",
    owner: "neerajram30",
    repo: "porfolio-website",
    image: "/portfolio.png",
    link: process.env.NEXT_PUBLIC_NETLIFY_APP_URL || "",
  },
];

export function useProjectsLogic() {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (loaded) return;
    if (inView) {
      setLoaded(true);
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      });
    } else {
      animation.start({
        y: "30px",
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const starsDetails = useGitHubStars(PROJECTS_LIST);

  return {
    ref,
    inView,
    animation,
    projects: PROJECTS_LIST,
    starsDetails,
  };
}
