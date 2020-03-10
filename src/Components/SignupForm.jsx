import React, { Component } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  Button,
  Input
} from "@chakra-ui/core";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      account: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = async event => {
    event.preventDefault();
    const signup = await axios.post("/users/sign-up", {
      email: this.state.email,
      account: this.state.account,
      password: this.state.password
    },
      alert('You are registered! Please sign in!'));
    console.log(signup);
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Register</h1>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input value={this.state.text}
            onChange={this.handleInputChange}
            name="email"
            type="email"
            required />
          <FormLabel htmlFor="account">Username</FormLabel>
          <Input value={this.state.text}
            onChange={this.handleInputChange}
            name="account"
            type="account"
            required />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input value={this.state.text}
            onChange={this.handleInputChange}
            type="password"
            name="password"
            required />
          <Button variantColor="teal" type="submit" value="Submit">Submit</Button>
        </FormControl>
      </form>
    );
  }
}
