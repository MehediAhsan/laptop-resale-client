import React from "react";
import SectionTitle from "./../../components/SectionTitle";

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Company X",
      avatar: "https://source.unsplash.com/50x50/?portrait?1",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo in tellus bibendum consequat.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Marketing Manager, Company Y",
      avatar: "https://source.unsplash.com/50x50/?portrait?2",
      review:
        "Fusce eget nisi ipsum. Cras ultrices nisi a dolor cursus, eget sagittis orci ornare.",
    },
    {
      id: 3,
      name: "David Johnson",
      role: "CTO, Company Z",
      avatar: "https://source.unsplash.com/50x50/?portrait?3",
      review:
        "Donec condimentum turpis ut eros volutpat, vitae hendrerit elit ultricies. Fusce sed felis mauris.",
    },
  ];

  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="mb-20">
      <SectionTitle one={"Customers"} two={"Reviews"}></SectionTitle>

      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col max-w-sm mx-4 my-6 rounded-lg shadow shadow-secondary"
          >
            <div className="px-4 py-8">
              <p className=" italic text-center mb-4">{review.review}</p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 border-t-2 border-secondary">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 mb-3 -mt-16 bg-center bg-cover rounded-full shadow-md"
              />
              <p className="text-xl font-medium leading-tight">{review.name}</p>
              <p className="text-sm text-secondary mt-2">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
