import React, { Component } from "react";
import axios from "axios";
import cookies from 'next-cookies';
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  Button,
  Input
} from "@chakra-ui/core";
// axios.defaults.withCredentials = true;
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  static async getInitialProps(ctx) {
    return {
      account: cookies(ctx).account || "",
      token: cookies(ctx).token || ""
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
    const login = await axios.post("/users/login", {
      email: this.state.email,
      password: this.state.password
    });
    if (!login.data.browser_token) {
      alert("Login Failure! Try Again!")
    } else {
      document.cookie = `account=${login.data.account_name}; path=/`;
      document.cookie = `token=${login.data.browser_token}; path=/`;
      alert("You are logged in!");
    }
    console.log(document.cookie);
    console.log(this.reset);


  };
  render() {
    console.log(this.state);

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <FormControl >
            <FormLabel>Email address</FormLabel>
            <Input value={this.state.email}
              onChange={this.handleInputChange}
              type="email"
              name="email"
              required />
            <FormLabel>Password</FormLabel>
            <Input value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
              name="password"
              required />
            <Button variantColor="teal" type="submit" value="Submit">Submit</Button>
          </FormControl>
        </form>
        {/* <p>Delete cookie: <button onClick={this.reset}>Reset</button></p> */}
      </div>
    );
  }
}
