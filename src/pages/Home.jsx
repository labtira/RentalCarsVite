import React from 'react';
import HeroSection from '../components/HeroSection';
import Products from '../components/Products';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import CarSearchWidget from '../components/CarSearchWidget';
import FavoriteProducts from '../components/FavoriteProducts';
import Pub from '../components/Pub';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <HeroSection />
      <FavoriteProducts />
      <Pub />
      <Products />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
