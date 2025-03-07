import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { 
  PhoneIcon, 
  MailIcon, 
  LocationMarkerIcon,
  ClockIcon
} from '@heroicons/react/solid';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-greyshadow">
      <div className="container mx-auto px-4 md:max-w-screen-md">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">AutoRental</h3>
            <p className="text-grey text-sm mb-4">
              Premium car rental services with a wide range of vehicles to choose from. 
              Experience luxury and comfort on your journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-darkgrey hover:bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300">
                <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
              </a>
              <a href="#" className="bg-darkgrey hover:bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300">
                <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />
              </a>
              <a href="#" className="bg-darkgrey hover:bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
              </a>
              <a href="#" className="bg-darkgrey hover:bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-grey hover:text-primary text-sm transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-grey hover:text-primary text-sm transition-colors duration-300">Our Fleet</Link>
              </li>
              <li>
                <Link to="/services" className="text-grey hover:text-primary text-sm transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-grey hover:text-primary text-sm transition-colors duration-300">Contact Us</Link>
              </li>
              <li>
                <Link to="/terms" className="text-grey hover:text-primary text-sm transition-colors duration-300">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-grey text-sm">
                <PhoneIcon className="h-5 w-5 text-primary mr-3" />
                <span>+212 123-456-7890</span>
              </li>
              <li className="flex items-center text-grey text-sm">
                <MailIcon className="h-5 w-5 text-primary mr-3" />
                <span>contact@autorental.com</span>
              </li>
              <li className="flex items-center text-grey text-sm">
                <LocationMarkerIcon className="h-5 w-5 text-primary mr-3" />
                <span>123 Main Street, City Center, Morocco</span>
              </li>
              <li className="flex items-center text-grey text-sm">
                <ClockIcon className="h-5 w-5 text-primary mr-3" />
                <span>Open 24/7</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-grey text-sm mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-darkgrey border border-greyshadow text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary text-sm"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-white py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-greyshadow">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-grey text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} AutoRental. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-grey hover:text-primary text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-grey hover:text-primary text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/faq" className="text-grey hover:text-primary text-sm transition-colors duration-300">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
