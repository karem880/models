import React, { useEffect } from 'react';
import  { useState } from 'react';

import { FaBars, FaSun, FaMoon,FaCartPlus ,FaSearch ,FaUser } from 'react-icons/fa'; 

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };




  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setDarkMode(theme === "dark");
    document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    document.documentElement.classList[newTheme === "dark" ? "add" : "remove"]("dark");
    setDarkMode(newTheme === "dark");
  };



  
    return (
        <>
               <header className=' hidden md:flex justify-evenly  w-full fixed top-0 left-0 bg-white z-50  h-[100px]  overflow-hidden  items-center drop-shadow-2xl '>
               <h1 className='text-2xl    text-black first-letter:text-cyan-400 first-letter:text-4xl font-extrabold first-letter:underline ' >Karem Mahmoud</h1>
            <ul className='flex items-center justify-between gap-x-10 '>
                <li className='  text-cyan-500 text-xl  hover:text-cyan-500'><a href="#services">services</a> </li>
                <li className='  text-gray-800 text-xl  hover:text-cyan-500'><a href="#contact">contact</a> </li>
                <li className='  text-gray-800 text-xl  hover:text-cyan-500'><a href="#contact">FQS</a> </li>
                <li className='  text-gray-800 text-xl  hover:text-cyan-500'><a href="#contact">Templets</a> </li>
                <li className='  text-gray-800 text-xl  hover:text-cyan-500'><a href="#contact">new</a> </li>
                <li className='  text-gray-800 text-xl  hover:text-cyan-500'><a href="#contact">new</a> </li>


                {/* <li className='mr-10 text-xl cursor-pointer ' onClick={toggleDarkMode}>
            {darkMode ? <FaSun size={22} color='gold' /> : <FaMoon size={22} color='' className='text-gray-500' />}
          </li> */}
            </ul>

            <ul className='flex items-center justify-between gap-16  '>
              <li className='  text-gray-800 text-xl  hover:text-cyan-500'><FaCartPlus size={24}/></li>
              <li className='  text-gray-800 text-xl  hover:text-cyan-500'><FaSearch size={24}/></li>
              <li className='  text-gray-800 text-xl  hover:text-cyan-500'><FaUser size={24}/></li>
            </ul>


        </header>
        <nav className=' w-full fixed top-0 left-0 bg-white z-50'>
    <header className='md:hidden flex justify-between px-8 py-3    items-center drop-shadow-2xl relative'>
      <h1 className='text-2xl    text-black first-letter:text-cyan-400 first-letter:text-4xl font-extrabold first-letter:underline '>Karem Mahmoud</h1>
      
      <ul className='flex items-center justify-between gap-10 md:gap-16  '>
              <li className='  text-gray-800 text-4xl  hover:text-cyan-500'><FaCartPlus size={24}/></li>
              <li className='  text-gray-800 text-4xl  hover:text-cyan-500'> <FaSearch  size={24}/></li>
              <li className='  text-gray-800 text-4xl  hover:text-cyan-500'><FaUser size={24}/></li>
            </ul>
      
      <p className='cursor-pointer ' onClick={toggleMenu}>
        <FaBars className='text-cyan-600 first-letter:text-cyan-500 ' size={22} />
      </p>
      {showMenu &&(<>
         <ul className="absolute bottom-[-325px] flex flex-col justify-center items-start  left-0 w-full  bg-white p-5  z-50" >
         <li className='mt-5 text-gray-500 text-xl hover:scale-[1.1] hover:text-cyan-500'><a href="#services">services</a></li>
         <li className='mt-5 text-gray-500 text-xl hover:scale-[1.1] hover:text-cyan-500'><a href="#projects">projects</a></li>
         <li className='mt-5 text-gray-500 text-xl hover:scale-[1.1] hover:text-cyan-500'><a href="#faq">faq</a></li>
         <li className='mt-5 text-gray-500 text-xl hover:scale-[1.1] hover:text-cyan-500'><a href="#about">about</a></li>
         <li className='mt-5 text-gray-500 text-xl hover:scale-[1.1] hover:text-cyan-500'><a href="#contact">details</a></li>
         <li className='mt-5 text-gray-500 text-xl hover:scale-[1.1] hover:text-cyan-500'><a href="#contact">contact</a></li>

         
         {/* <li className='mr-10 mt-5  text-xl hover:scale-105 cursor-pointer' onClick={toggleDarkMode}>
         {darkMode ? <FaSun size={22} color='gold' /> : <FaMoon size={22}  className='text-gray-500' />}
          </li> */}
       </ul>
       
       </>
       
      )}
     
    </header>
    </nav>
        </>
    );
}

export default Navbar;