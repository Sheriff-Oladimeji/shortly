import { logo } from "../assets";
import { navLinks, CTA } from "./data";
const Navbar = () => {
  return (
    <header className="w-full font-Poppins">
      <nav className="hidden md:flex justify-between w-[80%] mx-auto py-8">
        <div className="flex items-center">
          <img src={logo} alt="" />
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
            <li key={link.id} className={`${link.id === 2?" bg-Cyan rounded-full py-1 w-[100px] text-[#FFf] text-center ":"text-GrayishViolet"}`}>
              <a href="">{link.content}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
