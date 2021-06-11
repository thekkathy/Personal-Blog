import Commerce from "@chec/commerce.js";
// calls and integrates commerce api to use
// creates new instance of specific commerce which will be our store
console.log("commerce key", process.env.REACT_APP_COMMERCE_KEY)

export const commerce = new Commerce(process.env.REACT_APP_COMMERCE_KEY, true);
