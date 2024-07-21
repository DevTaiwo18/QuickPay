import React, {useState, useEffect} from 'react'
import {Outlet, useNavigate} from "react-router-dom"
import { useAuthContext } from './src/contexts/AuthContext';
const ProtectedRoutes = () => {
    const token = localStorage.getItem('token');
    const navigation = useNavigate();

    const isAuthenticated = () => {
        if(!token){
            return false
        }
        return true
    }

    useEffect(() => {
        if(!isAuthenticated()){
            navigation("/signin")
        }
    }, [])

    return <Outlet />
}

export default ProtectedRoutes