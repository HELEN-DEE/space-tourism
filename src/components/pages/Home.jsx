import {useState, useEffect} from 'react'

import homeImgDesktop from "../../assets/background-home-desktop.jpg";
import homeImgMobile from "../../assets/background-home-mobile.jpg";
import homeImgTablet from "../../assets/background-home-tablet.jpg"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, []);


  const getBackgroundImage = () => {
    if (windowWidth >= 1024) {
      return homeImgDesktop;
    } else if (windowWidth >= 768) {
      return homeImgTablet;
    } else {
      return homeImgMobile;
    }
      
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
      }}
    >
      <div className="container mx-auto px-4 md:px-16 lg:px-32 pt-20 md:pt-16 lg:pt-40 flex flex-col lg:flex-row justify-between items-center  lg:space-y-0 space-y-20">
        <motion.div 
          className="lg:max-w-md text-center lg:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h3 className="text-gray-300 uppercase tracking-widest lg:mb-4 md:mb-6 text-base md:text-lg lg:text-xl font-[barlow]">
            So, you want to travel to
          </h3>
          <h1 className="text-6xl md:text-9xl lg:text-8xl text-white font-extralight mb-6 uppercase">
            Space
          </h1>
          <p className="text-gray-300 text-sm md:text-xl lg:text-[14px] ">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well, sit back and relax because we'll give you a truly out-of-this-world experience!
          </p>
        </motion.div>
        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Link to="/destination">
            <button className="bg-white text-gray-900 text-xl uppercase md:text-2xl lg:text-3xl rounded-full w-36 h-36 md:w-64 md:h-64 lg:w-60 lg:h-60 flex items-center justify-center hover:ring-[40px] hover:ring-white hover:ring-opacity-30 transition-all duration-300 ">
              Explore
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};



export default Home;
