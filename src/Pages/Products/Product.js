import React, { useState } from 'react';
import ProductBookModal from './ProductBookModal';

const Product = ({product}) => {
    const {picture, product_name,resale_price} = product;
    const [bookingProduct, setBookingProduct] = useState(null);
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-20">
        <figure><img className='md:w-96' src={picture} alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">{product_name}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <p>{resale_price}</p>
            <div className="card-actions justify-end">
                <label
                    htmlFor="product-booking-modal"
                    className="btn btn-primary text-white"
                    onClick={() => setBookingProduct(product)}
                >Book Now</label>
                { 
                    bookingProduct &&
                    <ProductBookModal bookingProduct={bookingProduct}></ProductBookModal>
                }   
            </div>
        </div>
        </div>
    );
};

export default Product;