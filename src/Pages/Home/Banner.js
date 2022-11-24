import React from 'react';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-accent">Buy and Sell Your Product</h1>
                    <p className="py-6 text-accent">Here the website you can buy or sell any product that is already you used</p>
                    <button className='btn btn-primary'>Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;