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
import SEO from '../components/SEO';

const Home = () => {
  // Structured data for the organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Moroccan Cars Rental",
    "description": "Premium car rental service in Morocco offering luxury and comfortable vehicles for all your transportation needs.",
    "url": window.location.origin,
    "logo": "/src/assets/img/MoroccanCars.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+212-XXX-XXXXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic", "French"]
    },
    "sameAs": [
      "https://facebook.com/moroccanCarsRental",
      "https://instagram.com/moroccanCarsRental",
      "https://twitter.com/moroccanCarsRental"
    ]
  };

  return (
    <div className='bg-black'>
      <SEO 
        title="Premium Car Rental Service in Morocco"
        description="Discover our premium fleet of rental cars in Morocco. From luxury sedans to SUVs, we offer the best vehicles for your journey. Book now and experience exceptional service."
        keywords="car rental Morocco, luxury car rental, premium cars, rent a car, Morocco car hire, affordable car rental, SUV rental Morocco"
        structuredData={organizationStructuredData}
      />
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
