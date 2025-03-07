import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="py-20 mx-5 sm:mx-auto" id="contact">
      <div className="container mx-auto md:max-w-screen-md text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
          <p className="text-grey">Get in touch with us for any questions or concerns</p>
        </div>

        <div className="flex justify-center">
              <Link to="/contact"
                type="submit"
                className="bg-primary text-white text-xs px-5 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faHeadset} className='mr-2' />
                Contact Us
              </Link>
            </div>
      </div>
    </section>
  );
};

export default Contact;
