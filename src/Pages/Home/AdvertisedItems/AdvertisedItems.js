import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../../Products/Product';
import Loader from '../../Shared/Loader';

const AdvertisedItems = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://laptop-resale-server.vercel.app/advertise')
        .then(data => {
            setProducts(data.data);
            setLoading(false);
        })
    },[])

    return (
        <div className='my-20'>
            {
                loading ? <Loader></Loader> :
                <>
                <h1 className='text-3xl md:text-4xl font-semibold text-center text-primary mb-20'>Advertised Items</h1>
                <div className='grid grid-cols-1 gap-6'>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                </>
            }
        </div>
    );
};

export default AdvertisedItems;