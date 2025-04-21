import React, { useState } from "react";
import ResumeCv from "./projetcs/file.pdf";
// import VideoCv from "../personalData/MP4_20250420_234421VLOG.mp4";
import "./Resume.css";
const Resume = () => {
  const [showVideo, setShowVideo] = useState(false);

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
            Resume & Video CV
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>



    <div className=" container-resume flex flex-wrap justify-center items-center gap-8 p-6  min-h-[80vh] rounded-xl mx-auto max-w-5xl shadow-2xl">

      {/* Resume Card */}
      <div className="w-64 h-80 flex flex-col items-center justify-center transition-transform duration-500 m-4 rounded-2xl group relative hover:scale-105 cursor-pointer shadow-md shadow-violet-800/30">
        <div className="w-full h-full rounded-2xl border border-[#3b3f61] bg-[#292f4a] group-hover:border-violet-500 transition-all duration-500">

          <div className="flex justify-center pt-2">
            <div className="w-3/4">
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-full px-4 py-4 gap-4">
            <a href={ResumeCv} download="file">
              <button className="px-4 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-violet-500 to-pink-500 hover:from-pink-500 hover:to-violet-500 transition-colors duration-300">
                Download Resume
              </button>
            </a>

            <p className="text-center text-xl font-bold text-white tracking-wide drop-shadow">
              My Resume
            </p>
          </div>
        </div>
      </div>

      {/* Video CV Card */}
      <div
        className="w-64 h-80 flex flex-col items-center justify-center transition-transform duration-500 m-4 rounded-2xl group relative hover:scale-105 cursor-pointer shadow-md shadow-violet-800/30"
      >
        <div className="w-full h-full rounded-2xl border border-[#3b3f61] bg-[#292f4a] group-hover:border-violet-500 transition-all duration-500">

          <div className="flex justify-center pt-2">
            <div className="w-3/4">
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-full px-4 py-4 gap-4">
            <p className="text-center text-xl font-bold text-white tracking-wide drop-shadow">
              Video CV
            </p>
            <button
              className="px-4 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-violet-500 to-pink-500 hover:from-pink-500 hover:to-violet-500 transition-colors duration-300"
              onClick={() => setShowVideo(true)}
            >
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Modal to play video */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-xl p-4">
            <video
              className="w-full max-h-[60vh] rounded-xl border-4 border-violet-500 shadow-xl"
              controls
              autoPlay
            >
             
              Your browser does not support the video tag.
            </video>
          
          </div>
        </div>
      )}

    </div>
    </div>
  );
};

export default Resume;