import {CartAсtionTypes} from "./types";

export const toggleCartHidden = () => ({type: CartAсtionTypes.TOGGLE_CART_HIDDEN});
export const addItem = item => ({type: CartAсtionTypes.ADD_ITEM, payload: item});
