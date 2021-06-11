import React from "react";
import { Grid, Card } from "@material-ui/core";

import ShopCard from "./ShopCard";
import useStyles from "./ProductStyles";

/**
 * the products class returns a grid of the shop cards
 * it displays a "loading shop" until the products are fetched
 * the onHandleAdd prop is fetched and then passed into the shopcard
 * prop in order to have add to cart functionality.
 * @param {obj/probs} ( products onHandleAdd )
 * @returns
 */
const Products = ({ products, onHandleAdd }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
            <ShopCard product={product} onHandleAdd={onHandleAdd} />
          </Grid>
        ))}
      </Grid>
      {products.length === 0 && (
        <Card variant="outlined" margin="5%">
          Loading Shop...
        </Card>
      )}
    </div>
  );
};

export default Products;
