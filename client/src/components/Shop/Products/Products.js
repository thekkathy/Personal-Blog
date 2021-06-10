import React from "react";
import { Grid, Card } from "@material-ui/core";

import ShopCard from "./ShopCard";
import useStyles from "./ProductStyles";

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
