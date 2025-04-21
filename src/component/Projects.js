import React from "react";
import Outerbox from "./projetcs/Outerbox";
import Data from "./projetcs/data.js";
import "./Projects.css";

function Projects(){
    console.log(Data);
    return(
    <div id='projects' className="relative ">
    <div className="">
      <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
      <div className="flex items-center justify-start relative">
        <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
          PROJECTS
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>
    </div>
     <div className="project-cards">{
          Data.map( (data,id) => (
            <Outerbox key={id} Data={data}></Outerbox>
          ))
        }
  </div>




    </div>);
}
export default Projects;