import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './ExplorePage.css';

const ExplorePage = () => {
    return(
        <Container className='space'>
            <h2 className='padding-bottom explore-title'>Explore Cruisebox Vibe</h2>
            <Row className='h-10'>
                <Col>
                    <Row className='h-100'>
                        <Col>
                            <div className='explore pointer explore-content'>
                                <div className='is-flex w-100'>
                                    <Col sm="4">
                                        <div className='explore-img-container'>
                                            <img className='explore-img' src="../../../img/explore-events.jpg" alt=""/>
                                        </div>
                                    </Col>
                                    <Col sm="8" className='align-self-center'>Music Events</Col>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col xs="6">
                    <Row className='h-100'>
                        <Col>
                            <div className='explore pointer explore-content'>
                                <div className='is-flex w-100'>
                                    <Col sm="4">
                                        <div className='explore-img-container'>
                                            <img className='explore-img' src="../../../img/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545.jpg" alt=""/>
                                        </div>
                                    </Col>
                                    <Col sm="8" className='align-self-center'>Restuarants</Col>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ExplorePage;