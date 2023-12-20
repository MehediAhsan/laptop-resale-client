import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductBookModal from "./ProductBookModal";
import { HiLocationMarker } from "react-icons/hi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Product = ({ product }) => {
  const {
    picture,
    product_name,
    resale_price,
    seller_email,
    seller_name,
    original_price,
    location,
    use_years,
    description,
    condition,
    paid,
    time,
  } = product;
  const [bookingProduct, setBookingProduct] = useState(null);
  const [seller, setSeller] = useState({});

  useEffect(() => {
    fetch(`https://laptop-resale-server.vercel.app/users/${seller_email}`)
      .then((res) => res.json())
      .then((data) => {
        setSeller(data);
      });
  }, [seller_email]);

  const handleReportProduct = (product) => {
    fetch(`https://laptop-resale-server.vercel.app/reports/${product._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ reported: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Report admin successfully");
        } else {
          toast.error("Already reported this product");
        }
      });
  };

  return (
    <>
      {!paid && (
        <div className="bg-base-100 shadow rounded shadow-primary">
          <figure>
            <img
              className="w-full h-64 rounded"
              src={picture}
              alt="Album"
            />
          </figure>
          <div className="card-body flex flex-col gap-4 pt-4">
            <div className="flex justify-center items-center gap-1">
              <h2 className="card-title font-medium text-secondary">{product_name}</h2>
              <div className="flex flex-row items-center justify-center gap-1 font-medium text-sm">
                <span>({seller_name})</span>
                {seller.verified && (
                  <IoCheckmarkCircleOutline className="text-xl font-semibold text-neutral" />
                )}
              </div>
            </div>
            <p className="text-sm font-light text-center">{description.slice(0, 40)}...</p>
            <div className="flex justify-center gap-2">
              <span className="font-medium">
                Used: {use_years} years
              </span>
              <span className="font-medium">
                <span className="flex items-center justify-center gap-1">
                  <HiLocationMarker></HiLocationMarker> <span>{location}</span>
                </span>
              </span>
            </div>

            <div className="flex gap-4 justify-center">
              <span className="font-medium text-2xl text-error">
                ${resale_price}
              </span>
              <span className="font-medium text-sm line-through text-gray-400 mt-2">
                ${original_price}
              </span>
            </div>

            <div className="flex justify-center gap-8">
              <button
                onClick={() => handleReportProduct(product)}
                className=" text-white rounded-full flex justify-center items-center text-base bg-neutral py-1 px-4"
              >
                Report
              </button>
              <div className="card-actions">
                <label
                  htmlFor="product-booking-modal"
                  className="rounded-full border border-primary hover:bg-primary hover:text-black px-3 py-1 cursor-pointer"
                  onClick={() => setBookingProduct(product)}
                >
                  Book Now
                </label>
                {bookingProduct && (
                  <ProductBookModal
                    bookingProduct={bookingProduct}
                    setBookingProduct={setBookingProduct}
                    seller_email={seller_email}
                  ></ProductBookModal>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
