import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
        .then(data => setCategories(data.data))
    },[])

    return (
        <div className='my-20'>
            <h1 className='text-3xl font-bold text-center text-secondary mb-10'>Product Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;