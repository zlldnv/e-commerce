import {userActionTypes} from "./types";

const INITIAL_STATE = {
  currentUser: null
};

export const userReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };

    default:
      return state;
  }
};
