import React from 'react';
import { useQuery } from 'react-query';
import PageTitle from '../../../utility/PageTitle';
import Preloader from '../../Shared/Preloader';
import Blog from './Blog';

const Blogs = () => {
    const { data: blogs, isLoading } = useQuery('blogs', () => fetch('http://localhost:5000/blog').then(res => res.json()))
    if (isLoading) {
        return <Preloader />
    }
    return (
        <section className='py-20'>
            <h1 class="text-3xl font-semibold uppercase mb-10">Recent Blogs</h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {blogs.map(item => <Blog
                    key={item._id}
                    item={item}
                ></Blog>)}
            </div>
            <PageTitle title="Blog"></PageTitle>
        </section>
    );
};

export default Blogs;