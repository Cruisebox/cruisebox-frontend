import React from "react";
import './EventDetails.css';
import Navigation from "../navigation/Navigation";
import EventDetailsBody from "../eventDetailsBody/EventDetailsBody";

const EventDetails = () => {
    return(
        <>
            <Navigation />
            <div className='event-details-banner'>
                <div className='banner-text is-flex'>
                    <div className='container is-flex'>
                        <div className='event-details-banner-text-items'>
                            <h1 className='is-z-index-1 is-white'>Dream World Wide In Cruise Box</h1>
                        </div>
                    </div>
                </div>
            </div>
            <EventDetailsBody />
        </>
    )
}

export default EventDetails;