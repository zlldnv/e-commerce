import React from "react";
import { connect } from "react-redux";
import { auth } from "firebaseConfig";
import { CartIcon, CartDropdown } from "components";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { cartHiddenSelector } from "midleware/cart/selectors";
import { currentUserSelector } from "midleware/user/selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from "./styles";

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: cartHiddenSelector
});

const HeaderComponent = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>Sign out</OptionDiv>
      ) : (
        <OptionLink to="/login">Sign in</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
);

export const Header = connect(mapStateToProps)(HeaderComponent);
