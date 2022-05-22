import React from 'react';
import { useQuery } from 'react-query';
import Preloader from '../../Shared/Preloader';
import Product from './Product';

const ProductSection = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch(`http://localhost:5000/product?limit=6`).then(res => res.json()))

    if (isLoading) {
        return <Preloader></Preloader>
    }
    return (
        <section className='py-20'>
            <h1 class="text-3xl font-semibold uppercase mb-10">Updated Tools {products.length}</h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    products.map(item => <Product
                        key={item._id}
                        item={item}
                    ></Product>)
                }
            </div>
        </section>
    );
};

export default ProductSection;