import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import '../../styles/loginform.css';
// import firebase from '../../config/firebase';

export default class LoginForm extends Component {
  
    authWithEmailPassword(event) {
      event.preventDefault()
      
      console.log("authed with email")
      console.table([{
        email: this.emailInput.value,
        password: this.passwordInput.value
      }])
    }
  
    render() {
      return (
        <Form onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form }}>
          <FormGroup>
            <FormControl name="email" type="email" inputRef={(input) => { this.emailInput = input }} autoComplete="nope" placeholder="Email"></FormControl>
          </FormGroup>
          
          <FormGroup>
            <FormControl name="password" type="password" inputRef={(input) => { this.passwordInput = input }} autoComplete="nope" placeholder="Password"></FormControl>
          </FormGroup>

          <Button type="submit" bsStyle="success" block>Login/Register</Button>
        </Form>
      );
    }
  }