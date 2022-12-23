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
        <div className=" dark:text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
				{View}
			<div className="space-x-2 text-center text-xl">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg text-red-400">resalelaptop</span>
			</div>
			<Link to="/" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Buy Now</Link>
		</div>
	</div>
</div>
    );
};

export default DiscountBanner;