import React, { useState, useEffect } from "react";
import Products from "./Products/Products";
import Nav from "./ShopNavigation/Nav";
import { commerce } from "./Inventory/inventory";
const Shop = () => {
  //  setting an empty array to populate with our items
  const [products, setProducts] = useState([]);

  // fetching the inventory of products from the back end
  const fetchProducts = async () => {
    // awaiting a specific api call to our commerce instance,
    // destructuring the data to be our response
    const { data } = await commerce.products.list();
    // populating products
    setProducts(data);
  };
  // loading the products
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Nav />
      <div />
      <div style={{ width: "98%", paddingLeft: "30px" }}>
        <Products products={products} />
      </div>
    </div>
  );
};

export default Shop;
