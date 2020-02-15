import React from 'react';
import Navigation from '../navigation/Navigation';
import './HomePage.css';

const HomePage = () => {
    return(
        <>
            <Navigation />
            <div className='banner'> 
                <div className='banner-text is-flex'>
                    <div className='container banner-text-items'>
                        <h1 className='is-z-index-1 is-white'>Made For Those Who Do</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;