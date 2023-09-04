import React from 'react';
import AboutUs from './AboutUs';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner';
import BenefitsSection from './BenefitsSection ';
import Categories from './Categories/Categories';
import Contact from './Contact';
import DiscountBanner from './DiscountBanner';
import LaptopTimeline from './LaptopTimeline';
import Review from './Review';
import Starts from './Starts';
import Team from './Team';

const Home = () => {
    return (
        <div className='my-10 overflow-hidden'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Categories></Categories>
            <DiscountBanner></DiscountBanner>
            <LaptopTimeline></LaptopTimeline>
            <Starts></Starts>
            <Review></Review>
            <BenefitsSection></BenefitsSection>
            <AboutUs></AboutUs>
            <Team></Team>
            <Contact></Contact>
        </div>
    );
};

export default Home;