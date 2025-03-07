import React from 'react';
import { Link } from 'react-router-dom';
import { CogIcon, UserGroupIcon, StarIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import favoritesData from '../data/favorites.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FavoriteProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
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
    <section className="py-20 mx-5 sm:mx-auto">
      <div className="container mx-auto md:max-w-screen-md text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Most Popular Cars</h2>
          <p className='text-grey'>Discover Our Top-Rated Vehicles</p>
        </div>

        <Slider {...settings}>
          {favoritesData.favorites.map((car) => (
            <div key={car.id} className="px-2">
              <div className="bg-black rounded-lg border-greyshadow border-2">
                <div className='w-full'>
                  <div className="relative">
                    <img src={car.image} alt={car.name} className='left-0 top-0 sm:h-40 h-60 rounded-t-lg w-full bg-cover aspect-auto' />
                    <div className="absolute top-2 right-2 flex items-center bg-black bg-opacity-75 px-2 py-1 rounded">
                      <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-bold">{car.rating}</span>
                    </div>
                  </div>
                </div>
                <div className='p-3 mt-2'>
                  <h3 className="sm:text-xl text-3xl font-bold mb-4">{car.name}</h3>
                  
                  {/* Car Specifications */}
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div className="flex items-center text-xs">
                      <CogIcon className="h-5 w-5 text-primary mr-2" />
                      <span>{car.specs.transmission}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <UserGroupIcon className="h-5 w-5 text-primary mr-2" />
                      <span>{car.specs.fuel}</span>
                    </div>
                  </div>

                  <div className='flex justify-between items-center '>
                    <div className='block'>
                      <span className="text-grey sm:text-xs text-md">Price</span>
                      <br />
                      <span className="sm:text-xs text-md font-bold">{car.price} MAD/day</span>
                    </div>
                    <div className='flex justify-center items-center'>
                      <Link to={`/products/${car.id}`} className="bg-primary text-white sm:px-4 px-6 py-2 rounded-md hover:bg-blue-700 flex items-center sm:text-xs text-md font-bold">
                        Details
                      </Link>
                    </div>
                  </div>
                  <div className='flex justify-center items-center w-full mt-4'>
                    <Link to={`/products/${car.id}`} className="ring-green ring-1 text-green sm:px-4 px-6 py-2 rounded-md hover:bg-blue-700 flex justify-center items-center sm:text-xs text-md font-bold w-full">
                      <FontAwesomeIcon icon={faWhatsapp} className='w-5 h-5 mr-1' />Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FavoriteProducts; 