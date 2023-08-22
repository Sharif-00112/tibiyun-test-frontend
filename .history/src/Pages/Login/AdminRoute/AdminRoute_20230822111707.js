import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';


const AdminRoute = ({children}) => {
    const { user, admin, isLoading } = useAuth();
    let location = useLocation();
  
    if(isLoading){ return <CircularProgress /> }
    return (
        user.email && admin ? children 
        : 
        <Navigate to="/home" state={{ from: location }} />
    );
};

export default AdminRoute;