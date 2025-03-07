import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCar, 
  faUsers, 
  faHandshake, 
  faShieldAlt,
  faStar,
  faClock
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const values = [
    {
      icon: faCar,
      title: "Quality Fleet",
      description: "We maintain a modern fleet of vehicles to ensure your comfort and safety."
    },
    {
      icon: faUsers,
      title: "Customer First",
      description: "Your satisfaction is our top priority. We go above and beyond to meet your needs."
    },
    {
      icon: faHandshake,
      title: "Trust & Reliability",
      description: "We build lasting relationships with our customers through transparency and honesty."
    },
    {
      icon: faShieldAlt,
      title: "Safety First",
      description: "Your safety is paramount. All our vehicles undergo regular maintenance and safety checks."
    }
  ];

  const team = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Jane Smith",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Mike Johnson",
      role: "Customer Service Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Helmet>
        <title>About Us - Car Rental Service</title>
        <meta name="description" content="Learn about our car rental service, our mission, values, and the team behind our success." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-black text-white pt-28">
        <div className="container mx-auto px-4">
          <h1 className="sm:text-4xl text-2xl font-bold text-center mb-4">About Us</h1>
          <p className="text-center text-sm max-w-2xl mx-auto">
            Your trusted partner in car rental services since 2010
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-grey">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded in 2010, we started with a simple mission: to provide reliable and affordable car rental services to our community. What began as a small fleet of vehicles has grown into a nationwide service with thousands of satisfied customers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we continue to innovate and improve our services, always keeping our customers' needs at the forefront of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center  ring-darkgrey ring-2 rounded-xl p-4">
                <FontAwesomeIcon icon={value.icon} className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-grey text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FontAwesomeIcon icon={faCar} className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-gray-300">Vehicles in Fleet</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faStar} className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faClock} className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 