import React from "react";
import {ReactComponent as ShoppingIcon} from "assets/shopping-bag.svg";
import "./styles.scss";
import {connect} from "react-redux";
import {toggleCartHidden} from "midleware/cart/actions";

const mapDispatchToProps = dispatch => ({toggleCartHidden: () => dispatch(toggleCartHidden())});

export const CartIconComponent = ({toggleCartHidden}) => (
  <div className="cart-icon" onClick={() => toggleCartHidden()}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export const CartIcon = connect(null, mapDispatchToProps)(CartIconComponent);
