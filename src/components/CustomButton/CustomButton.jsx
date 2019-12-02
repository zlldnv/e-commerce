import React from "react";

import "./styles.scss";

export const CustomButton = ({children, isGoogle, ...otherProps}) => (
  <button className={`${isGoogle? 'google-sign-in':''} custom-button`} {...otherProps}>
    {children}
  </button>
);
