import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';
import '../../styles/statcard.css';
import { FlexyFlipCard } from 'flexy-flipcards';
import fire from '../../config/firebase';
import moment from 'moment';

export default class StatCard extends Component {
    constructor() {
        super();
        this.state = {
          statNodes: []
        }
    }

    componentWillMount() {
        const itemsRef = fire.database().ref('stats').orderByChild('createdDate').limitToLast(1);
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              createdDate: items[item].createdDate,
              totalDistanceRan: items[item].totalDistanceRan,
              totalWeightLost: items[item].totalWeightLost,
              monthDistanceRan: items[item].monthDistanceRan,
              monthWeightLost: items[item].monthWeightLost
            });
          }
          this.setState({
            statNodes: newState
          });
        });
    }

    updateUserStatData(event) {
        event.preventDefault()

        const statsRef = fire.database().ref('stats');
        const item = {
            userID: 1234,
            createdDate: Date.now(),
            totalDistanceRan: this.totalDistanceRanInput.value,
            totalWeightLost: this.totalWeightLostInput.value,
            monthDistanceRan: this.monthDistanceRanInput.value,
            monthWeightLost: this.monthWeightLostInput.value
        }
        statsRef.push(item);

        console.log("updated user stat data")
        console.table([{
            totalDistanceRan: this.totalDistanceRanInput.value,
            totalWeightLost: this.totalWeightLostInput.value,
            monthDistanceRan: this.monthDistanceRanInput.value,
            monthWeightLost: this.monthWeightLostInput.value
        }])
    }

    render() {
        return (
            <div className="statcard-wrapper">
                <FlexyFlipCard frontBackgroundColor="transparent" backBackgroundColor="transparent">
                    <div className="statcard-container">
                        <div className="statcard front">
                            <h1>Josh's Stats</h1>
                            {this.state.statNodes.map((item) => {
                                return (
                                    <p className="small updatedDate" key={item.id}>Last Updated {moment(item.createdDate).fromNow()}</p>
                                )
                            })} 

                            <Grid fluid>
                                <Row>
                                    <Col md={5}>
                                        <h2>TOTAL OVERALL</h2>
                                        <p className="lead">Since USER-CREATION-DATE</p>         
                                    </Col>

                                    <Col md={7}>
                                        <h3>Distance Ran</h3>
                                        {this.state.statNodes.map((item) => {
                                            return (
                                                <p className="lead" key={item.id}>{item.totalDistanceRan}</p>
                                            )
                                        })}

                                        <h3>Weight Lost</h3>
                                        {this.state.statNodes.map((item) => {
                                            return (
                                                <p className="lead" key={item.id}>{item.totalWeightLost}</p>
                                            )
                                        })}
                                    </Col>
                                </Row>
                            </Grid>

                            <hr />

                            <Grid fluid>
                                <Row>
                                    <Col md={5}>
                                        <h2>THIS MONTH</h2>
                                        <p className="lead">Month of {moment().format("MMM")}</p>
                                    </Col>

                                    <Col md={7}>
                                        <h3>Distance Ran</h3>
                                        {this.state.statNodes.map((item) => {
                                            return (
                                                <p className="lead" key={item.id}>{item.monthDistanceRan}</p>
                                            )
                                        })}

                                        <h3>Weight Lost</h3>
                                        {this.state.statNodes.map((item) => {
                                            return (
                                                <p className="lead" key={item.id}>{item.monthWeightLost}</p>
                                            )
                                        })}

                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                        <Button className="statcard-button" bsStyle="primary" ref='flipper'>Edit</Button>
                    </div>
                    <div className="statcard-container">
                        <div className="statcard back">
                            <h1>Edit Stats</h1>

                            <Form id="userStatDataForm" onSubmit={(event) => { this.updateUserStatData(event) }} ref={(form) => { this.statcard = form }}>

                                <Grid fluid>
                                    <Row>
                                        <Col md={5}>
                                            <h2>TOTAL OVERALL</h2>
                                            <p className="lead">Since USER-CREATION-DATE</p> 
                                        </Col>

                                        <Col md={7}>
                                            <h3>Distance Ran</h3>
                                            <FormGroup>
                                                <FormControl name="totalDistanceRanInput" type="text" inputRef={(input) => { this.totalDistanceRanInput = input }} autoComplete="nope" placeholder="42 miles" />
                                            </FormGroup>

                                            <h3>Weight Lost</h3>
                                            <FormGroup>
                                                <FormControl name="totalWeightLostInput" type="text" inputRef={(input) => { this.totalWeightLostInput = input }} autoComplete="nope" placeholder="42 lbs" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Grid>

                                <hr />

                                <Grid fluid>
                                    <Row>
                                        <Col md={5}>
                                            <h2>THIS MONTH</h2>
                                            <p className="lead">Month of {moment().format("MMM")}</p>
                                        </Col>

                                        <Col md={7}>
                                            <h3>Distance Ran</h3>
                                            <FormGroup>
                                                <FormControl name="monthDistanceRanInput" type="text" inputRef={(input) => { this.monthDistanceRanInput = input }} autoComplete="nope" placeholder="10 miles" />
                                            </FormGroup>

                                            <h3>Weight Lost</h3>
                                            <FormGroup>
                                                <FormControl name="monthWeightLostInput" type="text" inputRef={(input) => { this.monthWeightLostInput = input }} autoComplete="nope" placeholder="5 lbs" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Form>
                        </div>
                        <Button className="statcard-button" type="submit" bsStyle="success" form="userStatDataForm" ref='flipper'>Save</Button>
                    </div>
                </FlexyFlipCard>
            </div>
        )
    }
}