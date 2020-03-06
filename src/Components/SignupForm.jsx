import React, { Component } from "react";
import axios from "axios";

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
    const signup = await axios.post("http://localhost:5252/users/sign-up", {
      email: this.state.email,
      account: this.state.account,
      password: this.state.password
    });
    console.log(signup);
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Register</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="account"
          name="account"
          placeholder="Enter username"
          value={this.state.text}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
