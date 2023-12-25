import React from "react";
import { Link } from "react-router-dom";
import { useLottie } from "lottie-react";
import discountAnimation from "../../assets/discount.json";

const DiscountBanner = () => {
  const options = {
    animationData: discountAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1000"
      className="px-8 py-5 rounded shadow shadow-secondary"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        <div className="w-64">{View}</div>
        <div className="flex flex-col items-center lg:items-start space-y-2 text-center lg:text-left">
          <span className="text-xl font-medium">Enjoy a discount!</span>
          <span className="text-lg text-secondary">
            Plus free shipping on all orders. Use code:{" "}
            <span className="text-primary-dark">resalelaptop</span>
          </span>
        </div>
        <Link
          to="/products"
          className="px-5 py-3 rounded-md bg-neutral text-white font-medium hover:bg-primary-dark transition duration-300"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default DiscountBanner;
