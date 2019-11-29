import React from "react";
import "./style.scss";

export const FormInput = ({handleChange, label, ...props}) => (
  <div className="group">
    <input className="form-input" type="text" onChange={handleChange} {...props} />
    {label && <label className={`form-input-label ${props.value.length ? "shrink" : ""}`}>{label}</label>}
  </div>
);
