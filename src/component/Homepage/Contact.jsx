import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Hero Section */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto md:px-8 px-5">
          <h1 className='text-2xl md:text-3xl font-bold text-center mb-3'>Contact Us</h1>
          <p className="text-center text-sm md:text-sm text-gray-700 font-medium md-8 md:mb-12">
            Got questions or need assistance? Feel free to reach out to us using any of the methods below. We're here to help!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
              {/* Email */}
              <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-lg mr-2" />
                <p className="block text-sm font-medium text-gray-700">info@example.com</p>
              </div>
              {/* Phone */}
              <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-lg mr-2" />
                <p className="block text-sm font-medium text-gray-700">+1 234 567 890</p>
              </div>
              {/* Address */}
              <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-lg mr-2" />
                <p className="block text-sm font-medium text-gray-700">123 Main St, City, Country</p>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input type="text" id="name" name="name" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input type="email" id="email" name="email" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-md"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
