import React, { Component } from 'react'
import { Container, Col, CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, CardText } from 'reactstrap'

class AboutUs extends Component {

    render() {
        return (
            <>
                <Container className= "aboutUs">
                    
                    <h1>About Eventually...</h1>
                    <h3>Why do today what you can put off until tomorrow?</h3>
                        
                    <p> Navigate over to “Eventually” and take a look at your new favorite web application that helps with creating a simple to-do list for your everyday needs. No need to feel overwhelmed about remembering to do research for that 12-page paper due in 2 days, and no more forgetting to feed the dog (maybe?!). 
                    <br />
                    <br />
                    Sign up for “Eventually”, add your tasks, update them as needed, check them off or delete them when you’re done… done being bothered with doing the things.Come to the place that helps you keep track of life and handle things, eventually…
                    </p>

                </Container>

                <Container>
                    <h1>About the Eventually team...</h1>
                    <br />
                    <CardGroup>

                    <Col sm="8" md="6" lg="6" xl="3">
                        <Card className="indexCard">
                            <CardImg
                                className="bioImage"
                                alt="Card image cap"
                                src="https://www.looper.com/img/gallery/the-offices-michael-scott-was-almost-a-murderer/intro-1591207215.jpg"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Toni Shep
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Project Manager
                                </CardSubtitle>
                                <CardText>
                                    Grill master and a real good dude.                                
                                </CardText>
                                <Button>
                                    LinkedIn
                                </Button>
                            </CardBody>
                        </Card>
                        </Col>

                        <Col sm="8" md="6" lg="6" xl="3">
                        <Card className="indexCard">
                            <CardImg
                                className="bioImage"
                                alt="Card image cap"
                                src="https://pbs.twimg.com/media/ELJA86iU0AAQ6HD.jpg"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Tameka Stevenson
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Product Manager
                                </CardSubtitle>
                                <CardText>
                                    Skin care expert and better than you at learning code.
                                </CardText>
                                <Button>
                                    LinkedIn
                                </Button>
                            </CardBody>
                        </Card>
                        </Col>

                        <Col sm="8" md="6" lg="6" xl="3">
                        <Card className="indexCard">
                            <CardImg
                                className="bioImage"
                                alt="Card image cap"
                                src="https://images.squarespace-cdn.com/content/v1/59da5d13cf81e005db71d925/1513171418491-XQGKXDDIZ8JDUWK33RJC/dwight.jpg?format=1500w"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Natalia Diaz
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Tech Lead
                                </CardSubtitle>
                                <CardText>
                                    Photographer and film lover. 
                                </CardText>
                                <Button>
                                    LinkedIn
                                </Button>
                            </CardBody>
                        </Card>
                        </Col>

                        <Col sm="8" md="6" lg="6" xl="3">
                        <Card className="indexCard">
                            <CardImg
                                className="bioImage"
                                alt="Card image cap"
                                src="https://www.looper.com/img/gallery/the-best-time-creed-bratton-ever-broke-character-on-the-office/intro-1620093454.jpg"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Zane Prunella
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Design Lead
                                </CardSubtitle>
                                <CardText>
                                    Canva Pro pro and music producer guy.
                                </CardText>
                                <Button>
                                    LinkedIn
                                </Button>
                            </CardBody>
                        </Card>
                        </Col>

                    </CardGroup>
                </Container>
            </>
        );
    }
}

export default AboutUs;