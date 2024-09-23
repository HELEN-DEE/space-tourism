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
      className="min-h-screen bg-cover bg-center bg-no-repeat flex lg:items-center md:items-center  "
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
      }}
    >
      <div className=" flex-grow flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-40 pt-20  lg:pt-28 gap-6">
        <motion.div 
          className="lg:max-w-md text-center lg:text-start mb-20 lg:mb-0 md:mb-16 "
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h3 className="text-gray-300 uppercase tracking-widest lg:mb-4 md:mb-6 mb-8 text-base md:text-lg lg:text-xl font-[barlow]">
            So, you want to travel to
          </h3>
          <h1 className="text-6xl md:text-9xl lg:text-8xl text-white font-extralight mb-6 uppercase">
            Space
          </h1>
          <p className="text-gray-300  md:text-xl lg:text-[14px] md:w-[80%] md:mx-auto lg:w-auto">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well, sit back and relax because we'll give you a truly out-of-this-world experience!
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center items-center lg:justify-end"
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
