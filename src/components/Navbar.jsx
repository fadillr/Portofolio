import { useState, useEffect } from 'react';
import { RiMenu5Line, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed w-full top-[-1px] z-50">
      <div className={`flex justify-between p-4 items-center ${isScrolled ? 'bg-purple-950' : 'bg-transparent'}`}>
        <div>
          <h1 className="text-3xl text-white font-bold">Portofolio</h1>
        </div>
        <div className="text-3xl text-white">
          <button className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <RiCloseFill />
            ) : (
              <RiMenu5Line />
            )}
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'opacity-100' : 'opacity-0'} flex h-fit px-2 py-1`}>
        <ul className='flex flex-col gap-4 w-full p-5 bg-opacity-25 backdrop-blur-md backdrop-filter bg-black shadow-lg rounded-md'>
            <li className='px-4 py-2 bg-white rounded-full w-fit'><a className='text-black' href="">Home</a></li>
            <li className='px-4 py-2'><a className='text-white' href="">About</a></li>
            <li className='px-4 py-2'><a className='text-white' href="">Skill</a></li>
            <li className='px-4 py-2'><a className='text-white' href="">Project</a></li>
            <li className='px-4 py-2'><a className='text-white' href="">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
