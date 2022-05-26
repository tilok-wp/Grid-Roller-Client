import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import PageTitle from '../../utility/PageTitle';
import Preloader from '../Shared/Preloader';
import OrderRowUser from './OrderRowUser';

const MyOrders = () => {
    const [user] = useAuthState(auth)

    const url = `http://localhost:5000/order/${user.email}`

    const { data: myOrders, isLoading, refetch, isError, error } = useQuery('myOrders', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()))


    if (isLoading) {
        return <Preloader></Preloader>
    }
    if (isError) {
        return <span className='text-red-600 text-xl my-3 block'>Error: {error.message}</span>
    }

    return (

        <div className='py-20 px-3 container mx-auto'>
            <h1 className="text-3xl font-semibold uppercase mb-10 text-center">My Orders {myOrders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>TranID</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((item, index) => <OrderRowUser
                                key={index}
                                item={item}
                                index={index}
                            ></OrderRowUser>)
                        }


                    </tbody>
                </table>
            </div>


            <PageTitle title="My Order"></PageTitle>
        </div>

    );
};

export default MyOrders;