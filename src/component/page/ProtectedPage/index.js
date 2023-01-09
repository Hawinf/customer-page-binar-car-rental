import { useEffect, useState, useLayoutEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../Login";

const ProtectedRoute = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    // PART 1
    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
            setIsLogin(false);
            setLoading(false);
        } else {
            setIsLogin(true);
            setLoading(false)
        }
    }, [isLogin]);

    // PART 2
    if (loading) {
        return 'loading';
    }

    // PART 3 
    return isLogin ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute;