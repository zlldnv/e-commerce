import { createSelector } from "reselect";

const shopSelector = ({ shop }) => shop;

export const collectionsSelector = createSelector(
  [shopSelector],
  ({ collections }) => Object.keys(collections).map(key => collections[key])
);

export const collectionSelector = collectionUrlParam =>
  createSelector(
    [collectionsSelector],
    collections => collections[collectionUrlParam]
  );
