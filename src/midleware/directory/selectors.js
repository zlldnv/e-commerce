import {createSelector} from "reselect";

const directorySelector = ({directory}) => directory;

export const directorySectionsSelector = createSelector([directorySelector], ({sections}) => sections);
