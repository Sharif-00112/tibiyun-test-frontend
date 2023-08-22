import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            Dashboard
        </div>
    );
};

export default Dashboard;