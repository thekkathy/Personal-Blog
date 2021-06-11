import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    height: "400px",
    color: "#094B5C",
  },
  outterCard: {
    position: "relative",
    paddingBottom: "10px",
  },
  media: {
    height: "50%",
    paddingTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 5,
    left: "80%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
