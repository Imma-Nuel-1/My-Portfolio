import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      data-aos="fade-down"
      className="bg-slate-800 text-white lg:px-48 px-4 py-20 "
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex-10 ">
          <ul className="flex px-10 gap-3  text-[15px]">
            <Link spy={true} smooth={true} to="Home">
              <li className="hover:text-slate-600  transition  border-slate-900 hover:border-slate-600 cursor-pointer ">
                Home
              </li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className="hover:text-slate-600 transition  border-slate-900 hover:border-slate-600 cursor-pointer">
                About
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
              <li className="hover:text-slate-600 transition  border-slate-900 hover:border-slate-600 cursor-pointer">
                Skills
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Projects">
              <li className="hover:text-slate-600 transition  border-slate-900 hover:border-slate-600 cursor-pointer">
                {" "}
                Projects
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Contacts">
              <li className="hover:text-slate-600 transition  border-slate-900 hover:border-slate-600 cursor-pointer">
                Contacts
              </li>
            </Link>
          </ul>
        </div>
        <div data-aos="fade-right" className="flex space-x-4">
          <a
            className="text-white text-[25px] glow p-1 container mx-auto hover:rounded-full  hover:text-slate-300 transition-all duration-150 ease-in-out"
            href="https://github.com/Imma-Nuel-1"
          >
            <FaGithub />
          </a>
          <a
            className="text-white text-[25px] hover:rounded-full p-1 container mx-auto  glow hover:text-slate-300 transition-all duration-150 ease-in-out"
            href="https://x.com/ImmaNueel_Dev"
          >
            <FaSquareXTwitter />
          </a>
          <a
            className="text-white text-[25px] hover:rounded-full p-1 container mx-auto  glow hover:text-slate-300 transition-all duration-150 ease-in-out"
            href="https://www.linkedin.com/in/olumuyiwa-adesanya-846374241"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="text-white text-[25px] hover:rounded-full p-1 container mx-auto  glow hover:text-slate-300 transition-all duration-150 ease-in-out"
            href="https://www.instagram.com/imma_nuel.2"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2024 created by X user{" "}
          <a href="https://x.com/ImmaNueel_Dev">@ImmaNueel_Devs</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
