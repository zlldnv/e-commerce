import { createSelector } from "reselect";

const shopSelector = ({ shop }) => shop;

export const collectionsSelector = createSelector(
  [shopSelector],
  ({ collections }) => collections
);

export const collectionSelector = collectionUrlParam =>
  createSelector([collectionsSelector], collections =>
    collections ? collections[collectionUrlParam] : []
  );

export const collectionFetchingSelector = createSelector(
  [shopSelector],
  ({ isFetching }) => isFetching
);
