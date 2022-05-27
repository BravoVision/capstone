import React, { Component } from 'react'
import home_image from '../assets/home.png'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

class Header extends Component {
    render() {

        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
        } = this.props


        const homeLink = logged_in ? '/task_index' : '/'

        return (
            <>
                <Container>
                    <Navbar
                        color="light"
                        expand="md"
                        light
                    >
                        <NavbarBrand href={homeLink}>
                            Eventually...
                        </NavbarBrand>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink href="/about_us">
                                    ABOUT US
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                    <NavLink href={homeLink}>
                                        <img src={home_image} alt="home link" />
                                    </NavLink>
                            </NavItem>

                            {logged_in &&
                                <NavItem>
                                    <a href={sign_out_route} className="nav-link">Sign Out</a>
                                </NavItem>
                            }
                        </Nav>

                    </Navbar>
                </Container>
            </>
        );
    }
}

export default Header;