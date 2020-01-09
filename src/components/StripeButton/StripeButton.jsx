import React from "react";
import StripeCheckout from "react-stripe-checkout";

export const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_D5n0sor5ScJj2ThzDUpliuyT00wX5ToWzp";
  const onToken = token => {
    console.log(token);
    alert("payment Succesful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Luxury clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};
