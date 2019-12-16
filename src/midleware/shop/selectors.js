import { createSelector } from "reselect";

const shopSelector = ({ shop }) => shop;

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

export const collectionsSelector = createSelector(
  [shopSelector],
  ({ collections }) => Object.keys(collections).map(key => collections[key])
);

export const collectionSelector = collectionUrlParam =>
  createSelector(
    [collectionsSelector],
    collections => collections[collectionUrlParam]
  );
