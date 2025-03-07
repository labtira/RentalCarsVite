import React from 'react';
import { UserAddIcon } from '@heroicons/react/solid';
import HeroSection from '../components/HeroSection';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import BookingForm from '../components/BookingForm';

const Home = ({language, image}) => {
  return (
    <div className='bg-black'>
        <Navbar />
        <BookingForm language={language} image={image} />
        <Contact />
    </div>
  );
};

export default Home;
