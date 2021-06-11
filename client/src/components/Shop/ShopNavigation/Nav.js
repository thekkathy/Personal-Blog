import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./NavStyles";
import { Link, useLocation } from "react-router-dom";

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
