import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return(
        <nav className='container nav-bar'>
            <div className='is-flex space-between'>
                <div className='is-z-index-1'>
                    <img className='p2 logo logo-image' src="../../../img/cruisebox.png" alt="" />
                </div>
                <div className='is-flex nav-links is-z-index-1 is-white'>
                    <p className='p2 pointer'>Create Events</p>
                    <p className='p2 pointer'>Login</p>
                    <p className='p2 pointer'>Sign Up</p>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;