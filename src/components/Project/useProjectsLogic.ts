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

export const PROJECTS_LIST: ProjectData[] = [];

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
