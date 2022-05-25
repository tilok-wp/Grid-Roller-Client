import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import PageTitle from '../../utility/PageTitle';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const imageStorageKey = 'e2b2121566a89ed13907f8cde27f9d49'
    const addProductOnSubmit = async data => {

        const image = data.photo[0]
        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        // console.log(data.heading, data.description, url);

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const imageLink = result.data.url
                    const name = data.heading
                    const description = data.description
                    const minOrder = data.minOrder
                    const available = data.available

                    const product = {
                        name, description, minOrder, available, img: imageLink,
                    }
                    // console.log(product)
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('Product added successful')
                                reset()
                            } else {
                                toast.error('Something wrong, Try again')
                            }
                        })
                    // send to database
                }
            })

    }
    return (
        <div className='py-20 px-3 container mx-auto'>
            <h1 className="text-3xl font-semibold uppercase mb-10 text-center">Add Product</h1>
            <div className='w-full md:w-1/2 mx-auto'>
                <form onSubmit={handleSubmit(addProductOnSubmit)}>
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder="Product name"
                            className="input input-bordered w-full"
                            {...register("heading", {
                                required: {
                                    value: true,
                                    message: 'heading name is required '
                                }
                            })}
                        />
                        <label className="label">
                            {errors.heading?.type === 'required' && <span className="label-text text-red-600">{errors.heading.message}</span>}

                        </label>
                    </div>

                    <div className='grid grid-cols-3 gap-3'>

                        <div className="form-control w-full">
                            <input
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is required'
                                    },
                                    min: {
                                        value: 0,
                                        message: 'Min price 0'
                                    },


                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text text-red-600">{errors.price.message}</span>}
                                {errors.price?.type === 'min' && <span className="label-text text-red-600">{errors.price.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="number"
                                placeholder="min Order quantity"
                                className="input input-bordered w-full"
                                {...register("minOrder", {
                                    required: {
                                        value: true,
                                        message: 'Min Order is required'
                                    },
                                    min: {
                                        value: 1,
                                        message: 'Min minOrder 1'
                                    },


                                })}
                            />
                            <label className="label">
                                {errors.minOrder?.type === 'required' && <span className="label-text text-red-600">{errors.minOrder.message}</span>}
                                {errors.minOrder?.type === 'min' && <span className="label-text text-red-600">{errors.minOrder.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="number"
                                placeholder="Available quantity"
                                className="input input-bordered w-full"
                                {...register("available", {
                                    required: {
                                        value: true,
                                        message: 'Available quantity required'
                                    },
                                    min: {
                                        value: 1,
                                        message: 'Min Available quantity  1'
                                    }


                                })}
                            />
                            <label className="label">
                                {errors.available?.type === 'required' && <span className="label-text text-red-600">{errors.available.message}</span>}
                                {errors.available?.type === 'min' && <span className="label-text text-red-600">{errors.available.message}</span>}

                            </label>
                        </div>

                    </div>



                    <div className='form-control w-full mb-5'>
                        <textarea
                            className="textarea textarea-bordered h-28 resize-none"
                            placeholder="Write description"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description  is required '
                                }
                            })}

                        ></textarea>
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text text-red-600">{errors.description.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label" htmlFor='photo'>
                            <span className="label-text">Product photo</span>
                        </label>

                        <input
                            type="file"
                            name='photo'
                            className="input input-bordered w-full max-w-xs"
                            {...register("photo", {
                                required: {
                                    value: true,
                                    message: 'Product photo is required '
                                }
                            })}
                        />
                        <label className="label">
                            {errors.photo?.type === 'required' && <span className="label-text text-red-600">{errors.photo.message}</span>}
                        </label>
                    </div>

                    <input type="submit" value='Add' className='btn w-full text-white hover:btn-primary hover:text-white ' />
                </form>
            </div>
            <PageTitle title={'Add Product'}></PageTitle>
        </div>
    );
};

export default AddProduct;