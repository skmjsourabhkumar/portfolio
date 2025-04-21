import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import personalData from "../personalData/personalData";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Box from "./helper/box";
import Resume from "./projetcs/file.pdf";

function Hero(){
    return(
       <section className="">
         
         <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">Coder & Software Developer</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaGithub onClick={()=>window.open(personalData.github)}size={30} />
            </Link>
            <Link
            
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin onClick={()=>window.open(personalData.linkedin)} size={30} />
            </Link>
            <Link
              
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
             
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode onClick={()=>window.open(personalData.leetcode)} size={30} />
            </Link>
            <Link
             
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>
             <div>
             <a href={Resume} download="file">
                <button className="btn-pink">Download Resume</button>
               </a>
             </div>
          

        </div>
        <Box></Box>
        </div>
       </section>
    );
}

export default Hero;