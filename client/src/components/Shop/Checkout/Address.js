/**
 * This file produces the address form of the checkout
 * https://codesandbox.io/examples/package/react-hook-form/index.html
 * https://blog.logrocket.com/the-complete-guide-to-react-hook-form/
 * https://react-hook-form.com/advanced-usage
 * Using React Hook Form because I found it was easier to work with
 * and much less code than manually creating a traditional form
 */

import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "./TextField";
import { commerce } from "../Inventory/inventory";
import { Link } from "react-router-dom";
/**
 * React Hooks is dope because it automatically manages the states of our components
 * This is the purpose of the controller in TextField.js
 * There are 6 fields of the checkout information that are returned and kept track of
 * @returns The form to fill  out the address
 */
const Address = ({ checkoutToken, next }) => {
  const methods = useForm();

  // states
  // there are a lot, but they were created out of neccessity
  // to make mapping through the products easier. all of them
  // are fields in the form and called from commerce api
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  // get countries to ship to
  // the checkout token is created in the checkout component to create unique checkout
  // this returns the first index of the countries. it is an object, so to display use obj.keys
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries));
  };
  // getting states, counties, provinces, whatever is country specific as well as first element
  const fetchSubDivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  // fetching the shipping options for the specific countries, as well as their specified locality
  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );
    setShippingOptions(options);
    setShippingOption(options[0].id); // gets first option
  };
  // a use effect to fetch the countries once we have the checkout token
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken.id]);

  // creating a second use effect to wait until countries are loaded, or when country changes
  // only fetch the subdivisions if the country exists
  useEffect(() => {
    if (shippingCountry) fetchSubDivisions(shippingCountry);
  }, [shippingCountry]);

  // another use effect that loads the shipping options ONCE we get the shipping subdivision / locality
  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision, shippingCountry, checkoutToken.id]);

  /**
   * This is a lot
   * What is being rendered are the three fields, the populations of those
   * are formed from map functions that are calling data from the API
   *
   * The on submit is a fantastic function of the react hook form. It is using
   * a prop {data} gathered from checkout, spreading that data and passing
   * it to our next step - the payment - in the checkout process
   */
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            <InputField required name="firstName" label="First Name" />
            <InputField required name="lastName" label="Last Name" />
            <InputField required name="address1" label="Address" />
            <InputField required name="city" label="City" />
            <InputField required name="zip" label="Zip / Postal Code" />
            <InputField required name="email" label="Email" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Select Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {Object.entries(shippingCountries)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Select Locality</InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {Object.entries(shippingSubdivisions)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel> Select Shipping </InputLabel>
              <Select
                value={shippingOption}
                fullWidth
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {shippingOptions
                  .map((option) => ({
                    id: option.id,
                    label: `${option.description} - (${option.price.formatted_with_symbol})`,
                  }))
                  .map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} to="/cart" variant="outlined">
              Return To Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Payment
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Address;
