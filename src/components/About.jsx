// About.js
// import React from "react";
import Button from "./button";
import AOS from "aos";
import  { useEffect } from "react";

const About = () => {
  useEffect(()=>{
    AOS.init({
     
      duration: 1000
    });
   },[1000])
  return (
    <div id="About">
      <div className="lg:px-50 px-10 lg:py-0 py-20 text-center text-wrap lg:text-start flex lg:flex-row flex-col-reverse justify-between gap-10 lg:gap-28 items-center">
        <img
          src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1723246441/iyi_szna9x.jpg"
          width={290}
          height={290}
          className="rounded border-2 p-1 border-slate-500 img_glow"
          alt=""
        />

        <div data-aos="fade-down"  className="h-full lg:py-40 flex flex-col justify-center lg:justify-normal lg:items-start items-center text-slate-500">
          <h1 data-aos="fade-right" className="text-[40px] lg:text-[52px] font-bold mb-8 leading-normal text-white">
            About Me
          </h1>
          <p data-aos="fade-left" className="font-semibold ">
          Hello! I'm Afuye Iyiola, a passionate full-stack developer specializing in creating robust and scalable web applications. With skills in both frontend and backend technologies, I deliver seamless and efficient solutions tailored to project needs. My journey in technology began with a love for problem-solving, evolving into a career where I build, innovate, and learn constantly. I prioritize user-centric development, ensuring intuitive and enjoyable end-user experiences. Collaborating closely with clients and team members, I aim to meet all requirements with precision and creativity. I am dedicated to delivering high-quality, timely work, staying updated with the latest technologies, and solving challenges efficiently. I am also a strong team player who believes in the power of collective creativity.
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <Button name="Resume" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
