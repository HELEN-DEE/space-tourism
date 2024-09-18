import { useState } from 'react';
import crewImg from "../../assets/background-crew-desktop.jpg";
import crew1 from "../../assets/image-douglas-hurley.png";
import crew2 from "../../assets/image-mark-shuttleworth.png";
import crew3 from "../../assets/image-victor-glover.png";
import crew4 from "../../assets/image-anousheh-ansari.png";

// Framer motion
import {motion} from "framer-motion"

const crewMembers = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: crew1
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: crew2
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: crew3
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Anousheh Ansari is an Iranian-American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: crew4
  },
];

const Crew = () => {
  const [currentMember, setCurrentMember] = useState(0);

  return (
    <section className="bg-cover bg-center min-h-screen pt-28 px-32 flex flex-col" style={{ backgroundImage: `url(${crewImg})` }}
    
    >
      <div className="flex gap-2 mb-14">
        
        <h1 className="text-gray-500 font-bold text-xl">02</h1>
        <h1 className="uppercase text-xl text-white">Meet your crew</h1>
      </div>
      
      <div className=" flex ">
        <div className="w-1/2 flex flex-col h-full ">
          <motion.div key={currentMember} className='max-h-52 py-16'
            initial={{ x: -100, opacity: 0 }} // Slide in from the right
            animate={{ x: 0, opacity: 1 }}  // Slide to the center
            exit={{ x: 100, opacity: 0 }}  // Slide out to the left
          transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <h2 className="text-gray-500 uppercase text-xl mb-2">{crewMembers[currentMember].role}</h2>
            <h3 className="text-white uppercase text-5xl mb-6">{crewMembers[currentMember].name}</h3>
            <p className="text-gray-400  mb-12 max-w-md">{crewMembers[currentMember].bio}</p>
          </motion.div>
          
          <div className="flex gap-4 mt-48">
            {crewMembers.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3  rounded-full transition-colors duration-300   ${index === currentMember ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'}`}
                onClick={() => setCurrentMember(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="w-1/2 flex justify-end items-end">
          <motion.img key={currentMember}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            src={crewMembers[currentMember].image} 
            alt={crewMembers[currentMember].name}
            className="max-h-[70vh] object-contain transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Crew;
