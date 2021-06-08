import Commerce from "@chec/commerce.js";

// creates new instance of specific commerce which will be our store
export const commerce = new Commerce(process.env.REACT_APP_COMMERCE_KEY, true);
