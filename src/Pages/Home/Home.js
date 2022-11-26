import React from 'react';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div className='my-20'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Categories></Categories>
        </div>
    );
};

export default Home;