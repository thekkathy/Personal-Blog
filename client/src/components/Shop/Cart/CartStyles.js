import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    marginTop: "90px",
  },
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "10%",
  },
  emptyButton: {
    minWidth: "150px",
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
  },
  cardDetails: {
    display: "flex",
    width: "100%",
    marginTop: "100px",
    marginBottom: "50px",
    justifyContent: "space-between",
  },
  returnButton: {
    marginTop: "50px",
    textDecoration: "none",
    color: "white",
  },
}));
