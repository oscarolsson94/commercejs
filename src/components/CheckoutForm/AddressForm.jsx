import React, { useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { commerce } from "../../lib/commerce"; /* this instance makes it possible to use all the features of commercejs */
import FormInput from "./CustomTextField";

const AddressForm = () => {
    const [shippingCountries,setShippingCountries] = useState([]);
    const [shippingCountry,setShippingCountry] = useState('');
    const [shippingSubdivisions,setShippingSubdivisions] = useState([]);
    const [shippingSubdivision,setShippingSubdivision] = useState('');
    const [shippingOptions,setShippingOptions] = useState([]);
    const [shippingOption,setShippingOption] = useState('');

    const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP / Postal code" />
            {/* DYNAMIC SELECT LIST, OPTIONS DEPENDING ON EACHOTHER */}
            <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Country</InputLabel>
                <Select value={} fullWidth onChange={}>
                    <MenuItem key={} value={}>
                        Select Me
                    </MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Subdivision</InputLabel>
                <Select value={} fullWidth onChange={}>
                    <MenuItem key={} value={}>
                        Select Me
                    </MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Options</InputLabel>
                <Select value={} fullWidth onChange={}>
                    <MenuItem key={} value={}>
                        Select Me
                    </MenuItem>
                </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
