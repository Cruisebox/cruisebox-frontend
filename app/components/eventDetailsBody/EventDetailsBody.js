import React from 'react';
import Footer from "../footer/Footer";
import { Container, Row, Col } from 'reactstrap';
import './EventDetailsBody.css';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

const EventDetailsBody = () => {
    return(
        <>
            <Container className='space'>
                <Row>
                    <Col xs="6">
                        <div className=''>
                            <h2>Description</h2>
                            <p className='p2-top-bottom'>
                                In order to be effective and to gain the best results, all training should be based aroundpositive rewards. Positive reward training works because if you reward your dog withsomething he wants as soon as he does what you ask, he is far more likely to do it again.Rewards can be anything that your dog or puppy really wants and could include; food treats, afavourite toy, playing a certain game or getting a pat.
                            </p>

                            <p className='p2-bottom'>
                                In order to be effective and to gain the best results, all training should be based aroundpositive rewards. Positive reward training works because if you reward your dog withsomething he wants as soon as he does what you ask, he is far more likely to do it again.
                            </p>
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className='p2-bottom'>
                            <h2 className='p2-bottom'>Date And Time</h2>
                            <p>Day - Friday 14th 2020, Sunday 16th 2020</p>
                            <p>Time - 9:00 PM, 7:30PM</p>
                        </div>
                        <div className='p2-bottom'>
                            <h2 className='p2-bottom'>Location</h2>
                            <div className='map-wrapper p2-bottom'>
                                <img src="../../../img/placeholder-400x400.png" alt="" className='map' />
                            </div>
                            <p>3, Wegbo Street, Off-Iwaya Road, Onike, Yaba, Lagos.</p>
                        </div>
                        <div className='contact-social-links'>
                            <h2 className='padding-bottom'>Share With Friends</h2>
                            <div className='is-flex'>
                                <div className='social social-icons-facebook'>
                                    <FaFacebookF className='social-icons' />
                                </div>
                                <div className='social social-icons-google'>
                                    <FaGoogle className='social-icons' />
                                </div>
                                <div className='social social-icons-linkedin'>
                                    <FaLinkedinIn className='social-icons' />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default EventDetailsBody;