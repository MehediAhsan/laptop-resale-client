import React from 'react';
import { Link } from 'react-router-dom';
import { useLottie } from "lottie-react";
import discountAnimation from "../../assets/discount.json";

const DiscountBanner = () => {
	const options = {
		animationData: discountAnimation,
		loop: true
	  };
	
	  const { View } = useLottie(options);
    return (
        <div data-aos="flip-up" className=" dark:text-gray-900 bg-red-100 px-8 py-5">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between ">
				<div className='w-72'>
				{View}
				</div>
			<div className="space-x-2 text-center text-xl">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg text-red-500">resalelaptop</span>
			</div>
			<Link to="/" rel="noreferrer noopener" className="px-5 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Buy Now</Link>
		</div>
	</div>
</div>
    );
};

export default DiscountBanner;