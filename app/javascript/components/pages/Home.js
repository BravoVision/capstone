import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'reactstrap'
import phone_image from '../assets/phone.jpg'
import logo from '../assets/Logo.png'
class Home extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>

                            <h1>
                                <img src={logo} alt="Eventually" />
                            </h1>

                            <h3>Your personal online to-do list.</h3>
                            <h4>A Place to keep track of life, and handle things... eventually.</h4>
                           
                            <br />
                           
                                <Button
                                    color="primary"
                                >
                                    Sign Up
                                </Button>
                                
                                <Button
                                    color="primary"
                                >
                                    Sign In
                                </Button>
                        </Col>

                        <Col>
                            <img src={phone_image} alt="Phone on Desk" />
                        </Col>
                    </Row>

                </Container>

            </>
        );
    }
}

export default Home;