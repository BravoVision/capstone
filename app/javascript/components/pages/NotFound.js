import React, { Component } from 'react'
import { Container } from 'reactstrap'
import  eyeLogo  from '../assets/eyeLogo.svg'
import  notFound  from '../assets/404.svg'

class NotFound extends Component {


    componentDidMount(){
        if (!this.props.logged_in){
            window.location.replace('/users/sign_in')
        }
    }

    render() {
        return (
            <>
            <Container>
                <img className="notFoundText" src={notFound} alt="404 Not Found" />
                <br />
                <br />
                <div className="eyes">
                <img src={eyeLogo} alt="404 Not Found" width="50%"/>
                <img src={eyeLogo} alt="404 Not Found" width="50%"/>
                </div>
            </Container>    
            </>
        );
    }
}

export default NotFound;