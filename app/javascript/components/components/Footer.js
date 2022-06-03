import React, { Component } from "react";
import { Container } from "reactstrap";
// import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <p id="footerText">
            &copy; Eventually... Brought to you by
            <a href="https://github.com/BravoVision"> BravoVision 2022</a>
          </p>
        </div>
      </>
    );
  }
}

export default Footer;
