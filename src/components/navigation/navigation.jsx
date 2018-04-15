import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LightSpeed from 'react-reveal/LightSpeed';
import '../../styles/navigation.css';
import MenuButton from './menubutton'


export default class Navigation extends Component {
    render() {
        return (
            <Navbar staticTop>
                <Navbar.Brand>
                    <LightSpeed left>
                        <div className="logo-wrapper">
                            <Link to="/">
                                <h1 className="logo">Run With Me</h1>
                            </Link>
                        </div>
                    </LightSpeed>
                </Navbar.Brand>
                <MenuButton />
            </Navbar>
        )
    }
}