import React, { Component } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import phone_image from "../assets/phone.jpg";
import logo from "../assets/Logo.png";

class Home extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <>
        <Container className="homeContainer">
          <Row>
            <Col md="5">
              <h1 id="eventuallyHeader">Eventually... </h1>
              <br />
              <br />

              <div className="homeText">
                <h3>Your personal online to-do list.</h3>
                <h4 id="homeSubText">
                  A Place to keep track of life, and handle things...
                  eventually.
                </h4>
              </div>

              <br />

              <div className="btnDiv">
                <a href={sign_in_route}>
                  <Button className="button">
                    Sign In
                  </Button>
                </a>

                <a href={new_user_route}>
                  <Button className="button">
                    Sign Up
                  </Button>
                </a>
              </div>
            </Col>

            <Col md="7">
              <img src={phone_image} id="home-phone" alt="Phone on Desk" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
