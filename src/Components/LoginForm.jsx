import React, { Component } from "react";
import axios from "axios";
import cookies from 'next-cookies';
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
      alert("Wrong Email or Password, Try Again!")
    } else {
      document.cookie = `account=${login.data.account_name}; path=/`;
      document.cookie = `token=${login.data.browser_token}; path=/`;
      alert("Successfully logged in");
    }
    console.log(document.cookie);

  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
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
