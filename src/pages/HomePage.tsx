import Navbar from "../components/navbar/Navbar.tsx";
import Layout from "../components/layout/Layout.tsx";
import Hero from "../sections/hero/Hero.tsx";
import About from "../sections/about/About.tsx";
import Experience from "../sections/experience/Experience.tsx";
import Education from "../sections/education/Education.tsx";
import Contact from "../sections/contact/Contact.tsx";
import Footer from "../components/footer/Footer.tsx";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Layout>
                <Hero/>
                <About/>
                <Experience/>
                <Education/>
                <Contact/>
            </Layout>
            <Footer/>
        </>
    )
}

export default HomePage;