import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import AOS from "aos";
import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [1000]);
  return (
    <div
      id="Services"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-white"
      >
        Skills
      </h1>
      <div
        data-aos="fade-up"
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-20"
      >
        {/* <div className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-slate-800 b_glow">
          <span> HTML</span>
          <IoLogoHtml5 className="text-[50px] text-[orange]" />
        </div> */}
         <div
          data-aos="fade-down"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-slate-800 b_glow"
        >
          <span>Javascript</span><IoLogoJavascript className="text-[50px] text-[#f0db4f]"/>
        </div>
        <div
          data-aos="fade-down"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-slate-800 b_glow"
        >
          <span>CSS</span> <FaCss3 className="text-[50px] text-[#2965f1]" />
        </div>
        <div
          data-aos="fade-up"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-slate-800 b_glow"
        >
          <span>Tailwind CSS</span> <RiTailwindCssFill className="text-[50px] text-[#3abdf8]"/>
        </div>
       
        <div
          data-aos="fade-up"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-slate-800 b_glow"
        >
          <span>React</span><FaReact className="text-[50px] text-[#2965f1]"/>
        </div>
        <div
          data-aos="fade-down"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-slate-800 b_glow"
        >
          <span>Express</span>
        </div>
        <div
          data-aos="fade-up"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-slate-800 b_glow"
        >
          <span>MongoDb</span><BiLogoMongodb className="text-[50px] text-[#1d8934]"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
