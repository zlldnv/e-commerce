import {sections} from "mock/directory.data";

const INITIAL_STATE = {sections};

export const directoryReducer = (state = INITIAL_STATE, {type}) => {
  switch (type) {
    default:
      return state;
  }
};
