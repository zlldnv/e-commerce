import React from "react";

import "./styles.scss";

export const CustomButton = ({children, ...otherProps}) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);
