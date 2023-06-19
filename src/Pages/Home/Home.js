import React from 'react';
import AboutUs from './AboutUs';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner';
import Categories from './Categories/Categories';
import Contact from './Contact';
import DiscountBanner from './DiscountBanner';
import Review from './Review';
import Starts from './Starts';
import Team from './Team';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Categories></Categories>
            <DiscountBanner></DiscountBanner>
            <Review></Review>
            <AboutUs></AboutUs>
            <Starts></Starts>
            <Team></Team>
            <Contact></Contact>
        </div>
    );
};

export default Home;