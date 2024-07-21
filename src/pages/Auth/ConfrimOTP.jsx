import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../../assets/assets'; // Assuming you have assets for images/icons
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const ConfirmOTP = () => {
    const [otp, setOtp] = useState(['', '', '', '']); // Initialize OTP state with 4 empty strings
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [error, setError] = useState(null);
    const [countdown, setCountdown] = useState(600); // 10 minutes countdown
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const { confirmOtp, requestPasswordReset } = useAuthContext(); // Assuming these functions exist in the context

    // Function to focus on the next input field
    const focusNextInput = (index) => {
        if (index < otp.length - 1) {
            inputRefs.current[index + 1].focus(); // Focus on the next input field
        }
    };

    // Handle change in OTP input
    const handleChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return; // Only allow numeric input

        // Update OTP state
        const newOtp = [...otp];
        newOtp[index] = value.length > 1 ? value[value.length - 1] : value; // Allow only single-digit input
        setOtp(newOtp);

        // Automatically focus on the next input field after entering a digit
        if (index < otp.length - 1 && value !== '') {
            focusNextInput(index);
        }
    };

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleConfirmOtp = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await confirmOtp(otp.join('')); 
            localStorage.removeItem('email'); 
            localStorage.setItem('userId', response.userId); // Save userId to local storage

            navigate('/createNewPassword'); // Redirect to the next step
        } catch (err) {
            setError(err.response?.data?.msg || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        setResendLoading(true);
        setError(null);

        try {
            const email = localStorage.getItem('email'); 
            await requestPasswordReset(email);
            setCountdown(600); 
        } catch (err) {
            setError(err.response?.data?.msg || 'An error occurred. Please try again.');
        } finally {
            setResendLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
                <Link to="/">
                    <img src={assets.QuickPayLogoTransparent} alt="Logo" className="mx-auto mb-4" style={{ maxWidth: '100px' }} />
                </Link>
                <h2 className="text-2xl font-bold text-center mb-4">Confirm OTP</h2>
                <p className="text-center text-gray-600 mb-6">Please enter the OTP sent to your mobile number.</p>
                <div className="flex justify-center space-x-4 mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)} // Store reference to input field
                            type="text"
                            maxLength="1"
                            className="w-12 h-12 text-lg text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                        />
                    ))}
                </div>
                {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                <button
                    className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleConfirmOtp}
                    disabled={loading}
                >
                    {loading ? 'Confirming...' : 'Confirm OTP'}
                </button>
                <div className="flex justify-center mt-4">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2 mt-1" />
                    <p className="text-gray-600">support@example.com</p>
                </div>
                {countdown > 0 ? (
                    <p className="text-center text-gray-600 mt-4">
                        Resend OTP in {Math.floor(countdown / 60)}:{countdown % 60 < 10 ? `0${countdown % 60}` : countdown % 60}
                    </p>
                ) : (
                    <button
                        className={`w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 ${resendLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleResendOtp}
                        disabled={resendLoading}
                    >
                        {resendLoading ? 'Resending...' : 'Resend OTP'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ConfirmOTP;
