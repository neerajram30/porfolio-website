import About from "@/components/About";
import Experience from "@/components/Experience";
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
        <About/>
        {/* <Experience/> */}
        <Projects/>
        {/* <Tools/> */}
        {/* <Footer/> */}
    </main>
  );
}