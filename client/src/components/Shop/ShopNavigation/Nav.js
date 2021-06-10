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
const Nav = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

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
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
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
