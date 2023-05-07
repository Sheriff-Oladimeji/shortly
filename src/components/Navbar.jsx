import { logo } from "../assets"
import { navLinks } from "./data"
const Navbar = () => {
  return (
      <header>
          <nav className="hidden md:flex  w-[80px] mx-auto py-8 items-center">
              <div className="flex items-center">
                  <img src={logo} alt="" />
                  <ul className="flex space-x-4 ml-4 text-GrayishViolet">
                      {navLinks.map((link,) => (
                          <li key={link.id}>
                              <a href={`#${link.content}`}>{ link.content}</a>  
                          </li>
                      ))}  
                  </ul>
              </div>
              <div></div>
          </nav>
      </header>
  )
}

export default Navbar