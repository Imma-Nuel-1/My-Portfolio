import { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="About">
      <div className="lg:px-50 px-10 lg:py-0 py-20 text-center text-wrap lg:text-start flex lg:flex-row flex-col-reverse justify-between gap-10 lg:gap-28 items-center">
        <img
          src="https://res.cloudinary.com/dvr3sk23p/image/upload/v1728602751/20240820_121359000_iOS_rcvvqo.jpg"
          width={290}
          height={290}
          className="rounded border-2 p-1 border-slate-500 img_glow"
          alt=""
        />

        <div
          data-aos="fade-down"
          className="h-full lg:py-40 flex flex-col justify-center lg:justify-normal lg:items-start items-center text-slate-500"
        >
          <h1
            data-aos="fade-right"
            className="text-[40px] lg:text-[52px] font-bold mb-8 leading-normal text-white"
          >
            About Me
          </h1>
          <p data-aos="fade-left" className="font-semibold ">
            Hello! I'm Adesanya Olumuyiwa Emmanuel, a driven full-stack
            developer with a passion for crafting innovative and scalable web
            applications. With expertise in both frontend and backend
            technologies, I deliver tailored solutions that meet project needs
            with precision and creativity. My journey in technology is fueled by
            a love for problem-solving, and I'm committed to building intuitive
            and enjoyable user experiences through collaborative and
            user-centric development. I'm dedicated to delivering high-quality
            work, staying up-to-date with the latest technologies, and solving
            challenges efficiently, all while embracing the power of collective
            creativity as a strong team player.
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <a
                  href="https://docs.google.com/document/d/1TNd510WAJXNrFM5ch333dT-D89FEnSiJiMOTpTEB1F8/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-#111A27 font-bold py-2 px-4 rounded">
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
