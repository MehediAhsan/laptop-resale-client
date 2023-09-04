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
        <div className="container px-4 mx-auto">
      <div className="flex gap-20 md:gap-52 md:justify-between md:items-center h-screen md:pb-32 flex-col md:flex-row">
        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-4 font-sans text-3xl font-semibold tracking-tight text-neutral sm:text-4xl sm:leading-none">
              <Typewriter
                        options={{
                            strings: ['Buy ?', "Sell ?"],
                            autoStart: true,
                            loop: true,
                            delay: 75
                        }}
                        />
              
            </h2>
            <h2 className="max-w-lg mb-6 font-sans text-3xl  tracking-tight sm:text-4xl sm:leading-none">Let's Start...</h2>
            <p className="text-base md:text-lg">
            LaptopResaleZ. website helps people to buy any second-hand product that is sell any seller.
            </p>
          </div>
          <div className='text-primary font-medium'>
            <Link
              to="/products"
              aria-label=""
              
            >
              <button class="px-3 py-1 rounded border border-primary hover:bg-primary hover:text-black ">All Products</button>
            </Link>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-duration="1000" className="flex items-center justify-end w-80 md:w-96">       
          {View}
        </div>
      </div>
    </div>
    );
};

export default Banner;