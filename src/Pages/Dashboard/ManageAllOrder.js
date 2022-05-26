import React from 'react';
import { useQuery } from 'react-query';
import PageTitle from '../../utility/PageTitle';
import Preloader from '../Shared/Preloader';
import OrderRowAdmin from './OrderRowAdmin';

const ManageAllOrder = () => {


    const { data: allOrders, isLoading, refetch, isError, error } = useQuery('allOrders', () => fetch('https://hidden-reef-06008.herokuapp.com/order', {
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
            <h1 className="text-3xl font-semibold uppercase mb-10 text-center">All Orders {allOrders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Shiping</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((item, index) => <OrderRowAdmin
                                key={index}
                                item={item}
                                index={index}
                            ></OrderRowAdmin>)
                        }
                    </tbody>
                </table>
            </div>


            <PageTitle title="All Orders"></PageTitle>
        </div>
    );
};

export default ManageAllOrder;