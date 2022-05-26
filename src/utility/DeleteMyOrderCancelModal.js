import React from 'react';
import { toast } from 'react-toastify';

const DeleteMyOrderCancelModal = ({ orderCanceling, setOrderCanceling, refetch }) => {

    const handelDelete = () => {
        const { _id, name } = orderCanceling

        const url = `https://hidden-reef-06008.herokuapp.com/order/${_id}`
        // console.log(_id, name)
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`product "${name}"is deleted successful!`)
                    setOrderCanceling(null)
                    refetch()
                }
            })

    }


    return (
        <div>
            <input type="checkbox" id="order-cancel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are you sure Cancel  this Order </h3>
                    <p className="py-4">If you've been deleted this Order, You never come back this!!!</p>
                    <div className="modal-action">
                        <button onClick={() => handelDelete()} className='btn btn-error text-white'> Okay</button>
                        <label htmlFor="order-cancel-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default DeleteMyOrderCancelModal;