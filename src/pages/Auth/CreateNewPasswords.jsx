import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'; // Assuming you have assets for images/icons

const CreateNewPasswords = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement password update logic here
    console.log('Form submitted with:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <Link to={"/"}>
          <div className="flex justify-center items-center">
            <img
              src={assets.QuickPayLogoTransparent} // Replace with your logo asset path
              alt="QuickPay Logo"
              className="w-24 h-24 mb-4"
            />
          </div>
        </Link>
        <h2 className="text-3xl font-bold text-gray-900">Create New Password</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />

          {/* New Password */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="new-password" className="sr-only">
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="New Password"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="confirm-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save New Password
            </button>
          </div>
        </form>
        <div className="text-sm">
          <Link to="/signin" className="font-medium text-blue-500 hover:text-blue-400">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPasswords;
