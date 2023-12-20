import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
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
        <div className='my-5'>
            {
                loading ? <Loader></Loader> :
                <>
                <SectionTitle one={"Advertised"} two={"Items"}></SectionTitle>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-5'>
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