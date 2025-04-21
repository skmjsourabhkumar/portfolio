import React from "react";
import Profile from "../personalData/profile.jpg"
import "./About.css";



function About(){
    return(
        <div className="mt-8">
             <div id="about" className="my-12 lg:my-16 mt-8">
             <div className="hidden lg:flex flex-col items-center inset-0 flex items-center justify-center mt-8">
             <div className="bg-[#1a1443] w-fit text-white  p-2 px-5 text-xl rounded-md">
                About Me
             </div>
             <div className="about-sec">
                <div className="about-content text-gray-200 text-sm lg:text-lg p-8 "> 
                My name is Sourabh Kumar. I am a computer science engineer with extensive expertise in the MERN stack (MongoDB, Express.js, React, and Node.js), data structures and algorithms (DSA), and software development. I specialize in developing scalable, efficient, and user-friendly web applications, as well as tackling complex technical challenges. My technical skillset also includes working with RESTful APIs, GraphQL, and cloud platforms such as AWS and Azure. I am passionate about building impactful software solutions, staying updated with emerging technologies, and continually enhancing my development skills.
     
                </div>
                <div className="order-1 lg:order-2"> 
                    
                    <img src={Profile} alt="Image"
                    width={240}
                    height={240}
                    className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"></img>
                </div>

             </div>
             
             </div>
             </div>
        </div>
    );

}
export default About;