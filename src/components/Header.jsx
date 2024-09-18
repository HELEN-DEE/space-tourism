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
    ? "border-b-2 border-white "
    : "text-white hover:text-gray-300 ";
};

const Header = () => {
  return (
    <header className="absolute w-full z-10">
      <div className="flex items-center justify-between pl-16 py-8">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </div>

        {/* <div className="flex-grow mx- relative">
          <hr className="border-gray-600 border-t-[1px] absolute top-1/2 w-full" />
        </div> */}

        <nav className="bg-[#ffffff0a] backdrop-blur-md transition-all duration-500 px-20 ">
        <hr className="border-gray-600 border-t-[1px] absolute top-1/2 left-[-85%] w-[90%]" />
          <ul className="flex gap-8">
            {navLinks.map((link, index) => (
              <li key={index} className="">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 transition-colors duration-300 py-5 text-white ${navActive({ isActive })}`
                  }
                >
                  <p className="font-bold text-[13px]">{link.number}</p>
                  <p className="uppercase text-[12px] tracking-widest">{link.label}</p>
                </NavLink>
                
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
