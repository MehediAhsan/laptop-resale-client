import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData([]);

    return (
        <div className='my-20'>
            <h1 className='text-3xl md:text-3xl font-semibold text-center text-primary mb-20'>All <span className='text-red-500'>Products</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;