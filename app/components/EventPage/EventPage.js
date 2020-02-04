import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './EventPage.css';

const EventPage = () => {
    return(
        <Container className='space'>
            <div>
                <h2 className='padding-bottom explore-title'>Upcoming Events</h2>
            </div>
            <Row>
                <Col className='pb-2 pointer'>
                    <Card className='card-border-radius'>
                        <CardImg className='img-border-top' top width="100%" src="../../../img/explore-events.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='pb-2 pointer'>
                    <Card className='card-border-radius'>
                        <CardImg className='img-border-top' top width="100%" src="../../../img/explore-events.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='pb-2 pointer'>
                    <Card className='card-border-radius'>
                        <CardImg className='img-border-top' top width="100%" src="../../../img/explore-events.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='pb-2 pointer'>
                    <Card className='card-border-radius'>
                        <CardImg className='img-border-top' top width="100%" src="../../../img/explore-events.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
            <Row>
                <Col className='pb-2 pointer'>
                    <Card className='card-border-radius'>
                        <CardImg className='img-border-top' top width="100%" src="../../../img/explore-events.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='pb-2 pointer'>
                    <Card className='card-border-radius'>
                        <CardImg className='img-border-top' top width="100%" src="../../../img/explore-events.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='pb-2 pointer'>
                    <Card className='card-border-radius'>
                        <CardImg className='img-border-top' top width="100%" src="../../../img/explore-events.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className='pb-2 pointer'>
                    <Card className='card-border-radius'>
                        <CardImg className='img-border-top' top width="100%" src="../../../img/explore-events.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default EventPage;