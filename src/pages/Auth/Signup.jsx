import React, { useRef, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAuthContext } from "../../contexts/AuthContext";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { registerUser } = useAuthContext();
  const btnRef = useRef();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let Signup = await registerUser(formData);
    if (Signup) {
      navigate("/createPin")
    }

    setLoading(false);

    setFormData({
      email: "",
      username: "",
      password: "",
    });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-2">
      <div className="w-full max-w-md">
        <form
          className="rounded px-8 pb-8 mb-2"
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

          {/* Username */}
          <div className="mb-2">
            <label className="block text-sm font-bold mb-2">Username</label>
            <input
              className="appearance-none text-sm border border-gray-600 rounded w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-600"
              id="username"
              type="text"
              placeholder="Olamide"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          {/* End of Username */}

          {/* Email */}
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
          {/* End of Email */}

          {/* Password */}
          <div className="mb-2 relative">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              className="appearance-none text-sm border border-gray-600 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:border-blue-600"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="*********"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute inset-y-0 mt-7 right-0 flex items-center pr-3"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <span className="absolute inset-y-0 left-0 top-20 flex items-center pr-3 text-xs text-gray-400">
              Password must contain at least 6 characters
            </span>
          </div>
          {/* End of Password */}

          {/* Submit Button with Loading Indicator */}
          <div className="flex items-center justify-center mt-7">
            <button
              className={`${loading ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
                } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full`}
              type="submit"
              ref={btnRef}
              disabled={loading} // Disable button during loading
            >
              {loading ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="inline w-4 h-4 mr-2 animate-spin fill-current"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="mr-2">Loading...</span>
                </>
              ) : (
                "Create account"
              )}
            </button>
          </div>
          {/* End of Submit Button with Loading Indicator */}

        </form>
        <p className="text-center text-xs mt-3">
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
