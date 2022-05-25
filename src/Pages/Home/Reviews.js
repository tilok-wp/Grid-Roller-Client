import React from 'react';
import { useQuery } from 'react-query';
import Preloader from '../Shared/Preloader';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading, isError, error } = useQuery('reviews', () => fetch(`http://localhost:5000/review?limit=6`).then(res => res.json()))

    if (isLoading) {
        return <Preloader></Preloader>
    }
    if (isError) {
        return <span className='text-red-600 text-xl my-3 block'>Error: {error.message}</span>
    }

    return (
        <section className='my-20'>
            <div className='container mx-auto'>
                <h2 className="text-3xl font-semibold uppercase mb-10 text-center">Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        reviews.map(item => <Review
                            key={item._id}
                            item={item}
                        ></Review>)
                    }

                </div>


            </div>
        </section>
    );
};

export default Reviews;