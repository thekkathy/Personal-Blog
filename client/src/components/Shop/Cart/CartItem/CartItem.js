import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./ItemStyles";
const CartItem = ({ item, updateCartQty, removeFromCart }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* view quantity of items, increment or decrement */}
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => updateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => updateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <div style={{ paddingLeft: "120px" }}>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
