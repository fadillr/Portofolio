import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail,IoCall } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen gap-5 bg-gradient-to-b from-purple-900 to-black">
        <div className="mt-16 flex items-center p-5">
          <img src="/src/assets/poto.svg" alt="" className="mx-auto" />
        </div>
        <div className="grow flex flex-col items-center  m-5 text-center">
          <h2 className=" text-purple-400 py-1 px-3 bg-purple-500 rounded-full bg-opacity-10 backdrop-blur-md backdrop-filter shadow-lg mb-2">Welcome to my site!</h2>
          <h1 className=" font-bold text-4xl text-white">Muhammad Fadillah Rasyid, S.kom</h1>
          <p className=" text-gray-400 text-base mt-1">a Web Developer, Mobile Developer and UI/UX Designer</p>
          <div className="text-white text-2xl flex flex-row gap-3 mt-4">
            <FaGithub/>
            <FaLinkedin/>
            <IoMail/>
            <IoCall/>
          </div>
        </div>
      </div>
  )
}

export default Hero