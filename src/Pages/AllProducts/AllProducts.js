import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import Loader from '../Shared/Loader';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://laptop-resale-server.vercel.app/allproducts')
        .then(data => {
            setProducts(data.data);
            setLoading(false);
        })
    },[])

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='my-20'>
            {
                loading ? <Loader></Loader> :
                <>
                <h1 className='text-3xl md:text-3xl font-semibold text-center text-accent mb-20'>Total {products.length} Products Availabel 💻</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                </>
            }
        </div>
    );
};

export default AllProducts;