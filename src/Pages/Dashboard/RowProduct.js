import React from 'react';
import { TrashIcon } from '@heroicons/react/solid'

const RowProduct = ({ product, index, setDeleteProduct }) => {
    const { name, img, price, minOrder, available, description, } = product

    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className='w-10' src={img} alt="Product" /></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{minOrder}</td>
            <td>{available}</td>
            <td>{description.slice(0, 10) + '...'}</td>
            <td>
                <label onClick={() => setDeleteProduct(product)} for="delete-product-conform-modal" className='btn btn-error p-1 rounded'><TrashIcon className='w-7 h-7 text-white' /></label>
            </td>

        </tr>
    );
};

export default RowProduct;