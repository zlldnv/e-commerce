import {createSelector} from "reselect";

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector([cartSelector], cart => cart.cartItems);

export const cartHiddenSelector = createSelector([cartSelector], ({hidden}) => hidden);

export const cartItemsCountSelector = createSelector([cartItemsSelector], cartItems =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const cartTotalSelector = createSelector([cartItemsSelector], cartItems =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)
);
