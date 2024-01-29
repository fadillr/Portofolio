import { GiWireframeGlobe } from "react-icons/gi";

const Servis = () => {
  return (
    <div className="flex flex-col bg-purple-900 h-fit gap-5">
      <div className="flex flex-col items-center h-full m-5 gap-2 px-10">
        <h1 className="font-bold text-4xl text-white mb-3">My Service</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="justify-around flex flex-col w-full text-center items-center p-5  backdrop-blur-md backdrop-filter bg-purple-950 shadow-lg rounded-2xl text-white">
            <GiWireframeGlobe className=" text-6xl text-white" />
            <h1 className="text-white font-bold text-2xl">Web Developer</h1>
            <p className="text-gray-400 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="justify-around flex flex-col w-full text-center items-center p-5  backdrop-blur-md backdrop-filter bg-purple-950 shadow-lg rounded-2xl text-white">
            <GiWireframeGlobe className=" text-6xl text-white" />
            <h1 className="text-white font-bold text-2xl">Mobile Developer</h1>
            <p className="text-gray-400 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="justify-around flex flex-col w-full text-center items-center p-5  backdrop-blur-md backdrop-filter bg-purple-950 shadow-lg rounded-2xl text-white">
            <GiWireframeGlobe className=" text-6xl text-white" />
            <h1 className="text-white font-bold text-2xl">UI/UX Designer</h1>
            <p className="text-gray-400 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,320L1440,96L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Servis;
