import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./auth/SignIn";
import ProfilePage from "./auth/ProfilePage";

import Home from "./Home/Home";
import About from "./About";
import Blog from "./Blog/Blog";
import Shop from "./Shop/Shop";
import UserPage from "./UserPage/UserPage";

import Card from "./Card";
import Cart from "./Shop/Cart/Cart";
const Navigation = () => {
  return (
    <div>
      <Router>
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Camille's Corner
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
          <Route path="/SignIn">{SignIn}</Route>
          <Route path="/ProfilePage">{ProfilePage}</Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/blog" exact component={Blog}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/cart" exact component={Cart}></Route>

          <Route path="/user/:id" exact component={UserPage}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/card" exact component={Card}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Navigation;
