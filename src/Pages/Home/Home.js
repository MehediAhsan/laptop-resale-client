import React from 'react';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner';
import Categories from './Categories/Categories';
import DiscountBanner from './DiscountBanner';
import Faq from './Faq';

const Home = () => {
    return (
        <div className='my-20'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Categories></Categories>
            <DiscountBanner></DiscountBanner>
            <Faq></Faq>
        </div>
    );
};

export default Home;