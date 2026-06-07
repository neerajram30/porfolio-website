import { useState, useEffect } from "react";
import axios from "axios";

interface ProjectRepo {
  owner: string;
  repo: string;
}

export function useGitHubStars(projects: ProjectRepo[]) {
  const [starsDetails, setStarsDetails] = useState<Record<string, number>>({});

  useEffect(() => {
    projects.forEach(async (item) => {
      if (!item.owner || !item.repo) return;
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${item.owner}/${item.repo}`
        );
        const stars = response?.data?.stargazers_count;
        if (typeof stars === "number") {
          setStarsDetails((prev) => ({ ...prev, [item.repo]: stars }));
        }
      } catch (error) {
        console.error(`Error fetching stars for ${item.repo}:`, error);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return starsDetails;
}
