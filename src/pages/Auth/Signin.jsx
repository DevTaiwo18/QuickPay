import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useAuthContext } from '../../contexts/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signin = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      await loginUser(email, password);
      navigate('/dashboard/');
    } catch (error) {
      console.error('Error logging in:', error.response?.data?.msg || error.message);
      setError(error.response?.data?.msg || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-2">
      <div className="w-full max-w-md">
        <form className="rounded px-8 pb-2">
          <NavLink className="flex justify-center items-center" to="/">
            <img src={assets.QuickPayLogoTransparent} alt="QuickPay Logo" className="w-20 h-20 mb-8" />
          </NavLink>
          <h2 className="mb-4 text-3xl font-bold text-center">Login</h2>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border border-gray-600 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:border-blue-600"
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border border-gray-600 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:border-blue-600"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <Link to="/forgotPassword">
              <p className="text-xs italic text-gray-400 mt-3">Forgot your password?</p>
            </Link>
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-between mb-6">
            <button
              className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="button"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
        <p className="text-center text-xs">
          <span>Don’t have an account?</span>{' '}
          <Link to="/signup" className="text-blue-500 hover:text-blue-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
