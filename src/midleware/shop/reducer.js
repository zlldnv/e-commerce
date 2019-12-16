import {SHOP_DATA} from "mock/directory.data";

const INITIAL_STATE = {
  collections: SHOP_DATA
};

export const shopReducer = (state = INITIAL_STATE, {type}) => {
  switch (type) {
    default:
      return state;
  }
};
