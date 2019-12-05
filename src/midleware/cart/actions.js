import {CartAсtionTypes} from "./types";

export const toggleCartHidden = () => ({type: CartAсtionTypes.TOGGLE_CART_HIDDEN});
export const addItem = item => ({type: CartAсtionTypes.ADD_ITEM, payload: item});
export const removeItem = item => ({type: CartAсtionTypes.REMOVE_ITEM, payload: item});
export const clearItemFromCart = item => ({type: CartAсtionTypes.CLEAR_ITEM_FROM_CART, payload: item});
