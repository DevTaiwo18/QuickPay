import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            const parsedToken = JSON.parse(storedToken);
            if (new Date(parsedToken.expiry) > new Date()) {
                return parsedToken;
            } else {
                localStorage.removeItem('token');
                return null;
            }
        }
        return null;
    });
    const [user, setUser] = useState(() => localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

    const loginUser = async (email, password) => {
        try {
            const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/login', { email, password });
            const tokens = {
                ...response.data,
                expiry: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
            };
            setToken(tokens);
            localStorage.setItem('token', JSON.stringify(tokens));
            setUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            return response.data;
        } catch (error) {
            console.error('Login failed:', error.response.data);
            throw error;
        }
    };

    const registerUser = async (userData) => {
        try {
            const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/register', userData);
            const tokens = {
                ...response.data,
                expiry: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
            };
            setToken(tokens);
            localStorage.setItem('token', JSON.stringify(tokens));
            setUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            return response.data;
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    };

    const createPin = async (pin) => {
        try {
            const tokenValue = token.token;
            const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/create-pin', { pin }, { headers: { Authorization: `Bearer ${tokenValue}` } });
            return response.data;
        } catch (error) {
            console.error('Create PIN failed:', error);
            throw error;
        }
    };

    const requestPasswordReset = async (email) => {
        try {
            const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/request-password-reset', { email });
            return response.data;
        } catch (error) {
            console.error('Request password reset failed:', error);
            throw error;
        }
    };

    const confirmOtp = async (otp) => {
        const email = localStorage.getItem('email');
        try {
            const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/confirm-otp', { email, otp });
            return response.data;
        } catch (error) {
            console.error('Confirm OTP failed:', error);
            throw error;
        }
    };

    const createNewPassword = async (userId, newPassword) => {
        try {
            const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/create-new-password', { userId, newPassword });
            return response.data;
        } catch (error) {
            console.error('Create new password failed:', error);
            throw error;
        }
    };

    const logoutUser = async () => {
        try {
            const storedToken = localStorage.getItem('token');
            if (!storedToken) {
                throw new Error('No token found in local storage');
            }

            const parsedToken = JSON.parse(storedToken);
            if (new Date(parsedToken.expiry) <= new Date()) {
                throw new Error('Token has expired');
            }

            const tokenValue = parsedToken.token;

            const response = await axios.post('https://quick-pay-api.onrender.com/api/v1/auth/logout',
                { token: tokenValue },
                {
                    headers: {
                        Authorization: `Bearer ${tokenValue}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log('Logout response:', response);

            setToken(null);
            setUser(null);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        } catch (error) {
            console.error('Logout failed:', error);
            throw error;
        }
    };


    useEffect(() => {
        if (token) {
            setUser(token.user);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{
            user,
            token,
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
