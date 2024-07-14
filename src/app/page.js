import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools/Tools";


export default function Home() {
  return (
    <main className="flex flex-col items-start overflow-x-hidden">
        <NavBar/>
        <Profile/>
        <section id="about">
        <About/>
        </section>
        <section id="projects">
        <Projects/>
        </section>
        <section id="experience">
        <Experiences/>
        </section>
        {/* <Tools/> */}
        <Footer/>
    </main>
  );
}