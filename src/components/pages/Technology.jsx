import  { useState } from 'react';
import technologyImg from "../../assets/background-technology-desktop.jpg";
import launchVehicleImg from "../../assets/image-launch-vehicle-portrait.jpg";
import spaceportImg from "../../assets/image-spaceport-portrait.jpg";
import spaceCapsuleImg from "../../assets/image-space-capsule-portrait.jpg";

const technologyData = [
  {
    name: "LAUNCH VEHICLE",
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: launchVehicleImg
  },
  {
    name: "SPACEPORT",
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: spaceportImg
  },
  {
    name: "SPACE CAPSULE",
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: spaceCapsuleImg
  }
]

const Technology = () => {
  const [currentTech, setCurrentTech] = useState(0)

  return (
    <section className="bg-cover bg-center bg-no-repeat min-h-screen pt-28 px-32" style={{ backgroundImage: `url(${technologyImg})`}}>
      <div className="flex gap-4 mb-6">
        <h1 className="text-xl text-gray-500 font-bold">03</h1>
        <h1 className="uppercase text-xl text-white">space launch 101</h1>
      </div>
      
      <div className='flex justify-between items-center'>
        <div>

          <div className=''>
            {[0, 1, 2].map((index) => (
              <button key={index} className= {`w-20 h-20 rounded-full border-2 border-white/25 text-2xl font-bold ${currentTech === index ? 'bg-white text-black' : 'text-white hover:border-white'}`}
              onClick={() => setCurrentTech(index)}>
                {index + 1}
              </button>
            ))}
          </div>

          <div className='max-w-md'>
              <p className='text-gray-400 text-sm mb-2'>THE TERMINOLOGY...</p>
              <h2 className='text-white text-5xl mb-4'>{technologyData[currentTech].name}</h2>
              <p className='text-gray-400'>{technologyData[currentTech].description}</p>
          </div>
        </div>

        <div className="w-1/2">
          <img 
            src={technologyData[currentTech].image} 
            alt={technologyData[currentTech].name}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;