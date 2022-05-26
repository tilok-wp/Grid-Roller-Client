import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../../hooks/useProductDetails';
import PageTitle from '../../../utility/PageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Preloader from '../../Shared/Preloader';
import useUserDetail from '../../../hooks/useUserDetail';

const Purchase = () => {
    const { id } = useParams()
    const [user, loading] = useAuthState(auth);
    const [productDetail, setProductDetail] = useProductDetails(id)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { _id, name, price, img, minOrder, available, description } = productDetail
    const [userDetail] = useUserDetail(user.email)
    const { email, displayName, phone, address, city } = userDetail

    const orderHandler = data => {

        const { customerName, quantity, address, city, phone } = data

        const orderInfo = {
            productId: _id,
            productName: name,
            price,
            quantity,
            totalPrice: price * quantity,
            customerName,
            email: email,
            phone,
            address,
            city,
            paid: false,
            shipped: false
        }
        // console.log(orderInfo)

        fetch('https://hidden-reef-06008.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Product added successful')
                } else {
                    toast.error('Something wrong, Try again')
                }
            })
    }

    if (loading) {
        return <Preloader></Preloader>
    }

    return (
        <section className='py-20 px-3'>
            <div className="container mx-auto">
                <div className='w-full md:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto'>
                    <div className="product-info">
                        <div>
                            <img className='w-40' src={img} alt="Product" />
                        </div>
                        <div>
                            <h3>{name}</h3>
                            <p><strong>Price: {price}</strong></p>
                            <span>Min Order: <strong>{minOrder} </strong></span>
                            <span>Available product: <strong>{available} </strong></span>
                        </div>
                        <p>{description}</p>
                    </div>
                    <div className="customer-info">
                        <form onSubmit={handleSubmit(orderHandler)}>
                            <div className="form-control w-full">
                                <input
                                    type="text"
                                    placeholder="Customer name"
                                    className="input input-bordered w-full"
                                    defaultValue={displayName}
                                    {...register("customerName", {
                                        required: {
                                            value: true,
                                            message: 'Customer name is required '
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.heading?.type === 'required' && <span className="label-text text-red-600">{errors.heading.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full mb-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email || ''}
                                    disabled={true}
                                    className="input input-bordered w-full"

                                />

                            </div>

                            <div className="form-control w-full">
                                <input
                                    type="number"
                                    placeholder="quantity"
                                    className="input input-bordered w-full"
                                    defaultValue={minOrder}
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Min Order is required'
                                        },
                                        min: {
                                            value: minOrder,
                                            message: `Min order quantity is ${minOrder}`
                                        },
                                        max: {
                                            value: available,
                                            message: `Out of Stock! input ${minOrder} to ${available}`
                                        }


                                    })}
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text text-red-600">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'min' && <span className="label-text text-red-600">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'max' && <span className="label-text text-red-600">{errors.quantity.message}</span>}

                                </label>
                            </div>
                            <div className='grid grid-cols-2 gap-3'>

                                <div className="form-control w-full mb-3">
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        disabled={true}
                                        value={name || ''}
                                        {...register("productName", {
                                            required: {
                                                value: false,
                                                message: 'productName name is required '
                                            }
                                        })}

                                    />
                                </div>
                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        placeholder="City name"
                                        className="input input-bordered w-full"
                                        defaultValue={city}
                                        {...register("city", {
                                            required: {
                                                value: true,
                                                message: 'City name is required '
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.city?.type === 'required' && <span className="label-text text-red-600">{errors.city.message}</span>}

                                    </label>
                                </div>

                            </div>



                            <div className='form-control w-full mb-5'>
                                <textarea
                                    className="textarea textarea-bordered h-18 resize-none"
                                    placeholder="Address"
                                    defaultValue={address}
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address  is required '
                                        }
                                    })}

                                ></textarea>
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text text-red-600">{errors.address.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <input
                                    type="number"
                                    placeholder="Phone number"
                                    className="input input-bordered w-full"
                                    defaultValue={phone}
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'phone is required '
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text text-red-600">{errors.phone.message}</span>}

                                </label>
                            </div>

                            <input type="submit" value='Order ' className='btn w-full text-white hover:btn-primary hover:text-white ' />
                        </form>
                    </div>

                </div>
            </div>
            <PageTitle title="Purchase"></PageTitle>
        </section>
    );
};

export default Purchase;