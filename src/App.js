import React from "react";
import {Route, Switch} from "react-router-dom";
import {ShopPage, HomePage, Login} from "pages";
import {Header} from "components";
import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </div>
);

export default App;
