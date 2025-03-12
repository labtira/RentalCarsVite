import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CogIcon, 
  UserGroupIcon, 
  BriefcaseIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../components/Navbar';
import CarSearchWidget from '../components/CarSearchWidget';
import productsData from '../data/products.json';

const CarDetails = () => {
  const { id } = useParams();
  const car = productsData.products.find(product => product.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === car.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? car.images.length - 1 : prevIndex - 1
    );
  };

  if (!car) {
    return (
      <div className='bg-black'>
        <Navbar />
        <div className="pt-40 pb-20 text-center text-white">
          <h2 className="text-2xl mb-4">Car not found</h2>
          <Link to="/products" className="text-primary hover:underline">Back to Cars</Link>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-black'>
      <Navbar />
      <section className="pt-24 pb-20 mx-5 sm:mx-auto">
        <div className="container mx-auto md:max-w-screen-md text-white">
          <div className="bg-black rounded-lg border-greyshadow border-2 overflow-hidden">
            {/* Car Image Slider */}
            <div className='relative w-full'>
              <div className='relative sm:h-[400px] h-[200px]'>
                <img 
                  src={car.images[currentImageIndex]} 
                  alt={`${car.name} - Image ${currentImageIndex + 1}`} 
                  className='w-full h-full object-cover'
                />
                {/* Navigation Arrows */}
                <button 
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-white" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
                >
                  <ChevronRightIcon className="h-6 w-6 text-white" />
                </button>
              </div>
              {/* Image Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {car.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-primary w-4' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Car Details */}
            <div className='p-6'>
              <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
              <p className="text-grey mb-6">{car.description}</p>

              {/* Price */}
              <div className="bg-darkgrey p-4 rounded-lg mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-grey">Daily Rate</span>
                    <h3 className="text-2xl font-bold">{car.price} MAD/day</h3>
                  </div>
                  <div className="flex items-center text-green">
                    <CurrencyDollarIcon className="h-6 w-6 mr-2" />
                    <span className="text-lg">Best Price Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Car Specifications</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center bg-darkgrey p-3 rounded-lg">
                    <CogIcon className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <span className="text-grey text-sm">Transmission</span>
                      <p className="font-medium">{car.specs.transmission}</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-darkgrey p-3 rounded-lg">
                    <CogIcon className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <span className="text-grey text-sm">Fuel Type</span>
                      <p className="font-medium">{car.specs.fuel}</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-darkgrey p-3 rounded-lg">
                    <UserGroupIcon className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <span className="text-grey text-sm">Seats</span>
                      <p className="font-medium">{car.specs.seats}</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-darkgrey p-3 rounded-lg">
                    <BriefcaseIcon className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <span className="text-grey text-sm">Luggage</span>
                      <p className="font-medium">{car.specs.bags} Bags</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-darkgrey p-3 rounded-lg">
                    <CogIcon className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <span className="text-grey text-sm">Doors</span>
                      <p className="font-medium">{car.specs.doors}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Features & Benefits</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 text-primary mr-2" />
                    <span>Full Insurance Coverage</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-primary mr-2" />
                    <span>24/7 Roadside Assistance</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 text-primary mr-2" />
                    <span>Free Cancellation</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-primary mr-2" />
                    <span>Flexible Pick-up & Drop-off</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <Link 
                  to={`/products/${car.id}`} 
                  className="bg-green text-white px-6 py-3 rounded-md hover:bg-blue-700 flex justify-center items-center font-bold sm:w-[48%]"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className='w-5 h-5 mr-2' />
                  Order Now via WhatsApp
                </Link>
                <Link 
                  to="/products" 
                  className="border border-grey text-white px-6 py-3 rounded-md hover:bg-darkgrey flex justify-center items-center font-bold sm:w-[48%]"
                >
                  Back to Cars
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarDetails; 