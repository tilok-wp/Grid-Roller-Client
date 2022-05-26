import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import PageTitle from '../../../utility/PageTitle';
import Preloader from '../../Shared/Preloader';
import Blog from './Blog';

const Blogs = () => {
    const { data: blogs, isLoading, isError, error } = useQuery('blogs', () => fetch('https://hidden-reef-06008.herokuapp.com/blog').then(res => res.json()))
    if (isLoading) {
        return <Preloader />
    }
    if (isError) {
        return <span className='text-red-600 text-xl my-3 block'>Error: {error.message}</span>
    }
    return (
        <section className='py-20'>
            <h1 className="text-3xl font-semibold uppercase mb-10 text-center">Recent Blogs</h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {blogs.map(item => <Blog
                    key={item._id}
                    item={item}
                ></Blog>)}
            </div>
            <div className='mt-8 text-center'>
                <Link to='/add-blog' className='btn btn-secondary'>Add Blog</Link>
            </div>
            <PageTitle title="Blog"></PageTitle>
        </section>
    );
};

export default Blogs;