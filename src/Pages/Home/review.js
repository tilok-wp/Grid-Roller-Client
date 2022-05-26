import React from 'react';

const Review = ({ item }) => {
    const { author, description, ratings, photoURL } = item
    return (
        <div className="card w-full shadow my-5 carousel-item relative">
            <div className="flex items-center p-3">
                <div className='w-36'>
                    <img className='w-20 rounded-full' src={photoURL} alt="Review" />
                    <p>Ratings: {ratings}</p>
                </div>
                <div>
                    <h2 className="card-title">{author}</h2>
                    <p title={description}>{description.slice(0, 70) + '...'}</p>

                </div>
            </div>
        </div>
    );
};

export default Review;