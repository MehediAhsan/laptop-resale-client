import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const ProductBookModal = ({bookingProduct}) => {
    const {user} = useContext(AuthContext);
    const {product_name, resale_price} = bookingProduct;

    const handleBooking = event => {
        event.preventDefault();
    }

    return (
        <>
            <input type="checkbox" id="product-booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-booking-modal" className="btn btn-secondary btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" disabled />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input type="text" disabled value={resale_price} className="input w-full input-bordered " />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-secondary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductBookModal;