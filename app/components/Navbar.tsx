'use client';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navClass = `py-1 px-6 rounded-full border border-orange-400 
  hover:bg-orange-400 transform transition duration-300 font-semibold my-2 hover:text-white 
  hover:translate-x-2`;

  return (
    <div>
      <div className="mx-8 lg:mx-20 flex justify-between items-center py-8 md:py-10">
        <a href="/">
          <img
            src="/chakra.jpeg"
            alt="Logo"
            className="w-24 h-24 rounded-full hover:opacity-75"
          />
        </a>

        <div className="justify-center gap-6 hidden lg:flex items-center space-x-4">
          <a href="/about" className={navClass}>
            About
          </a>
          <a href="/myths" className={navClass}>
            Myths
          </a>
          <a href="/sampradayas" className={navClass}>
            Sāmpradayās
          </a>
          <a href="/epics" className={navClass}>
            Epics
          </a>
          <a href="/schools-of-thought" className={navClass}>
            Schools of thought
          </a>
        </div>

        <AiOutlineMenu
          onClick={toggleNav}
          className="flex lg:hidden w-6 h-6 cursor-pointer"
        />
      </div>

      {isNavOpen && ( // Render the navigation links if isNavOpen is true
        <div className="flex flex-col lg:hidden justify-start items-start mx-4">
          <a href="/about" className={navClass}>
            About
          </a>
          <a href="/myths" className={navClass}>
            Myths
          </a>
          <a href="/sampradayas" className={navClass}>
            Sāmpradayās
          </a>
          <a href="/gods" className={navClass}>
            Gods
          </a>
          <a href="/schools-of-thought" className={navClass}>
            Diversity
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
