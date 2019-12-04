import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {auth} from "firebaseConfig";
import {CartIcon, CartDropdown} from "components";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./styles.scss";

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

const HeaderComponent = ({currentUser, hidden}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link className="option" to="/login">
          Sign in
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
);

export const Header = connect(mapStateToProps)(HeaderComponent);
