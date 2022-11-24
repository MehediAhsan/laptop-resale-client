import React from 'react';
import Banner from './Banner';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div className='my-20'>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;