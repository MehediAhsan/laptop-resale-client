import React from 'react';
import { Link } from 'react-router-dom';
import { useLottie } from "lottie-react";
import resaleAnimation from "../../assets/resale.json";

const Banner = () => {
  const options = {
    animationData: resaleAnimation,
    loop: true
  };

  const { View } = useLottie(options);

    return (
        <div className="container px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid gap-20 md:gap-52 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Buy. Sell.
              <br className="hidden md:block" />
              your product{' '}
              <span className="inline-block text-neutral">
                Discover
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            LaptopResaleZ. website helps people to buy any second-hand product that is sell any seller.
            </p>
          </div>
          <div className='text-primary font-bold'>
            <Link
              to="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4">       
          {View}
        </div>
      </div>
    </div>
    );
};

export default Banner;