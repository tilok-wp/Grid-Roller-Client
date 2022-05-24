import React from 'react';

const Blog = ({ item }) => {
    const { img, description, heading } = item
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-full" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{heading}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;