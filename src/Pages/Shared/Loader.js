import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center space-x-2 my-32">
            <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
        </div>
    );
};

export default Loader;