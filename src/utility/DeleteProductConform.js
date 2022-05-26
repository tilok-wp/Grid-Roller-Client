import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductConform = ({ deleteProduct, setDeleteProduct, refetch }) => {
    const { _id, name } = deleteProduct
    const handelDelete = () => {
        const url = `http://localhost:5000/product/${_id}`
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
                    setDeleteProduct(null)
                    refetch()
                }
            })
    }



    return (
        <div>
            <input type="checkbox" id="delete-product-conform-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are you sure delete  this product </h3>
                    <p className="py-4">If you've been deleted this product, You never come back this!!!</p>
                    <div className="modal-action">
                        <button onClick={() => handelDelete()} className='btn btn-error text-white'> Okay</button>
                        <label for="delete-product-conform-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default DeleteProductConform;