import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddBlog = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const imageStorageKey = 'e2b2121566a89ed13907f8cde27f9d49'

    const addBlogOnSubmit = async data => {

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
                    const heading = data.heading
                    const description = data.description

                    const blog = {
                        heading, description, img: imageLink
                    }
                    // console.log(blog)
                    fetch('https://hidden-reef-06008.herokuapp.com/blog', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('Blog added successful')
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
            <h1 className="text-3xl font-semibold uppercase mb-10 text-center">Add Blog</h1>
            <div className='w-full md:w-1/3 mx-auto'>
                <form onSubmit={handleSubmit(addBlogOnSubmit)}>
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder="Write Heading"
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
                            <span className="label-text">Profile photo</span>
                        </label>

                        <input
                            type="file"
                            name='photo'
                            className="input input-bordered w-full max-w-xs"
                            {...register("photo", {
                                required: {
                                    value: true,
                                    message: 'Blog photo is required '
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
        </div>
    );
};

export default AddBlog;