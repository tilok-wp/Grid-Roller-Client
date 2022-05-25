import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../../utility/PageTitle';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const addReviewOnSubmit = async data => {


        const author = user?.displayName || 'Anonymous'
        const description = data.description
        const ratings = data.ratings

        const review = {
            author, description, ratings
        }
        // console.log(blog)
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('review added successful')
                    reset()
                } else {
                    toast.error('Something wrong, Try again')

                }
            })
        // send to database


    }
    console.log(user)
    return (
        <div className='py-20 px-3 container mx-auto'>
            <h1 className="text-3xl font-semibold uppercase mb-10 text-center">Add Review</h1>
            <div className='w-full md:w-1/3 mx-auto'>
                <form onSubmit={handleSubmit(addReviewOnSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label" htmlFor='photo'>
                            <span className="label-text">User photo</span>
                        </label>

                    </div>
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder="Review "
                            className="input input-bordered w-full"
                            value={user?.displayName || 'Anonymous'}
                            disabled={true}
                        />
                    </div>
                    <div className="form-control w-full mb-5">
                        <select className="select select-bordered w-full"
                            {...register("ratings", {
                                required: {
                                    value: true,
                                    message: 'ratings  is required '
                                }
                            })}

                        >
                            <option> Select ratings </option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>

                        </select>

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




                    <input type="submit" value='Add' className='btn w-full text-white hover:btn-primary hover:text-white ' />
                </form>
            </div>
            <PageTitle title={'Add Review'}></PageTitle>
        </div>
    );
};

export default AddReview;