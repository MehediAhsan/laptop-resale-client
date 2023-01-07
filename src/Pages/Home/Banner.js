import React from 'react';
import { Link } from 'react-router-dom';
import { useLottie } from "lottie-react";
import resaleAnimation from "../../assets/resale.json";
import Typewriter from 'typewriter-effect';


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
            <h2 className="max-w-lg mb-4 font-sans text-3xl font-semibold tracking-tight text-red-500 sm:text-4xl sm:leading-none">
              <Typewriter
                        options={{
                            strings: ['Buy ?', "Sell ?"],
                            autoStart: true,
                            loop: true,
                            delay: 75
                        }}
                        />
              
            </h2>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl sm:leading-none">Let's Start...</h2>
            <p className="text-base text-gray-700 md:text-lg">
            LaptopResaleZ. website helps people to buy any second-hand product that is sell any seller.
            </p>
          </div>
          <div className='text-primary font-semibold'>
            <Link
              to="/"
              aria-label=""
              
            >
              <button class="px-4 py-1 text-green-100 rounded bg-gradient-to-r from-primary to-green-400">Button</button>
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