import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {ShopPage, HomePage, Login} from "pages";
import {auth} from "firebaseConfig";
import {Header} from "components";
import "./App.css";

const App = () => {
  const [user, setUser] = React.useState(auth.currentUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(newUser => setUser(newUser));
    return () => unsubscribe();
  }, [user]);

  return (
    <div className="App">
      <Header curentUser={user} />
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
