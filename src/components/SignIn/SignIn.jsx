import React, { useState } from "react";
import { FormInput, CustomButton } from "components";

import { googleSignInStart, emailignInStart } from "midleware/user/actions";
import { connect } from "react-redux";
import "./styles.scss";

export const SignInComponent = ({ googleSignInStart, emailignInStart }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    emailignInStart(email, password);
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          required
          handleChange={({ target: { value } }) => setEmail(value)}
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          required
          handleChange={({ target: { value } }) => setPassword(value)}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogle>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailignInStart: (email, password) =>
    dispatch(emailignInStart({ email, password }))
});

export const SignIn = connect(null, mapDispatchToProps)(SignInComponent);
