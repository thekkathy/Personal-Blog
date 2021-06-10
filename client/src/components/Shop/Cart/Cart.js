import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./CartStyles";
import CartItem from "./CartItem/CartItem";
import { commerce } from "../Inventory/inventory";
import { Link } from "react-router-dom";
const Cart = () => {
  // creating the cart as empty object
  const [cart, setCart] = useState([]);

  // fetching what is inside of the cart
  const fetchCart = async () => {
    // const cart = await commerce.cart.retrieve();
    // setCart(cart);

    // instead of code above since its redundant
    setCart(await commerce.cart.retrieve());
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId, quantity) => {
    const response = await commerce.cart.remove(productId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const classes = useStyles();
  // determining if cart is empty, display content based on bool
  if (!cart.line_items) return "Loading Cart...";

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      No items in cart,{" "}
      <Link className={classes.shopLink} to="/shop">
        go back to shop
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <div>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              updateCartQty={handleUpdateCartQty}
              removeFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <Container className={classes.mainContainer}>
      <Typography className={classes.title} variant="h3" gutterBottom>
        Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
