import React, { useState, useEffect } from "react";
import Products from "./Products/Products";
import Nav from "./ShopNavigation/Nav";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./Inventory/inventory";

const Shop = () => {
  //  setting an empty array to populate with our items
  const [products, setProducts] = useState([]);

  // creating the cart as empty object
  const [cart, setCart] = useState([]);

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
  console.log(cart);

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

  // const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  //   try{
  //     const incomingOrder = await commerce.checkout
  //   } catch (error) {

  //   }
  // }

  // loading the products
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <div>
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
            <Checkout cart={cart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Shop;
