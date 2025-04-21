import "./App.css";
import Education from "./component/Education";
import { Route,Routes } from "react-router-dom";
import Box from "./component/helper/box";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Home from "./component/Home";
import Contact from "./component/Contact";

function App() {
  return (
    <main >
      <div className="wrapper">

      
         <Navbar></Navbar>
   

         </div>
         <Routes>
        
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/about" element={<About></About>}></Route>
         <Route path="/projects" element={<Projects></Projects>}></Route>
         <Route path="/skills" element={<Skills></Skills>}></Route>
         <Route path="/education" element={<Education></Education>}></Route>
         <Route path="/contact" element={<Contact></Contact>}></Route>
         </Routes>
        </main>
  );
}

export default App;
