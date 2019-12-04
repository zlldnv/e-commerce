import {createSelector} from "reselect";

const selectUser = state => state.user;

export const currentUserSelector = createSelector([selectUser], ({currentUser}) => currentUser);
