import React, {useState} from "react";
import {FormInput, CustomButton} from "components";
import "./styles.scss";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    setEmail("");
    setPassword("");
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
          handleChange={({target: {value}}) => setEmail(value)}
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          required
          handleChange={({target: {value}}) => setPassword(value)}
        />
        <CustomButton type="submit" value="Submit form">
          Sign in
        </CustomButton>
      </form>
    </div>
  );
};
