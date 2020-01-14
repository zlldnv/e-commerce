import React, { useEffect } from "react";
import { CollectionOverviewContainer } from "components";
import { CollectionContainer } from "pages";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "midleware/shop/actions";

export const ShopPageComponent = ({ fetchCollectionsStartAsync }) => {
  const { path } = useRouteMatch();
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, []);

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
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export const ShopPage = connect(null, mapDispatchToProps)(ShopPageComponent);
