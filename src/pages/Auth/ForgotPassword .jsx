import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useAuthContext } from '../../contexts/AuthContext';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { requestPasswordReset } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await requestPasswordReset(email);
            localStorage.setItem('email', email);
            navigate('/confirmOTP');

        } catch (err) {
            setError(err.response?.data?.msg || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 md:px-0">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <NavLink className="flex justify-center items-center" to="/">
                        <img src={assets.QuickPayLogoTransparent} alt="QuickPay Logo" className="w-20 h-20 mb-8" />
                    </NavLink>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">
                        Forgot your password?
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Enter your email below to receive your password reset instructions.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                    <div>
                        <button
                            type="submit"
                            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send password reset email'}
                        </button>
                    </div>
                </form>
                <div className="text-sm">
                    <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-400">
                        Back to login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
