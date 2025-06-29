import Hero from "./sections/hero/Hero.tsx";
import About from "./sections/about/About.tsx";
import Education from "./sections/education/Education.tsx";
import Experience from "./sections/experience/Experience.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n.ts";
import Footer from "./components/footer/Footer.tsx";
import Contact from "./sections/contact/Contact.tsx";

function App() {

  return (
    <>
        <I18nextProvider i18n={i18n}>
            <Navbar/>
            <Hero/>
            <About/>
            <Education/>
            <Experience/>
            <Contact/>
            <Footer/>
        </I18nextProvider>
    </>
  )
}

export default App
