import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderRowUser = ({ item, index, setOrderCanceling }) => {
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
            <td>{paid ? '' : <label onClick={() => setOrderCanceling(item)} htmlFor="order-cancel-modal" className='btn btn-xs'>Cancel</label>}</td>


        </tr>
    );
};

export default OrderRowUser;