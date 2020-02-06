import React from 'react';
import './LoadEvents.css';
import { Button } from 'reactstrap';

const LoadEvents = () => {
    return(
         <div className='is-flex more-events justify-content-center'>
            <Button className='btn p2'>More Events</Button>{' '}
        </div>
    )
}

export default LoadEvents;