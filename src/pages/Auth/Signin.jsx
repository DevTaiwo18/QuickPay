import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Signin = () => {

  

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center px-2">
      <div className="w-full max-w-md">
        <form className="rounded px-8  pb-2">
          <NavLink className="flex justify-center items-center" to="/">
            <img src={assets.QuickPayLogoTransparent} alt="QuickPay Logo" className="w-20 h-20 mb-8" />
          </NavLink>
          <h2 className="mb-4 text-3xl font-bold text-center ">Login</h2>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none  border border-gray-600 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:border-blue-600"
              id="email"
              type="email"
              placeholder="m@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none  border border-gray-600  rounded w-full py-3 px-4 leading-tight focus:outline-none focus:border-blue-600"
              id="password"
              type="password"
              placeholder="******************"
            />
            <Link to={"/forgotPassword"}>
              <p className="text-xs italic text-gray-400 mt-3">Forgot your password?</p>
            </Link>
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-xs">
          <span>Don’t have an account?</span> <Link to="/signup" className="text-blue-500 hover:text-blue-300">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
