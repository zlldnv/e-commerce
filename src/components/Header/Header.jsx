import React from "react";
import { connect } from "react-redux";
import { CartIcon, CartDropdown } from "components";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { cartHiddenSelector } from "midleware/cart/selectors";
import { currentUserSelector } from "midleware/user/selectors";
import { signOutStart } from "midleware/user/actions";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from "./styles";

const HeaderComponent = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={signOutStart}>Sign out</OptionDiv>
      ) : (
        <OptionLink to="/login">Sign in</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: cartHiddenSelector
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
