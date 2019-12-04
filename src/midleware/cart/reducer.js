import {CartAсtionTypes} from "./types";
import {addItemToCart} from "./utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case CartAсtionTypes.TOGGLE_CART_HIDDEN:
      return {...state, hidden: !state.hidden};
    case CartAсtionTypes.ADD_ITEM:
      return {...state, cartItems: addItemToCart(state.cartItems, payload)};
    default:
      return state;
  }
};
