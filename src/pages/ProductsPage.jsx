import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { 
  CogIcon, 
  UserGroupIcon, 
  BriefcaseIcon,
  SearchIcon,
  AdjustmentsIcon
} from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../components/Navbar';
import productsData from '../data/products.json';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData.products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  useEffect(() => {
    const filtered = productsData.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const price = parseFloat(product.price);
      const matchesMinPrice = minPrice === '' || price >= parseFloat(minPrice);
      const matchesMaxPrice = maxPrice === '' || price <= parseFloat(maxPrice);
      
      return matchesSearch && matchesMinPrice && matchesMaxPrice;
    });
    
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchQuery, minPrice, maxPrice]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='bg-black'>
      <Navbar />
      <section className="pt-28 pb-20 mx-5 sm:mx-auto">
        <div className="container mx-auto md:max-w-screen-md text-white">
          <h2 className="text-3xl font-bold text-center mb-3">Our Rental Fleet</h2>
          <p className='text-grey mb-8 text-center'>Browse Our Complete Collection of Vehicles</p>

          {/* Search and Filter Section */}
          <div className="bg-darkgrey rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Search Bar */}
              <div className="relative flex">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-grey" />
                  <input
                    type="text"
                    placeholder="Search by car name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full bg-black border border-grey text-white pl-10 pr-4 py-2 rounded-l-md focus:outline-none focus:border-primary text-sm"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-blue-700 flex items-center justify-center"
                >
                  <SearchIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Price Filter */}
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <input
                    type="number"
                    placeholder="Min price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full bg-black border border-grey text-white px-3 py-2 rounded-md focus:outline-none focus:border-primary text-sm"
                  />
                </div>
                <div className="relative flex-1">
                  <input
                    type="number"
                    placeholder="Max price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full bg-black border border-grey text-white px-3 py-2 rounded-md focus:outline-none focus:border-primary text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Results Count */}
            <p className="text-grey text-sm">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'car' : 'cars'} found
            </p>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-black rounded-lg border-greyshadow border-2">
                <div className='w-full'>
                  <img src={product.image} alt={product.name} className='left-0 top-0 sm:h-40 h-60 rounded-t-lg w-full bg-cover aspect-auto' />
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

                  <div className='flex justify-between items-center '>
                    <div className='block'>
                      <span className="text-grey sm:text-xs text-md">Price</span>
                      <br />
                      <span className="sm:text-xs text-md font-bold">{product.price} MAD/day</span>
                    </div>
                    <div className='flex justify-center items-center'>
                      <Link to={`/products/${product.id}`} className="bg-primary text-white sm:px-4 px-6 py-2 rounded-md hover:bg-blue-700 flex items-center sm:text-xs text-md font-bold">
                        Details
                      </Link>
                    </div>
                  </div>
                  <div className='flex justify-center items-center w-full mt-2'>
                    <Link to={`/products/${product.id}`} className="ring-green ring-1 text-green hover:text-white hover:bg-green sm:px-4 px-6 py-2 rounded-md hover:bg-blue-700 flex justify-center items-center sm:text-xs text-md font-bold w-full">
                      <FontAwesomeIcon icon={faWhatsapp} className='w-5 h-5 mr-1' />Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === number
                      ? 'bg-primary text-white'
                      : 'bg-darkgrey text-white hover:bg-primary'
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage; 