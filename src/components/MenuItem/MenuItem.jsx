import React from "react";
import "./styles.scss";

export const MenuItem = ({title, imageUrl}) => (
  <div className="menu-item">
    <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="title">SHOP NOW</span>
    </div>
  </div>
);
