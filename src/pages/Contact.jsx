import React, { useState } from 'react';
import Navbar from '../components/Navbar';
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormStatus(prev => ({
        ...prev,
        error: Object.values(errors)[0]
      }));
      return;
    }

    setFormStatus(prev => ({ ...prev, loading: true, error: null }));

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        loading: false,
        success: true,
        error: null
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <div>
        <Navbar/>
        <section className="py-20 mx-5 sm:mx-auto" id="contact">
      <div className="container mx-auto md:max-w-screen-md text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
          <p className="text-grey">Get in touch with us for any questions or concerns</p>
        </div>

        <div className="bg-black rounded-lg border-2 border-greyshadow p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-grey text-sm mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full bg-darkgrey border ${formStatus.error && formStatus.error.includes('First name') ? 'border-red-500' : 'border-greyshadow'} text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary`}
                  placeholder="Enter your first name"
                />
                {formStatus.error && formStatus.error.includes('First name') && (
                  <p className="text-red-500 text-sm mt-1">{formStatus.error}</p>
                )}
              </div>
              <div>
                <label className="block text-grey text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full bg-darkgrey border ${formStatus.error && formStatus.error.includes('Last name') ? 'border-red-500' : 'border-greyshadow'} text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary`}
                  placeholder="Enter your last name"
                />
                {formStatus.error && formStatus.error.includes('Last name') && (
                  <p className="text-red-500 text-sm mt-1">{formStatus.error}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-grey text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-darkgrey border ${formStatus.error && formStatus.error.includes('Email') ? 'border-red-500' : 'border-greyshadow'} text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary`}
                placeholder="Enter your email"
              />
              {formStatus.error && formStatus.error.includes('Email') && (
                <p className="text-red-500 text-sm mt-1">{formStatus.error}</p>
              )}
            </div>

            <div>
              <label className="block text-grey text-sm mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-darkgrey border ${formStatus.error && formStatus.error.includes('Phone') ? 'border-red-500' : 'border-greyshadow'} text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary`}
                placeholder="Enter your phone number"
              />
              {formStatus.error && formStatus.error.includes('Phone') && (
                <p className="text-red-500 text-sm mt-1">{formStatus.error}</p>
              )}
            </div>

            <div>
              <label className="block text-grey text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-darkgrey border ${formStatus.error && formStatus.error.includes('Message') ? 'border-red-500' : 'border-greyshadow'} text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary h-32`}
                placeholder="Enter your message"
              ></textarea>
              {formStatus.error && formStatus.error.includes('Message') && (
                <p className="text-red-500 text-sm mt-1">{formStatus.error}</p>
              )}
            </div>

            <div className="flex flex-col items-center space-y-4">
              {formStatus.success && (
                <p className="text-green-500 text-sm">Message sent successfully!</p>
              )}
              {formStatus.error && !formStatus.error.includes('required') && !formStatus.error.includes('invalid') && (
                <p className="text-red-500 text-sm">{formStatus.error}</p>
              )}
              <button
                type="submit"
                disabled={formStatus.loading}
                className={`bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300 ${formStatus.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {formStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
