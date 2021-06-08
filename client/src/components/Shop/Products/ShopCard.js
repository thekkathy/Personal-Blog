import React from "react";
//import Card from "../Card";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "../ShopStyles/ShopStyles";
import dompurify from "dompurify";

/**
 * creates a card that will store an item.
 * each product item is mapped to its own card, and will be styled uniformly
 * @param {object} product
 * @returns each product as its own card
 */
const ShopCard = ({ product }) => {
  const classes = useStyles();
  // using to avoid XSS attacks because of latter use of innerHTML
  const sanitizer = dompurify.sanitize;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        {/* using InnerHTML here to remove the html tags from prod. description, sanitzing
        to ensure no XSS attacks because of this  */}
        <Typography
          dangerouslySetInnerHTML={{ __html: sanitizer(product.description) }}
          variant="body2"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ShopCard;
