import React from "react";
import {CustomButton, CartItem} from "components";
import {connect} from "react-redux";
import "./styles.scss";

export const CartDropdownComponent = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT </CustomButton>
  </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
});

export const CartDropdown = connect(mapStateToProps)(CartDropdownComponent);
