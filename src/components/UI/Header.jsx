import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-4 text-white bg-[#202020]">
      <div className="max-w-6xl px-4 mx-auto ">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <h1 className="text-3xl font-bold">ReactAtlas</h1>
          </NavLink>

          {/* Hamburger button for mobile */}
          <button
            className="text-2xl lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <GiHamburgerMenu />
          </button>

          {/* Nav links */}
          <nav>
            <ul
              className={`${
                menuOpen ? "block" : "hidden"
              } absolute top-16 left-0 w-full bg-[#202020] px-4 py-4 flex flex-col gap-4 lg:static lg:flex lg:flex-row lg:items-center lg:gap-6 lg:bg-transparent lg:p-0`}
            >
              <li>
                <NavLink to="/" className="font-normal hover:underline">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="font-normal hover:underline">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/country" className="font-normal hover:underline">
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="font-normal hover:underline">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
