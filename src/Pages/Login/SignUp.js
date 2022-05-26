import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import useToken from '../../hooks/useToken';
import Preloader from '../Shared/Preloader';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [token] = useToken(user || userGoogle);

    if (token) {
        navigate('/dashboard')
    }


    const signupSubmit = async data => {
        const email = data.email
        const password = data.password
        const displayName = data.displayName
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName });
        console.log(email, password, displayName)
    }
    if (loading || loadingGoogle || updating) {
        return <Preloader />
    }
    let sigUpError;
    if (error || googleError || updateError) {
        sigUpError = <p className='text-red-600'><small>{error?.message || googleError?.message || updateError?.message}</small></p>
    }


    return (
        <div className='flex justify-center items-center py-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Login </h2>
                    <form onSubmit={handleSubmit(signupSubmit)}>
                        <div className="form-control w-full">
                            <label className="label" htmlFor='displayName'>
                                <span className="label-text">Full name</span>
                            </label>

                            <input
                                type="displayName"
                                name='displayName'
                                placeholder="Write Full name"
                                className="input input-bordered w-full"
                                {...register("displayName", {
                                    required: {
                                        value: true,
                                        message: 'Full name is required '
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text text-red-600">{errors.displayName.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label" htmlFor='email'>
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email"
                                name='email'
                                placeholder="Write email"
                                className="input input-bordered w-full"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required '
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide valid email' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text text-red-600">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label" htmlFor='password'>
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password"
                                name='password'
                                placeholder="Write password"
                                className="input input-bordered w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    pattern: {
                                        value: /(?=.*?[0-9])/,
                                        message: 'At least one digit' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>



                        <input type="submit" value='Sign up' className='btn w-full btn-primary text-white' />
                    </form>
                    {sigUpError}

                    <p>Are you already registered? <Link className='text-secondary font-bold' to='/login'>Login</Link></p>
                    <div className="divider">OR</div>
                    <div>
                        <button onClick={() => signInWithGoogle()} className='btn btn-outline btn-secondary w-full'>Login with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;