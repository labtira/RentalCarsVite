import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { 
  CogIcon,
  UserGroupIcon, 
  BriefcaseIcon 
} from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products.css";

import productsData from '../data/products.json';

const Products = () => {
  // Get only the first 6 products for the landing page
  const products = productsData.products.slice(0, 6);

  const settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-5 md:max-w-screen-md text-white">
        <h2 className="text-3xl font-bold text-center mb-3">Our Rental Cars</h2>
        <p className='text-grey mb-12 text-center'>Choose from Our Premium Fleet</p>
        
        <Slider {...settings} className="slider-container">
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="bg-black rounded-lg border-greyshadow border-2 h-full">
                <div className='w-full'>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className='left-0 top-0 sm:h-40 h-60 rounded-t-lg w-full bg-cover aspect-auto object-cover' 
                  />
                </div>
                <div className='p-3 mt-2'>
                  <h3 className="sm:text-xl text-3xl font-bold mb-4">{product.name}</h3>
                  
                  {/* Car Specifications */}
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div className="flex items-center text-xs">
                      <CogIcon className="h-5 w-5 text-primary mr-2" />
                      <span>{product.specs.transmission}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <UserGroupIcon className="h-5 w-5 text-primary mr-2" />
                      <span>{product.specs.fuel}</span>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div className="text-grey">
                      <span className="block text-xs">Daily Rate</span>
                      <span className="sm:text-xs text-md font-bold text-white">{product.price} MAD/Day</span>
                    </div>
                    <div className='flex justify-center items-center'>
                      <Link to={`/products/${product.id}`} className="bg-primary text-white sm:px-3 px-5 py-2 rounded-md hover:bg-blue-700 flex items-center sm:text-xs text-md font-bold">
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center w-full pb-3 px-2'>
                      <Link to={`/products/${product.id}`} className="ring-green ring-1 text-green hover:text-white hover:bg-green sm:px-4 px-6 py-2 rounded-md hover:bg-blue-700 flex justify-center items-center sm:text-xs text-md font-bold w-full">
                        <FontAwesomeIcon icon={faWhatsapp} className='w-5 h-5 mr-1' />Order Now
                      </Link>
                    </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="text-center mt-14">
          <Link 
            to="/products" 
            className="inline-block bg-transparent border-2  border-primary text-white px-6 py-3 rounded-md hover:bg-primary text-xs font-bold transition-colors"
          >
            View All Cars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products; 