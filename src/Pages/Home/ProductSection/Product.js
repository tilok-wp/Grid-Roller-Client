import React from 'react';

const Product = ({ item }) => {
    const { name, price, img, description, minOrder, available } = item
    return (
        <div class="card w-full bg-base-100 shadow-xl">
            <figure><img className="w-18" src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <strong>Per Unit price: {price}</strong>
                <p>{description}</p>
                <div class="card-actions justify-between items-center">
                    <span>Min order:{minOrder} </span> <span>Avaliable quantiry: {available}</span>
                    <button class="btn btn-sm btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;