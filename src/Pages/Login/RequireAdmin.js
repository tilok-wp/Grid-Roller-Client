import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import useAdmin from '../../hooks/useAdmin';
import Preloader from '../Shared/Preloader';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [admin, adminLoader] = useAdmin(user)
    const location = useLocation()

    if (loading || adminLoader) {
        return <Preloader></Preloader>
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;