import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {_id, img} = category;
    return (
        <Link to={`/category/${_id}`} aria-label="View Item">
        <div className="relative overflow-hidden transition duration-500 transform rounded shadow-lg hover:-translate-y-1 hover:shadow-2xl max-h-max">
          <img
            className="object-cover w-full p-10 h-80"
            src={img}
            alt=""
          />
        </div>
      </Link>
    );
};

export default Category;