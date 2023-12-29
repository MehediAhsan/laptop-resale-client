import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const DeliveryMan = () => {
  const members = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "John lorin",
      email: "john@example.com",
      phone: "01990022990",
      location: "Dhaka",
      rating: "5",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Chris bondi",
      email: "chridbondi@example.com",
      phone: "01990022990",
      location: "Khulna",
      rating: "4",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "yasmine",
      email: "yasmine@example.com",
      phone: "01990022990",
      location: "Dhaka",
      rating: "4.5",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
      name: "Joseph",
      email: "joseph@example.com",
      phone: "01990022990",
      location: "Faridpur",
      rating: "4",
    },
  ];
  return (
    <div className="container w-11/12 mx-auto px-4">
      <div className="items-start justify-between sm:flex mt-10">
        <div>
          <h4 className="text-secondary text-xl font-semibold">Delivery Man</h4>
          <p className="mt-2 text-base sm:text-sm">
            Choose you delivery man according to your location.
          </p>
        </div>
      </div>
      <ul className="mt-12 divide-y">
        {members.map((item, idx) => (
          <li key={idx} className="py-8 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <img
                src={item.avatar}
                className="flex-none w-24 h-24 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <span className="block text-xl text-error font-medium">
                  {item.name}
                </span>
                <span className="block">{item.email}</span>
                <span className="flex items-center gap-1">
                  <FaPhone />
                  {item.phone}
                </span>
                <span className="flex items-center gap-1 text-secondary">
                  <FaLocationDot />
                  {item.location}
                </span>
              </div>
            </div>
            <Rating style={{ maxWidth: 100 }} value={item.rating} readOnly />
            <a
              href="javascript:void(0)"
              className="text-accent text-sm border rounded-lg px-3 py-1 duration-150"
            >
              Contact
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryMan;
