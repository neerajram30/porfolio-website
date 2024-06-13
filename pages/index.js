import Head from "next/head";
import Tools from "../Components/Tools/Tools";
import Footer from "../Components/Footer/Footer";
import Profile from "../Components/Profile/Profile";
import Projects from "../Components/Projects/Projects";
import Blogs from "../Components/Blogs/Blogs";
import About from "../Components/About/About";
import Experience from "../Components/Experience/Experience";
import { useEffect } from "react";
import axios from "axios";

const GET_USER_BLOG = `
  query GetUserArticles($page: Int!) {
    user(username: "NiranjanGkr") {
      publication {
        posts(page: $page) {
          _id
          title
          brief
          slug
          dateAdded
          coverImage
          contentMarkdown
        }
      }
    }
  }
`;

export default function Home({ posts }) {
  
  useEffect(() => {
    async function gql(query, variables = {}) {
      const data = await axios("https://api.hashnode.com/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });
      return data.json();
    }

    const fetchData = async () => {
      try {
        const response = await gql(GET_USER_BLOG, { page: 0 });
        console.log("Response !!!",response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <Head>
        <title>Neeraj M R | Full stack web developer</title>
        <meta name="description" content="Neeraj M R developer portfolio" />
        <meta property="og:title" content="Neeraj M R" />
        <meta
          property="og:description"
          content="Neeraj M R is a Full Stack Web developer from India"
        />
        <meta property="og:url" content="https://neerajram.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://neerajram.vercel.app/Neeraj.jpg"
        />
        <link rel="icon" href="/neeraj.png" />
      </Head>

      <div className="bg-[#fafafc]">
        <main className="overflow-hidden">
          <Profile />
          <About />
          <Experience />
          <Projects />
          <Tools />
          <Blogs />
          <Footer />
        </main>
      </div>
    </div>
  );
}
