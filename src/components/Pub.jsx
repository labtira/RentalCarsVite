import React from 'react';
import { Link } from 'react-router-dom';

const Pub = () => {
  return (
    <section className="py-20 mx-5 sm:mx-auto">
      <div className="container mx-auto md:max-w-screen-md">
        <div style={{backgroundImage: 'url(src/assets/img/car2.gif)', position: 'relative', backgroundSize: 'cover', backgroundPosition: 'center'}} className="bg-gradient-to-r from-primary to-black rounded-2xl p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          {/* <div className="absolute inset-0 opacity-40">
            <div className="absolute transform rotate-12 -right-20 -top-20">
              <div className="w-60 h-60 rounded-full bg-primary"></div>
            </div>
            <div className="absolute transform -rotate-12 -left-20 -bottom-20">
              <div className="w-60 h-60 rounded-full bg-primary"></div>
            </div>
          </div> */}

          {/* Content */}
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Special Offer!</h2>
              <p className="text-xl text-gray-200 mb-2">Get 20% Off Your First Rental</p>
              <p className="text-gray-300">Limited Time Offer - Don't Miss Out!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">20%</div>
                <p className="text-gray-200">Discount on First Booking</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">24/7</div>
                <p className="text-gray-200">Customer Support</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/products" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pub; 