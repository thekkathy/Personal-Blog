import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import ProfilePage from "./auth/ProfilePage";
import PasswordReset from "./auth/PasswordReset.js";

const Navigation = () => {

    return (
        <div>
            <Router>
                {/* NAVBAR */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">
                        WEBSITE
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">
                                    Shop
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* ROUTING */}
                <Switch>
                    <Route path="/about">
                        {
                            //Change to component, student page
                        }
                    </Route>
                    <Route path="/blog">
                        {
                            //Change to component, student page
                        }
                    </Route>
                    <Route path="/shop">
                        {
                            //Change to component, student page
                        }
                    </Route>
                    <Route path="/SignUp">
                        {
                            SignUp
                        }
                    </Route>
                    <Route path="/SignIn">
                        {
                            SignIn
                        }
                    </Route>
                    <Route path="/PasswordReset">
                        {
                            PasswordReset
                        }
                    </Route>
                    <Route path="/ProfilePage">
                        {
                            ProfilePage
                        }
                    </Route>
                    <Route path="/">
                        {
                            //Change to component, student page
                        }
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Navigation;
