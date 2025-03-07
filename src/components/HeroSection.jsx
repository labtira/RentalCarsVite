import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';
import banner from '../assets/img/car2.gif';

const HeroSection = () => {
  return (
    <div className="relative sm:h-[700px] h-[800px] overflow-hidden bg-black flex justify-center">
      {/* Background Video or Image */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster= {banner}
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
            <div className="inline-block mb-6 ">
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
            <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16 ">
              <div className="text-center hidden sm:block">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-gray-400 text-white">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className=" text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-gray-400 text-white">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className=" text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-gray-400 text-white">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-1 h-16 rounded-full bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
