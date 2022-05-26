import React from 'react';

const OrderRowAdmin = ({ item, index }) => {
    const { productName, quantity, totalPrice } = item

    const setDeleteProduct = (product) => {
        console.log(product)
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{totalPrice}</td>
            {/* <td>{available}</td>
            <td>{description.slice(0, 10) + '...'}</td> */}
            <td>
                {/* <label onClick={() => setDeleteProduct(product)} for="delete-product-conform-modal" className='btn btn-error p-1 rounded'><TrashIcon className='w-7 h-7 text-white' /></label> */}
            </td>

        </tr>
    );
};

export default OrderRowAdmin;