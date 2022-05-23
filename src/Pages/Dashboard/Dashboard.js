import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-menuIcon" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content px-5">
                <h3 className='text-primary text-3xl font-semibold'>Dashboard</h3>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-menuIcon" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/add-review'>Add review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;