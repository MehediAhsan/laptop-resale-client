import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import Loader from "../../Shared/Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionTitle from "../../../components/SectionTitle";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://laptop-resale-server.vercel.app/categories")
      .then((data) => {
        setCategories(data.data);
        setLoading(false);
      });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="my-36 mx-6 md:mx-0">
      <SectionTitle one={"Product"} two={"Categories"}></SectionTitle>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="px-5 md:px-20 xl:px-28">
          <Slider {...settings}>
            {categories.map((category) => (
              <Category key={category._id} category={category}></Category>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Categories;
