import React, { useEffect } from "react";

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, [1000]);
  return (
    <div
      id="Home"
      className="lg:px-50  text-white px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center "
    >
      <div className="h-full lg:py-40 flex flex-col  justify-center lg:items-start items-center text-slate">
        <p className="text-[20px] lg:font-semibold">Hi I'm,</p>
        <h1
          data-aos="fade-right"
          className="text-[35px] lg:w-[90%] lg:text-[52px] font-bold  leading-normal uppercase lg:text-left text-center"
        >
          Adesanya Olumuyiwa{" "}
          <span className=" text-slate-500"> A FullStack </span>Web Developer
        </h1>

        <p
          data-aos="fade-left"
          className="text-[20px] text-slate-500 lg:font-semibold  lg:w-[68%] "
        >
          I'm a freelance Fullstack Web Developer dedicated to creating
          exceptional digital experiences. With expertise in crafting
          accessible, human-centered, and SEO-friendly products, I help
          businesses thrive in the digital landscape.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://github.com/Imma-Nuel-1"
                className="text-[white] hover:text-slate-500 rounded-full glow py-2 px-1"
              >
                <FaGithub
                  data-aos="fade-left"
                  className="text-[25px]  lg:text-[35px]"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/olumuyiwa-adesanya-846374241"
                className="text-[white] hover:text-slate-500 rounded-full glow py-2 px-1"
              >
                <FaLinkedinIn
                  data-aos="fade-right"
                  className="text-[25px] lg:text-[35px]"
                />
              </a>
              <a
                href="https://x.com/ImmaNueel_Dev"
                className="text-[white] hover:text-slate-500 rounded-full glow py-2 px-1"
              >
                <FaSquareXTwitter
                  data-aos="fade-left"
                  className="text-[25px] lg:text-[35px]"
                />
              </a>
              <a
                href="https://www.instagram.com/imma_nuel.2"
                className="text-[white] hover:text-slate-500 rounded-full glow py-2 px-1"
              >
                <FaInstagram
                  data-aos="fade-right"
                  className="text-[25px] lg:text-[35px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src="https://res.cloudinary.com/dvr3sk23p/image/upload/v1739387282/IMG_2779_kpocby.jpg"
        width={290}
        height={290}
        className="rounded-full border-2 p-1 border-slate-500 img_glow"
        alt=""
      />
    </div>
  );
};

export default Banner;
