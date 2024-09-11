// import planetMoon from "../../../assets/image-moon.png";


const Moon = () => {
  return (
    <section className="flex text-[#ffffff] justify-end">
      
      <div className=" ">
        <h1 className="text-7xl uppercase font-[bellefair]">
          Moon
        </h1>
        <p className="text-gray-400 leading-relaxed py-4 pb-7">
        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <hr className="border-gray-600 border-t-[0.5px]"/>
          {/* Average distance and travel */}
        <div className="flex gap-20 uppercase pt-7">
          <div>
            <p className="text-[11px] text-gray-400">
              AVG. DISTANCE
            </p>
            <h3 className="text-2xl">
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
    </section>
  )
}

export default Moon
