import React, { useEffect } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { ShopPage, HomePage, Login, Checkout } from "pages";
import { Header } from "components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { currentUserSelector } from "midleware/user/selectors";
import { checkUserSession } from "midleware/user/actions";
import "./App.css";

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
    console.log("i have been here");
  }, [checkUserSession]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
