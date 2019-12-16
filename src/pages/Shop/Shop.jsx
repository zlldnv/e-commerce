import React from "react";
import { CollectionsOverview } from "components";
import { Collection } from "pages";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export const ShopPage = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${path}`} component={CollectionsOverview} />
        <Route
          exact
          path={`${path}/:collectionId`}
          component={Collection}
        ></Route>
      </Switch>
    </div>
  );
};
