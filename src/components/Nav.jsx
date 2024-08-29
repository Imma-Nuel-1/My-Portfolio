import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden  block absolute top-16 w-screen h-screen left-0 right-0 z-50 bg-slate-800 transition">
        <ul className="text-center h-[100vh] text-xl p-20">
          <Link spy={true} smooth={true} to="Home">
            <li  onClick={() =>  setclick(!click)} className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li  onClick={() =>  setclick(!click)} className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li  onClick={() =>  setclick(!click)} className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Skills
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li  onClick={() =>  setclick(!click)} className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Projects
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contacts">
            <li  onClick={() =>  setclick(!click)} className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh w-full fixed bg-slate-800 flex justify-between nav z-50 text-white lg:py-5 px-20 py-4  ">
        <div className="flex items-center flex-1">
          <span>
            <img
              className="h-[30px] lg:h-[50px]"
              src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1723417365/Screenshot_12-8-2024_0159_looka.com-removebg-preview_h1yunn.png"
              alt=""
            />
          </span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-center font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link  spy={true} smooth={true} to="Home">
                <li  className="hover:text-slate-600  transition  border-slate-900 hover:border-slate-600 cursor-pointer ">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li  className="hover:text-slate-600 transition  border-slate-900 hover:border-slate-600 cursor-pointer">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li  className="hover:text-slate-600 transition  border-slate-900 hover:border-slate-600 cursor-pointer">
                  Skills
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li  className="hover:text-slate-600 transition  border-slate-900 hover:border-slate-600 cursor-pointer">
                  
                  Projects
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contacts">
                <li  className="hover:text-slate-600 transition  border-slate-900 hover:border-slate-600 cursor-pointer">
                  Contacts
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};
export default Nav;
