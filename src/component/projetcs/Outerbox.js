import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import "./Outerbox.css";
function Outerbox(props){
  const data=props.Data;
  console.log(data);
  return(
    <div className="outerbox order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0]  rounded-lg border bg-gradient-to-r to-[#0a0d37]">
    {/* <div className="flex flex-row">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
      <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
    </div> */}
    <div className="px-4 lg:px-8 py-5 box-head">
      <div className="flex flex-row space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-orange-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-200"></div>
            
      </div>
      <div className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
         {data.name}
        </div>
        <div className="flex justify-center items-center gap-4">
  <FaGithub
    className="transition-all text-pink-500 hover:scale-125 duration-300"
    size={22}
    onClick={() => window.open(data.github)}
  />
  <BsBrowserChrome
    className="transition-all text-pink-500 hover:scale-125 duration-300"
    size={22}
    onClick={() => window.open(data.hostlink)}
  />
</div>

      
    </div>
    <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
      <code className="font-mono text-xs md:text-sm lg:text-base">
          {data.detail}
      </code>
    </div>
  </div>
  );
}
export default Outerbox;