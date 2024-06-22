import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const btnRef = useRef();

  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
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
    // Your submit logic here
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-2">
      <div className="w-full max-w-md">
        <form
          className="rounded px-8 pb-8 mb-2 mt-5"
          onSubmit={handleSubmit}
        >
          <NavLink className="flex justify-center items-center" to="/">
            <div className="w-32 h-32 flex justify-center items-center">
              <img
                src={assets.QuickPayLogoTransparent}
                alt="QuickPay Logo"
                className="w-20 h-20 mb-8"
              />
            </div>
          </NavLink>

          <h2 className="mb-6 mt-0 text-2xl font-bold text-center">Sign Up</h2>

          {/* USERNAME */}
          <div className="mb-2">
            <label className="block text-sm font-bold mb-2">Username</label>
            <input
              className="appearance-none text-sm border border-gray-600 rounded w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-600"
              id="userName"
              type="text"
              placeholder="Olamide"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          {/* END OF USERNAME */}

          {/* EMAIL */}
          <div className="mb-2">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border border-gray-600 rounded w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-600"
              id="email"
              type="email"
              placeholder="m@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* END OF EMAIL */}

          {/* PHONE NUMBER */}
          <div className="mb-2 hidden">
            <label className="block text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone*
            </label>
            <input
              className="appearance-none text-sm border border-gray-600 rounded-10 w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-600"
              id="phoneNumber"
              type="text"
              placeholder="08026151366"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          {/* END OF PHONE NUMBER */}

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              className="appearance-none text-sm border border-gray-600 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:border-blue-600"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="*********"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {/* END OF PASSWORD */}

          {/* CONFIRM PASSWORD */}
          <div className="mb-5">
            <label className="block text-sm font-bold mb-2">Confirm Password</label>
            <input
              className="appearance-none text-sm border border-gray-600 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:border-blue-600"
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {/* END OF CONFIRM PASSWORD */}

          <div className="flex items-center justify-between">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              ref={btnRef}
            >
              Create account
            </button>
          </div>
        </form>
        <p className="text-center text-xs mb-10">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:text-blue-300">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
