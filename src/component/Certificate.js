import React from 'react'
import Dsa from '../personalData/codehelpDsa.png';
import Mern from '../personalData/mernstack.png';
import Cloud from '../personalData/NPTEL.png';

function Certificate() {
  return (
    
         <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
  
        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
          </div>
        </div>
  
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
             Certification & Courses
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
        <div className="skills-container">

  
        <div className="w-64 h-96 flex flex-col items-center justify-center transition-all duration-500 m-4 rounded-2xl group relative hover:scale-105 cursor-pointer">
  <div className="w-full h-full rounded-2xl border border-[#2f324e] bg-[#1b2040] group-hover:border-violet-500 transition-all duration-500 shadow-md">
    
    {/* Top Gradient Line */}
    <div className="flex justify-center pt-2">
      <div className="w-3/4">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>
    </div>

    {/* Main Content */}
    <div className="flex flex-col items-center justify-center h-full px-4 py-6 gap-6">
      {/* Even Larger Image */}
      <div className="h-40 w-40">
        <img src={Dsa} alt="Certificate Logo" className="h-full w-full object-contain" />
      </div>

      {/* Gradient Text */}
      <p className="text-center text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-violet-500 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
        DSA by Code Help
      </p>
    </div>
  </div>
</div>

<div className="w-64 h-96 flex flex-col items-center justify-center transition-all duration-500 m-4 rounded-2xl group relative hover:scale-105 cursor-pointer">
  <div className="w-full h-full rounded-2xl border border-[#2f324e] bg-[#1b2040] group-hover:border-violet-500 transition-all duration-500 shadow-md">
    
    <div className="flex justify-center pt-2">
      <div className="w-3/4">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>
    </div>

    <div className="flex flex-col items-center justify-center h-full px-4 py-6 gap-6">
      <div className="h-40 w-40">
        <img src={Mern} alt="Certificate Logo" className="h-full w-full object-contain" />
      </div>

      <p className="text-center text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-violet-500 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
        MERN Stack by Cipher School
      </p>
    </div>
  </div>
</div>


<div className="w-64 h-96 flex flex-col items-center justify-center transition-all duration-500 m-4 rounded-2xl group relative hover:scale-105 cursor-pointer">
  <div className="w-full h-full rounded-2xl border border-[#2f324e] bg-[#1b2040] group-hover:border-violet-500 transition-all duration-500 shadow-md">
    
    <div className="flex justify-center pt-2">
      <div className="w-3/4">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>
    </div>

    <div className="flex flex-col items-center justify-center h-full px-4 py-6 gap-6">
      <div className="h-40 w-40">
        <img src={Cloud} alt="Certificate Logo" className="h-full w-full object-contain" />
      </div>

      <p className="text-center text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-violet-500 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
        Cloud Computing
      </p>
    </div>
  </div>
</div>

    </div>
    </div>
           
     
  )
}

export default Certificate