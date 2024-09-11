

const Europa = () => {
  return (
    <section className="flex text-[#ffffff] justify-end">
      
      <div className=" ">
        <h1 className="text-7xl uppercase font-[bellefair]">
          Europa
        </h1>
        <p className="text-gray-400 leading-relaxed py-4 pb-7">
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
        </p>
        <hr className="border-gray-600 border-t-[0.5px]"/>
          {/* Average distance and travel */}
        <div className="flex gap-20 uppercase pt-7">
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
    </section>
  )
}

export default Europa
