import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {ShopPage, HomePage, Login} from "pages";
import {auth, createUserProfileDocument} from "firebaseConfig";
import {Header} from "components";
import {setCurrentUser} from "midleware/user/actions";
import {connect} from "react-redux";
import "./App.css";

const App = ({setCurrentUser}) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({id: snapshot.id, ...snapshot.data()});
        });
      } else setCurrentUser(userAuth);
    });

    return () => unsubscribe();
  }, [setCurrentUser]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({setCurrentUser: user => dispatch(setCurrentUser(user))});

export default connect(null, mapDispatchToProps)(App);
