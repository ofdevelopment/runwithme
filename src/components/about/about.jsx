import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import '../../styles/about.css';

export default class About extends Component {
    render() {
        return (
            <Fade>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <div className="opaqueBox">
                                <h1>About This Web App</h1>
                                <p className="lead">Over 9 Months.</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Fade>
        )
    }
}