import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {_id, img} = category;
    return (
        <Link to={`/category/${_id}`} aria-label="View Item">
        <div data-aos="zoom-in-down" className="relative overflow-hidden transition duration-500 transform rounded shadow-lg hover:-translate-y-1 hover:shadow-xl max-h-max flex justify-center items-center mx-4 border border-red-300 ">
          <img
            className="object-cover w-52 p-10 h-52"
            src={img}
            alt=""
          />
        </div>
      </Link>
    );
};

export default Category;