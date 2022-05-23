import React from 'react';
import { UserGroupIcon, ChatAlt2Icon, ChartPieIcon, ColorSwatchIcon } from '@heroicons/react/solid'

const BusinessSummary = () => {
    return (
        <section className='my-20'>
            <div className='container mx-auto'>
                <h2 class="text-3xl font-semibold uppercase mb-10 text-center">Business Summary</h2>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='border border-slate-100 bg-white hover:bg-orange-100 rounded-xl py-10 flex flex-col justify-center items-center'>
                        <UserGroupIcon className="h-14 w-14  text-gray-600 hover:text-primary" />
                        <span className='text-4xl font-extrabold my-3'>100+</span>
                        <h3 className='text-xl font-semibold'>We served customers</h3>
                    </div>
                    <div className='border border-slate-100 bg-white hover:bg-orange-100 rounded-xl py-10 flex flex-col justify-center items-center'>
                        <ChartPieIcon className="h-14 w-14  text-gray-600 hover:text-primary" />
                        <span className='text-4xl font-extrabold my-3'>120M+</span>
                        <h3 className='text-xl font-semibold'>Annual revenue</h3>
                    </div>
                    <div className='border border-slate-100 bg-white hover:bg-orange-100 rounded-xl py-10 flex flex-col justify-center items-center'>
                        <ChatAlt2Icon className="h-14 w-14  text-gray-600 hover:text-primary" />
                        <span className='text-4xl font-extrabold my-3'>33K+</span>
                        <h3 className='text-xl font-semibold'>Reviews</h3>
                    </div>
                    <div className='border border-slate-100 bg-white hover:bg-orange-100 rounded-xl py-10 flex flex-col justify-center items-center'>
                        <ColorSwatchIcon className="h-14 w-14  text-gray-600 hover:text-primary" />
                        <span className='text-4xl font-extrabold my-3'>50+</span>
                        <h3 className='text-xl font-semibold'>Popular tools</h3>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BusinessSummary;