import React, { Component } from "react";
import {
  Container,
  Col,
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
} from "reactstrap";

class AboutUs extends Component {
  render() {
    return (
      <>
        <Container className="aboutUs">
          <h1>About Eventually...</h1>
          <br />
          <h3>Why do today what you can put off until tomorrow?</h3>

          <p className="aboutPara">
            {" "}
            Your new favorite web application, "Eventually...", helps with creating a simple to-do list for your everyday needs.
            <br />
            <br />
            If your ability to remember song lyrics from the 90’s is better than
            your ability to remember why you walked into the kitchen, then this
            is the app for you! Sign up, add your tasks, update them as needed,
            and delete them when you're no longer bothered with doing stuff.
            <br />
            <br />
            Come to the place that helps you keep track of life and handle
            things, eventually…
          </p>
        </Container>

        <Container className="aboutTeam">
          <h1>Meet the Team</h1>
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
                <br />
                <CardBody>
                  <CardTitle tag="h5">Toni Shep</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Project Manager
                  </CardSubtitle>

                  <CardText className="cardText">
                    Grill master and a real good dude. Real tired Marine. Lets see if we can get to
                    Super Saiyan Blue!!
                  </CardText>
                  <a
                    href="https://www.linkedin.com/in/gregory-a-shepherd/"
                    target="_blank"
                  >
                    <Button className="linkedInButton">LinkedIn</Button>
                  </a>
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
                <br />
                <CardBody>
                  <CardTitle tag="h5">Tameka Stevenson</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Product Manager
                  </CardSubtitle>
                  <CardText className="cardText">
                    Skin care expert and better than you at learning code. My #1
                    fave read is Vibrational Medicine.
                  </CardText>
                  <a
                    href="https://www.linkedin.com/in/tameka-stevenson/"
                    target="_blank"
                  >
                    <Button className="linkedInButton">LinkedIn</Button>
                  </a>
                </CardBody>
              </Card>
            </Col>

            <Col sm="8" md="6" lg="6" xl="3">
              <Card className="indexCard">
                <CardImg
                  className="bioImage"
                  alt="Card image cap"
                  src="https://www.looper.com/img/gallery/the-best-time-dwight-schrute-ever-broke-character-on-the-office/intro-1620063081.jpg"
                  top
                  width="100%"
                />
                <br />
                <CardBody>
                  <CardTitle tag="h5">Natalia Diaz</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Tech Lead
                  </CardSubtitle>
                  <CardText className="cardText">
                    Photographer and film lover. Surrounded by plants, excited
                    about a new leaf coming in.
                  </CardText>
                  <a
                    href="https://www.linkedin.com/in/nat-diaz/"
                    target="_blank"
                  >
                    <Button className="linkedInButton">LinkedIn</Button>
                  </a>
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
                <br />
                <CardBody>
                  <CardTitle tag="h5">Zane Prunella</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Design Lead
                  </CardSubtitle>
                  <CardText className="cardText">
                    Canva pro and music producer. Lover of comedy and design. Will watch any movie you recommend. 
                  </CardText>
                  <a
                    href="https://www.linkedin.com/in/zprunella/"
                    target="_blank"
                  >
                    <Button className="linkedInButton">LinkedIn</Button>
                  </a>
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
