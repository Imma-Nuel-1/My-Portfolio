import AOS from "aos";
import  { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [1000]);
  return (
    <div id="Projects">
      <div className="p-20 flex flex-col items-center justify-center">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-20 leading-normal uppercase text-white"
        >
          Projects
        </h1>
        <div className="flex flex-wrap gap-10 ">
          {/* project 1 */}
          <div className="flex flex-col gap-3">
            <img
              data-aos="fade-up"
              height={350}
              width={350}
              className="text-[26px] flex  items-center justify-center font-semibold text-white rounded-3xl p-3 border-2 border-slate-800 b_glow"
              src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1724191598/Screenshot_20-8-2024_23622_vercel.com_jlohoe.jpg"
              alt=""
            />
            <div className="flex gap-3 justify-center items-center ">
              <button>
                <a
                  href="https://real-estateiyi.vercel.app/"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    Demo
                  </span>
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Iyiola2dev/Real-Estate"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                   Github
                  </span>
                </a>
              </button>
            </div>
          </div>

          {/* project 2 */}
          <div className="flex flex-col gap-3">
            <img
              data-aos="fade-down"
              height={350}
              width={350}
              className="text-[26px] flex  items-center justify-center font-semibold text-white rounded-3xl p-3 border-2 border-slate-800 b_glow"
              src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1724920970/Screenshot_29-8-2024_94112_vercel.com_wlnqws.jpg"
              alt=""
            />
              <div className="flex gap-3 justify-center items-center ">
              <button>
                <a
                  href="https://space-webiyi.vercel.app/"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    Demo
                  </span>
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Iyiola2dev/Space-website"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                   Github
                  </span>
                </a>
              </button>
            </div>
          </div>

          {/* project 3 */}
          <div className="flex flex-col gap-3">
            <img
              data-aos="fade-up"
              height={350}
              width={350}
              className="text-[26px] flex  items-center justify-center font-semibold text-white rounded-3xl p-3 border-2 border-slate-800 b_glow"
              src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726938477/Screenshot_21-9-2024_18732_vercel.com_b34kry.jpg"
              alt=""
            />
              <div className="flex gap-3 justify-center items-center ">
              <button>
                <a
                  href="https://interior-website-black.vercel.app/"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    Demo
                  </span>
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Iyiola2dev/interior-website"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                   Github
                  </span>
                </a>
              </button>
            </div>
          </div>

          {/* project 4 */}
          <div className="flex flex-col gap-3">
            <img
              data-aos="fade-up"
              height={350}
              width={350}
              className="text-[26px] flex  items-center justify-center font-semibold text-white rounded-3xl p-3 border-2 border-slate-800 b_glow"
              src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726938415/capx_tmpbpv.jpg"
              alt=""
            />
              <div className="flex gap-3 justify-center items-center ">
              <button>
                <a
                  href="https://capx-recovery.vercel.app/"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    Demo
                  </span>
                </a>
              </button>
              <button>
                <a
                  href="#"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                   Github
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
