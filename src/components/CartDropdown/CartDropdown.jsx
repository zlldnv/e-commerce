import React from "react";
import {CustomButton} from "components";
import "./styles.scss";

export const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT </CustomButton>
  </div>
);
