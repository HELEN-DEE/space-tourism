// Framer motion for transition
import {motion} from 'framer-motion'

const Titan = () => {
  return (
    <motion.section className="flex text-[#ffffff] justify-end"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      
      <div className=" text-center lg:text-start px-4">
        <h1 className="text-7xl uppercase font-[bellefair]">
          Titan
        </h1>
        <p className="text-gray-400 leading-relaxed py-4 pb-7 lg:w-auto md:w-[80%] md:mx-auto md:text-xl">
        The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
        </p>
        <hr className="border-gray-600 border-t-[0.5px] "/>
          {/* Average distance and travel */}
        <div className="flex lg:gap-20 gap-4 uppercase pt-7 justify-center lg:justify-star flex-col lg:flex-row">
          <div>
            <p className="text-[11px] text-gray-400">
              AVG. DISTANCE
            </p>
            <h3 className="text-2xl">
              1.6 BIL. km
            </h3>
          </div>
          <div>
            <p className="text-[11px] text-gray-400">
              est. travel time
            </p>
            <h3 className="text-2xl ">
              7 years
            </h3>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Titan
