import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {ShopPage, HomePage, Login} from "pages";
import {auth, createUserProfileDocument} from "firebaseConfig";
import {Header} from "components";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setUser({id: snapshot.id, ...snapshot.data()});
        });
      } else setUser(userAuth);
    });

    return () => unsubscribe();
  }, []);

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
