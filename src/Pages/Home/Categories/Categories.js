import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Category from './Category';
import Loader from '../../Shared/Loader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://laptop-resale-server.vercel.app/categories')
        .then(data => {
            setCategories(data.data);
            setLoading(false);
        })
    },[])

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
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='my-36'>
            <h1 className='text-3xl md:text-3xl font-semibold text-center text-primary mb-20'>Product <span className='text-red-500'>Categories</span></h1>
            {
                loading ? <Loader></Loader> :
                <div className='px-5 md:px-14 xl:px-32'>
                    {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 */}
                    <Slider {...settings}>
                {
                    categories.map(category => <Category key={category._id} category={category}></Category>)
                }
                </Slider>
            </div>
            }
        </div>
    );
};

export default Categories;