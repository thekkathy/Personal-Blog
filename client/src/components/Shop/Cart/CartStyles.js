// styling file for the cart

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    marginTop: "90px",
  },
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "10%",
    color: "#094B5C",
  },
  emptyButton: {
    minWidth: "150px",
    // breakpoints added for smaller devices
    // https://material-ui.com/customization/breakpoints/
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
    textDecoration: "none",
  },
  shopLink: {
    color: "#094B5C",
    textDecoration: "underline",
  },
  cardDetails: {
    display: "flex",
    width: "100%",
    marginTop: "100px",
    marginBottom: "50px",
    justifyContent: "space-between",
    color: "#094B5C",
  },
  returnButton: {
    marginTop: "50px",
    textDecoration: "none",
    color: "white",
  },
}));
