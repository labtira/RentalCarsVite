import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon, GlobeAltIcon, FlagIcon } from '@heroicons/react/outline';
import { UserAddIcon } from '@heroicons/react/solid';
import French from '../assets/img/Flag_of_France.png';
import Germany from '../assets/img/Flag_of_Germany.png';
import English from '../assets/img/Flag_Uk.png';

const Courses = () => {
  return (
    <section id="courses" className="py-20 mx-5 sm:mx-auto ">
      <div className="container mx-auto md:max-w-screen-md text-white">
        <h2 className="text-3xl font-bold text-center mb-3 ">Our Courses</h2>
        <p className='text-grey mb-12 text-center'>Unlock Any Language with Our Expert Courses!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black rounded-lg border-greyshadow border-2">
            <div className='w-full '>
            <img src={English} alt="" className='left-0 top-0 sm:h-40 h-60 rounded-t-lg w-full  bg-cover aspect-auto ' />
            </div>
            <div className='p-3 mt-2'>
            <h3 className="sm:text-xl text-3xl font-bold mb-4">English Course</h3>
            <div>
            <ul className='sm:text-xs text-md flex items-center'>
              <li className='flex items-center mr-2'>
              <div>
              <ClockIcon className="sm:h-5 sm:w-5 h-6 w-6 text-primary mr-1"/>
              </div>
              <span>6H/Week</span>
              </li>
              <li className='flex items-center mr-2'>
              <div>
              <GlobeAltIcon className="sm:h-5 sm:w-5 h-6 w-6 text-primary mr-1"/>
              </div>
              <span>Online</span>
              </li>
              <li className='flex items-center'>
              <div>
              <FlagIcon className="sm:h-5 sm:w-5 h-6 w-6 text-primary mr-1"/>
              </div>
              <span>EN</span>
              </li>
            </ul>
            
            <div className='flex justify-between items-center mt-8'>
            <div className='block'>
                      <span className="text-grey sm:text-xs text-md">Price</span>
                      <br />
                      <span className="sm:text-xs text-md">450 MAD / Month</span>
                    </div>
                    <div className='flex justify-center items-center'>
                    <a href="#courses" className="bg-primary text-white sm:px-4 px-6 py-2 rounded-md hover:bg-blue-700 flex items-center sm:text-xs text-md font-bold"><Link reloadDocument to="/book/english" className='flex items-center'><UserAddIcon className='w-5 h-5 mr-1'/>Join</Link></a>
                    </div>
            </div>

            </div>
            </div>
          </div>
          <div className="bg-black rounded-lg border-greyshadow border-2">
          <div className='w-full '>
          <img src={French} alt="" className='left-0 top-0 sm:h-40 h-60 rounded-t-lg w-full bg-cover aspect-auto'/>
          </div>
          <div className='p-3 mt-2'>
            <h3 className="sm:text-xl text-3xl font-bold mb-4">French Course</h3>
            <div>
            <ul className='sm:text-xs text-md flex items-center'>
              <li className='flex items-center mr-2'>
              <div>
              <ClockIcon className="sm:h-5 sm:w-5 h-6 w-6 text-primary mr-1"/>
              </div>
              <span>6H/Week</span>
              </li>
              <li className='flex items-center mr-2'>
              <div>
              <GlobeAltIcon className="sm:h-5 sm:w-5 h-6 w-6 text-primary mr-1"/>
              </div>
              <span>Online</span>
              </li>
              <li className='flex items-center'>
              <div>
              <FlagIcon className="sm:h-5 sm:w-5 h-6 w-6 text-primary mr-1"/>
              </div>
              <span>FR</span>
              </li>
            </ul>
            
            <div className='flex justify-between items-center mt-8'>
            <div className='block'>
                      <span className="text-grey sm:text-xs text-md">Price</span>
                      <br />
                      <span className="sm:text-xs text-md">350 MAD / Month</span>
                    </div>
                    <div className='flex justify-center items-center'>
                    <a href="#courses" className="bg-primary text-white sm:px-4 px-6 py-2 rounded-md hover:bg-blue-700 flex items-center sm:text-xs text-md font-bold"><Link reloadDocument to="/book/french" className='flex items-center'><UserAddIcon className='w-5 h-5 mr-1'/>Join</Link></a>
                    </div>
            </div>

            </div>
            </div>
          </div>
          <div className="bg-black rounded-lg border-greyshadow border-2">
          <div className='w-full '>
          <img src={Germany} alt="" className='left-0 top-0 sm:h-40 h-60 rounded-t-lg w-full bg-cover aspect-auto'/>
          </div>
          <div className='p-3 mt-2'>
            <h3 className="sm:text-xl text-3xl font-bold mb-4">Germany Course</h3>
            <div>
            <ul className='sm:text-xs text-md flex items-center'>
              <li className='flex items-center mr-2'>
              <div>
              <ClockIcon className="sm:h-5 sm:w-5 h-6 w-6 text-primary mr-1"/>
              </div>
              <span>6H/Week</span>
              </li>
              <li className='flex items-center mr-2'>
              <div>
              <GlobeAltIcon className="sm:h-5 sm:w-5 h-6 w-6 text-primary mr-1"/>
              </div>
              <span>Online</span>
              </li>
              <li className='flex items-center'>
              <div>
              <FlagIcon className="sm:h-5 sm:w-5 h-6 w-6 text-primary mr-1"/>
              </div>
              <span>DE</span>
              </li>
            </ul>
            
            <div className='flex justify-between items-center mt-8'>
            <div className='block'>
                      <span className="text-grey sm:text-xs text-md">Price</span>
                      <br />
                      <span className="sm:text-xs text-md">600 MAD / Month</span>
                    </div>
                    <div className='flex justify-center items-center'>
                    <a href="#courses" className="bg-primary text-white sm:px-4 px-6 py-2 rounded-md hover:bg-blue-700 flex items-center sm:text-xs text-md font-bold"><Link reloadDocument to="/book/german" className='flex items-center'><UserAddIcon className='w-5 h-5 mr-1'/>Join</Link></a>
                    </div>
            </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
