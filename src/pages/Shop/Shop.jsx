import React, { useEffect } from "react";
import { CollectionOverviewContainer } from "components";
import { CollectionContainer } from "pages";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "midleware/shop/actions";

export const ShopPageComponent = ({ fetchCollectionsStart }) => {
  const { path } = useRouteMatch();
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <Switch>
      <Route exact path={`${path}`} component={CollectionOverviewContainer} />
      <Route
        exact
        path={`${path}/:collectionId`}
        component={CollectionContainer}
      ></Route>
    </Switch>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export const ShopPage = connect(null, mapDispatchToProps)(ShopPageComponent);
