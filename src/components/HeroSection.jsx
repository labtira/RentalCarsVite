import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';
import banner from '../assets/img/car2.gif';
import CarSearchWidget from './CarSearchWidget';

const HeroSection = () => {
  return (
    <div className="relative sm:h-[650px] h-[650px] overflow-visible bg-black flex justify-center sm:mb-[400px] mb-[600px]">
      {/* Background Video or Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster={banner}
        >
          <source src="/src/assets/video/car-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="/src/assets/img/hero-bg.jpg"
            alt="Luxury car background"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            {/* Animated Badge */}
            <div className="inline-block mb-6">
              <div className="flex items-center bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-primary animate-pulse">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm font-medium">Premium Car Rental Service</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect Drive
              <span className="block text-primary">For Any Journey</span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-sm text-gray-300 mb-8 max-w-2xl text-white">
              Experience luxury and comfort with our premium fleet of vehicles. 
              From city cruisers to luxury SUVs, we have the perfect car for every occasion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                to="/products"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Browse Cars
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-2 rounded-lg font-bold text-sm hover:bg-white hover:text-black transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Widget Container */}
      <div className="absolute sm:-bottom-80 -bottom-[600px] left-1/2 transform -translate-x-1/2 w-full max-w-4xl z-30">
        <CarSearchWidget />
      </div>
    </div>
  );
};

export default HeroSection;
