import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Helmet>
        <title>Terms and Conditions - Car Rental Service</title>
        <meta name="description" content="Terms and conditions for our car rental service." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-black text-white pt-28">
        <div className="container mx-auto px-4">
          <h1 className="sm:text-4xl text-2xl font-bold text-center mb-4">Terms and Conditions</h1>
          <p className=" text-center text-sm max-w-2xl mx-auto">
            Please read our terms and conditions carefully before using our car rental service.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container w-full px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto md:max-w-screen-md">
          <div className="ring-darkgrey ring-2 rounded-xl shadow-lg overflow-hidden text-white">
            <div className="p-8 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to our car rental service. By accessing and using our website and services, you agree to be bound by these terms and conditions. Please read them carefully before proceeding.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">2. Definitions</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>"Service" refers to our car rental service</li>
                  <li>"User" refers to any individual or entity using our service</li>
                  <li>"Vehicle" refers to any car or vehicle available for rent</li>
                  <li>"Rental Period" refers to the duration for which a vehicle is rented</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">3. Rental Requirements</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Must be at least 21 years of age</li>
                  <li>Valid driver's license for at least 2 years</li>
                  <li>Valid credit card for payment and deposit</li>
                  <li>Proof of insurance (if required)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">4. Booking and Payment</h2>
                <p className="text-gray-600 leading-relaxed">
                  All bookings are subject to availability and confirmation. We require a deposit to secure your booking, which will be refunded upon successful return of the vehicle.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Full payment is required before vehicle pickup</li>
                  <li>Additional charges may apply for late returns</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>Prices are subject to change without notice</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">5. Vehicle Use and Return</h2>
                <p className="text-gray-600 leading-relaxed">
                  The vehicle must be returned in the same condition as it was received, with a full tank of fuel.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Vehicle must be returned on time and at the agreed location</li>
                  <li>Any damage must be reported immediately</li>
                  <li>Smoking is prohibited in all vehicles</li>
                  <li>Pets are not allowed unless specifically approved</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">6. Insurance and Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our vehicles are insured for basic coverage. Additional insurance options are available for purchase.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Users are responsible for any damage not covered by insurance</li>
                  <li>Insurance coverage may be voided by violation of terms</li>
                  <li>Personal belongings are not covered by our insurance</li>
                  <li>Users must report any accidents immediately</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">7. Cancellation Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Cancellations must be made at least 24 hours before the scheduled pickup time. Late cancellations may incur a fee.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">8. Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We collect and process personal information in accordance with our privacy policy. By using our service, you consent to such processing.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">9. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of our service after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">10. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  For any questions regarding these terms and conditions, please contact us at:
                  <br />
                  <span className="font-medium">Email:</span> support@carrental.com
                  <br />
                  <span className="font-medium">Phone:</span> (555) 123-4567
                </p>
              </section>

              <div className="mt-12 pt-8 border-t-2 border-darkgrey ">
                <p className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 