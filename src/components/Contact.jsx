import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 mx-5 sm:mx-auto">
      <div className="container mx-auto md:max-w-screen-md text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
          <p className="text-grey">Get in touch with us for any questions or concerns</p>
        </div>

        <div className="bg-black rounded-lg border-2 border-greyshadow p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-grey text-sm mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full bg-darkgrey border border-greyshadow text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-grey text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-darkgrey border border-greyshadow text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-grey text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-darkgrey border border-greyshadow text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-grey text-sm mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full bg-darkgrey border border-greyshadow text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-grey text-sm mb-2">Message</label>
              <textarea
                className="w-full bg-darkgrey border border-greyshadow text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary h-32"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
