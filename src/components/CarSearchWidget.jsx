import React from 'react';
import { 
  CalendarIcon, 
  LocationMarkerIcon, 
  SearchIcon
} from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const CarSearchWidget = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 md:max-w-screen-md">
      <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-greyshadow">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Find Your Perfect Rental Car</h3>
          <p className="text-grey">Search our wide range of premium vehicles</p>
        </div>

        <form className="space-y-4">
          {/* First Row - Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pick-up Date */}
            <div className="relative">
              <label className="block text-grey text-sm mb-2">Pick-up Date</label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
                <input 
                  type="date" 
                  className="w-full bg-darkgrey border border-greyshadow text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="relative">
              <label className="block text-grey text-sm mb-2">Return Date</label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
                <input 
                  type="date" 
                  className="w-full bg-darkgrey border border-greyshadow text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Second Row - Location and Search Button */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pick-up Location */}
            <div className="relative">
              <label className="block text-grey text-sm mb-2">Pick-up Location</label>
              <div className="relative">
                <LocationMarkerIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
                <select className="w-full bg-darkgrey border border-greyshadow text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-primary">
                  <option value="">Select location</option>
                  <option value="airport">Airport Terminal</option>
                  <option value="city">City Center</option>
                  <option value="hotel">Hotel Delivery</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end mt-4 sm:mt-0">
              <Link 
                to="/products"
                className="w-full bg-primary text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              >
                <SearchIcon className="h-5 w-5" />
                <span>Search Available Cars</span>
              </Link>
            </div>
          </div>
        </form>

        {/* Quick Info */}
        <div className="mt-6 pt-6 border-t border-greyshadow">
          <div className="flex justify-center items-center space-x-8 text-sm text-grey">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green rounded-full mr-2"></span>
              <span>Free Cancellation</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <span>Instant Confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSearchWidget; 