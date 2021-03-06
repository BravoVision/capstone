import React, { Component } from "react";
import eyeLogo from "../assets/eyeLogo.svg";
import { NavLink } from "react-router-dom";
import { Col, Nav, Navbar, NavbarBrand, NavItem, Row } from "reactstrap";

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    const homeLink = logged_in ? "/task_index" : "/";

    return (
      <>
        <div className="header">
          <Navbar expand="md">
            <Col>
              <NavLink to={homeLink}>
                <img id="eyeLogo" src={eyeLogo} alt="home link" />
              </NavLink>
            </Col>

            <Nav className="me-auto" navbar>
              <div className="headerLinks">
                <NavItem>
                  <NavLink to="/about_us">ABOUT US</NavLink>
                </NavItem>

                {logged_in && (
                  <NavItem>
                    <a href={sign_out_route} className="nav-link">
                      SIGN OUT
                    </a>
                  </NavItem>
                )}
              </div>
            </Nav>
          </Navbar>
        </div>
      </>
    );
  }
}

export default Header;
