import React from "react";
import SectionTitle from "./../../components/SectionTitle";

const team = [
  {
    name: "Dany Bailey",
    designation: "Software Engineer",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Lucy Carter",
    designation: "Graphic Designer",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Dany Bailey",
    designation: "Software Engineer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Dany Bailey",
    designation: "Software Engineer",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Dany Bailey",
    designation: "Software Engineer",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Dany Bailey",
    designation: "Software Engineer",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
];

const Team = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      class=" mx-auto px-4 sm:px-6 lg:px-4 "
    >
      <div class="text-center pb-14">
        <SectionTitle one={"Team"} two={"Members"}></SectionTitle>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {team?.map((data, i) => (
          <div key={i} class="w-full shadow shadow-secondary rounded-lg p-10 flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div class="mb-8">
              <img
                class="object-center object-cover rounded-lg h-36 w-36"
                src={data.img}
                alt=""
              />
            </div>
            <div class="text-center">
              <p class="text-xl font-bold mb-2">{data.name}</p>
              <p class="text-base  font-normal">{data.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
