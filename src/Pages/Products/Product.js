import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ProductBookModal from './ProductBookModal';
import { HiLocationMarker } from "react-icons/hi";

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
        <div className="card bg-base-100 shadow-lg mx-4 md:mx-0 border border-red-300">
        <figure><img className='w-full md:h-72 p-6 rounded transition ease-in-out duration-700 hover:scale-125 ' src={picture} alt="Album"/></figure>
        <div className="card-body pt-0">
            <div className='flex justify-between'>
            <h2 className="card-title">{product_name}</h2>
            <div className='flex flex-row items-center gap-1 font-medium text-lg'>
                <>{seller_name}</>
                {
                    seller.verified && <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="" />
                }
            </div>
            </div>
            <p>{description}</p>
            <span className='font-medium '>Posted Time: {time.slice(0,10)}</span>
            <div className='flex justify-between'>
            
            <span className='font-medium capitalize'>Product Condition: {condition}</span>
            
            </div>
            
            
            
            <div className='flex justify-between'>
            <span className='font-medium'>Years of Use: {use_years}years</span>
            <span className='font-medium'><span className='flex items-center justify-center gap-1'>
            <HiLocationMarker></HiLocationMarker> <span>{location}</span>
                </span></span>
            </div>

           <div className='flex gap-10'>
            <span className='font-medium text-lg text-error'>${resale_price}</span>
            <span className='font-medium line-through text-gray-600'>${original_price}</span>
           </div>
            
            
            <div className='flex justify-between mt-2'>
                <button onClick={() => handleReportProduct(product)} className=' text-white rounded-full flex justify-center items-center uppercase text-base bg-red-500 py-1 px-3'>Report</button>
                <div className="card-actions">
                <label
                    htmlFor="product-booking-modal"
                    className="rounded-full uppercase text-base bg-primary text-white px-3 py-1 cursor-pointer"
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