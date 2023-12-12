import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  const { _id, name } = category;
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link to={`/category/${_id}`} aria-label="View Item">
      <div
        className={`relative w-56 h-56 my-16 ml-16 rounded-full overflow-hidden shadow-lg cursor-pointer transform transition duration-300 ${
          hovered ? 'scale-105' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`absolute inset-0 bg-opacity-70 ${
            hovered ? 'bg-primary' : 'bg-neutral'
          } flex items-center justify-center transition-opacity duration-300`}
        >
          <h1
            className={`text-2xl font-semibold ${
              hovered ? 'text-white' : 'text-black'
            }`}
          >
            {name}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Category;
