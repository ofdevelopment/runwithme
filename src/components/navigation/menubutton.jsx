import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import LoginForm from './loginform';
import '../../styles/menubutton.css';

export default class MenuButton extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            show: false
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState({ show: !this.state.show });
      }

    render() {
        return (
            <div className="menubutton-wrapper">
                <Pulse wait={1000} delay={1000}>
                    <div className="circleButton" onClick={this.handleClick}>
                        <Image src="assets/link-icon.svg" className="circleButtonImage" />
                    </div>
                </Pulse>

                <div className="circleDropdownMenuContainer">
                    <Fade duration={250} collapse when={this.state.show}>
                        <div className="circleDropdownMenu">
                            {this.props.authenticated
                                ? (
                                    <div>
                                        <h3 className="circleDropdownTitle" >Hello USERNAME</h3>
                                    </div>
                                )
                                : (
                                    <div>
                                        <h3 className="circleDropdownTitle" >Hello Stranger</h3>
                                        <LoginForm />
                                    </div>
                                )
                            }
                            <hr />
                            <Link className="btn btn-primary btn-sm btn-block" href="/" to="/" >Home</Link>
                            <Link className="btn btn-primary btn-sm btn-block" href="/" to="/about" >About</Link>
                            <Link className="btn btn-primary btn-sm btn-block" href="/" to="/contact" >Contact</Link>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}