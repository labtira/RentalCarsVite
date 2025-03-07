import React from 'react';
import { 
  ShieldCheckIcon, 
  ClockIcon, 
  CashIcon, 
  LocationMarkerIcon,
  SupportIcon,
  DocumentTextIcon
} from '@heroicons/react/outline';

const Services = () => {
  const services = [
    {
      icon: <ShieldCheckIcon className="h-12 w-12 text-primary" />,
      title: "Full Insurance Coverage",
      description: "Comprehensive insurance coverage for your peace of mind. Includes collision damage waiver and theft protection."
    },
    {
      icon: <ClockIcon className="h-12 w-12 text-primary" />,
      title: "24/7 Pickup & Return",
      description: "Flexible pickup and return services available round the clock. Choose your convenient time and location."
    },
    {
      icon: <CashIcon className="h-12 w-12 text-primary" />,
      title: "Best Price Guarantee",
      description: "Competitive pricing with no hidden fees. We match any better price you find for similar services."
    },
    {
      icon: <LocationMarkerIcon className="h-12 w-12 text-primary" />,
      title: "Multiple Locations",
      description: "Convenient pickup and drop-off locations across the city. Airport transfers and hotel delivery available."
    },
    {
      icon: <SupportIcon className="h-12 w-12 text-primary" />,
      title: "24/7 Support Service",
      description: "Round-the-clock customer support for assistance. Emergency roadside assistance included."
    },
    {
      icon: <DocumentTextIcon className="h-12 w-12 text-primary" />,
      title: "Easy Booking Process",
      description: "Simple and quick online booking system. Digital documentation for hassle-free rentals."
    }
  ];

  return (
    <section className="py-20 mx-5 sm:mx-auto ">
      <div className="container mx-auto md:max-w-screen-md text-white ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Services</h2>
          <p className="text-grey">Experience Premium Car Rental Services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-black p-6 rounded-lg border-2 border-greyshadow hover:border-primary transition-all duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-grey text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-grey mb-4">
            All our services come with our quality guarantee and customer satisfaction promise
          </p>
          <div className="flex justify-center items-center space-x-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-primary font-medium">Premium Service Provider</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
