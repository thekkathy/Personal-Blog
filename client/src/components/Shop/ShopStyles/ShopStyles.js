import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    height: "400px",
  },
  media: {
    height: "50%",
    paddingTop: "56.25%",
  },
  cardActions: {
    justifyContent: "flex-end",
    bottom: 0,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
