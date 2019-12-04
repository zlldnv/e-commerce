import React from "react";
import {CustomButton, CartItem} from "components";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {cartItemsSelector} from "midleware/cart/selectors";
import {useHistory} from "react-router-dom";
import "./styles.scss";

export const CartDropdownComponent = ({cartItems}) => {
  const {push} = useHistory();
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <CustomButton onClick={() => push("/checkout")}>GO TO CHECKOUT </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({cartItems: cartItemsSelector});

export const CartDropdown = connect(mapStateToProps)(CartDropdownComponent);
