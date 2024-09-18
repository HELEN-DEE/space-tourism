import homeImg from "../../assets/background-home-desktop.jpg";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${homeImg})` }}
      
    >
      <div className="container mx-auto px-32 pt-40 flex justify-between items-center"
        
      >
        <motion.div className="max-w-md"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h3 className="text-gray-300 uppercase tracking-widest mb-4 text-xl font-[barlow]">
            So, you want to travel to
          </h3>
          <h1 className="text-8xl text-white font-extralight mb-6 uppercase">
            Space
          </h1>
          <p className="text-gray-300 text-[14px]">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well, sit back and relax because we'll give you a truly out-of-this-world experience!
          </p>
        </motion.div>
        <motion.div className="flex justify-center items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Link to="/destination">
            <button className="bg-white text-gray-900 text-3xl rounded-full w-60 h-60 flex items-center justify-center hover:ring-8 hover:ring-white hover:ring-opacity-50 transition-all duration-300">
              Explore
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};



export default Home;
