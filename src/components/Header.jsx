import { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import logo from "../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

const navLinks = [
  { number: "00", label: "Home", path: "/" },
  { number: "01", label: "Destination", path: "/destination" },
  { number: "02", label: "Crew", path: "/crew" },
  { number: "03", label: "Technology", path: "/technology" },
];

const navActive = ({ isActive }) => {
  return isActive
    ? "border-b-2 border-white"
    : "text-white hover:text-gray-300 hover:border-b-2 ";
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="absolute w-full z-10">
      <div className="flex items-center justify-between lg:pl-16 px-5 lg:px-0 py-8">
        <img src={logo} alt="Logo" className="lg:w-12 lg:h-12 w-10 h-10" />
        
        <nav className="hidden lg:block bg-[#ffffff0a] backdrop-blur-md transition-all duration-500 px-20">
          <hr className="border-gray-600 border-t-[1px] absolute top-1/2 left-[-85%] w-[90%]" />
          <ul className="flex gap-8 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 transition-all duration-300 py-5 text-white ${navActive({ isActive })}`
                  }
                >
                  <p className="font-bold text-[13px]">{link.number}</p>
                  <p className="uppercase text-[12px] tracking-widest">{link.label}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
            <button onClick={menuToggle} className="lg:hidden">
              <RiMenuFill className="text-white" size={40} />
            </button>

      </div>
      
      {isMenuOpen && (
        <div className="bg-[#ffffff0a] backdrop-blur-xl fixed right-0 top-0 w-[62%] h-screen ">
        <div className="">

          <button className="absolute top-8 right-3" onClick={menuToggle}>
            <RiCloseFill className="text-white" size={50}/>
          </button>
          <ul className="flex flex-col gap-8 mt-24 mx-5">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors duration-300 w-auto text-white
                  ${navActive({ isActive })}`
                  }
                >
                  <p className="font-bold text-lg">{link.number}</p>
                  <p className="uppercase text-lg tracking-widest ">{link.label}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      )}
      
    </header>
  );
};

export default Header;