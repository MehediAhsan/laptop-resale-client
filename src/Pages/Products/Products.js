import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://laptop-resale-server.vercel.app/categories')
        .then(data => {
            setCategories(data.data);
        })
    },[])

    const categoryName = categories.map(category => {
        if(category._id === products[0]?.category_id){
            return category.name;
        }
    })


    return (
        <div className='my-20'>
            <h1 className='text-3xl md:text-3xl font-semibold text-center text-accent mb-20'>{categoryName} {products.length}<span className=''> Products Available 💻</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;