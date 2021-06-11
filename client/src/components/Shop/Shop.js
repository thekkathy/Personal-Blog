import React, { useState, useEffect } from "react";
import Products from "./Products/Products";
import Nav from "./ShopNavigation/Nav";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./Inventory/inventory";
import { CssBaseline } from "@material-ui/core";

/**
 * This is the shop file. The shop file gets products from the commerce api
 * and returns them to build a shop with functions to add to cart.
 * All of the functions use commerce api calls and docs
 *
 * commerce js has sick documentation and examples
 * https://commercejs.com/docs/guides/products-react#requirements
 *
 * @returns The entire view of the shop with rows of items
 */
const Shop = () => {
  //  setting an empty array to populate with our items
  const [products, setProducts] = useState([]);

  // creating the cart as empty object
  const [cart, setCart] = useState([]);

  // setting the state of a customer order
  const [order, setOrder] = useState({});

  // making a more refined error message
  const [errorMessage, setErrorMessage] = useState("");

  // fetching the inventory of products from the back end
  const fetchProducts = async () => {
    // awaiting a specific api call to our commerce instance,
    // destructuring the data to be our response
    const { data } = await commerce.products.list();
    // populating products
    setProducts(data);
  };

  // fetching what is inside of the cart
  const fetchCart = async () => {
    // const cart = await commerce.cart.retrieve();
    // setCart(cart);

    // instead of code above since its redundant
    setCart(await commerce.cart.retrieve());
  };

  //adding items to cart
  const addToCart = async (productId, quantity) => {
    // adding product and amount of product
    const item = await commerce.cart.add(productId, quantity);
    // setting our cart to include the added product(s)
    setCart(item.cart);
  };
  //console.log(cart);

  // this function follows the add to cart and updates the
  // number of items in the cart
  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
  };

  // this function handles removing an item from the cart
  const handleRemoveFromCart = async (productId, quantity) => {
    const response = await commerce.cart.remove(productId);

    setCart(response.cart);
  };

  // this function doesnt handle when a cart is empty,
  // it handles the ~clearing~ of a cart i.e
  // it removes all the items
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };
  // this is to refresh and reset the cart once we complete an order
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };
  // handle the checkout once at the final step
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder); // set the order state to the current order
      refreshCart(); // refresh the cart once completed
    } catch (error) {
      setErrorMessage(error.data.error.message); // only meaningful info when error occurs...
    }
  };

  // loading the products
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <div>
      <CssBaseline />
      <Router>
        <Nav totalItems={cart.total_items} />
        <div />
        <Switch>
          <Route path="/shop">
            <div style={{ width: "98%", paddingLeft: "30px" }}>
              {/* also passing the add to cart prop */}
              <Products products={products} onHandleAdd={addToCart} />
            </div>
          </Route>

          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Shop;
