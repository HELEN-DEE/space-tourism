

const Mars = () => {
  return (
    <section className="flex text-[#ffffff] justify-end">
      
      <div className=" ">
        <h1 className="text-7xl uppercase font-[bellefair]">
          Mars
        </h1>
        <p className="text-gray-400 leading-relaxed py-4 pb-7">
        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
        </p>
        <hr className="border-gray-600 border-t-[0.5px]"/>
          {/* Average distance and travel */}
        <div className="flex gap-20 uppercase pt-7">
          <div>
            <p className="text-[11px] text-gray-400">
              AVG. DISTANCE
            </p>
            <h3 className="text-2xl">
              225 MIL. km
            </h3>
          </div>
          <div>
            <p className="text-[11px] text-gray-400">
            est. travel time
            </p>
            <h3 className="text-2xl ">
              9 months
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mars
