import {CartAсtionTypes} from "./types";

const INITIAL_STATE = {
  hidden: true
};

export const cartReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case CartAсtionTypes.TOGGLE_CART_HIDDEN:
      return {...state, hidden: !state.hidden};
    default:
      return state;
  }
};
