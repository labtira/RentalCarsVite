import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import aboutimg from '../assets/img/student.jpeg';

const About = () => {
  return (
  <section id='about'  className=" py-10 pt-20 px-5  w-full left-0 ">
      <div  className="container text-white mx-auto sm:max-w-screen-md ">
        <div className='sm:flex sm:items-center sm:justify-between'>
            <div className='sm:w-1/2 sm:pr-5 mb-4'>
                <img src={aboutimg} alt="" className='sm:w-full rounded-xl'/>
            </div>
            <div className='sm:w-1/2 sm:pl-5 mb-4'>
                <h1 className='text-2xl font-bold mb-4'>VALUED ACADEMY</h1>
                <p className='text-sm text-grey mb-4'>We are a Moroccan Languages Center, where we offer courses to help you master any language of your choice. Our expert instructors and tailored programs ensure you achieve fluency effectively. Whether you prefer in-person or online learning, we provide flexible options to fit your schedule. Join us and unlock the world through language. Start your linguistic journey with us today!</p>
                <a href="#courses" className="bg-primary text-white px-4 py-2.5 w-fit text-xs rounded-md hover:bg-blue-700 font-bold flex items-center"><FontAwesomeIcon className="h-4 w-4 mr-1" icon={faWhatsapp} />Join Now !</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
