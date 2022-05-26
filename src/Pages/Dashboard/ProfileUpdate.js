import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useUserDetail from '../../hooks/useUserDetail';
import PageTitle from '../../utility/PageTitle';


const ProfileUpdate = () => {
    const [user] = useAuthState(auth)
    const [userDetail, setUserDetail] = useUserDetail(user.email)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const imageStorageKey = 'e2b2121566a89ed13907f8cde27f9d49'



    const updateOnSubmit = async data => {
        const { displayName, phone, address, city, education, linkedIn, github } = data


        // console.log(displayName, phone, address, city, linkedIn, github)

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

                    const updateInformation = { displayName, phone, address, city, education, linkedIn, github, imageLink }

                    const urlUpdate = `https://hidden-reef-06008.herokuapp.com/user/update/${user.email}`
                    fetch(urlUpdate, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(updateInformation)
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.modifiedCount > 0) {
                                toast.success('Update successful')
                                setUserDetail(updateInformation)
                                reset()
                            } else {
                                toast.error('Something wrong, Try again')
                            }
                        })
                    // send to database


                    // console.log(updateInformation)
                }
            })
    }


    return (
        <div className='py-10'>
            <h1 className="text-3xl font-semibold uppercase mb-10 text-center">Update profile</h1>

            <div className='w-full md:w-1/2 mx-auto'>
                <form onSubmit={handleSubmit(updateOnSubmit)}>

                    <div className="form-control w-full">
                        <label className="label" htmlFor='photo'>
                            <span className="label-text">Profile photo</span>
                        </label>

                        <input
                            type="file"
                            name='photo'
                            className="input input-bordered w-full"
                            {...register("photo", {
                                required: {
                                    value: true,
                                    message: 'Profile photo is required '
                                }
                            })}
                        />
                        <label className="label">
                            {errors.photo?.type === 'required' && <span className="label-text text-red-600">{errors.photo.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder="Write Full name"
                            defaultValue={userDetail?.displayName}
                            className="input input-bordered w-full"
                            {...register("displayName", {
                                required: {
                                    value: false,
                                    message: 'Full name is required '
                                }
                            })}
                        />
                        <label className="label">
                            {errors.displayName?.type === 'required' && <span className="label-text text-red-600">{errors.displayName.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full mb-5">

                        <input
                            type="email"
                            value={userDetail?.email || ''}
                            disabled={true}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control w-full mb-3">
                        <input
                            type="number"
                            placeholder="Phone"
                            className="input input-bordered w-full"
                            defaultValue={userDetail?.phone}
                            {...register("phone", {
                                required: {
                                    value: false,
                                    message: 'Phone  is required '
                                }
                            })}
                        />
                    </div>
                    <div className="form-control w-full mb-3">
                        <input
                            type="text"
                            placeholder="Address "
                            className="input input-bordered w-full"
                            defaultValue={userDetail?.address}
                            {...register("address", {
                                required: {
                                    value: false,
                                    message: 'Address  is required '
                                }
                            })}
                        />
                    </div>
                    <div className="form-control w-full mb-3">
                        <input
                            type="text"
                            placeholder="city"
                            className="input input-bordered w-full"
                            defaultValue={userDetail?.city}
                            {...register("city", {
                                required: {
                                    value: false,
                                    message: 'city  is required '
                                }
                            })}
                        />
                    </div>
                    <div className="form-control w-full mb-3">
                        <input
                            type="text"
                            placeholder="Education info"
                            className="input input-bordered w-full"
                            defaultValue={userDetail?.education}
                            {...register("education", {
                                required: {
                                    value: false,
                                    message: 'education  is required '
                                }
                            })}
                        />
                    </div>
                    <div className="form-control w-full mb-3">
                        <input
                            type="text"
                            placeholder="LinkedIn link"
                            className="input input-bordered w-full"
                            defaultValue={userDetail?.linkedIn}
                            {...register("linkedIn", {
                                required: {
                                    value: false,
                                    message: 'city  is required '
                                }
                            })}
                        />
                    </div>
                    <div className="form-control w-full mb-3">
                        <input
                            type="text"
                            placeholder="Github link"
                            className="input input-bordered w-full"
                            defaultValue={userDetail?.github}
                            {...register("github", {
                                required: {
                                    value: false,
                                    message: 'Github  is required '
                                }
                            })}
                        />
                    </div>



                    <input type="submit" value='Update profile' className='btn text-white' />
                </form>

            </div>
            <PageTitle title="Update profile"></PageTitle>
        </div>
    );
};

export default ProfileUpdate;