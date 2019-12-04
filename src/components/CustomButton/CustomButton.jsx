import React from "react";

import "./styles.scss";

export const CustomButton = ({children, isGoogle, inverted, ...otherProps}) => (
  <button className={`${inverted ? "inverted" : ""} ${isGoogle ? "google-sign-in" : ""} custom-button`} {...otherProps}>
    {children}
  </button>
);
