import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className=" py-20 mx-5">
      <div className="container mx-auto text-center sm:max-w-screen-md text-white">
        <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black p-6 rounded-lg border-greyshadow border-2">
            <p>"The English course was amazing! I learned so much."</p>
            <span className="block mt-4 text-gray-600">- John Doe</span>
          </div>
          <div className="bg-black p-6 rounded-lg border-greyshadow border-2">
            <p>"French classes were well-structured and fun."</p>
            <span className="block mt-4 text-gray-600">- Jane Smith</span>
          </div>
          <div className="bg-black p-6 rounded-lg border-greyshadow border-2">
            <p>"I loved learning German with these instructors."</p>
            <span className="block mt-4 text-gray-600">- Max Müller</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
