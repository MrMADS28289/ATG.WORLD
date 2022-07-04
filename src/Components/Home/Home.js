import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Posts from './Posts';
import NavBar from '../Shared/NavBar';

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <Header />
            <Posts />
        </>
    );
};

export default Home;