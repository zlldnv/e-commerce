import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartItemsSelector, cartTotalSelector } from "midleware/cart/selectors";
import { CheckoutItem, StripeButton } from "components";
import "./styles.scss";

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  totalValue: cartTotalSelector
});

export const CheckoutComponent = ({ cartItems, totalValue }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <div className="total">TOTAL: ${totalValue}</div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeButton price={totalValue}></StripeButton>
  </div>
);

export const Checkout = connect(mapStateToProps)(CheckoutComponent);
