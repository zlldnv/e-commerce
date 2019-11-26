import React from "react";
import {Route, Switch} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/Homepage";

const HatsPage = props => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/shop/hats" component={HatsPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
