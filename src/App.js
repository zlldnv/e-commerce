import React from "react";
import {Route, Switch} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/Homepage";
import {ShopPage} from "./pages/Shop/Shop";
import {Header} from "./components/Header/Header";

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
