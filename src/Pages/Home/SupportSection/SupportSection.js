import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SupportSection = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const contactSubmit = data => {
        toast.success('Message sent successful')
        reset()
    }
    return (
        <section className='py-20' id="contact">
            <div className='container mx-auto text-center'>
                <h2 class="text-3xl font-semibold uppercase mb-10">Quick contact</h2>
                <div className='w-1/3 mx-auto'>
                    <form onSubmit={handleSubmit(contactSubmit)}>
                        <div className="form-control w-full">
                            <input
                                type="email"
                                name='email'
                                placeholder="Contact email"
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
                            <input
                                type="text"
                                placeholder="Write subject"
                                className="input input-bordered w-full"
                                {...register("subject", {
                                    required: {
                                        value: true,
                                        message: 'Full name is required '
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text text-red-600">{errors.subject.message}</span>}

                            </label>
                        </div>
                        <div className='form-control w-full mb-5'>
                            <textarea class="textarea textarea-bordered h-28 resize-none" placeholder="Write message"></textarea>
                        </div>

                        <input type="submit" value='Send' className='btn w-full text-white hover:btn-primary hover:text-white ' />
                    </form>

                </div>
            </div>
        </section>
    );
};

export default SupportSection;