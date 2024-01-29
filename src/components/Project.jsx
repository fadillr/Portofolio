import React, { useState } from "react";
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";
import { RiBootstrapFill, RiReactjsFill } from "react-icons/ri";

// Data proyek dalam bentuk array
const projects = [
  {
    id: 1,
    title: "Mediqueue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/src/assets/project1.svg",
    icon1: <RiReactjsFill/>,
    icon2: <RiBootstrapFill/>,
  },
  {
    id: 1,
    title: "Mediqueue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/src/assets/project1.svg",
    icon1: <RiReactjsFill/>,
    icon2: <RiBootstrapFill/>,
  },
  {
    id: 1,
    title: "Mediqueue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/src/assets/project1.svg",
    icon1: <RiReactjsFill/>,
    icon2: <RiBootstrapFill/>,
  },
  {
    id: 1,
    title: "Mediqueue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/src/assets/project1.svg",
    icon1: <RiReactjsFill/>,
    icon2: <RiBootstrapFill/>,
  },
  {
    id: 1,
    title: "Mediqueue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/src/assets/project1.svg",
    icon1: <RiReactjsFill/>,
    icon2: <RiBootstrapFill/>,
  },
  {
    id: 1,
    title: "Mediqueue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/src/assets/project1.svg",
    icon1: <RiReactjsFill/>,
    icon2: <RiBootstrapFill/>,
  },
  // Tambahkan proyek lain di sini jika diperlukan
];

const Project = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Menampilkan maksimal 3 proyek jika showAllProjects adalah false
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  // Mengubah showAllProjects menjadi true saat tombol "Show more" diklik
  const handleShowMoreClick = () => {
    setShowAllProjects(true);
  };

  // Mengubah showAllProjects menjadi false saat tombol "Hidden" diklik
  const handleHiddenClick = () => {
    setShowAllProjects(false);
  };

  return (
    <div className="flex flex-col bg-black h-fit gap-5">
      <div className="flex flex-col items-center h-full m-5 gap-2 px-2">
      <h1 className="font-bold text-4xl mb-3 bg-clip-text text-white">My Project</h1>
        {/* Gunakan map untuk menampilkan card untuk setiap proyek yang ditampilkan */}
        {visibleProjects.map((project) => (
          <div key={project.id} className="justify-around flex flex-col w-full text-center items-center p-5  backdrop-blur-md backdrop-filter bg-zinc-900 shadow-lg rounded-2xl text-white">
            <img src={project.image} alt={project.title} className="rounded-xl" />
            <h1 className="text-white font-bold text-2xl">{project.title}</h1>
            <p className="text-gray-400 text-justify">{project.description}</p>
            <div className="flex flex-row gap-2 justify-start w-full mt-2 text-lg">
                {project.icon1}
                {project.icon2}
            </div>
          </div>
        ))}
        {/* Menampilkan tombol "Show more" atau "Hidden" sesuai dengan status showAllProjects */}
        {!showAllProjects ? (
          <button className="text-purple-400 py-1 px-3 flex items-center gap-1" onClick={handleShowMoreClick}>
            <span>Show more</span>
            <MdKeyboardDoubleArrowDown />
          </button>
        ) : (
          <button className="text-purple-400 py-1 px-3 flex items-center gap-1" onClick={handleHiddenClick}>
            <span>Hidden</span>
            <MdKeyboardDoubleArrowUp />
          </button>
        )}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#581c87" fill-opacity="1" d="M0,320L1440,96L1440,320L0,320Z"></path></svg>
    </div>
  );
};

export default Project;
