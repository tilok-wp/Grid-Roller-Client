import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../utility/PageTitle';

const Payment = () => {
    const { id } = useParams()
    return (
        <div className='py-20 px-3 container mx-auto'>
            <h1 className="text-3xl font-semibold uppercase mb-10 text-center">Payment {id}</h1>



            <PageTitle title="Payment"></PageTitle>
        </div>
    );
};

export default Payment;