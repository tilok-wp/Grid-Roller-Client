import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import PageTitle from '../../utility/PageTitle';
import Preloader from '../Shared/Preloader';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch, isError, error } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()))

    const makeAdmin = (email) => {
        // console.log(email)
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error('You can not added admin. ')
                }
                return res.json()
            })
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Admin make successful!')
                }
            })
    }





    if (isLoading) {
        return <Preloader></Preloader>
    }
    if (isError) {
        return <span className='text-red-600 text-xl my-3 block'>Error: {error.message}</span>
    }

    return (
        <div className='py-20 px-3 container mx-auto'>
            <h1 className="text-3xl font-semibold uppercase mb-10 text-center">Make Admin {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                makeAdmin={makeAdmin}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
            <PageTitle title="Make Admin"></PageTitle>
        </div>
    );
};

export default MakeAdmin;