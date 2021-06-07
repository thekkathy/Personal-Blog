import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Shop from './Shop';
import UserPage from './UserPage';


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
                    <Route path="/" exact component={Home}>
                    </Route>
                    <Route path="/about" exact component={About}>
                    </Route>
                    <Route path="/blog" exact component={Blog}>
                    </Route>
                    <Route path="/shop" exact component={Shop}>
                    </Route>
                    <Route path="/user/:id" exact component={UserPage}>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Navigation;
