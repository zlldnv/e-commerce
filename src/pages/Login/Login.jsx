import React from "react";
import {SignIn, SignUp} from "components";

import "./styles.scss";

export const Login = () => (
  <div className="login">
    <SignIn />
    <SignUp />
  </div>
);
