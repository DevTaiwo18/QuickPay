import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../../assets/assets'; // Assuming you have assets for images/icons
import { Link } from 'react-router-dom';

const ConfirmOTP = () => {
    const [otp, setOtp] = useState(['', '', '', '']); // Initialize OTP state with 4 empty strings
    const inputRefs = useRef([]); // Create a ref to store references to input fields

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

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
                <Link to={"/"}>
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
                <div className="flex justify-center mb-6">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2 mt-1" />
                    <p className="text-gray-600">support@example.com</p>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Confirm OTP
                </button>
            </div>
        </div>
    );
};

export default ConfirmOTP;
