import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {name, img} = category;
    return (
        <Link to="/" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-500 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-60 xl:h-64"
            src={img}
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-500 bg-black bg-opacity-100 opacity-80 flex justify-center items-center">
            <p className="mb-4 text-4xl font-bold text-gray-100">
              {name}
            </p>
          </div>
        </div>
      </Link>
    );
};

export default Category;