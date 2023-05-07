import { useState } from "react";
import { logo } from "../assets";
import { navLinks, CTA } from "./data";
import {SlMenu} from "react-icons/sl"
const Navbar = () => {
  const [toggle , setToggle]  = useState(false)
  return (
    <header className="w-full font-Poppins text-[16px]">
      <nav className="hidden md:flex justify-between w-[80%] mx-auto py-8">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
          <ul className="flex space-x-6 ml-8 text-GrayishViolet font-semibold">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.content}`}>{link.content}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex items-center space-x-6 font-semibold">
          {CTA.map((link) => (
            <li
              key={link.id}
              className={`${
                link.id === 2
                  ? " bg-Cyan rounded-full py-2 w-[100px] text-[#FFf] text-center "
                  : "text-GrayishViolet"
              }`}
            >
              <a href="">{link.content}</a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="md:hidden relative h-[200px]">
        <div className="flex items-center justify-between py-8 w-[90%] mx-auto">
          <img src={logo} alt="logo" />
          <button
            className="bg-none text-GrayishViolet cursor-pointer font-bold"
            onClick={() => setToggle(!toggle)}
          >
            <SlMenu size={30} />
          </button>
        </div>
        <ul
          className={`${
            toggle === true ? "scale-100 " : "scale-0"
          } w-[90%] mx-auto my-1  bg-DarkViolet text-[#fff]  rounded-xl space-y-6 flex flex-col items-center py-8 z-50 transform duration-300 relative`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.content}`}>{link.content}</a>
            </li>
          ))}
          {CTA.map((link) => (
            <li key={link.id}>
              <a href={`#${link.content}`}>{link.content}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
