import AOS from "aos";
import React, { useEffect } from "react";

const Projects = () => {
  useEffect(()=>{
    AOS.init({
     
      duration: 1000
    });
   },[1000])
  return (
    <div id="Projects">
      <div className="p-20 flex flex-col items-center justify-center">
        <h1
         data-aos="fade-right"
          className="text-[52px] font-semibold mb-20 leading-normal uppercase text-white"
        >
          Projects
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10 ">
          <img
            data-aos="fade-up"
            height={350}
            width={350}
            className="text-[26px] flex  items-center justify-center font-semibold text-white rounded-3xl p-6 border-2 border-slate-800 b_glow"
            src=""
            alt=""
          />
          <img
            data-aos="fade-down"
            height={350}
            width={350}
            className="text-[26px] flex  items-center justify-center font-semibold text-white rounded-3xl p-6 border-2 border-slate-800 b_glow"
            src=""
            alt=""
          />
          <img
            data-aos="fade-up"
            height={350}
            width={350}
            className="text-[26px] flex  items-center justify-center font-semibold text-white rounded-3xl p-6 border-2 border-slate-800 b_glow"
            src=""
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
