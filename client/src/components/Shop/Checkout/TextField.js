import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

// controller is component of hook form that allows us to
// use any input or text field as the controller
// this is a custom "input field" where if we use the component
// react hooks makes it easy to use / pass that information
const InputField = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      {/* <Controller
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        required={required}
      /> */}
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={({ field }) => <TextField fullWidth label={label} required />}
      />
    </Grid>
  );
};

export default InputField;
