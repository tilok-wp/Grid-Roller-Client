import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ item, getProductHandel }) => {
    const { name, price, img, description, minOrder, available, _id } = item
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className="w-24" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <strong>Per Unit price: {price}</strong>
                <p>{description}</p>
                <div className="card-actions justify-between items-center">
                    <span>Min order:{minOrder} </span> <span>Avaliable quantiry: {available}</span>
                    <button onClick={() => getProductHandel(_id)} className="btn btn-sm btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;