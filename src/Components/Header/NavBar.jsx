import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginSignUp from '../Pages/LoginSignUp';
import Phrases from '../Pages/Phrases';
import Home from '../Pages/Home';

export default function NavBar() {
    return (
        <Router>
            <div className="NavLinks">
                <nav>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                    <div>
                        <Link to="/phrases">Saved</Link>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login">
                        <LoginSignUp />
                        {/* <LoginSignup /> */}
                    </Route>
                    <Route path="/phrases">
                        <Phrases />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
