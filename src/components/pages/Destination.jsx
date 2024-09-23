import { NavLink, Outlet, useLocation } from 'react-router-dom';
import destinationImg from "../../assets/background-destination-desktop.jpg";
import planetMoon from "../../assets/image-moon.png";
import planetMars from "../../assets/image-mars.png";  // Add Mars, Europa, Titan images
import planetEuropa from "../../assets/image-europa.png";
import planetTitan from "../../assets/image-titan.png";

// framer motiom
import {motion} from "framer-motion"

// Define your nav links with paths
const navLinks = [
  { label: "Moon", path: "/destination/moon" },
  { label: "Mars", path: "/destination/mars" },
  { label: "Europa", path: "/destination/europa" },
  { label: "Titan", path: "/destination/titan" }
];

const Destination = () => {
  // Get the current route
  const location = useLocation();

  // Map route paths to images
  const planetImages = {
    "/destination/moon": planetMoon,
    "/destination/mars": planetMars,
    "/destination/europa": planetEuropa,
    "/destination/titan": planetTitan,
  };

  // Fallback image if the route is not in the map
  const currentPlanetImage = planetImages[location.pathname] || planetMoon;

  return (
    <div className="lg:pt-28 pt-24 md:pt-36 lg:px-32 min-h-screen  bg-cover bg-center" style={{ backgroundImage: `url(${destinationImg})` }}
      >
      
      <div className="flex gap-2 mb-8 justify-center lg:justify-start md:justify-start md:px-6  ">
        <h1 className="text-gray-500 font-bold text-xl">01</h1>
        <h1 className="uppercase lg:text-xl text-lg text-white">Pick your destination</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center ">
        {/* Render the image based on the current route */}
      <motion.img key={location.pathname} src={currentPlanetImage} alt="Current Planet" className="w-[35%]  md:w-[40%] lg:[50%] h-auto pt-4 mb-7 md:mb-16 lg:mb-0" 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }} 
        exit={{ x: 100, opacity: 0 }} 
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      {/* Nav links for destination */}
        <div className="w-full lg:px-24 sm:px-8 md:px-16">
          <nav className="mb-10 flex lg:justify-start justify-center md:mb-14">
            <ul className="flex sm:gap-6 md:gap-8 gap-4">
              {navLinks.map((link, index) => (
                <li key={index} className='uppercase text-[13px] '>
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => {
                      const isDestinationActive = location.pathname === "/destination" && link.path === "/destination/moon";
                      return (isActive || isDestinationActive) 
                        ? "text-white border-b-2 border-white pb-2" 
                        : "text-gray-400 hover:text-white";
                    }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* Render the image based on the current route */}
          
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Destination;

