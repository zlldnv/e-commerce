import {CartAсtionTypes} from "./types";
import {addItemToCart, removeItemFromCart} from "./utils";

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
    case CartAсtionTypes.REMOVE_ITEM:
      return {...state, cartItems: removeItemFromCart(state.cartItems, payload)};
    case CartAсtionTypes.CLEAR_ITEM_FROM_CART:
      return {...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload.id)};
    default:
      return state;
  }
};
