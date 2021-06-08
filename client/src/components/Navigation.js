import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Access from "./auth/Access";
import ProfilePage from "./auth/ProfilePage";

import Home from "./Home/Home";
import About from "./About";
import Blog from "./Blog/Blog";
import BlogPost from "./Blog/BlogPost";
import Shop from "./Shop/Shop";

import Card from "./Card";
import Post from "./Post";

import { UsersContext } from "../context/usersContext";
import { useContext } from "react";
import PostInput from "./Blog/PostInput";

const Navigation = () => {
  const { users, setUsers } = useContext(UsersContext);

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
              <li className="nav-item">
                <Link className="nav-link" to="/Access">
                  {users === null ? "Sign In" : "Profile"}
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* ROUTING */}
        <Switch>
          <Route path="/Access" exact component={Access}></Route>
          <Route path="/ProfilePage" exact component={ProfilePage}></Route>
          <Route path="/user-likes" exact component={UserLikes}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/blog" exact component={Blog}></Route>
          <Route path="/blog/:id" exact component={BlogPost}></Route>
          <Route path="/blog/add/new_post" exact render={() => <PostInput isEdit={false}/>}></Route>
          <Route path="/blog/edit/:id" exact render={(props) => <PostInput isEdit={true} {...props} />}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/card" exact component={Card}></Route>
          <Route path="/post" exact component={Post}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Navigation;