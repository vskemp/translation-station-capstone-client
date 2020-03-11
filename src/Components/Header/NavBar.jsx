
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button } from "@chakra-ui/core";
import LoginSignUp from '../Pages/LoginSignUp';
import Home from '../Pages/Home';
import Chatroom from '../Pages/Chatroom';
import React, { Component } from "react";
import axios from "axios";
import cookies from 'next-cookies';
import Phrases from '../Pages/Phrases';
import './navbar.css';


export default class NavBar extends Component {
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
    onClick = async event => {
        event.preventDefault();
        const login = await axios.post("/users/login", {
            email: this.state.email,
            password: this.state.password
        });
        document.cookie = `account=${login.data.account_name}; path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT'`;
        document.cookie = `token=${login.data.browser_token}; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'`;
        alert("You are logged out!");
    }
    render() {
        console.log(this.state);
        return (
            <Router>
                <div className="NavLinks">
                    <nav>
                        <div className="home">
                            <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                        </div>
                        <div className="login">
                            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
                        </div>
                        <div className="phrases">
                            <Link to="/phrases" style={{ color: "white", textDecoration: "none" }}>Phrases</Link>
                        </div>
                        <div className="chatroom">
                            <Link to="/chatroom" style={{ color: "white", textDecoration: "none" }}>Chatroom</Link>
                        </div>
                        <Button variantColor="red" onClick={this.onClick}>Logout</Button>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/chatroom">
                            <Chatroom />
                        </Route>
                        <Route path="/login">
                            <LoginSignUp />
                        </Route>
                        <Route path="/phrases">
                            <Phrases />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>

                </div>
            </Router >
        );
    }
}
