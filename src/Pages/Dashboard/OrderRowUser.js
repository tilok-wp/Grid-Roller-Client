import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderRowUser = ({ item, index }) => {
    const { _id, productName, quantity, totalPrice, paid, tranID } = item
    const navigate = useNavigate()

    const nevigatePayemntHandle = id => {
        navigate(`/payment/${id}`)
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{totalPrice}</td>
            <td>{tranID}</td>
            <td>{!paid ? <button onClick={() => nevigatePayemntHandle(_id)} className='btn btn-xs btn-primary'>Pay now</button> : <span className='text-green-500 font-bold'>Paid</span>}</td>
            <td>{paid ? '' : <button className='btn btn-xs'>Cancel</button>}</td>

            {/* <td>{available}</td>
            <td>{description.slice(0, 10) + '...'}</td> */}
            <td>
                {/* <label onClick={() => setDeleteProduct(product)} for="delete-product-conform-modal" className='btn btn-error p-1 rounded'><TrashIcon className='w-7 h-7 text-white' /></label> */}
            </td>

        </tr>
    );
};

export default OrderRowUser;