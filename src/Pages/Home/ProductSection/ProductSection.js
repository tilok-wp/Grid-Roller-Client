import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Preloader from '../../Shared/Preloader';
import Product from './Product';

const ProductSection = () => {
    const { data: products, isLoading, isError, error } = useQuery('products', () => fetch(`http://localhost:5000/product?limit=6`).then(res => res.json()))
    const navigate = useNavigate()

    if (isLoading) {
        return <Preloader></Preloader>
    }

    if (isError) {
        return <span className='text-red-600 text-xl my-3 block'>Error: {error.message}</span>
    }

    const getProductHandel = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <section className='py-20 bg-slate-50'>
            <h2 className="text-3xl font-semibold uppercase mb-10 text-center">Updated Tools</h2>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    products.map(item => <Product
                        key={item._id}
                        item={item}
                        getProductHandel={getProductHandel}
                    ></Product>)
                }

            </div>
        </section>
    );
};

export default ProductSection;