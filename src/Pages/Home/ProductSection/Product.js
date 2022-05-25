import React from 'react';

const Product = ({ item, getProductHandel }) => {
    const { name, price, img, description, minOrder, available, _id } = item
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <img className="w-48 mx-auto" src={img} alt="Roller" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='card-actions justify-between items-center'>
                    <span>Price: <strong>{price}</strong><span className='text-xs'> (Per uint)</span></span>

                    <span>{available}<span className='text-xs'> (Available unit)</span></span>
                </div>

                <p>{description.slice(0, 80) + '...'} </p>
                <div className="card-actions justify-between items-center">

                    <span>{minOrder}<span className='text-xs'> (Min order)</span></span>

                    <button onClick={() => getProductHandel(_id)} className="btn btn-sm btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;