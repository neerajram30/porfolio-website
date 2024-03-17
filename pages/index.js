import Head from "next/head";
import Tools from "../Components/Tools/Tools";
import Footer from "../Components/Footer/Footer";
import Profile from "../Components/Profile/Profile";
import Projects from "../Components/Projects/Projects";
import Blogs from "../Components/Blogs/Blogs";
import About from "../Components/About/About";
import Experience from "../Components/Experience/Experience";
// import { Rings } from 'react-loader-spinner'

export default function Home() {
  

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
          <About/>
          <Experience/>
          <Tools />
          <Projects />
          <Blogs/>
          <Footer />
        </main>
      </div>
      {/* } */}
    </div>
  );
}

