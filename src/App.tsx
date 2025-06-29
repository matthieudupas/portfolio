import Hero from "./sections/hero/Hero.tsx";
import About from "./sections/about/About.tsx";
import Education from "./sections/education/Education.tsx";
import Experience from "./sections/experience/Experience.tsx";
import Navbar from "./components/navbar/Navbar.tsx";

function App() {

  return (
    <>
        <Navbar />
        <Hero/>
        <About/>
        <Education/>
        <Experience/>
    </>
  )
}

export default App
