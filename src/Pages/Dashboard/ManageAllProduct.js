import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteProductConform from '../../utility/DeleteProductConform';
import PageTitle from '../../utility/PageTitle';
import Preloader from '../Shared/Preloader';
import RowProduct from './RowProduct';

const ManageAllProduct = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)
    const { data: products, isLoading, refetch, isError, error } = useQuery('products', () => fetch('http://localhost:5000/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Preloader></Preloader>
    }
    if (isError) {
        return <span className='text-red-600 text-xl my-3 block'>Error: {error.message}</span>
    }

    return (
        <div className='py-20 px-3 container mx-auto'>
            <h1 className="text-3xl font-semibold uppercase mb-10 text-center">Manage Products {products.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Min Order</th>
                            <th>Available Quantity</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => <RowProduct
                                key={product._id}
                                product={product}
                                index={index}
                                setDeleteProduct={setDeleteProduct}

                            ></RowProduct>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteProduct && <DeleteProductConform
                deleteProduct={deleteProduct}
                setDeleteProduct={setDeleteProduct}
                refetch={refetch}
            ></DeleteProductConform>}
            <PageTitle title="Manage Products"></PageTitle>
        </div>
    );
};

export default ManageAllProduct;