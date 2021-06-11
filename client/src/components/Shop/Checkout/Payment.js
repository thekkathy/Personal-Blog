import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const stripePromise = loadStripe(
  "pk_test_51J0tqXFP707iDUqVc3z1dXQ9u1xDcUTykuxEooh2zYbaN1MqNwnbYLen7rng5RVYb0w80dqdPoLHSS6WC6EXzHI900Tyzb4Mlg"
);

/**
 * The payment form takes in the payment through stripe and has information 
 * passed to it from the checkout token where it can make a complete order 
 * with all of the order information
 * @param {objs} checkoutToken,
  nextStep,
  prevStep,
  shippingData,
  onCaptureCheckout,
  timeout 
 * @returns 
 */
const PaymentForm = ({
  checkoutToken,
  nextStep,
  prevStep,
  shippingData,
  onCaptureCheckout,
  timeout,
}) => {
  // all stripe dependencies
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault(); // dont refresh after we click button
    // stripe cant do anything if we dont have either of these elements
    if (!stripe || !elements) return;
    // get the card element
    const cardElement = elements.getElement(CardElement);
    // using stripe api to create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    // list error, if not, we get all of the order data and customer data
    if (error) {
      console.log("[error]", error);
    } else {
      const orderData = {
        // get the order items
        line_items: checkoutToken.live.line_items,
        // customer information
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        // shipping information
        shipping: {
          name: "International", // the name of shipping in commerce.js api
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        // shipping method
        fulfillment: { shipping_method: shippingData.shippingOption },
        // payment information
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      // to fulfill order we need the checkout id, and the full order data
      onCaptureCheckout(checkoutToken.id, orderData);
      timeout();
      // once we have it move to the next step
      nextStep();
    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={prevStep}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
