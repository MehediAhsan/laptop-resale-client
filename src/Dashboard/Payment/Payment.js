import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../../Pages/Shared/Loader";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { product, price } = booking;

  if(navigation.state === "loading"){
    return <Loader></Loader>
  }

  return (
    <div className="pl-10">
      <h1 className="text-3xl my-6">Payment for {product}</h1>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your order
      </p>
      <div className="w-96 my-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;