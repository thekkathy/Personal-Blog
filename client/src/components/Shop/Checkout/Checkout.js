import React, { useState, useEffect } from "react";
import { commerce } from "../Inventory/inventory";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import useStyles from "./CheckoutStyles";
import Address from "./Address";
import Payment from "./Payment";
const steps = ["Shipping Address", "Payment Details"];
const Checkout = ({ cart }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  // checkout token
  // once someone enters the checkout process we generate a new token
  // i learned in useEffect, you cannot use async unless it is in a new function
  useEffect(() => {
    // async function to generate token
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);

  // this function is moving to the next step of the checkout
  // we gather all of the shipping data from the react hook and
  // pass it to use in the payment
  const next = (data) => {
    setShippingData(data); //get data, set to shipping data, now we have the state to pass it on
    nextStep();
  };
  // this is to move forward in the checkout process once we have the data
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // this moves backwards in the checkout process if changes are needed
  const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  // this is rendered as a confirmation of completion
  const Confirmation = () => <div>Confirmation</div>;

  // this determines the form that is shown based on the current step (activeStep)
  // the user is on. The address form as well as payment both use the same checkout token
  const Form = () =>
    activeStep === 0 ? (
      <Address checkoutToken={checkoutToken} next={next} />
    ) : (
      <Payment
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        prevStep={prevStep}
      />
    );

  return (
    <div>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </div>
  );
};

export default Checkout;
