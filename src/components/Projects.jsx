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
              src="https://res.cloudinary.com/dvr3sk23p/image/upload/v1728606978/Screenshot_2024-10-11_013229_pn89o0.png"
              alt=""
            />
            <div className="flex gap-3 justify-center items-center ">
              <button>
                <a
                  href="https://react-ecommerce-appli-git-cdca9b-adesanya-oluwamuyiwas-projects.vercel.app"
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
                  href="https://github.com/Imma-Nuel-1/React-Ecommerce-Application.git"
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
              src="https://res.cloudinary.com/dvr3sk23p/image/upload/v1728606977/Screenshot_2024-10-11_013124_onbezz.png"
              alt=""
            />
            <div className="flex gap-3 justify-center items-center ">
              <button>
                <a
                  href="https://nextjs-dashboard-sandy-sigma-60.vercel.app"
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
                  href="https://github.com/Imma-Nuel-1/nextjs-dashboard.git"
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
