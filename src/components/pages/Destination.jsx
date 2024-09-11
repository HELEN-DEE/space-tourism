import { NavLink, Outlet, useLocation } from 'react-router-dom';
import destinationImg from "../../assets/background-destination-desktop.jpg";
import planetMoon from "../../assets/image-moon.png";
import planetMars from "../../assets/image-mars.png";  // Add Mars, Europa, Titan images
import planetEuropa from "../../assets/image-europa.png";
import planetTitan from "../../assets/image-titan.png";

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
    <section className="pt-28 px-32 min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${destinationImg})` }}>
      <div className="flex gap-2 mb-8">
        <h1 className="text-gray-500 font-bold">01</h1>
        <h1 className="uppercase text-xl text-white">Pick your destination</h1>
      </div>
      <div className="flex ">
        {/* Render the image based on the current route */}
      <img src={currentPlanetImage} alt="Current Planet" className="w-[50%] h-auto pt-4" />
      {/* Nav links for destination */}
        <div className="w-full px-24 ">
          <nav className="mb-10 flex justify-start">
            <ul className="flex gap-8 ">
              {navLinks.map((link, index) => (
                <li key={index} className='uppercase'>
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
    </section>
  );
};

export default Destination;

