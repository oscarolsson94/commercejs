import React from "react";
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
import { commerce } from "../../../lib/commerce";
import { useState } from "react";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { useEffect } from "react";

const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const generateToken = async () => {
      try {
      } catch (error) {}
    };
  }, []);

  const Confirmation = () => <div>Confirmation</div>;

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  return (
    <>
      <div className={classes.toolbar}></div>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center"></Typography>
          <Stepper avtiveStep={0} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
