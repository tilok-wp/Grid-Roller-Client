import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import PageTitle from '../../utility/PageTitle';
import Preloader from '../Shared/Preloader';

const Payment = () => {
    const { id } = useParams()

    const url = `https://hidden-reef-06008.herokuapp.com/payment/${id}`

    const { data: orderPayment, isLoading, refetch, isError, error } = useQuery(['orderPayment', url], () => fetch(url, {
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
            <h1 className="text-3xl font-semibold uppercase mb-10 text-center">Payment for:  {orderPayment?.productName}</h1>


            <div className='w-full md:w-1/2 mx-auto'>
                <div className="card w-full bg-base-100 shadow-xl">

                    <div className="card-body">
                        <h2 className="card-title">{orderPayment?.productName}</h2>
                        <div className='card-actions justify-between items-center'>
                            <span>Total price : <strong>{orderPayment?.totalPrice}</strong></span>
                            <span>Quantity : <strong>{orderPayment?.quantity}</strong></span>
                            <span>User email : <strong>{orderPayment?.email}</strong></span>

                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl mt-10">

                    <div className="card-body">

                        <div className="card-actions justify-between items-center mt-10">

                            <button className="btn btn-sm btn-primary text-white">Pay</button>
                        </div>
                    </div>
                </div>
            </div>


            <PageTitle title="Payment"></PageTitle>
        </div>
    );
};

export default Payment;