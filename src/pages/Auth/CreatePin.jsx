import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import image from "../../assets/logoA. removebg-preview (1).png"
import { assets } from '../../assets/assets';


const CreatePin = () => {
  const pinInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  const [pin, setPin] = useState(['', '', '', '']);

  const handlePinChange = (digit, index) => {
    const newPin = [...pin];
    newPin[index] = digit.slice(-1); 
    setPin(newPin);

    if (digit && index < pinInputRefs.length - 1) {
      pinInputRefs[index + 1].current.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg px-5 md:px-0">
      <div className="max-w-md w-full space-y-8">
        <div>
          <NavLink className="flex justify-center items-center" to="/">
            <img src={assets.QuickPayLogoTransparent} alt="QuickPay Logo" className="w-32 h-32" />
          </NavLink>
          <h2 className="text-center text-3xl font-extrabold text">
            Create a PIN
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Your PIN will be used to protect your account.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="flex justify-center">
            {pin.map((value, index) => (
              <input
                key={index}
                ref={pinInputRefs[index]}
                type="password"
                maxLength="1"
                className="w-12 h-12 m-2 text-center form-control form-control-solid rounded-md text-gray-800 border border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={value}
                onChange={(e) => handlePinChange(e.target.value, index)}
                autoFocus={index === 0}
              />
            ))}
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Set PIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePin;
