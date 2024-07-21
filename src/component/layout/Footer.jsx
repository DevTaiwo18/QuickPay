import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    const user = localStorage.getItem('user');

    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-4 flex flex-col items-center justify-center">
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {user ? (
                        <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
                    ) : (
                        <>
                            <Link to="/signin" className="hover:text-gray-300">Login</Link>
                            <Link to="/signup" className="hover:text-gray-300">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
