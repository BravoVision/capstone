import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'reactstrap'
import phone_image from '../assets/phone.jpg'
import logo from '../assets/Logo.png'


class Home extends Component {
    render() {
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
        } = this.props
        return (
            <>
                <Container>
                    <Row>
                        <Col md="8">

                            
                                <img src={logo} alt="Eventually" />
                            

                            <h3>Your personal online to-do list.</h3>
                            <h4>A Place to keep track of life, and handle things... eventually.</h4>

                            <br />

                            <a href={sign_in_route} className="nav-link">
                                <Button color="primary">
                                    Sign In
                                </Button>
                            </a>

                            <a href={new_user_route} className="nav-link">
                                <Button color="primary">
                                    Sign Up
                                </Button>
                            </a>
                        </Col>

                        <Col md="8">
                            <img src={phone_image} id="home-phone" alt="Phone on Desk" />
                        </Col>
                    </Row>

                </Container>

            </>
        );
    }
}

export default Home;