import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import PageTitle from '../../utility/PageTitle';

const Dashboard = () => {
    const [user] = useAuthState(auth)

    return (
        <div className="drawer drawer-mobile">

            <input id="dashboard-menuIcon" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content px-5">
                <label htmlFor="dashboard-menuIcon" tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-menuIcon" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <h3 className='text-xl font-semibold'>Dashboard</h3>
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard/my-orders'>My orders</Link></li>
                    <li><Link to='/dashboard/add-review'>Add review</Link></li>
                    <li><Link to='/dashboard/manage-all-orders'>Manage All Orders</Link></li>
                    <li><Link to='/dashboard/add-product'>Add A Product</Link></li>
                    <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>
                    <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>
                </ul>
            </div>
            <PageTitle title="Dashboard"></PageTitle>
        </div>
    );
};

export default Dashboard;