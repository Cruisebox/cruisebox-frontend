import React from 'react';
import Navigation from '../Navigation/Navigation';
import './HomePage.css';

const HomePage = () => {
    return(
        <div className='is-relative'>
            <Navigation />
            <div className='home-image-container'>
                <img src={"../../img/homepage.jpg"} alt="home-image" className='homepage-image'/>
            </div>
            <div className='container home-title is-flex'>
                <h1 className='is-z-index-1 is-white'>Taking you closer</h1>
            </div>
        </div>
    )
}

export default HomePage;