import React, { useEffect, useState } from 'react';
import ProductBookModal from './ProductBookModal';

const Product = ({product}) => {
    const {picture, product_name, resale_price, seller_email, seller_name, original_price, location, use_years, description, condition} = product;
    const [bookingProduct, setBookingProduct] = useState(null);
    const [seller, setSeller] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/users/${seller_email}`)
            .then(res => res.json())
            .then(data => {
                setSeller(data);
            })
    }, [seller_email])

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-20">
        <figure><img className='md:w-96 md:h-96' src={picture} alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">{product_name}</h2>
            <p>{description}</p>
            <p>Resale Price: ${resale_price}</p>
            <p>Original Price: ${original_price}</p>
            <p>{condition}</p>
            <p>Location: {location}</p>
            <p>Years of Use: {use_years}years</p>
            <div className='flex flex-row items-center gap-1'>
                <>{seller_name}</>
                {
                    seller.verified && <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="" />
                }
            </div>
            <div className="card-actions flex justify-end">
                <label
                    htmlFor="product-booking-modal"
                    className="btn btn-primary text-white"
                    onClick={() => setBookingProduct(product)}
                >Book Now</label>
                { 
                    bookingProduct &&
                    <ProductBookModal bookingProduct={bookingProduct} setBookingProduct={setBookingProduct}></ProductBookModal>
                }   
            </div>
        </div>
        </div>
    );
};

export default Product;