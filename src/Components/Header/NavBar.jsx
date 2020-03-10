import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginSignUp from '../Pages/LoginSignUp';
import Home from '../Pages/Home';
import Chatroom from '../Pages/Chatroom';
import Logout from '../Pages/Logout';
import './navbar.css';


export default function NavBar() {
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
                    <div className="chatroom">
                        <Link to="/chatroom" style={{ color: "white", textDecoration: "none" }}>Chatroom</Link>
                    </div>
                    <div className="logout">
                        <Link to="/logout" style={{ color: "white", textDecoration: "none" }}>Logout</Link>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                                        renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/chatroom">
                        <Chatroom />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route>
                    <Route path="/login">
                        <LoginSignUp />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/chatroom">
                        <Chatroom />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route>
                </Switch>
            </div>
        </Router >
    );
}
