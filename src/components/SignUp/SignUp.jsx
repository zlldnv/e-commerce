import React, { useState } from "react";
import { FormInput, CustomButton } from "components";
import { signUpStart } from "midleware/user/actions";
import { connect } from "react-redux";
import "./styles.scss";
import { dispatch } from "../../../node_modules/rxjs/internal/observable/pairs";

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch = {
  signUpStart: userCred => dispatch(signUpStart(userCred))
});

export const SignUpComponent = ({ signUpStart }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    if (passwordConfirm !== password) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });

    setDisplayName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="test"
          name="displayName"
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          label="Password Confirm"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export const SignUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpComponent);
