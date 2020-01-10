import React from "react";
import { CustomButtonContainer } from "./styles";

export const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);
