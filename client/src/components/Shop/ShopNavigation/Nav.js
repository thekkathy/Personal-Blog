import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./NavStyles";
import { Link, useLocation } from "react-router-dom";
import { UsersContext } from "../../../context/usersContext";

/**
 * This is the navigation page that returns a nav bar
 * In the nav bar there are options to go to cart and back to shop
 * The nav takes in totalitems passed as a prop in order to display
 * the # of items in cart for the badge
 * @param {obj/prop} totalItems
 * @returns the navigation bar
 */
const Nav = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation(); // use location is used for nav
  const { users } = useContext(UsersContext); // user id for showing dashboard
  const adminUID = process.env.REACT_APP_ADMIN_UID; // key to user

  return (
    <div>
      <AppBar position="static" className={classes.bar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/shop"
            variant="h6"
            className={classes.title}
          >
            Shop
          </Typography>
          <div className={classes.grow} />
          {users && users.uid === adminUID ? (
            <a
              style={{ fontSize: "20px" }}
              href="https://dashboard.chec.io/"
              target="_blank"
              className={classes.title}
            >
              Dashboard
            </a>
          ) : null}
          <div className={classes.grow} />

          {/* not displaying the cart icon inside of the cart */}
          {(location.pathname === "/shop" ||
            location.pathname === "/checkout") && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show items in the cart"
                color="#094B5C"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart style={{ color: "#094B5C" }} />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
