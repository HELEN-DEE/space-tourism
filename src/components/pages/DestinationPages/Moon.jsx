// import planetMoon from "../../../assets/image-moon.png";
import {motion} from 'framer-motion'

const Moon = () => {
  return (
    <motion.section className="flex text-[#ffffff] lg:justify-end justify-center"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      
      <div className=" text-center lg:text-start px-4">
        <h1 className="lg:text-7xl text-5xl uppercase font-[bellefair]">
          Moon
        </h1>
        <p className="text-gray-400 leading-relaxed py-4 pb-7 lg:w-auto md:w-[80%] md:mx-auto md:text-xl">
        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <hr className="border-gray-600 border-t-[0.5px]"/>
          {/* Average distance and travel */}
        <div className="flex lg:gap-20 gap-6 uppercase pt-7 justify-center lg:justify-start flex-col lg:flex-row">
          <div className=''>
            <p className="text-[11px] text-gray-400">
              AVG. DISTANCE
            </p>
            <h3 className="text-2xl ">
              384,400 km
            </h3>
          </div>
          <div>
            <p className="text-[11px] text-gray-400">
            est. travel time
            </p>
            <h3 className="text-2xl ">
              3 days
            </h3>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Moon
