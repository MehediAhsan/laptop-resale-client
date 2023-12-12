import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const ProductBookModal = ({bookingProduct, setBookingProduct, seller_email}) => {
    const {user} = useContext(AuthContext);
    const {_id, picture, product_name, resale_price} = bookingProduct;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meeting_location = form.meeting_location.value;

        if(!user){
            toast.error('Booking this product, Please Login');
            return;
        }

        if(email === seller_email){
            toast.error('Sorry! You are a seller, you can not book product');
            return;
        }
        
        const booking = {
            product: product_name,
            product_id: _id,
            picture,
            buyers: userName,
            email,
            phone,
            price:resale_price,
            meeting_location
        }

        fetch('https://laptop-resale-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setBookingProduct(null);
                toast.success('Product is booked');
            }
            else{
                toast.error(data.message);
            }
        }) 
    }

    const handleCross= () => {
        setBookingProduct(null);
    }

    return (
        <>
            <input type="checkbox" id="product-booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={handleCross} htmlFor="product-booking-modal" className="btn btn-secondary btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" disabled />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input type="text" disabled value={resale_price} className="input w-full input-bordered " />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="meeting_location" type="text" placeholder="Meeting location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-secondary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductBookModal;