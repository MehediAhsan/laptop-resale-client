import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData([]);

    return (
        <div className='my-20'>
            <h1 className='text-4xl font-semibold text-center text-primary mb-20'>All Products</h1>
            <div className='grid grid-cols-1 gap-6'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;