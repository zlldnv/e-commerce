import React, {useEffect} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {ShopPage, HomePage, Login} from "pages";
import {auth, createUserProfileDocument} from "firebaseConfig";
import {Header} from "components";
import {setCurrentUser} from "midleware/user/actions";
import {connect} from "react-redux";
import "./App.css";

const App = ({currentUser, setCurrentUser}) => {
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
        <Route exact path="/login" render={() => (currentUser ? <Redirect to="/" /> : <Login />)} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({setCurrentUser: user => dispatch(setCurrentUser(user))});

const mapStateToProps = ({user}) => ({currentUser: user.currentUser});

export default connect(mapStateToProps, mapDispatchToProps)(App);
