import React, { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import Preloader from '../Shared/Preloader';
import useToken from '../../hooks/useToken';
import { toast } from 'react-toastify';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithEmailAndPassword, user, userLoading, userError,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, googleError] = useSignInWithGoogle(auth);
    const refResetEmail = useRef('')
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(user || userGoogle)

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])


    if (userLoading || loadingGoogle) {
        return <Preloader></Preloader>
    }
    let loginErrorMessage
    if (userError || googleError) {
        loginErrorMessage = <h4 className='text-red-500 my-3'>{userError?.message || googleError?.message}</h4>
    }

    const loginSubmit = data => {
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(email, password)

    }
    const passResetHandaller = async () => {
        const email = refResetEmail.current.value
        if (email) {
            sendPasswordResetEmail(email)
            toast.success('Rest email send. Please check your inbox.');
        } else {
            toast.error('Please write valid email.');
        }
    }

    return (
        <div className='flex justify-center items-center py-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Login </h2>
                    <form onSubmit={handleSubmit(loginSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label" htmlFor='email'>
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email"
                                ref={refResetEmail}
                                name='email'
                                placeholder="Write email"
                                className="input input-bordered w-full max-w-xs"
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
                        <div className="form-control w-full max-w-xs">
                            <label className="label" htmlFor='password'>
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password"
                                name='password'
                                placeholder="Write password"
                                className="input input-bordered w-full max-w-xs"
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



                        <input type="submit" value='Login' className='btn w-full max-w-xs btn-primary text-white' />
                    </form>

                    {loginErrorMessage}
                    <p className='my-3'>Forgot password? <button onClick={passResetHandaller} className='font-bold' > Reset password</button> </p>
                    <p>Are you new to this portal? <Link className='text-secondary font-bold' to='/signup'>Sign Up</Link></p>
                    <div className="divider">OR</div>
                    <div>
                        <button onClick={() => signInWithGoogle()} className='btn btn-outline btn-secondary w-full'>Login with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;