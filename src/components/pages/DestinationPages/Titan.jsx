

const Titan = () => {
  return (
    <section className="flex text-[#ffffff] justify-end">
      
      <div className=" ">
        <h1 className="text-7xl uppercase font-[bellefair]">
          Titan
        </h1>
        <p className="text-gray-400 leading-relaxed py-4 pb-7">
        The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
        </p>
        <hr className="border-gray-600 border-t-[0.5px]"/>
          {/* Average distance and travel */}
        <div className="flex gap-20 uppercase pt-7">
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
    </section>
  )
}

export default Titan
