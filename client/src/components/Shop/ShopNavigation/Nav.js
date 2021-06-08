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
const Nav = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.bar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button} />
          <IconButton aria-label="show items in the cart" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
