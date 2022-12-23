import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ProductBookModal from './ProductBookModal';
import { FaArrowRight } from "react-icons/fa";

const Product = ({product}) => {
    const {picture, product_name, resale_price, seller_email, seller_name, original_price, location, use_years, description, condition, paid, time} = product;
    const [bookingProduct, setBookingProduct] = useState(null);
    const [seller, setSeller] = useState({});

    useEffect(() => {
        fetch(`https://laptop-resale-server.vercel.app/users/${seller_email}`)
            .then(res => res.json())
            .then(data => {
                setSeller(data);
            })
    }, [seller_email])

    const handleReportProduct = product => {
        fetch(`https://laptop-resale-server.vercel.app/reports/${product._id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({reported: true})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
              toast.success('Report admin successfully')
            }
            else{
                toast.error('Already reported this product');
            }
        })
    }

    return (
        <>
        { !paid && 
        <div className="card lg:card-side bg-base-100 shadow-lg mx-4 md:mx-36 border border-red-300">
        <figure><img className='md:w-96 md:h-96 p-2 rounded' src={picture} alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">{product_name}</h2>
            <p>{description}</p>
            <p className='font-medium'>Resale Price: ${resale_price}</p>
            <p className='font-medium'>Original Price: ${original_price}</p>
            <p className='font-medium'>Product Condition: {condition}</p>
            <p className='font-medium'>Location: {location}</p>
            <p className='font-medium'>Years of Use: {use_years}years</p>
            <div className='flex flex-row items-center gap-1 font-medium'>
                <>Seller: {seller_name}</>
                {
                    seller.verified && <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="" />
                }
            </div>
            <p>Posted Time: {time.slice(0,10)}</p>
            <div className='flex justify-between mt-2'>
                <button onClick={() => handleReportProduct(product)} className=' text-white rounded flex justify-center items-center uppercase text-base bg-red-500 py-1 px-2'>Report</button>
                <div className="card-actions">
                <label
                    htmlFor="product-booking-modal"
                    className="rounded uppercase text-base bg-primary text-white py-2 cursor-pointer px-3"
                    onClick={() => setBookingProduct(product)}
                >Book Now</label>
                { 
                    bookingProduct &&
                    <ProductBookModal bookingProduct={bookingProduct} setBookingProduct={setBookingProduct} seller_email={seller_email}></ProductBookModal>
                }   
                </div>
            </div>
            
        </div>
        </div>
        }
        </>
    );
};

export default Product;