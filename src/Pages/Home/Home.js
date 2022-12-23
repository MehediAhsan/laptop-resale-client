import React from 'react';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner';
import Categories from './Categories/Categories';
import Contact from './Contact';
import DiscountBanner from './DiscountBanner';
import Faq from './Faq';
import Review from './Review';

const Home = () => {
    return (
        <div className='my-20'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Categories></Categories>
            <DiscountBanner></DiscountBanner>
            <Review></Review>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;