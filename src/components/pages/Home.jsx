import homeImg from "../../assets/background-home-desktop.jpg";

const Home = () => {
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <div className="container mx-auto px-28 pt-40 flex justify-between items-center">
        <div className="max-w-md">
          <h3 className="text-gray-300 uppercase tracking-widest mb-4 text-xl font-[barlow-condensed]">
            So you want to travel to
          </h3>
          <h1 className="text-8xl text-white  font-extralight mb-6 uppercase ">
            Space
          </h1>
          <p className="text-gray-300 text-[14px]">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-white text-gray-900 text-2xl font-bold rounded-full w-48 h-48 flex items-center justify-center hover:ring-4 hover:ring-white hover:ring-opacity-50 transition-all duration-300">
            Explore 
          </button>
        </div>
      </div>
    </main>
  )
}

export default Home;
