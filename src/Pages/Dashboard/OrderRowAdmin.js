import React from 'react';

const OrderRowAdmin = ({ item, index }) => {
    const { _id, productName, quantity, totalPrice, paid, tranID } = item

    const setDeleteProduct = (product) => {
        console.log(product)
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{totalPrice}</td>
            <td>{tranID}</td>
            <td>{!paid ? <span className='text-red-500 font-bold'>Unpaid</span> : <span className='text-green-500 font-bold'>Paid</span>}</td>
            <td>{!paid ? '' : <label htmlFor="order-cancel-modal" className='btn btn-xs'>Shipped</label>}</td>
        </tr>
    );
};

export default OrderRowAdmin;