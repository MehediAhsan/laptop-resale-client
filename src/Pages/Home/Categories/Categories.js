import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Category from './Category';
import Loader from '../../Shared/Loader';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://laptop-resale-server.vercel.app/categories')
        .then(data => {
            setCategories(data.data);
            setLoading(false);
        })
    },[])

    return (
        <div className='my-20'>
            <h1 className='text-3xl md:text-4xl font-semibold text-center text-primary mb-10'>Product Categories</h1>
            {
                loading ? <Loader></Loader> :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>
            }
        </div>
    );
};

export default Categories;