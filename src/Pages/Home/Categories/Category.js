import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {_id, img, name} = category;
    return (
        <Link to={`/category/${_id}`} aria-label="View Item">
        <div className="relative overflow-hidden transition duration-500 transform shadow-lg  hover:shadow-xl flex justify-center items-center  border-2 border-neutral hover:border-primary w-60 h-56 rounded-full">
          {/* <img
            className="object-cover w-52 p-10 h-52"
            src={img}
            alt=""
          /> */}
          <h1 className='font-bold text-5xl font-Berkshire text-accent'>{name}</h1>
        </div>
      </Link>
    );
};

export default Category;