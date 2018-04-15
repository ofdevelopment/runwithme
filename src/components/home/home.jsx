import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import '../../styles/home.css';
import StatCard from './statcard';

export default class Home extends Component {
    render() {
        return (
            <Fade>
                <Grid>
                    <Row>
                        <Col sm={6}>
                            <StatCard />
                        </Col>
                        <Col sm={6}>
                            <p>Put some kind of run cycle here</p>
                        </Col>
                    </Row>
                </Grid>
            </Fade>
        )
    }
}