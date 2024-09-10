import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const navLinks = [
  { number: "00", label: "Home", path: "/" },
  { number: "01", label: "Destination", path: "/destination" },
  { number: "02", label: "Crew", path: "/crew" },
  { number: "03", label: "Technology", path: "/technology" },
];

const Header = () => {
  return (
    <header className="absolute w-full z-10">
      <div className="flex items-center justify-between px-16 py-8">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </div>
        <div className="flex-grow mx-12 relative">
          <hr className="border-gray-600 border-t-[1px] absolute top-1/2 w-full" />
        </div>
        <nav className="bg-[#ffffff0a] backdrop-blur-md py-4 px-16">
          <ul className="flex gap-8">
            {navLinks.map((link, index) => (
              <li key={index} className="group">
                <Link
                  to={link.path}
                  className="flex items-center text-white gap-2 hover:text-gray-300 transition-colors duration-300"
                >
                  <span className="font-bold">{link.number}</span>
                  <span className="uppercase text-sm tracking-widest">{link.label}</span>
                </Link>
                <div className="h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
