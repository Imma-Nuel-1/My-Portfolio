import AOS from "aos";
import { useEffect } from "react";

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
        <div className="flex flex-wrap gap-10 justify-center items-center ">
          {/* project 1 */}
          <div className="flex flex-col gap-3">
            <img
              data-aos="fade-down"
              height={350}
              width={350}
              className="text-[26px] flex  items-center justify-center font-semibold text-white rounded-3xl p-3 border-2 border-slate-800 b_glow"
              src="https://res.cloudinary.com/dvr3sk23p/image/upload/v1739388672/Screenshot_2025-02-12_203034_exmep9.png"
              alt=""
            />
            <div className="flex gap-3 justify-center items-center ">
              <button>
                <a
                  href="https://my-portfolio-ys5c.vercel.app"
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
                  href="https://github.com/Imma-Nuel-1/My-Portfolio.git"
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
              data-aos="fade-up"
              height={350}
              width={350}
              className="text-[26px] flex  items-center justify-center font-semibold text-white rounded-3xl p-3 border-2 border-slate-800 b_glow"
              src="https://res.cloudinary.com/dvr3sk23p/image/upload/v1739388289/Screenshot_2025-02-12_202338_scsqem.png"
              alt=""
            />
            <div className="flex gap-3 justify-center items-center ">
              <button>
                <a
                  href="https://www.cryptocarehub.pro"
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
                  href="https://github.com/Imma-Nuel-1/cryptocare-hub2.git"
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
              src="https://res.cloudinary.com/dvr3sk23p/image/upload/v1739388288/Screenshot_2025-02-12_202234_pfleq6.png"
              alt=""
            />
            <div className="flex gap-3 justify-center items-center ">
              <button>
                <a
                  href="https://birthday-portal-frontend.vercel.app"
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
                  href="https://github.com/Imma-Nuel-1/Birthday-Portal-Frontend.git"
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
              src="https://res.cloudinary.com/dvr3sk23p/image/upload/v1739388288/Screenshot_2025-02-12_202157_cvym90.png"
              alt=""
            />
            <div className="flex gap-3 justify-center items-center ">
              <button>
                <a
                  href="https://annies-birthday.vercel.app"
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
                  href="https://github.com/Imma-Nuel-1/Annies-birthday-.git"
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
