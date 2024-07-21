import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="flex justify-center items-center">
          <img
            src={assets.QuickPayLogoTransparent} 
            alt="QuickPay Logo"
            className="w-24 h-24 mb-4"
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-900">404</h1>
        <p className="text-2xl font-medium text-gray-700">Page Not Found</p>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
