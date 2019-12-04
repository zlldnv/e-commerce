import React from "react";
import {ReactComponent as ShoppingIcon} from "assets/shopping-bag.svg";
import "./styles.scss";
import {connect} from "react-redux";
import {toggleCartHidden} from "midleware/cart/actions";
import {cartItemsCountSelector} from "midleware/cart/selectors";

const mapDispatchToProps = dispatch => ({toggleCartHidden: () => dispatch(toggleCartHidden())});

const mapStateToProps = state => ({
  itemCount: cartItemsCountSelector(state)
});

export const CartIconComponent = ({toggleCartHidden, itemCount}) => (
  <div className="cart-icon" onClick={() => toggleCartHidden()}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

export const CartIcon = connect(mapStateToProps, mapDispatchToProps)(CartIconComponent);
