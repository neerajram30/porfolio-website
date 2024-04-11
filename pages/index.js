import Head from "next/head";
import Tools from "../Components/Tools/Tools";
import Footer from "../Components/Footer/Footer";
import Profile from "../Components/Profile/Profile";
import Projects from "../Components/Projects/Projects";
import Blogs from "../Components/Blogs/Blogs";
import About from "../Components/About/About";
import Experience from "../Components/Experience/Experience";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect } from "react";
import axios from "axios";
// import { Rings } from 'react-loader-spinner'

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
      {/* } */}
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`https://dev.to/api/articles?username=neerajram30`);
//   console.log("RES ",res);
//   const json = await res.json();
//   return { props: { publications: json } };
// }

// export async function getServerSideProps(context) {
//   console.log("Started");
//   const res = await fetch("https://api.hashnode.com/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "2dca8552-29f1-4f30-95ab-4cff4be9b3e9",
//     },
//     body: JSON.stringify({
//       query:
//         'query {user(username: "neerajram1998") {publication {posts(page: 0) {title brief slug coverImage dateAdded}}}}',
//     }),
//   });
//   const publications = await res.json();
//   console.log("PUBLICATIONS ...........",publications);
//   if (!publications) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       publications,
//     },
//   };
// }

// export async function getStaticProps(context) {
//   console.log("Here");
//   const client = new ApolloClient({
//     uri: 'https://api.hashnode.com/',
//     cache: new InMemoryCache(),
//   })
//   console.log(client);
// //   const { data } = await client.query({
// //     query: gql`
// //       query GetPosts {
// //         user(username: "neerajram1998") {
// //           publication {
// //             posts(page: 0) {
// //               _id
// //               coverImage
// //               slug
// //               title
// //               brief
// //             }
// //           }
// //         }
// //       }
// //     `,
// //   })

//   return {
//     props: {
//       posts: [],
//     },
//   }
// }
