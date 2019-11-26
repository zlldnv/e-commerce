import React from "react";
import "./styles.scss";
import {useHistory, useRouteMatch} from "react-router-dom";

export const MenuItem = ({title, imageUrl, linkUrl}) => {
  const {push} = useHistory();
  const {url} = useRouteMatch();
  return (
    <div className="menu-item" onClick={() => push(`${url}${linkUrl}`)}>
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="title">SHOP NOW</span>
      </div>
    </div>
  );
};
