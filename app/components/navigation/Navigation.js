import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return(
        <nav className='nav-bar'>
            <div className='is-flex space-between'>
                <div className='is-z-index-1'>
                    <Link className='style-link' to='/'>
                        <img className='p2 logo logo-image' src="../../../img/cruisebox.png" alt="" />
                    </Link>
                </div>
                <div className='is-flex nav-links is-z-index-1'>
                    <p className='p2 pointer'>Create Events</p>
                    <p className='p2 pointer'>
                        <Link className='style-link is-black' to='/login'>Login</Link>
                    </p>
                    <p className='p2 pointer'>
                        <Link className='style-link is-black' to='/signup'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;