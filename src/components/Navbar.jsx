import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCar } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/img/valuedlanguages.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div className=''>
      <nav className="bg-black fixed w-full shadow-greyshadow shadow-sm z-50">
      {/* <div className='text-center text-sm bg-primary w-full py-1.5 text-white '>Welcome to Valued Academy</div> */}
      <div className="mx-auto px-5 sm:px-0 lg:px-1 sm:max-w-screen-md ">
        <div className="relative flex items-center justify-between h-16 ">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden ">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white   focus:outline-none "
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
            <div className="flex-shrink-0 text-white text-lg font-bold h-8">
            <Link to="/" >
            <a href="#">
            <img src={logo} alt="" className='h-full'/>
            </a>
            </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:bg-gray-100 hover:text-primary  px-3 py-2 rounded-md text-sm font-medium"><Link reloadDocument to="/">Home</Link></a>
                <a href="#about" className="text-white hover:bg-gray-100  hover:text-primary px-3 py-2 rounded-md text-sm font-medium"><Link reloadDocument to="/#about">About</Link></a>
                <a href="#services" className="text-white hover:bg-gray-100  hover:text-primary px-3 py-2 rounded-md text-sm font-medium"><Link reloadDocument to="/#services">Services</Link></a>
                <a href="#contact" className="text-white hover:bg-gray-100  hover:text-primary px-3 py-2 rounded-md text-sm font-medium"><Link reloadDocument to="/#contact">Contact</Link></a>
                <a href="/#products" className="bg-primary text-white px-4 flex items-center rounded-md text-xs hover:bg-blue-700 font-bold"><Link reloadDocument to="/products" className='flex items-center'><FontAwesomeIcon className='w-3 h-3 mr-2' icon={faCar} />Cars</Link></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} fixed h-full w-full bg-black bg-opacity-60`} id="mobile-menu">
        <div className="px-2 pt-2 pb-5 space-y-1 text-center absolute bg-black w-full shadow-greyshadow shadow-sm ">
          <Link reloadDocument to="/"><a  className="text-white hover:bg-gray-100 block px-3 py-3 rounded-md text-xs font-medium">Home</a></Link>
          <Link reloadDocument to="/#about"><a  className="text-white hover:bg-gray-100 block px-3 py-3 rounded-md text-xs font-medium">About</a></Link>
          <Link reloadDocument to="/#services"><a  className="text-white hover:bg-gray-100 block px-3 py-3 rounded-md text-xs font-medium">Services</a></Link>
          <Link reloadDocument to="/#contact"><a  className="text-white hover:bg-gray-100 block px-3 py-3 rounded-md text-xs font-medium">Contact</a></Link>
          <Link reloadDocument to="/products" className='flex items-center bg-primary text-white px-10 h-10 mx-2 my-2 justify-center rounded-md text-xs hover:bg-blue-700 font-bold'><FontAwesomeIcon className='w-3 h-3 mr-2' icon={faCar} />Cars</Link>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
