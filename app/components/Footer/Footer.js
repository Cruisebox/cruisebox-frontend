import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

const Footer = () => {
    return(
        <Container className='footer space' fluid>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-700'>Cruise Box</h4>
                        <ul className='footer-font-size'>
                            <li>About Us</li>
                            <li>How It Works</li>
                            <li>Cruise Check-In App</li>
                            <li>FAQs</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className='fw-700'>Event Plans</h4>
                        <ul className='footer-font-size'>
                            <li>Sell Tickets</li>Conference Management Software
                            <li>How to List Your Event for Free</li>
                            <li>Music Venues & Promoters</li>
                            <li>Fun Places To Be</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className='fw-700'>Others</h4>
                        <ul className='footer-font-size'>
                            <li>Help</li>
                            <li>Investors</li>
                            <li>Privacy</li>
                            <li>Cookies</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className='fw-700'>Connect With Us</h4>
                        <ul className='footer-font-size'>
                            <li>Contact Support</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;