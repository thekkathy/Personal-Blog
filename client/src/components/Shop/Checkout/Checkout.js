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
  CssBaseline,
} from "@material-ui/core";
import useStyles from "./CheckoutStyles";
import Address from "./Address";
import Payment from "./Payment";
import { Checkmark } from "react-checkmark";
//import { useHistory } from "react-router-dom";

// the defined steps the user sees at the top of the form
const steps = ["Shipping Address", "Payment Details"];
/**
 * The props passed in are to display the cart and get the items from it,
 * have the order to pass to the payment and checkout functions to complete
 * the checkout process
 * @param {objs} cart, order, onCaptureCheckout, error
 * @returns
 */
const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const classes = useStyles();

  // states
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  //const history = useHistory();

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
      } catch (error) {
        //history.pushState("/");
        alert('err');
      }
    };
    generateToken();
  }, [cart]);

  // timeout function, 3 seconds
  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  };

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
  // we have a ternary that displays a spinner while the order is being completed,
  // and then displays a confirmation message when it is finished
  let Confirmation = () =>
    order.customer ? (
      <div>
        <Typography variant="h5">Thank you for your order!</Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">Order ref: #{Math.random()}</Typography>
        <br /> <br />
        <Checkmark size="xxLarge" color="#094B5C" />
      </div>
    ) : isFinished ? (
      <div>
        <Typography variant="h5">Thank you for your order!</Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">Order ref: #{Math.random()}</Typography>
        <br /> <br />
        <Checkmark size="xxLarge" color="#74BAC4" />
      </div>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress style={{ color: "#094B5C" }}/>
      </div>
    );

  if (error) {
    <div>
      <Typography variant="h5">
        Sorry, we had trouble processing your order!
      </Typography>
    </div>;
  }

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
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
        timeout={timeout}
      />
    );

  return (
    <div>
      <CssBaseline />
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
