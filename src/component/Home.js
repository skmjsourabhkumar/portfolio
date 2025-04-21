import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Hero from "./Hero";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Certificate from "./Certificate";
import Resume from "./Resume";
function Home(){
    return(
        <div className="container">
     <div className="wrapper">

        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Certificate></Certificate>
        <Education></Education>
        <Resume></Resume>
        <Contact></Contact>
        </div>
        <Footer></Footer>




        </div> 
    );
}
export default Home;