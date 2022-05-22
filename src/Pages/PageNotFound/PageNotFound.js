import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404-min.png'

const PageNotFound = () => {
    return (
        <section className='py-12 text-center'>
            <img className='mx-auto' src={notFound} alt="Page not found" />
            <h2 className='text-5xl uppercase'>Page not found!!!</h2>
            <Link to='/' className="btn btn-primary font-bold text-white mt-3"> Go Home Back</Link>
        </section>
    );
};

export default PageNotFound;