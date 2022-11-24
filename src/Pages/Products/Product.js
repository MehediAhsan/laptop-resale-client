import React from 'react';

const Product = ({product}) => {
    const {picture, product_name} = product
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-20">
        <figure><img className='md:w-96' src={picture} alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">{product_name}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            </div>
        </div>
        </div>
    );
};

export default Product;