import { logo } from "../assets"

const Navbar = () => {
  return (
      <header>
          <nav className="hidden md:flex  w-[80px] mx-auto py-8">
              <div>
                  <img src={logo} alt="" />
                  <ul>
                      
                  </ul>
              </div>
              <div></div>
          </nav>
      </header>
  )
}

export default Navbar