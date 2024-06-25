import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
  const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')).user : null);

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/login', { email, password });
      setAuthTokens(response.data);
      localStorage.setItem('authTokens', JSON.stringify(response.data));
      navigate('/dashboard/'); 
      return response.data;
    } catch (error) {
      console.error('Login failed:', error.response.data);
      throw error;
    }
  };

  const registerUser = async (username, email, password) => {
    try {
      const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/register', { username, email, password });
      setAuthTokens(response.data);
      localStorage.setItem('authTokens', JSON.stringify(response.data));
      navigate('/createPin'); 
      return response.data;
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      throw error;
    }
  };

  const createPin = async (pin) => {
    try {
      const token = authTokens.token;
      const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/create-pin', { pin }, { headers: { Authorization: `Bearer ${token}` } });
      navigate('/dashboard/'); 
      return response.data;
    } catch (error) {
      console.error('Create PIN failed:', error);
      throw error;
    }
  };

  const requestPasswordReset = async (email) => {
    try {
      const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/request-password-reset', { email });
      navigate('/confirmOTP'); 
      return response.data;
    } catch (error) {
      console.error('Request password reset failed:', error);
      throw error;
    }
  };

  const confirmOtp = async (email, otp) => {
    try {
      const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/confirm-otp', { email, otp });
      navigate('/createNewPassword'); 
      return response.data;
    } catch (error) {
      console.error('Confirm OTP failed:', error);
      throw error;
    }
  };

  const createNewPassword = async (userId, newPassword) => {
    try {
      const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/create-new-password', { userId, newPassword });
      navigate('/dashboard'); 
      return response.data;
    } catch (error) {
      console.error('Create new password failed:', error);
      throw error;
    }
  };

  const logoutUser = async () => {
    try {
      const token = authTokens.token;
      await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/logout', { token }, { headers: { Authorization: `Bearer ${token}` } });
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem('authTokens');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (authTokens) {
      setUser(authTokens.user);
    }
  }, [authTokens]);

  return (
    <AuthContext.Provider value={{
      user,
      authTokens,
      loginUser,
      registerUser,
      logoutUser,
      createPin,
      requestPasswordReset,
      confirmOtp,
      createNewPassword,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContext;
