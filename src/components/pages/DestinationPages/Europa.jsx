// Framer motion
import {motion} from 'framer-motion'

const Europa = () => {
  return (
    <motion.section className="flex text-[#ffffff] justify-end"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      
      <div className=" text-center lg:text-start px-4">
        <h1 className="text-7xl uppercase font-[bellefair] ">
          Europa
        </h1>
        <p className="text-gray-400 leading-relaxed py-4 pb-7 md:w-[80%] md:mx-auto md:text-xl">
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
        </p>
        <hr className="border-gray-600 border-t-[0.5px]"/>
          {/* Average distance and travel */}
        <div className="flex lg:gap-20 gap-4 uppercase pt-7 justify-center lg:justify-star flex-col lg:flex-row">
          <div>
            <p className="text-[11px] text-gray-400">
              AVG. DISTANCE
            </p>
            <h3 className="text-2xl">
              628 MIL. km
            </h3>
          </div>
          <div>
            <p className="text-[11px] text-gray-400">
              est. travel time
            </p>
            <h3 className="text-2xl ">
              3 years
            </h3>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Europa
